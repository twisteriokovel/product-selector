import { mount, VueWrapper } from '@vue/test-utils'
import OptionsCard from '@/components/OptionsCard.vue'
import { productPropertyOptionsMock } from './mock'
import { createTestingPinia } from '@pinia/testing'

describe('Options card component', () => {
  let wrapper: VueWrapper<any>

  const titleMock = 'Material'
  const propertySlug = 'material'

  beforeEach(async () => {
    wrapper = mount(OptionsCard, {
      global: {
        plugins: [createTestingPinia()],
        renderStubDefaultSlot: true
      },
      props: {
        options: productPropertyOptionsMock,
        title: titleMock,
        slug: propertySlug
      }
    })
  })

  test('should be mounted', async () => {
    expect(OptionsCard).toBeTruthy()
  })

  test('should render the corresponding title', async () => {
    expect(wrapper.find('.n-card-header').text()).toBe(titleMock)
  })

  test('should render 5 elements and "Show more" btn', async () => {
    expect(wrapper.findAll('.n-radio-button').length).toBe(5)
    expect(wrapper.find('.n-button').exists()).toBeTruthy()
    expect(wrapper.find('.n-button').text()).toBe('Show more')
  })

  test('should render 5 elements and "Show more" btn', async () => {
    const showMoreBtn = wrapper.find('.n-button')

    await showMoreBtn.trigger('click')

    expect(wrapper.findAll('.n-radio-button').length).toBe(productPropertyOptionsMock.length)
    expect(wrapper.find('.n-button').text()).toBe('Show less')
  })

  test('should set selected element to the store', async () => {
    const { slug, name } = productPropertyOptionsMock[0]
    const radioBtn = wrapper.find(`.n-radio-input[value="${slug}"]`)
    const selectedObject = {
      value: slug,
      displayValue: name,
      name: propertySlug
    }

    await radioBtn.setValue(true)

    expect(wrapper.vm.selectedProperties).toStrictEqual([selectedObject])
  })
})
