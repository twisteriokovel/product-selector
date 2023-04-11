import { mount, VueWrapper } from '@vue/test-utils'
import { useProductStore } from '@/store/product'
import { productPropertiesMock } from './mock'
import { createTestingPinia } from '@pinia/testing'
import ProductSummary from '@/components/ProductSummary.vue'

describe('Options list component', () => {
  let wrapper: VueWrapper<any>

  beforeEach(async () => {
    wrapper = mount(ProductSummary, {
      global: {
        plugins: [createTestingPinia()]
      }
    })
    const store = useProductStore()
    await Object.assign(store, {
      productProperties: productPropertiesMock,
      selectedProperties: [
        {
          value: '135gr_gesatineerd_mc',
          displayValue: '135 g/m² gloss',
          name: 'material'
        }
      ]
    })
  })

  test('should be mounted', async () => {
    expect(ProductSummary).toBeTruthy()
  })

  test('should render corresponding amount of properties', async () => {
    expect(wrapper.findAll('.product-summary__item').length).toBe(productPropertiesMock.length)
  })

  test('should render "Not selected" or selected Tag for corresponding properties', async () => {
    expect(wrapper.findAll('.product-summary__item').at(0)?.findAll('p').at(1)?.text()).toBe('Not selected')
    expect(wrapper.findAll('.product-summary__item').at(2)?.find('.n-tag')?.text()).toBe('135 g/m² gloss')
  })
})
