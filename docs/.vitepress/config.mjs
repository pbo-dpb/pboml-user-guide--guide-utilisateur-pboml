import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

const defaultThemeConfig = {
  siteTitle: false,
  logo: {
    src: '/PBOML-userguide-logo.svg',
  },
}

export default defineConfig({
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: tag => tag.startsWith('pboml-')
      }
    }
  },
  themeConfig: {
    logo: '/PBOML-userguide-logo.svg',
    siteTitle: false
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        ...defaultThemeConfig,
        logo: {
          ...defaultThemeConfig.logo,
          alt: "PBOML Editor User Guide",
        },
        nav: [
          { text: 'Guide', link: '/guide/getting-started' },
          { text: 'FAQ', link: '/faq/' }
        ],

        sidebar: {
          '/guide/': {
            base: '/guide/',
            items: [
              {
                text: 'Introduction',
                collapsed: false,
                items: [
                  { text: 'What is PBOML', link: 'what-is-pboml' },
                  { text: 'Getting Started', link: 'getting-started' },
                  { text: 'What is a Slice?', link: 'what-is-a-slice' },
                  { text: 'Recommended Workflow', link: 'recommended-workflow' },
                ]
              },
              {
                text: 'Key features',
                collapsed: false,
                items: [
                  { text: 'Structure your Document', link: '/structure-your-document' },
                ]
              },
              {
                text: 'Methodology',
                collapsed: false,
                items: [
                  { text: 'Headings', link: '/methodology-headings' },
                ]
              },

            ]
          }
        },

        socialLinks: [
          { icon: 'github', link: 'https://github.com/pbo-dpb/pboml-parser--parseur-pboml' }
        ]
      },
    },
    fr: {
      label: 'French',
      lang: 'fr',
      link: '/fr/',
      themeConfig: {
        ...defaultThemeConfig,
        logo: {
          ...defaultThemeConfig.logo,
          alt: "Éditeur PBOML : Guide de l'utilisateur",
        },
        nav: [
          { text: 'Home', link: '/fr/' },
          { text: 'Examples', link: '/fr/markdown-examples' }
        ],

        sidebar: [
          {
            text: 'Examdfgdfgples',
            items: [
              { text: 'Markrfsdfdown Examples', link: '/fr/markdown-examples' },
              { text: 'Runtimdfdfgfde API Examples', link: '/fr/api-examples' }
            ]
          }
        ],

        socialLinks: [
          { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ]
      },
    }
  }
})
