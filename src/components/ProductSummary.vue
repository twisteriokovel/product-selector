<template>
  <div
    v-if="productSummary.length"
    class="product-summary"
  >
    <NH2>Summary</NH2>

    <ul class="product-summary__list">
      <li
        v-for="{ title, slug, value } in productSummary"
        :key="slug"
        class="product-summary__item"
      >
        <NP>{{ title }}</NP>

        <NTag
          v-if="value"
          type="success"
        >
          {{ value }}
        </NTag>
        <NP v-else> Not selected </NP>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { NH2, NP, NTag } from 'naive-ui'
  import { useProductStore } from '@/store/product'
  import { storeToRefs } from 'pinia'

  const { productSummary } = storeToRefs(useProductStore())
</script>

<style lang="scss" scoped>
  .product-summary {
    position: relative;
    min-width: 320px;
    padding: 1rem;
    background-color: #fdecee;

    &__item {
      background-color: var(--c-white);
      border-radius: 0.5rem;
      padding: 0.75rem 1rem;

      &:not(:last-child) {
        margin-bottom: 1rem;
      }

      p {
        line-height: 1.75rem;
      }
    }
  }
</style>
