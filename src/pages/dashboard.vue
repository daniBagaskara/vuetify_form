<template>
  <div>
    <h1>Welcome, {{ auth.getFullName }}</h1>
    <p>accessToken: {{ auth.getAccessToken }}</p>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";

const auth = useAuthStore();
</script>
