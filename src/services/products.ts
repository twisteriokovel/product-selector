import { MockResponse, ProductConfiguration } from '@/types/interfaces'
import { ProductType } from '@/types/enums'

import postersConfigurationMock from './mockData/posters.json'
import flyersConfigurationMock from './mockData/flyers.json'
import businessCardsConfigurationMock from './mockData/businesscards.json'

const getProductConfiguration = (type: keyof typeof ProductType): MockResponse<ProductConfiguration | null> => {
  let data: ProductConfiguration | null = null

  switch (type) {
    case ProductType.businessCards:
      data = businessCardsConfigurationMock as ProductConfiguration
      break
    case ProductType.flyers:
      data = flyersConfigurationMock as ProductConfiguration
      break
    case ProductType.posters:
      data = postersConfigurationMock as ProductConfiguration
      break
  }

  return {
    data,
    status: 200,
    statusText: 'OK'
  }
}

export default { getProductConfiguration }
