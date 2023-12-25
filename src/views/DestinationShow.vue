<script setup>
import {onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute();
const destination = ref(null);

const initData = async() => {
  const response = await fetch(`/api/${route.params.slug}.json`);
  destination.value = await response.json();
}

onMounted(()=>{
  initData();
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
