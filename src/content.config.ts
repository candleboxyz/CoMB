import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

import { videosSchema } from 'starlight-videos/schemas';


// Small helper to slugify a *path* while keeping `/` separators.
function slugifyPath(path: string): string {
	return path
		.replace(/\.(md|mdx|mdoc)$/i, '')           // 1) strip extension (case-insensitive)
		.replace(/(^|\/)(?:_?\d+[-_]{1,2})/g, '$1') // 2) drop "01-" or "01--" style prefixes in *any* segment
		.replace(/[^A-Za-z0-9/]+/g, '-')            // 3) non-alphanumerics -> hyphen (keep `/`)
		.replace(/-{2,}/g, '-')                     // 4) collapse repeated hyphens
		.replace(/\/-+|-+\//g, '/')                 // 5) remove hyphens hugging slashes
		.replace(/(^\/+|\/+$)/g, '')                // 6) trim leading/trailing slashes (ids shouldn’t have them)
		.toLowerCase();                             // 7) enforce lowercase
}

// Strict policy: every segment must contain at least one [a-z0-9].
function assertAsciiId(id: string, entry: string) {
	const bad = id.split('/').some(seg => seg.length === 0 || !/[a-z0-9]/.test(seg));
	if (bad) {
		throw new Error(
			`[slug] Generated id "${id}" from "${entry}" is invalid under ASCII-only policy. ` +
			`Rename the file (or directory) to ASCII or set a frontmatter "slug" using ASCII.`
		);
	}
}

const rootAliases: Record<string, string> = {
	cse: 'computer-science-engineering',
	ai:  'artificial-intelligence',
	dx:  'developer-experience',
};

export const collections = {
	docs: defineCollection({
		loader: docsLoader({
			generateId: ({ entry }) => {
			// Base normalization
			let id = slugifyPath(entry);

			const m = id.match(/^([^/]+)(?=\/|$)/);  // first path segment
			// Root-segment aliases (configurable)
			if (m && rootAliases[m[1]]) {
				id = id.replace(/^([^/]+)(?=\/|$)/, rootAliases[m[1]]);
			}

			// Enforce ASCII-only policy strictly
			assertAsciiId(id, entry);
			return id;
			},
		}),

		// Assumes starlight-videos exposes `videosSchema` to extend docsSchema.
		// and enforce ASCII-only for frontmatter `slug` too (optional but recommended).
		schema: docsSchema({ extend: videosSchema.and(
			z.object({
				slug: z
					.string()
					.regex(/^[a-z0-9\/-]+$/, 'slug must be ASCII: [a-z0-9/-]')
					.optional(),
			})
		)}),
	}),
};
