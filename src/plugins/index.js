/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '@/stores'
import router from '@/router'
import { useAuthStore } from '@/stores/auth'

export function registerPlugins(app) {
  // First use pinia
  app.use(pinia)
    .use(vuetify)
    .use(router)

  // Now we can safely use stores
  const auth = useAuthStore()
  auth.init()

  // Set up router title changes
  router.afterEach((to) => {
    const defaultTitle = "MyForm Vue"
    const pageTitle = to.meta?.title
    document.title = pageTitle
      ? `${pageTitle} | ${defaultTitle}`
      : defaultTitle
  })
}