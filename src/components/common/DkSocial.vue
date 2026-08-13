<script lang="ts" setup>
import DkLinksList from '../ui/DkLinksList.vue'

interface Link {
  name: string
  path: string
}

const links: Link[] = [
  {
    name: 'Linkedin',
    path: 'https://www.linkedin.com/in/kadaria/',
  },
  {
    name: 'GitHub',
    path: 'https://github.com/darika-dev',
  },
  {
    name: 'Codepen',
    path: 'https://codepen.io/darika-dev',
  },
  {
    name: 'Telegram',
    path: 'https://t.me/darika_dev',
  },
]
</script>

<template>
  <DkLinksList :links="links" />
</template>
