<template>
  <header class="header">
    <div class="container header-container">
      <RouterLink
        class="header-logo"
        to="/"
      >
        LOGO
      </RouterLink>

      <nav>
        <ul class="main-nav">
          <li
            v-for="{ text, link, children } in navigation"
            :key="link"
            class="main-nav__item"
          >
            <NDropdown
              trigger="hover"
              :options="getMappedOptions(children)"
              @select="$router.push($event)"
            >
              <NButton quaternary>
                {{ text }}
              </NButton>
            </NDropdown>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { NDropdown, NButton } from 'naive-ui'

  interface NavigationItem {
    text: string
    link: string
    children?: NavigationItem[]
  }

  const navigation: NavigationItem[] = [
    {
      text: 'About us',
      link: '/about-us'
    },
    {
      link: 'products',
      text: 'Products',
      children: [
        {
          text: 'Flyers',
          link: '/products/flyers'
        },
        {
          text: 'Posters',
          link: '/products/posters'
        },
        {
          text: 'Business cards',
          link: '/products/business-cards'
        }
      ]
    },
    {
      text: 'Contact',
      link: '/contacts'
    }
  ]

  function getMappedOptions(children: NavigationItem[] | undefined) {
    if (!children) {
      return
    }

    return children.map(({ text: label, link: key }) => ({
      label,
      key
    }))
  }
</script>

<style lang="scss">
  .header {
    padding: 1rem 0;
    box-shadow: 2px 2px 6px rgb(99 99 99 / 6%);
    margin-bottom: 1rem;

    &-logo {
      display: flex;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background-color: var(--c-primary);
      color: var(--c-white);
      align-items: center;
      justify-content: center;
      text-decoration: none;
      margin-right: 2rem;
    }

    &-container {
      display: flex;
      align-items: center;
    }
  }

  .main-nav {
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;

    &__item {
      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
</style>
