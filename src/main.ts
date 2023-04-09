import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router'

import App from './App.vue'

const app = createApp(App)
const store = createPinia()

store.use(({ store }) => {
  store.router = markRaw(router)
})

app.use(router).use(store).mount('#app')
