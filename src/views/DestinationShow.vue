<script setup>
import { onMounted, ref, defineProps } from 'vue'

const props = defineProps({
  slug: {
    type: String,
    required: true
  }
})

const destination = ref(null)

const initData = async () => {
  const response = await fetch(`/api/${props.slug}.json`)
  destination.value = await response.json()
}

onMounted(() => {
  initData()
})
</script>

<template>
  <section v-if="destination" class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }}</p>
    </div>
  </section>
</template>

<style scoped></style>
