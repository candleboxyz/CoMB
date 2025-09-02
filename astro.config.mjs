// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import starlightSidebarTopics from 'starlight-sidebar-topics'
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
			plugins: [
				starlightSidebarTopics([
					{
						label: '∑ Mathematics', link: '01--math/readme',
						// icon: 'open-book',
						items: [
							{ label: 'Algebra', autogenerate: { directory: '01--math/algebra' } },
							{ label: 'Category Theory', autogenerate: { directory: '01--math/category theory' } },
							{ label: 'Calculus', autogenerate: { directory: '01--math/calculus' } },
							{ label: 'Linear Algebra', autogenerate: { directory: '01--math/linear algebra' } },
							{ label: 'Statistics', autogenerate: { directory: '01--math/statistics' } },
						],
					},
					{
						label: '🧮 CSE', link: '02--cse/readme',
						// icon: 'laptop',
						items: [
							{ label: 'general', autogenerate: { directory: '02--CSE/_general' } },
							{ label: 'DSA', autogenerate: { directory: '02--CSE/DSA' } },
							{ label: 'Computer Network', autogenerate: { directory: '02--CSE/network' } },
							{ label: 'Operating System', autogenerate: { directory: '02--CSE/OS' } },
							{ label: 'Programming Language', autogenerate: { directory: '02--CSE/prog lang' } },
							{ label: 'RegEx', autogenerate: { directory: '02--CSE/RegEx' } },
							{ label: 'Web', autogenerate: { directory: '02--CSE/web' } },
						], 
					},
					{
						label: '🧠 AI/ML', link: '03--ai/readme',
						// icon: 'puzzle',
						items: [
							{ label: 'Fundamentals', autogenerate: { directory: '03--AI/fundamentals' } },
							{ label: 'Models Architecture', autogenerate: { directory: '03--AI/model arch' } },
							{ label: 'CV', autogenerate: { directory: '03--AI/CV' } },
							{ label: 'NLP', autogenerate: { directory: '03--AI/NLP' } },
							{ label: 'Reinforcement Learning', autogenerate: { directory: '03--AI/reinforcement learning' } },
						], 
					},
					{
						label: '⚙️ DX & Setup', link: '04--dx/readme',
						// icon: 'setting',
						items: [
							{ label: 'Cheatsheet', autogenerate: { directory: '04--DX/cheatsheet' } },
							{ label: 'Git', autogenerate: { directory: '04--DX/git' } },
							{ label: 'Setup', autogenerate: { directory: '04--DX/env setup' } },
						], 
					},
					{
						label: 'Guides', link: 'guides/example',
						items: [
							// Each item here is one entry in the navigation menu.
							{ label: 'Example Guide', slug: 'guides/example' },
							{ label: 'Notation', autogenerate: { directory: 'guides/z--notation_throughout_the_docs' } },
						],
					},
				]),
				starlightVideos()
			],
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
			// sidebar: [
			// 	{
			// 		label: '-- experimental --',
			// 		autogenerate: { directory: '__draft__' }
			// 	},
			// 	{
			// 		label: '-- draft --',
			// 		autogenerate: { directory: '-- draft-pub --' }
			// 	},
			// 	{
			// 		label: '∑ Mathematics',
			// 		autogenerate: { directory: '01--math' }
			// 	},
			// 	{
			// 		label: '🧮 CSE',
			// 		autogenerate: { directory: '02--CSE' }
			// 	},
			// 	{
			// 		label: '🧠 AI/ML',
			// 		autogenerate: { directory: '03--AI' }
			// 	},
			// 	{
			// 		label: '🌐 Web',
			// 		autogenerate: {directory: '04--web' }
			// 	},
			// 	{
			// 		// For 'developer experience' topics
			// 		label: '👨‍💻 DX',
			// 		autogenerate: {directory: '05--DX' }
			// 	},
			// 	{
			// 		label: '📦 Environment Setup',
			// 		// For environment setup guides,
			// 		// like setting up a dev environment or configuring tools
			// 		autogenerate: { directory: 'z--env_setup' }
			// 	},
			// 	{
			// 		label: '표기법',
			// 		autogenerate: { directory: 'z--notation_throughout_the_docs' }
			// 	},
			// 	{
			// 		label: 'Guides',
			// 		items: [
			// 			// Each item here is one entry in the navigation menu.
			// 			{ label: 'Example Guide', slug: 'guides/example' },
			// 		],
			// 	},
			// 	{
			// 		label: 'Reference',
			// 		autogenerate: { directory: 'reference' },
			// 	},
			// ],
		}),
	],
});
