import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

const defaultThemeConfig = {
  title: 'PBOML Editor Guide - Guide de l\'éditeur BPOML',
  siteTitle: false,
  logo: {
    src: '/PBOML-userguide-logo.svg',
  },
}

export default defineConfig({
  "ignoreDeadLinks": true,
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
                  { text: 'Annotations & References', link: '/annotations-references' },
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
                  { text: 'Annotations', link: '/annotations-references-methodology' },
                  { text: 'Paragraphs & Text Content', link: '/paragraphs-methodology' },
                  { text: 'Headings', link: '/headings-methodology' },
                  { text: 'Tables', link: '/tables-methodology' },
                  { text: 'Charts', link: '/charts-methodology' },
                  { text: 'SVGs', link: '/svgs-methodology' },
                  { text: 'Images', link: '/images-methodology' },
                  { text: 'Key-Value Lists', link: '/key-value-lists-methodology' },
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
