import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'

/** @type {import('@astrojs/starlight/expressive-code').StarlightExpressiveCodeOptions} */
export default {
  plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
  defaultProps: {
    showLineNumbers: false,
    overridesByLang: {
      'js,ts,html,python': {
        showLineNumbers: true,
      },
    },
  },
}