import { RouteRecordRaw, RouteComponent } from 'vue-router'
import Home from '@/pages/Home.vue'
import { ProductType } from '@/types/enums'

function loadComponent(name: string): () => Promise<RouteComponent> {
  return () => import(`../pages/${name}.vue`)
}

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: 'Home page' }
  },

  {
    path: '/products',
    name: 'products',
    component: () => import('@/layouts/ProductLayout.vue'),
    children: [
      {
        path: 'posters',
        name: 'products-posters',
        component: loadComponent('Posters'),
        meta: { title: 'Posters', productType: ProductType.posters }
      },
      {
        path: 'flyers',
        name: 'products-flyers',
        component: loadComponent('Flyers'),
        meta: { title: 'Flyers', productType: ProductType.flyers }
      },
      {
        path: 'business-cards',
        name: 'products-business-cards',
        component: loadComponent('BusinessCards'),
        meta: { title: 'Business cards', productType: ProductType.businessCards }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: 'error'
  },
  {
    path: '/error',
    name: 'error',
    component: Error
  }
]
