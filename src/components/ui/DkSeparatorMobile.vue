<script lang="ts" setup></script>

<template>
  <div class="relative z-1 py-3 border-t border-b border-white">
    <div class="marquee relative overflow-hidden whitespace-nowrap uppercase text-xl">
      <span v-for="val in 2" :key="`marquee_${val}`" class="marquee__item inline-block" aria-hidden="true">
        <span v-for="item in 5" :key="`marquee_${val}_${item}`">
          <slot />
        </span>
      </span>
    </div>
  </div>
</template>


<style lang="postcss" scoped>
@keyframes marquee {
  from {
    transform: translateX(0)
  }
  to {
    transform: translateX(-100%)
  }
}

.marquee:hover .marquee__item {
  animation-play-state: paused;
}

.marquee__item {
  animation: marquee 15s linear infinite;
}
</style>
