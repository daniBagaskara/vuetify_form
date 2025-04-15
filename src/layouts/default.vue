<template>
  <!-- Navbar dengan desain yang lebih modern -->
  <v-app-bar flat color="white" elevation="0" class="border-bottom">
    <v-container>
      <div class="d-flex align-center justify-space-between">
        <div class="d-flex align-center">
          <v-icon color="primary" size="large" class="mr-2"
            >mdi-checkbox-marked-circle-outline</v-icon
          >
          <span class="text-h5 font-weight-bold text-primary">MyForm</span>
        </div>

        <div v-if="isLandingPage" class="d-none d-md-flex align-center">
          <v-btn variant="text" class="font-weight-medium mx-3">Features</v-btn>
          <v-btn variant="text" class="font-weight-medium mx-3"
            >Templates</v-btn
          >
          <v-btn variant="text" class="font-weight-medium mx-3">Pricing</v-btn>
          <v-btn variant="text" class="font-weight-medium mx-3">Contact</v-btn>
          <v-btn
            color="primary"
            variant="elevated"
            class="ml-6 text-none font-weight-bold"
            rounded="pill"
            elevation="0"
            :to="{ path: '/register' }"
          >
            Get Started <v-icon class="ml-1">mdi-arrow-right</v-icon>
          </v-btn>
        </div>

        <div
          v-else-if="isAuthenticated && !isLandingPage"
          class="d-none d-md-flex align-center"
        >
          <v-btn
            variant="text"
            class="font-weight-medium mx-3"
            :to="{ path: '/dashboard' }"
          >
            Dashboard
          </v-btn>
          <v-btn
            variant="text"
            class="font-weight-medium mx-3"
            @click="auth.logout()"
          >
            Logout
          </v-btn>
        </div>

        <v-app-bar-nav-icon
          class="d-md-none"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </div>
    </v-container>
  </v-app-bar>

  <!-- Mobile menu -->
  <v-navigation-drawer v-model="drawer" temporary>
    <v-list>
      <v-list-item
        prepend-icon="mdi-view-dashboard-outline"
        title="Features"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-palette-outline"
        title="Templates"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-currency-usd"
        title="Pricing"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-email-outline"
        title="Contact"
      ></v-list-item>
      <v-divider class="my-3"></v-divider>
      <v-list-item>
        <v-btn
          color="primary"
          block
          variant="elevated"
          rounded="pill"
          class="text-none font-weight-bold"
        >
          Get Started <v-icon class="ml-1">mdi-arrow-right</v-icon>
        </v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-main>
    <router-view />
  </v-main>

  <AppFooter />
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useRoute } from "vue-router";

const auth = useAuthStore();
const route = useRoute();
const isAuthenticated = computed(() => auth.isAuthenticated);
const isLandingPage = computed(() => route.path === "/");

const drawer = ref(false);
</script>
