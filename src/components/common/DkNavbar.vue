<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DkLinksList from '../ui/DkLinksList.vue'

interface Link {
  name: string
  path: string
}

const links: Link[] = [
  // {
  //   name: 'Projects',
  //   path: 'https://www.linkedin.com/in/kadaria/details/featured/',
  // },
  {
    name: 'CV',
    path: '/cv',
  },
]

const route = useRoute()
const isCV = computed(() => route.path === '/cv')
</script>

<template>
  <div class="fixed z-50 top-0 inset-x-0 h-14 flex border-b bg-black print:hidden">
    <div class="flex justify-between items-center w-full px-6 sm:px-8">
      <router-link
        to="/"
        alt="home"
        class="transition-colors text-sm sm:text-lg font-light hover:text-neon"
        activeClass="pointer-events-none"
      >
        <span v-if="!isCV">Daria Kazantceva</span>
        <span v-else>DK</span>
      </router-link>

      <nav>
        <DkLinksList v-if="!isCV" :links="links" />
        <!-- <button v-else aria-label="Download resume as PDF" onclick="window.print()" class="flex gap-2 items-center transition-colors font-light hover:text-neon">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          <span>PDF</span>
        </button> -->
        <button
          v-else
          aria-label="Download resume as PDF"
          onclick="window.print()"
          class="flex gap-2 items-center transition-colors font-light text-neon hover:text-gray-100 print:hidden"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          <span>Export to PDF</span>
        </button>
      </nav>
    </div>
  </div>
</template>
