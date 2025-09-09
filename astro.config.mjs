// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import starlight from '@astrojs/starlight';

import starlightSidebarTopics from 'starlight-sidebar-topics'
import starlightVideos from 'starlight-videos'

import rehypeMathJax from 'rehype-mathjax';
import remarkMath from 'remark-math';
import remarkMermaid from 'remark-mermaidjs';


// load .env for local development
const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');
// support both runtime environment (deployed env) variables and local .env
const GTM_ID = process.env.PUBLIC_GTM_ID || env.PUBLIC_GTM_ID;


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
						label: '∑ Mathematics', link: 'math/readme',
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
						label: '🧮 CSE', link: 'computer-science-engineering/readme',
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
						label: '🧠 AI/ML', link: 'artificial-intelligence/readme',
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
						label: '⚙️ DX & Setup', link: 'developer-experience/readme',
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
			title: 'CoMB',
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
				{
					// [ GTM script tag in the `head` ]
					// This script initializes Google Tag Manager
					// and should be placed as high in the head as possible.
					// It loads the GTM library asynchronously.
					tag: 'script',
					content: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`
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
