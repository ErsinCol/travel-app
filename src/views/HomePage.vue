<script setup>
import { ref } from 'vue'
import sourceData from '@/data.json'
import AppLink from '@/components/AppLink.vue'

const destinations = ref(sourceData.destinations)
</script>

<template>
  <div class="home">
    <h1>All Destinations</h1>
    <div class="destinations">
      <AppLink
        v-for="destination in destinations"
        :key="destination.id"
        :to="{
          name: 'destination.show',
          params: {
            id: destination.id,
            slug: destination.slug
          }
        }"
      >
        <h2>{{ destination.name }}</h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name" />
      </AppLink>
    </div>
  </div>
</template>

<style scoped></style>
