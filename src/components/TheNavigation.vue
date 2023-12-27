<script setup>
import { ref } from 'vue'
import sourceData from '@/data.json'

const destinations = ref(sourceData.destinations)
</script>

<template>
  <div id="nav">
    <AppLink to="/" id="logo">Travel App</AppLink>
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
      {{ destination.name }}
    </AppLink>
    <AppLink :to="{ name: 'protected' }">Dashboard</AppLink>
    <AppLink to="https://github.com/ErsinCol">My Github Profile</AppLink>
  </div>
</template>

<style lang="css">
#nav .custom-link-active {
  color: white;
  opacity: 1;
}
</style>
