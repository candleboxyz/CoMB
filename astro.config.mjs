// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightVideos from 'starlight-videos'
import rehypeMathJax from 'rehype-mathjax';
import remarkMath from 'remark-math';
import remarkMermaid from 'remark-mermaidjs';

// https://astro.build/config
export default defineConfig({
	markdown: {
		remarkPlugins: [remarkMath, remarkMermaid],
		rehypePlugins: [rehypeMathJax],
	},

	integrations: [
		starlight({
			plugins: [starlightVideos()],
			title: 'COMB',
			head: [
				{
					tag: 'link',
					attrs: {
						rel: 'stylesheet',
						href: 'https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css',
					},
				},
				{
					tag: 'script',
					attrs: {
						src: 'https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js',
						type: 'text/javascript',
					},
				},
			],
			customCss: [
				'./src/styles/global.css',
				'./src/styles/mathjax.css',
			],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/candleboxyz' },
				{ icon: 'linkedin', label: 'LinkedIn', href: '' }
			],
			sidebar: [
				{
					label: '-- experimental --',
					autogenerate: { directory: '__draft__' }
				},
				{
					label: '-- draft --',
					autogenerate: { directory: '-- draft-pub --' }
				},
				{
					label: '∑ Mathematics',
					autogenerate: { directory: '01--math' }
				},
				{
					label: '🧮 CSE',
					autogenerate: { directory: '02--CSE' }
				},
				{
					label: '🧠 AI/ML',
					autogenerate: { directory: '03--AI' }
				},
				{
					label: '🌐 Web',
					autogenerate: {directory: '04--web' }
				},
				{
					// For 'developer experience' topics
					label: '👨‍💻 DX',
					autogenerate: {directory: '05--DX' }
				},
				{
					label: '📦 Environment Setup',
					// For environment setup guides,
					// like setting up a dev environment or configuring tools
					autogenerate: { directory: 'z--env_setup' }
				},
				{
					label: '표기법',
					autogenerate: { directory: 'z--notation_throughout_the_docs' }
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
