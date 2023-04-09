<template>
  <NConfigProvider :theme-overrides="themeOverrides">
    <Header />
    <NMessageProvider>
      <RouterView v-slot="{ Component: page }">
        <Transition mode="out-in">
          <div :key="$route.fullPath">
            <Component :is="page" />
          </div>
        </Transition>
      </RouterView>
    </NMessageProvider>
  </NConfigProvider>
</template>

<script setup lang="ts">
  import { NConfigProvider, NMessageProvider, GlobalThemeOverrides } from 'naive-ui'
  import Header from './components/Header.vue'

  const themeOverrides: GlobalThemeOverrides = {
    common: {
      primaryColor: '#ff0048',
      primaryColorHover: '#B30033'
    }
  }
</script>

<style lang="scss">
  :root {
    --c-primary: #ff0048;
    --c-main: #313131;
    --c-white: #fff;
  }

  body {
    color: var(--c-main);
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .container {
    max-width: 1440px;
    padding: 0 1rem;
    margin: auto;
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.3s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
