<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const username = ref('')
const password = ref('')

const login = () => {
  window.user = username.value
  const redirectPath = route.query.redirect || '/protected'
  router.push(redirectPath)
}
</script>

<template>
  <div class="login">
    <form class="form" v-on:submit.prevent="login">
      <h1>Login</h1>
      <label for="username">Username</label>
      <input
        v-model="username"
        id="username"
        name="username"
        type="text"
        class="input"
        autocomplete="off"
      />
      <label for="password">Password</label>
      <input
        v-model="password"
        id="password"
        name="password"
        type="password"
        class="input"
        autocomplete="off"
      />
      <button class="btn">Login</button>
    </form>
  </div>
</template>

<style scoped></style>
