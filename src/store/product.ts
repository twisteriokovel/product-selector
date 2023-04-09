import { defineStore } from 'pinia'
import { Property, ExcludedProperty, SelectedProperty } from '@/types/interfaces'
import { ProductType } from '@/types/enums'
import ProductsService from '@/services/products'

interface ProductStore {
  productProperties: Property[] | null
  excludesList: ExcludedProperty[][]
  selectedProperties: SelectedProperty[]
}

export const useProductStore = defineStore('product', {
  state: (): ProductStore => ({
    productProperties: null,
    excludesList: [],
    selectedProperties: []
  }),

  getters: {
    productSummary(state) {
      if (!state.productProperties) {
        return []
      }

      return state.productProperties.map(({ slug, title }) => {
        const selectedProperty = state.selectedProperties.find(({ name }) => name === slug)

        return {
          slug,
          title,
          value: selectedProperty?.displayValue ?? ''
        }
      })
    },

    isOrderAvailable(): boolean {
      return this.productSummary.every(({ value }) => value)
    },

    disabledOptions(): Record<string, string[]> {
      return this.selectedProperties.reduce<Record<string, string[]>>((acc, { name, value }) => {
        const matched = this.preparedExcludes.filter((item) => item[name] && item[name].includes(value))

        matched.forEach((el) => {
          const keys = Object.keys(el).filter((key) => key !== name)

          keys.forEach((key) => {
            if (acc[key]) {
              acc[key].push(...el[key])
              return
            }
            acc[key] = [...el[key]]
          })
        })
        return acc
      }, {})
    },

    preparedExcludes(state) {
      return state.excludesList.map((item) =>
        item.reduce<Record<string, string[]>>((acc, el) => {
          acc[el.property] = el.options
          return acc
        }, {})
      )
    }
  },

  actions: {
    async getProductConfiguration(type: keyof typeof ProductType) {
      useProductStore().$reset()

      const { data } = await ProductsService.getProductConfiguration(type)

      if (!data) {
        return
      }

      const { properties, excludes } = data

      this.productProperties = properties
      this.excludesList = excludes
    },

    sendOrderDetails() {
      console.log(this.selectedProperties)
    }
  }
})
