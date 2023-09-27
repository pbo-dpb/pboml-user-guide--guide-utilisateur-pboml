import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

const defaultThemeConfig = {
  siteTitle: false,
  logo: {
    src: '/PBOML-userguide-logo.svg',
  },
}

export default defineConfig({
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
                  { text: 'Preview & Save', link: 'preview-and-save' },
                ]
              },
              {
                text: 'Key features',
                collapsed: false,
                items: [
                  { text: 'Structure your Document', link: '/structure-your-document' },
                  { text: 'Annotations', link: '/annotations' },
                  { text: 'Paragraphs', link: '/paragraphs' },
                  { text: 'Headings', link: '/headings' },
                  { text: 'Tables', link: '/tables' },
                  { text: 'Charts', link: '/charts' },
                  { text: 'Images', link: '/images' },
                  { text: 'Key-Value Lists', link: '/key-value-lists' },
                ]
              },
              {
                text: 'Methodology',
                collapsed: false,
                items: [
                  { text: 'Headings', link: '/methodology-headings' },
                  { text: 'Annotations', link: '/methodology-Key-Value Lists' },
                  { text: 'Paragraphs', link: '/methodology-paragraphs' },
                  { text: 'Tables', link: '/methodology-tables' },
                  { text: 'Charts', link: '/methodology-charts' },
                  { text: 'SVGs', link: '/methodology-svgs' },
                  { text: 'Images', link: '/methodology-images' },
                  { text: 'Key-Value Lists', link: '/methodology-Key-Value Lists' },
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
