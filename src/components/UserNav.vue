<template>
  <v-app-bar color="white" flat elevation="1" class="px-4 px-md-8 border-b">
    <v-container
      class="d-flex align-center justify-space-between pa-0 ma-0 mx-2 mx-md-6"
      fluid
    >
      <!-- Brand Logo -->
      <router-link to="/" class="text-decoration-none">
        <v-toolbar-title
          class="d-flex align-center text-h6 font-weight-bold text-primary"
        >
          <v-icon class="mr-2">mdi-form-textbox</v-icon>
          MyForm
        </v-toolbar-title>
      </router-link>

      <!-- Desktop Navigation -->
      <div class="d-none d-md-flex align-center">
        <v-btn :to="{ path: '/dashboard' }" variant="text" class="mr-4">
          Dashboard
        </v-btn>
        <v-btn variant="text" class="mr-4"> My Forms </v-btn>

        <!-- User Menu -->
        <div class="d-flex align-center">
          <span class="text-body-2 font-weight-medium text-large-emphasis mr-3">
            Dani
          </span>
          <v-menu location="bottom end" transition="scale-transition">
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" class="ml-2" icon variant="text">
                <v-icon>mdi-account</v-icon>
              </v-btn>
            </template>
            <v-card min-width="200" elevation="3" rounded="lg" class="mt-1">
              <v-list density="compact">
                <v-list-item prepend-icon="mdi-account" @click="goToProfile">
                  Profile
                </v-list-item>
                <v-list-item prepend-icon="mdi-cog" @click="goToSettings">
                  Settings
                </v-list-item>
                <v-divider class="my-1"></v-divider>
                <v-list-item prepend-icon="mdi-logout" @click="logout">
                  Logout
                </v-list-item>
              </v-list>
            </v-card>
          </v-menu>
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <v-app-bar-nav-icon
        class="d-md-none"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-container>
  </v-app-bar>

  <!-- Mobile Navigation Drawer -->
  <v-navigation-drawer v-model="drawer" temporary right width="280">
    <v-list class="pa-4">
      <div class="d-flex align-center mb-4 pb-2 border-b">
        <v-avatar color="primary" size="40" class="mr-3">
          <span class="white--text">{{ userInitials }}</span>
        </v-avatar>
        <div>
          <div class="text-subtitle-1 font-weight-medium">
            {{ user?.name || "Guest" }}
          </div>
          <div class="text-caption text-medium-emphasis">
            {{ user?.email || "" }}
          </div>
        </div>
      </div>

      <!-- Navigation Items -->
      <v-list-item prepend-icon="mdi-view-dashboard" class="mb-1">
        Dashboard
      </v-list-item>
      <v-list-item prepend-icon="mdi-file-document-multiple" class="mb-1">
        My Forms
      </v-list-item>
      <v-list-item prepend-icon="mdi-account" @click="goToProfile" class="mb-1">
        Profile
      </v-list-item>
      <v-list-item prepend-icon="mdi-cog" @click="goToSettings" class="mb-1">
        Settings
      </v-list-item>

      <v-divider class="my-3"></v-divider>

      <template>
        <v-list-item prepend-icon="mdi-logout" @click="logout">
          Logout
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, computed } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const drawer = ref(false);
const auth = useAuthStore();
const router = useRouter();

const user = computed(() => auth.user);

// Compute user initials from name
const userInitials = computed(() => {
  if (!user.value?.name) return "";
  return user.value.name
    .split(" ")
    .map((name) => name[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();
});

const logout = () => {
  auth.clearAuthData();
  router.push("/login");
  drawer.value = false;
};

const goToProfile = () => {
  router.push("/profile");
  drawer.value = false;
};

const goToSettings = () => {
  router.push("/settings");
  drawer.value = false;
};
</script>
<style scoped>
.v-app-bar {
  box-shadow: none !important;
  border-bottom: none !important;
}
</style>
