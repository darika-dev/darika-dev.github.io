<script setup>
import DkLoader from './components/common/DkLoader.vue'
import DkNavbar from './components/common/DkNavbar.vue'
import DkSeparatorMobile from './components/ui/DkSeparatorMobile.vue'
import SectionWelcome from './components/SectionWelcome.vue'
import DkAnimation from './components/common/DkAnimation.vue';
</script>

<template>
  <div>
    <DkAnimation />

    <DkNavbar />
    <div class="relative">
      <SectionWelcome />
    </div>

    <DkLoader />
  </div>
</template>

<style scoped></style>
