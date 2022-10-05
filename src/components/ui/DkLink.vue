<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
  path: string,
  name: string,
}

const props = defineProps<Props>();

const innerText = computed(() => {
  return props.name.split('')
})

const isExternalLink = computed(() => {
  return (
    typeof props.path === 'string' &&
    (props.path.startsWith('http') || props.path.startsWith('https'))
  )
})
</script>

<template>
  <a
    v-if="isExternalLink"
    v-bind="$attrs"
    :href="path as string"
    target="_blank"
    class="link relative text-xs sm:text-base leading-4 uppercase"
    :title="text"
  >
    <div>
      <span v-for="letter, key in innerText" :key="key" :style="`--index: ${key}`" class="letter">
        {{ letter }}</span>
    </div>
    <div class="absolute left-0 top-0 whitespace-nowrap" aria-hidden="true">
      <i v-for="letter, key in innerText" :key="`clone_${key}`" :style="`--index: ${key}`" class="letter _clone">
        {{ letter }}</i>
    </div>
  </a>
</template>

<style scoped lang="postcss">
.letter {
  display: inline-block;
  transform-style: preserve-3d;
  transition: transform .5s ease;
  transition-delay: calc(.05s * var(--index));
  transform-origin: top;
}

.letter._clone {
  transform-origin: bottom;
  transform: translateY(-100%) rotateX(-90deg);
}

.link:hover .letter {
  transform: translateY(100%) rotateX(-90deg);
}
.link:hover .letter._clone {
  transform: translate(0) rotateX(0);
}
</style>