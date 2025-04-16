<template>
  <component :is="currentNav" />
</template>

<script setup>
import { computed } from "vue";
import { useAuthStore } from "@/stores/auth";
import LandingNav from "./LandingNav.vue";
import UserNav from "./UserNav.vue";

const auth = useAuthStore();

// Gunakan referensi ke komponen, bukan string
const currentNav = computed(() =>
  auth.isAuthenticated ? UserNav : LandingNav
);
</script>
