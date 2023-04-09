import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'
import { routes } from './routes'
import { ProductType } from '@/types/enums'

declare module 'vue-router' {
  interface RouteMeta {
    title: string
    productType?: keyof typeof ProductType
  }
}

export const router = createRouter({
  history: createWebHistory('/product-selector/'),
  routes
})

router.afterEach((to) => {
  nextTick(() => {
    document.title = to.meta.title || 'Product Selector'
  })
})
