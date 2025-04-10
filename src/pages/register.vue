<route lang="yaml">
meta:
  layout: auth
  title: Register
</route>

<template>
  <v-card class="pa-8" width="400" elevation="8" rounded="xl">
    <v-card-title class="text-h5 text-center mb-4">Register</v-card-title>

    <v-form @submit.prevent="register">
      <v-row dense>
        <v-col cols="12">
          <v-text-field
            v-model="form.name"
            label="Nama Lengkap"
            outlined
            required
          />
        </v-col>

        <v-col cols="12">
          <v-text-field
            v-model="form.email"
            label="Email"
            type="email"
            outlined
            required
          />
        </v-col>

        <v-col cols="12">
          <v-text-field
            v-model="form.password"
            label="Password"
            type="password"
            outlined
            required
          />
        </v-col>

        <v-col cols="12">
          <v-text-field
            v-model="form.confirmPassword"
            label="Konfirmasi Password"
            type="password"
            outlined
            required
          />
        </v-col>

        <v-col cols="12" class="mt-4">
          <v-btn color="primary" block type="submit">Daftar</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>

<script setup>
const form = reactive({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const register = () => {
  console.log("Logic register");
};
</script>
