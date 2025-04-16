<route lang="yaml">
meta:
  layout: default
  title: Register
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
          <v-toolbar title="Register" color="white" class="text-primary" />
          <v-card-text>
            <v-form>
              <v-text-field
                clearable
                variant="underlined"
                v-model="form.fullname"
                label="Name"
                required
                :error-messages="v$.fullname.$errors.map((e) => e.$message)"
                @blur="v$.fullname.$touch()"
              ></v-text-field>
              <v-text-field
                clearable
                variant="underlined"
                v-model="form.email"
                label="Email"
                required
                :error-messages="v$.email.$errors.map((e) => e.$message)"
                @blur="v$.email.$touch()"
              ></v-text-field>
              <v-text-field
                clearable
                variant="underlined"
                v-model="form.password"
                label="Password"
                required
                @blur="v$.password.$touch()"
                @click:append="showPassword = !showPassword"
                :error-messages="v$.password.$errors.map((e) => e.$message)"
                :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                :type="showPassword ? 'text' : 'password'"
              ></v-text-field>
              <v-text-field
                clearable
                variant="underlined"
                v-model="form.retype_password"
                label="Confirm Password"
                required
                :error-messages="
                  v$.retype_password.$errors.map((e) => e.$message)
                "
                :type="retype_password ? 'text' : 'password'"
                :append-icon="retype_password ? 'mdi-eye-off' : 'mdi-eye'"
                @blur="v$.retype_password.$touch()"
                @click:append="retype_password = !retype_password"
              ></v-text-field>
              <v-btn @click="register" block color="primary" :loading="loading">
                Register
              </v-btn>
            </v-form>
            <v-alert v-if="errorMessage" type="error" dismissible class="mt-3">
              {{ errorMessage }}
            </v-alert>
          </v-card-text>
        </v-card>
        <v-snackbar v-model="showSuccess" :timeout="10000" color="success">
          Registrasi berhasil! Kamu akan diarahkan ke halaman login.
        </v-snackbar>
        <div class="d-flex align-center justify-space-between mt-2">
          <p class="mb-0">Already have an account?</p>
          <v-btn variant="text" color="primary" to="/login">Login</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
  <v-overlay v-model="loading"></v-overlay>
</template>

<script setup>
import useVuelidate from "@vuelidate/core";
import { required, minLength, sameAs, email } from "@vuelidate/validators";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const loading = ref(false);
const showPassword = ref(false);
const retype_password = ref(false);
const showSuccess = ref(false);
const errorMessage = ref(null);

const form = reactive({
  fullname: "",
  email: "",
  password: "",
  retype_password: "",
});

const sameAsPassword = computed(() => form.retype_password);

const rules = {
  fullname: { required },
  email: { required, email },
  password: { required, minLength: minLength(6) },
  retype_password: {
    required,
    sameAsPassword: sameAs(sameAsPassword),
  },
};

const v$ = useVuelidate(rules, form);

const register = async () => {
  v$.value.$touch();
  if (!v$.value.$invalid) {
    loading.value = true;
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/register",
        form
      );
      if (response.status === 200) {
        showSuccess.value = true;
        setTimeout(() => {
          router.push("/login");
        }, 3000);
      }

      console.log(response);
    } catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          errorMessage.value = "Email already exists.";
        } else if (error.response.status === 428) {
          errorMessage.value = "Invalid input, please check your data.";
        } else if (error.response.status === 500) {
          errorMessage.value = "Server error. Please try again later.";
        } else {
          errorMessage.value = "An unexpected error occurred.";
        }
        console.log("Server response error:", error.response.data);
      } else {
        errorMessage.value = "Network or unknown error.";
        console.log("General error:", error);
      }
    } finally {
      loading.value = false;
    }
  }
};
</script>
