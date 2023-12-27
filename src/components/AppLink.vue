<script setup>
import { RouterLink } from 'vue-router'
import { computed } from 'vue'

const props = defineProps({
  ...RouterLink.props
})

const isExternalLink = computed(() => {
  return typeof props.to === 'string' && props.to.startsWith('http')
})
</script>

<template>
  <a v-if="isExternalLink" :href="to" target="_blank" rel="noopener" class="external-link">
    <slot />
  </a>
  <router-link v-else v-bind="props" class="internal-link">
    <slot />
  </router-link>
</template>

<style scoped></style>
