<template>
  <ul class="cards-list">
    <li
      v-for="{ slug, title, options } in productProperties"
      :key="slug"
      class="cards-list__item"
    >
      <OptionsCard
        :title="title"
        :options="options"
        :slug="slug"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useProductStore } from '@/store/product'
  import OptionsCard from './OptionsCard.vue'

  const { productProperties } = storeToRefs(useProductStore())
</script>

<style lang="scss" scoped>
  .cards-list {
    grid-gap: 1rem;
    display: flex;
    flex-wrap: wrap;

    &__item {
      width: calc(33.3333% - 1rem);
    }
  }
</style>
