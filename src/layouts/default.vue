<template>
  <AppBar />
  <v-main class="main-layout">
    <router-view />
  </v-main>

  <AppFooter />
</template>

<style>
.main-layout {
  background: #fff;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 50%,
    rgba(201, 212, 245, 1) 100%
  );
}
</style>
