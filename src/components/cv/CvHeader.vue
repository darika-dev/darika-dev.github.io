<script lang="ts" setup>
import Contacts from './Contacts.vue'
</script>

<template>
  <header class="relative pt-10 pb-6 px-6 sm:px-8 text-center space-y-2 tracking-wider print:tracking-normal print:pt-2 print:pb-0 print:px-0 print:space-y-1">
    <h1 class="text-5xl print:text-3xl">Daria Kazantceva</h1>
    <h2 class="text-2xl print:text-lg">Senior Frontend Engineer</h2>
    <p class="font-extralight print:font-normal text-gray-400 print:text-gray-600">Frontend Architecture · Scalable UI Systems · Fintech & Web3</p>
    <Contacts />
    <!-- <button
      aria-label="Download resume as PDF"
      onclick="window.print()"
      class="flex gap-2 !mt-10 mx-auto items-center transition-colors font-light text-neon hover:text-gray-100 print:hidden"
    >
      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
      <span>Export CV to PDF</span>
    </button> -->
  </header>
</template>
