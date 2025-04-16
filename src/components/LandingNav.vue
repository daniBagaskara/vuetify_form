<template>
  <v-app-bar color="white" flat elevation="0" class="px-4 px-md-8">
    <v-container class="d-flex align-center justify-space-between">
      <!-- Logo -->
      <router-link to="/" class="text-decoration-none">
        <v-toolbar-title
          class="text-h6 font-weight-bold text-primary d-flex align-center"
        >
          <v-icon left class="mr-2">mdi-form-textbox</v-icon>
          MyForm
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>

      <!-- Navigation Links -->
      <div class="d-none d-md-flex align-center">
        <v-btn text class="text-capitalize mx-2">Contact</v-btn>
      </div>

      <!-- Login & Signup Buttons -->
      <div class="d-none d-md-flex align-center">
        <v-btn
          :to="{ path: '/login' }"
          outlined
          color="primary"
          class="mr-3 text-capitalize"
        >
          Login
        </v-btn>
        <v-btn
          :to="{ path: '/register' }"
          color="primary"
          class="text-capitalize"
          >Sign Up</v-btn
        >
      </div>

      <!-- Mobile Menu Icon -->
      <v-app-bar-nav-icon
        class="d-md-none"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-container>
  </v-app-bar>

  <!-- Mobile Drawer (Tidak Berubah) -->
  <v-navigation-drawer v-model="drawer" temporary right app>
    <v-list nav dense>
      <v-list-item-group>
        <v-list-item>
          <v-btn block text class="text-capitalize">Contact</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn block outlined color="primary" class="text-capitalize mb-2">
            Login
          </v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn block color="primary" class="text-capitalize">Sign Up</v-btn>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
const drawer = ref(false);
</script>
<style scoped>
.v-app-bar {
  box-shadow: none !important;
}
</style>
