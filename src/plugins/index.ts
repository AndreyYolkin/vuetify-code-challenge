import type { App } from 'vue'
import pinia from './pinia'
import router from './router'

// Plugins
import vuetify from './vuetify'

export function registerPlugins(app: App) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
}
