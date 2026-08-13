<script lang="ts" setup>
interface Link {
  name: string
  path?: string
}

const links: Link[] = [
  {
    name: 'to@darika.dev',
    path: 'mailto:to@darika.dev',
  },
  // {
  //   name: 'Limassol, Cyprus',
  // },
  {
    name: 'linkedin.com/in/kadaria',
    path: 'https://www.linkedin.com/in/kadaria/',
  },
  {
    name: 'github.com/darika-dev',
    path: 'https://github.com/darika-dev',
  },
  {
    name: 't.me/darika_dev',
    path: 'https://t.me/darika_dev',
  },
]
</script>

<template>
  <address class="flex gap-4 items-center justify-center not-italic">
    <ul class="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
      <li
        v-for="link in links"
        :key="link.path"
        class="flex gap-2 sm:gap-3 after:content-['|'] after:block last:after:hidden font-light print:font-normal after:text-gray-700 print:after:text-gray-200 first:block first:w-full first:after:hidden sm:first:flex sm:first:w-auto sm:first:after:block"
      >
        <span v-if="!link.path">{{ link.name }}</span>
        <a
          v-else
          :href="link.path as string"
          :target="link.path.startsWith('mailto:') ? '_self' : '_blank'"
          class="transition-colors hover:text-neon"
          :title="link.name"
        >
          {{ link.name }}
        </a>
      </li>
    </ul>
  </address>
</template>
