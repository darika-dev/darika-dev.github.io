<script lang="ts">
export default {
  name: 'IndexView'
}
</script>

<script lang="ts" setup>
import DkNavbar from './components/common/DkNavbar.vue'
</script>

<template>
  <div>
    <DkNavbar />
    <div class="relative">
      <router-view />
    </div>
  </div>
</template>

<style scoped></style>
