// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
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
			title: 'COMB',
			customCss: ['./src/mathjax.css'],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/candleboxyz' },
				{ icon: 'linkedin', label: 'LinkedIn', href: '' }
			],
			sidebar: [
				{
					label: 'AI/ML',
					autogenerate: { directory: 'AI' }
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
				{
					label: 'memo',
					autogenerate: {directory: 'memo'}
				},
			],
		}),
	],
});
