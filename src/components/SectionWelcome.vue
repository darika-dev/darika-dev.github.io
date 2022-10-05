<script setup>
import { ref, onMounted } from 'vue'
import { gsap, Expo } from 'gsap/dist/gsap'

import DkSocial from './common/DkSocial.vue'
import DkSection from './ui/DkSection.vue'
import DkAnimation from './common/DkAnimation.vue';

const titleMiddle = ref()
const titleBottom = ref()

onMounted(() => {
  gsap.registerPlugin();

  const tl = gsap.timeline()

  tl.to(titleMiddle.value, {
    x: "-15%",
    delay: .7,
    duration: 1.5,
    ease: Expo.easeInOut
  }, "show"),
  tl.to(titleBottom.value, {
    x: "18%",
    delay: .7,
    duration: 1.5,
    ease: Expo.easeInOut
  }, "show")
})
</script>

<template>
  <DkSection class="flex flex-col items-center justify-between">
    <div></div>

    <DkAnimation />
    <div class="">
      <h2 class="text-4xl md:text-8xl font-medium uppercase mix-blend-difference">
        <span class="block text-center">Senior</span>
        <span ref="titleMiddle" class="left block text-left">Front-end</span>
        <span ref="titleBottom" class="right block text-right">Developer</span>
      </h2>
    </div>

    <div class="mt-10 w-full flex flex-col sm:flex-row justify-between items-center">
      <DkSocial class="mb-2 sm:mb-0" />
      <a href="mailto:to@darika.dev" class="transition-colors text-xs sm:text-base font-light hover:text-neon">to@darika.dev</a>
    </div>
  </DkSection>
</template>

<style scoped lang="postcss"></style>