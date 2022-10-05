<script setup>
import DkLoader from './components/common/DkLoader.vue'
import DkNavbar from './components/common/DkNavbar.vue'
import DkSeparatorMobile from './components/ui/DkSeparatorMobile.vue'
import SectionWelcome from './components/SectionWelcome.vue'
</script>

<template>
  <div>
    <DkNavbar />
    <div class="relative">
      <SectionWelcome />
    </div>

    <DkLoader />
  </div>
</template>

<style scoped></style>
