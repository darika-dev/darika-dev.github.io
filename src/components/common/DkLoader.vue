<script setup>
import { ref, onMounted } from 'vue'
import { gsap, Expo } from 'gsap/dist/gsap'

const first = ref()
const middle = ref()
const last = ref()

onMounted(() => {
  gsap.registerPlugin();

  const tl = gsap.timeline()
  let mm = gsap.matchMedia();

  mm.add("(min-width: 800px)", () => {
    tl.to(first.value, {
      xPercent: -100,
      ease: Expo.easeInOut,
      duration: 1.3
    }, "out+=0.45"),
    tl.to(middle.value, {
      xPercent: -100,
      ease: Expo.easeInOut,
      duration: 1.4
    }, "out+=0.5")
    tl.to(last.value, {
      xPercent: -100,
      delay: .05,
      duration: 1.4,
      ease: Expo.easeInOut
    }, "")
  });

  mm.add("(max-width: 799px)", () => {
    tl.to(first.value, {
      yPercent: -100,
      ease: Expo.easeInOut,
      duration: 1.4
    }, "out+=0.5"),
    tl.to(middle.value, {
      yPercent: -100,
      ease: Expo.easeInOut,
      duration: 1.4
    }, "out+=0.5"),
    tl.to(last.value, {
      yPercent: -100,
      delay: .05,
      duration: 1.4,
      ease: Expo.easeInOut
    }, "")
  });
})
</script>

<template>
  <div>
    <div ref="first" class="fixed inset-0 z-50 w-screen h-screen bg-black"></div>
    <div ref="middle" class="fixed inset-0 z-50 w-screen h-screen bg-neon"></div>
    <div ref="last" class="fixed inset-0 z-50 w-screen h-screen bg-black"></div>
  </div>
</template>

<style scoped lang="postcss"></style>