import { PropertyOption, Property } from '@/types/interfaces'

const productPropertyOptionsMock: PropertyOption[] = [
  {
    slug: '90gr_hv_bankpost',
    name: '90 g/m² uncoated premium white (writable)',
    nullable: false,
    eco: false
  },
  {
    slug: '100gr_hv_bankpost',
    name: '100 g/m² uncoated premium white  (writable)',
    nullable: false,
    eco: false
  },
  {
    slug: '115gr_gesatineerd_mc',
    name: '115 g/m² gloss',
    nullable: false,
    eco: false
  },
  {
    slug: '135gr_gesatineerd_mc',
    name: '135 g/m² gloss',
    nullable: false,
    eco: false
  },
  {
    slug: '170gr_gesatineerd_mc',
    name: '170 g/m² gloss',
    nullable: false,
    eco: false
  },
  {
    slug: '250gr_gesatineerd_mc',
    name: '250 g/m² gloss',
    nullable: false,
    eco: false
  }
]

const productPropertiesMock: Property[] = [
  {
    slug: 'size',
    title: 'Size',
    locked: false,
    options: [
      {
        slug: 'a2',
        name: 'A2 - 420 x 594 mm',
        nullable: false
      },
      {
        slug: 'a3',
        name: 'A3 - 297 x 420 mm',
        nullable: false
      },

      {
        slug: '1/3_a3',
        name: '1/3 A3 - 140 x 297 mm',
        nullable: false
      },
      {
        slug: '1/3_a4',
        name: '1/3 A4 -  99 x 210 mm (DL)',
        nullable: false
      }
    ]
  },
  {
    slug: 'printtype',
    title: 'Print type',
    locked: false,
    options: [
      {
        slug: '40',
        name: '4/0 Full colour',
        nullable: false,
        eco: false
      },
      {
        slug: '44',
        name: '4/4 Full colour',
        nullable: false,
        eco: false
      },
      {
        slug: '50_full_color_plus_white',
        name: '5/0 Full colour + white',
        nullable: false,
        eco: false
      },
      {
        slug: '55_full_color_plus_white',
        name: '5/5 Full colour + white',
        nullable: false,
        eco: false
      }
    ]
  },
  {
    slug: 'material',
    title: 'Material',
    locked: false,
    options: productPropertyOptionsMock
  }
]

export { productPropertyOptionsMock, productPropertiesMock }
