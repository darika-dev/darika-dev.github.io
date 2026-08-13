<script lang="ts" setup>
import Section from '../ui/DkSection.vue'

defineProps<{
  title?: string
}>()

</script>

<template>
  <Section class="max-w-5xl mx-auto !py-6 !print:px-0 print:max-w-none">
    <h3
      v-if="title"
      class="pb-2 border-b border-gray-700 print:border-gray-200 after:absolute font-medium print:font-semibold uppercase tracking-widest break-after-avoid"
    >
      <span class="relative after:absolute after:inset-x-0 after:bg-neon after:h-0.5 after:-bottom-3 print:after:hidden">
        {{ title }}
      </span>
    </h3>
    <div class="font-extralight print:font-normal mt-4 print:mt-2 space-y-4">
      <slot />
    </div>
  </Section>
</template>
