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
  ignoreDeadLinks: false,
  themeConfig: {
    logo: '/PBOML-userguide-logo.svg',
    siteTitle: false
  },
  vue: {
    /**
     * This seems to be completely ignored. See  https://vitepress.dev/reference/site-config#vue 
     * 
     * #TODO : find a way to make it work or open a bug report
     * 
     */
    template: {
      compilerOptions: {
        isCustomElement: tag => { (tag.startsWith('pboml-parser')) },
      },
    }
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        ...defaultThemeConfig,
        logo: {
          ...defaultThemeConfig.logo,
          alt: "PBOML Integration Guide",
        },
        nav: [
          { text: 'Analysts', link: '/analyst/objective' },
          { text: 'Integrators', link: '/integrators/getting-started' },
          { text: 'Developers', link: '/developers/what-is-pboml' }
        ],

        sidebar: {
          '/integrators/': {
            base: '/integrators/',
            items: [
              {
                text: 'Integrators',
                collapsed: false,
                items: [
                  { text: 'Getting Started', link: 'getting-started' },
                  { text: 'What is a Slice?', link: 'what-is-a-slice' },
                  { text: 'Preview & Save', link: 'preview-and-save' },
                ]
              },
              {
                text: 'Key concepts',
                collapsed: false,
                items: [
                  { text: 'Structure', link: '/structure-your-document' },
                  { text: 'References', link: '/annotations-references' },
                  { text: 'Slice Descriptors', link: '/slice-descriptors' },
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
          },
          '/analyst/': {
            base: '/analyst/',
            items: [
              {
                text: 'Introduction',
                collapsed: false,
                items: [
                  { text: "This Guide's Objective", link: '/objective' },
                ]
              },
              {
                text: 'Methodology',
                collapsed: false,
                items: [
                  { text: 'Paragraphs & Text Content', link: '/paragraphs-methodology' },
                  { text: 'Tables', link: '/tables-methodology' },
                  { text: 'Charts', link: '/charts-methodology' },
                ]
              },

            ]
          },
          '/developers/': {
            base: '/developers/',
            items: [
              { text: 'The PBOML project', link: 'what-is-pboml' },

              { text: 'Toolset', link: 'toolset' },
              { text: 'Language', link: 'language' },
            ]
          }
        },


      },
    },
    fr: {
      label: 'Français',
      lang: 'fr',
      link: '/fr/',
      themeConfig: {
        ...defaultThemeConfig,
        logo: {
          ...defaultThemeConfig.logo,
          alt: "Guide d'intégration PBOML",
        },
        nav: [
          { text: 'Analystes', link: '/fr/analyst/objective' },
          { text: 'Intégrateurs', link: '/fr/integrators/getting-started' },
          { text: 'Développeurs', link: '/fr/developers/what-is-pboml' }
        ],

        sidebar: {
          '/fr/integrators/': {
            base: '/fr/integrators/',
            items: [
              {
                text: 'Integrators',
                collapsed: false,
                items: [
                  { text: 'Getting Started', link: 'getting-started' },
                  { text: 'What is a Slice?', link: 'what-is-a-slice' },
                  { text: 'Preview & Save', link: 'preview-and-save' },
                ]
              },
              {
                text: 'Key concepts',
                collapsed: false,
                items: [
                  { text: 'Structure', link: '/structure-your-document' },
                  { text: 'References', link: '/annotations-references' },
                  { text: 'Slice Descriptors', link: '/slice-descriptors' },
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
          },
          '/fr/analyst/': {
            base: '/fr/analyst/',
            items: [
              {
                text: 'Introduction',
                collapsed: false,
                items: [
                  { text: "Raison d'être de ce guide", link: '/objective' },
                ]
              },
              {
                text: 'Méthodologie',
                collapsed: false,
                items: [
                  { text: 'Paragraphes et contenu textuel', link: '/paragraphs-methodology' },
                  { text: 'Tableaux', link: '/tables-methodology' },
                  { text: 'Graphiques', link: '/charts-methodology' },
                ]
              },

            ]
          },
          '/fr/developers/': {
            base: '/fr/developers/',
            items: [
              { text: 'The PBOML project', link: 'what-is-pboml' },

              { text: 'Toolset', link: 'toolset' },
              { text: 'Language', link: 'language' },
            ]
          }
        },

        socialLinks: [
          { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ]
      },
    }
  }
})
