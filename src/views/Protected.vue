<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AppLink from '@/components/AppLink.vue'

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
    <AppLink :to="{ name: 'invoices' }">
      <button>Invoices</button>
    </AppLink>
  </div>
</template>

<style scoped></style>
