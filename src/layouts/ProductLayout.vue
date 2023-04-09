<template>
  <div class="container">
    <div class="product-heading">
      <NH1 class="product-heading__title">{{ route.meta.title }}</NH1>
      <NButton
        size="large"
        type="primary"
        :disabled="!isOrderAvailable"
        @click="placeOrder"
      >
        Order
      </NButton>
    </div>

    <div class="product-container">
      <OptionsList />
      <ProductSummary />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { NH1, NButton, useMessage } from 'naive-ui'
  import { onBeforeMount } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useRoute } from 'vue-router'
  import { useProductStore } from '@/store/product'

  import OptionsList from '@/components/OptionsList.vue'
  import ProductSummary from '@/components/ProductSummary.vue'

  const route = useRoute()
  const { getProductConfiguration, sendOrderDetails } = useProductStore()
  const { isOrderAvailable } = storeToRefs(useProductStore())

  const message = useMessage()

  async function placeOrder() {
    try {
      await sendOrderDetails()
      message.success('Order has been successfully placed')
    } catch (error) {
      message.error(error as string)
    }
  }

  onBeforeMount(async () => {
    const { productType } = route.meta

    if (!productType) {
      return
    }

    getProductConfiguration(productType)
  })
</script>

<style lang="scss" scoped>
  .product {
    &-container {
      display: flex;
      gap: 2rem;
      align-items: flex-start;
      padding-bottom: 2rem;
      position: relative;
    }

    &-heading {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: sticky;
      top: 0;
      background-color: var(--c-white);
      z-index: 1;
      padding: 1rem 0;

      &__title {
        margin: 0;
      }
    }
  }
</style>
