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
          { text: 'Home', link: '/' },
          { text: 'Examples', link: '/markdown-examples' }
        ],

        sidebar: [
          {
            text: 'Examples',
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          }
        ],

        socialLinks: [
          { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
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
