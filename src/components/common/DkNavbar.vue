<script lang="ts" setup>
import DkLinksList from '../ui/DkLinksList.vue'

interface Link {
  name: string
  path: string
}

const links: Link[] = [
  {
    name: 'Projects',
    path: 'https://www.linkedin.com/in/kadaria/details/featured/',
  },
]
</script>

<template>
  <header class="fixed z-50 top-0 inset-x-0 h-14 flex border-b bg-black">
    <div class="flex justify-between items-center w-full px-6 sm:px-8">
      <h1 class="font-light text-sm sm:text-lg">Daria Kazantceva</h1>

      <nav>
        <DkLinksList :links="links" />
      </nav>
    </div>
  </header>
</template>
