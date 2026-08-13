<script lang="ts" setup>
import Section from './CvSection.vue'

interface Link {
  name: string
  path: string
  visiblePath?: string
}

const links: Link[] = [
  {
    name: 'Email',
    path: 'mailto:to@darika.dev',
    visiblePath: 'to@darika.dev',
  },
  {
    name: 'Telegram',
    path: 'https://t.me/darika_dev',
    visiblePath: '@darika_dev',
  },
  {
    name: 'LinkedIn',
    path: 'https://www.linkedin.com/in/kadaria/',
    visiblePath: 'linkedin.com/in/kadaria/',
  },
  {
    name: 'GitHub',
    path: 'https://github.com/darika-dev',
    visiblePath: 'github.com/darika-dev',
  },
]
</script>

<template>
  <Section title="Contact Information" class="print:hidden">
    <address class="grid sm:grid-cols-2 gap-2 not-italic">
      <div 
        v-for="link in links"
        :key="link.path"
        class="flex gap-0.5"
      >
        <strong class="inline-block min-w-[90px]">{{ link.name }}:</strong>
        <a
          :href="link.path"
          :target="link.path.startsWith('mailto:') ? '_self' : '_blank'"
          class="transition-colors text-neon hover:text-gray-100 print:text-gray-900"
        >
          {{ link.visiblePath || link.path }}
        </a>
      </div>
    </address>
  </Section>
</template>
