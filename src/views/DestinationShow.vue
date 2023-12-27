<script setup>
import { onMounted, ref, defineProps } from 'vue'
import ExperienceCard from '@/components/ExperienceCard.vue'
import GoBack from '@/components/GoBack.vue'
import AppLink from '@/components/AppLink.vue'

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
  <div>
    <section v-if="destination" class="destination">
      <h1>{{ destination.name }}</h1>
      <GoBack />
      <div class="destination-details">
        <img :src="`/images/${destination.image}`" :alt="destination.name" />
        <p>{{ destination.description }}</p>
      </div>
    </section>
    <section v-if="destination" class="experiences">
      <h2>Top Experiences in {{ destination.name }}</h2>
      <div class="cards">
        <AppLink
          v-for="experience in destination.experiences"
          :key="experience.slug"
          :to="{
            name: 'experience.show',
            params: {
              experienceSlug: experience.slug
            }
          }"
        >
          <ExperienceCard :experience="experience"></ExperienceCard>
        </AppLink>
      </div>
    </section>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
