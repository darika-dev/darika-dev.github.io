<script lang="ts" setup>
interface Props {
  title: string,
  link?: string,
  date: string,
  company?: string,
  companyLink?: string,
  description: string,
  descriptionList?: string[],
  awards?: {
    title: string,
    organization: string,
    link: string,
  }[],
}

const props = defineProps<Props>();
</script>

<template>
  <div class="">
    <div class="flex justify-between items-center break-after-avoid">
      <a v-if="link" :href="link" target="_blank" class="group font-semibold transition-opacity">
        {{ title }}
        <span class="transition-opacity opacity-0 group-hover:opacity-100 print:hidden">&#8599;</span>
      </a>
      <strong v-else>{{ title }}</strong>
      <span class="text-sm text-gray-400 print:text-gray-600">{{ date }}</span>
    </div>
    <div v-if="company" class="text-sm text-gray-400 print:text-gray-600 break-after-avoid">
      <a
        v-if="companyLink"
        :href="companyLink"
        target="_blank"
        class="group text-gray-400 print:text-gray-600 hover:text-gray-200 transition-colors"
      >
        {{ company }}
        <span class="transition-opacity opacity-0 group-hover:opacity-100 print:hidden">&#8599;</span>
      </a>
      <span v-else>{{ company }}</span>
    </div>
    <div class="space-y-0.5 mt-2 text-sm/6 text-gray-200 print:text-gray-800">
      <p class="break-before-avoid" v-html="description" />
      <ul v-if="descriptionList" class="list-disc list-outside pl-4">
        <li v-for="item in descriptionList" :key="item" v-html="item" />
      </ul>
      <ul v-if="awards" class="flex flex-col md:flex-row print:flex-row flex-wrap gap-1 md:gap-3">
        <li
          v-for="award in awards"
          :key="award.link"
          class="flex flex-wrap gap-2 sm:gap-3 md:after:content-['|'] last:after:hidden after:text-gray-700 print:after:text-gray-200"
        >
          <a :href="award.link" target="_blank" class="relative group flex gap-1">
            {{ award.organization }} – <b>{{ award.title }}</b>
            <span class="relative inline-block transition-transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:text-neon print:hidden">&#8599;</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
