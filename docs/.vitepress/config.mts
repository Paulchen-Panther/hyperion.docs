//////////////////////////////////////////////////////////////////////////
// The environment variable 'BASE_DIR' can be set if the website
// is located locally in a subfolder (e.g.: http://localhost/docs/dist/)
// or if the web address has a subfolder when publishing on GitHub
// (e.g.: https://MyUserName.github.io/hyperion.docs/).
// 
// If the subfolder is e.g. 'docs/dist', the env var BASE_DIR should be set to '/docs/dist/'.
//////////////////////////////////////////////////////////////////////////

import { defineConfig } from 'vitepress'
import { head, navbar_EN, navbar_DE, sidebar_EN, sidebar_DE } from './configs'

export default defineConfig({
  head: head,
  base: process.env.BASE_DIR ?? '/',
  outDir: '../dist',
  title: "Hyperion documentation",
  titleTemplate: ":title · Hyperion documentation",
  description: "Hyperion Ambient Light documentation",
  lastUpdated: true,
  themeConfig: {
    siteTitle: '',
    notFoundLight: '/notFound.png',
    notFoundDark: '/notFoundDark.png',
    logo: {
      light: '/logo.png',
      dark: '/logoDark.png'
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search documents',
              },
              modal: {
                noResultsText: 'No relevant results found',
                resetButtonTitle: 'Clear search query',
                displayDetails: 'Show Detailed Results',
                backButtonTitle: 'Go Back',
                footer: {
                  selectText: 'Choose',
                  navigateText: 'Switch',
                  closeText: 'Close',
                  selectKeyAriaLabel: 'Choose',
                  navigateUpKeyAriaLabel: 'Go Up',
                  navigateDownKeyAriaLabel: 'Go Down',
                  closeKeyAriaLabel: 'Close',
                },
              },
            },
          },
          de: {
            translations: {
              button: {
                buttonText: 'Suchen',
                buttonAriaLabel: 'Dokumentation durchsuchen',
              },
              modal: {
                noResultsText: 'Deine Suche ergab keine Treffer',
                resetButtonTitle: 'Suchanfrage entfernen',
                displayDetails: 'Detaillierte Ergebnisse',
                backButtonTitle: 'Gehe zurück',
                footer: {
                  selectText: 'Auswählen',
                  navigateText: 'Wechseln',
                  closeText: 'Schließen',
                  selectKeyAriaLabel: 'Auswählen',
                  navigateUpKeyAriaLabel: 'Gehe nach oben',
                  navigateDownKeyAriaLabel: 'Go nach unten',
                  closeKeyAriaLabel: 'Schließen',
                },
              },
            },
          }
        },
      },
    },
  },
  locales: {
    root: {
      lang: 'en-US',
      label: 'English',
      description: 'Hyperion Ambient Light documentation',
      themeConfig: {
        siteTitle: '',
        nav: navbar_EN,
        sidebar: sidebar_EN,
        lastUpdated: {
          text: 'Last Updated',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'short',
            forceLocale: true
          }
        },
        footer: {
          message: `Released under the MIT License`,
          copyright: `Copyright © 2014-${new Date().getUTCFullYear()} <a href="https://hyperion-project.org" target="_blank">Hyperion Project</a>`
        },
    
        docFooter: {
          prev: 'Previous',
          next: 'Next'
        },
    
        outline: {
          label: 'On This Page'
        },
        notFound: {
          linkText: 'Take me home'
        }
      }
    },
    de: {
      lang: 'de-DE',
      label: 'Deutsch',
      description: 'Hyperion Ambient Light Dokumentation',
      themeConfig: {
        siteTitle: '',
        nav: navbar_DE,
        sidebar: sidebar_DE,
        lastUpdated: {
          text: 'Zuletzt aktualisiert',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'short',
            forceLocale: true
          }
        },
        footer: {
          message: `Veröffentlicht unter der MIT-Lizenz`,
          copyright: `Copyright © 2014-${new Date().getUTCFullYear()} <a href="https://hyperion-project.org" target="_blank">Hyperion Project</a>`
        },
    
        docFooter: {
          prev: 'Vorherige Seite',
          next: 'Nächste Seite'
        },
    
        outline: {
          label: 'Inhalt dieser Seite'
        },
        notFound: {
          linkText: 'Zurück zur Startseite'
        }
      }
    },
  }
})
