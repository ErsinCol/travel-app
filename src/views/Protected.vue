<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref(window.user)

const router = useRouter()

const logout = () => {
  window.user = null
  router.push({ name: 'Home' })
}
</script>

<template>
  <div>
    <h1>Greetings, {{ username }}</h1>
    <button v-on:click="logout">Logout</button>
    <router-link :to="{ name: 'invoices' }">
      <button>Invoices</button>
    </router-link>
  </div>
</template>

<style scoped></style>
