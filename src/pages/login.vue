<route lang="yaml">
meta:
  layout: default
  title: Login
  auth: false
</route>

<template>
  <v-container class="d-flex align-center justify-center h-100 fluid">
    <v-row>
      <v-col
        cols="12"
        xs="10"
        sm="6"
        md="4"
        offset-xs="1"
        offset-sm="3"
        offset-md="4"
      >
        <v-card elevation="10">
          <v-toolbar title="LOGIN" color="white" class="text-secondary" />
          <v-card-text>
            <v-form>
              <v-text-field
                label="Email"
                clearable
                variant="underlined"
                v-model="form.email"
                required
                :error-messages="v$.email.$errors.map((e) => e.$message)"
                @blur="v$.email.$touch()"
              ></v-text-field>
              <v-text-field
                label="Password"
                type="password"
                clearable
                variant="underlined"
                v-model="form.password"
                required
                :error-messages="v$.password.$errors.map((e) => e.$message)"
                @blur="v$.password.$touch()"
              ></v-text-field>
              <v-btn @click="login" block color="secondary" :loading="loading"
                >Login</v-btn
              >
            </v-form>
            <v-alert v-if="errorMessage" type="error" dismissible class="mt-3">
              {{ errorMessage }}
            </v-alert>
          </v-card-text>
        </v-card>
        <div class="d-flex align-center justify-space-between mt-2">
          <p>Don't have an account?</p>
          <v-btn
            variant="text"
            color="secondary"
            to="/register"
            class="text-decoration-none"
            >Register</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </v-container>
  <v-overlay v-model="loading"></v-overlay>
</template>

<script setup>
import useVuelidate from "@vuelidate/core";
import { required, minLength, email } from "@vuelidate/validators";
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const auth = useAuthStore();
const router = useRouter();
const loading = ref(false);
const errorMessage = ref(false);

const form = reactive({
  email: "",
  password: "",
});

const rules = {
  email: { required, email },
  password: { required, minLength: minLength(6) },
};

const v$ = useVuelidate(rules, form);
const login = async () => {
  v$.value.$touch();
  if (v$.value.$invalid) {
    return;
  }

  const { email, password } = form;
  loading.value = true;
  try {
    const response = await axios.post("http://localhost:3000/auth/login", {
      email,
      password,
    });
    if (response.status === 200) {
      auth.setFullName(response.data.fullname);
      auth.setAccessToken(response.data.accessToken);
      auth.setRefreshToken(response.data.refreshToken);

      router.push("/dashboard");
    }
  } catch (error) {
    console.log(error.response);
    if (error.response.status === 403) {
      errorMessage.value = "Invalid email or password";
    } else {
      errorMessage.value = "An error occurred. Please try again.";
    }
  } finally {
    loading.value = false;
  }
};
</script>
