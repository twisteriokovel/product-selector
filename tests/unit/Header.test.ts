import { shallowMount, VueWrapper } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header component', () => {
  let wrapper: VueWrapper<any>

  beforeEach(async () => {
    wrapper = shallowMount(Header, {
      global: {
        stubs: ['router-link']
      }
    })
  })

  test('should be mounted', async () => {
    expect(Header).toBeTruthy()
  })

  test('should render the logo', async () => {
    expect(wrapper.find('.header-logo').exists()).toBeTruthy()
  })

  test('should render the corresponding menu', async () => {
    expect(wrapper.find('.main-nav').exists()).toBeTruthy()
    expect(wrapper.findAll('.main-nav__item').length).toBe(3)
  })
})
