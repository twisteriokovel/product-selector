<template>
  <NCard :title="title">
    <NRadioGroup
      v-model:value="selectedProperty"
      :name="title"
    >
      <NSpace vertical>
        <NRadioButton
          v-for="{ slug, name } in preparedOptionsList"
          :key="slug"
          :value="slug"
          :label="name"
          :disabled="correspondingDisabledOptions.includes(slug)"
        />

        <NButton
          v-if="isAvailableShowMoreBtn"
          text
          @click="isShownFullList = !isShownFullList"
        >
          Show {{ isShownFullList ? 'less' : 'more' }}
        </NButton>
      </NSpace>
    </NRadioGroup>
  </NCard>
</template>

<script setup lang="ts">
  import { ref, computed, watch } from 'vue'
  import { storeToRefs } from 'pinia'
  import { NCard, NButton, NSpace, NRadioGroup, NRadioButton } from 'naive-ui'
  import { PropertyOption, SelectedProperty } from '@/types/interfaces'
  import { useProductStore } from '@/store/product'

  const DEFAULT_SHOWN_ITEMS_AMOUNT = 5

  const props = defineProps<{
    options: PropertyOption[]
    title: string
    slug: string
  }>()

  const { selectedProperties, disabledOptions } = storeToRefs(useProductStore())

  const selectedProperty = ref('')
  const isShownFullList = ref(false)

  const isAvailableShowMoreBtn = computed(() => props.options.length > DEFAULT_SHOWN_ITEMS_AMOUNT)
  const preparedOptionsList = computed(() => {
    const filteredOptions = props.options.filter(({ slug, name }) => slug !== 'custom' && name)
    return isShownFullList.value ? filteredOptions : filteredOptions.slice(0, DEFAULT_SHOWN_ITEMS_AMOUNT)
  })
  const correspondingDisabledOptions = computed(() => disabledOptions.value[props.slug] ?? [])
  const preparedSelectedProperty = computed<SelectedProperty>(() => ({
    value: selectedProperty.value,
    displayValue: props.options.find(({ slug }) => slug === selectedProperty.value)?.name ?? '',
    name: props.slug
  }))

  watch(selectedProperty, () => {
    const currentSelectedPropertyIndex = selectedProperties.value.findIndex(({ name }) => name === props.slug)

    if (currentSelectedPropertyIndex !== -1) {
      selectedProperties.value.splice(currentSelectedPropertyIndex, 1)
    }

    selectedProperties.value.push(preparedSelectedProperty.value)
  })
</script>

<style lang="scss">
  .n-radio-button {
    white-space: normal !important;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
</style>
