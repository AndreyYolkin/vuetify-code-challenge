/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Composables
import { createVuetify } from 'vuetify'
// Styles
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
function makeFieldDefaults() {
  return {
    variant: 'outlined',
    density: 'comfortable',
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          secondary: '#fcd289',
          primary: '#603aba',
          error: '#de6051',
        },
      },
      dark: {
        dark: true,
        colors: {
          secondary: '#fcd289',
          primary: '#603aba',
          background: '#23242c',
          surface: '#2D2F39',
          error: '#de6051',
        },
      },
    },
  },
  defaults: {
    VTextarea: makeFieldDefaults(),
    VTextField: makeFieldDefaults(),
    VSelect: makeFieldDefaults(),
    VDialog: {
      VCard: {
        VCardActions: {
          VBtn: {
            variant: 'tonal',
          },
        },
      },
    },
    VCard: {
      variant: 'outlined',
    },
  },
})
