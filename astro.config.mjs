// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeMathJax from 'rehype-mathjax';
import remarkMath from 'remark-math';
import remarkMermaid from 'remark-mermaidjs';
import { type } from 'os';

// https://astro.build/config
export default defineConfig({
	markdown: {
		remarkPlugins: [remarkMath, remarkMermaid],
		rehypePlugins: [rehypeMathJax],
	},

	integrations: [
		starlight({
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
			customCss: ['./src/mathjax.css'],
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
					label: 'Mathematics',
					autogenerate: { directory: '01--math' }
				},
				{
					label: 'CSE',
					autogenerate: { directory: '02--CSE' }
				},
				{
					label: 'AI/ML',
					autogenerate: { directory: '03--AI' }
				},
				{
					label: 'Web',
					autogenerate: {directory: '04--web' }
				},
				{
					label: '개발 도구',
					autogenerate: {directory: 'z--dev_tool'}
				},
				{
					label: 'How-to',
					autogenerate: { directory: 'z--how_to' }
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
