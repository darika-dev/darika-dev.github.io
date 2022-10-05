<script lang="ts" setup>
import DkLink from './DkLink.vue'

interface Link {
  name: string
  path: string
}

interface Props {
  links: Link[]
}

withDefaults(defineProps<Props>(), {
  links: () => [],
})
</script>

<template>
  <ul class="flex -mx-2 sm:-mx-3">
    <li class="px-2 sm:px-3" v-for="link in links" :key="link.path">
      <DkLink :path="link.path" :name="link.name" />
    </li>
  </ul>
</template>
