export interface MockResponse<T = any> {
  data: T
  status: number
  statusText: string
}

export interface ProductConfiguration {
  sku: string
  title: string
  properties: Property[]
  excludes: ExcludedProperty[][]
}

export interface Property {
  slug: string
  title: string
  locked: boolean
  options: PropertyOption[]
  viewMode: {
    reseller?: string
    storefront?: string
  }
  type: string
  optionsInSummary: string[]
  parentOptions: PropertyOption[]
}

export interface PropertyOption {
  slug: string
  name: string
  nullable: boolean
  width?: number
  height?: number
  parent?: string
  eco?: boolean
  enrichments?: string[]
}

export interface ExcludedProperty {
  options: string[]
  property: string
}

export interface SelectedProperty {
  value: string
  displayValue: string
  name: string
}
