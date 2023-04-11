import { shallowMount, VueWrapper } from '@vue/test-utils'
import { useProductStore } from '@/store/product'
import { productPropertiesMock } from './mock'
import { createTestingPinia } from '@pinia/testing'
import OptionsList from '@/components/OptionsList.vue'

describe('Options list component', () => {
  let wrapper: VueWrapper<any>

  beforeEach(async () => {
    wrapper = shallowMount(OptionsList, {
      global: {
        plugins: [createTestingPinia()]
      }
    })
    const store = useProductStore()
    await Object.assign(store, { productProperties: productPropertiesMock })
  })

  test('should be mounted', async () => {
    expect(OptionsList).toBeTruthy()
  })

  test('should render corresponding amount of options cards', async () => {
    expect(wrapper.findAll('.cards-list__item').length).toBe(productPropertiesMock.length)
  })
})
