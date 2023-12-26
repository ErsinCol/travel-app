<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  experienceSlug: {
    type: String,
    required: true
  }
})

const experience = ref(null)

const initData = async () => {
  const response = await fetch(`/api/${props.slug}.json`)
  const destination = await response.json()
  experience.value = destination.experiences.find(
    (experience) => experience.slug === props.experienceSlug
  )
}

onMounted(() => {
  initData()
})
</script>

<template>
  <section v-if="experience">
    <h1>{{ experience.name }}</h1>
    <img :src="`/images/${experience.image}`" :alt="experience.name" />
    <p>{{ experience.description }}</p>
  </section>
</template>

<style scoped></style>
