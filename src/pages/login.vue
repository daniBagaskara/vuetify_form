<route lang="yaml">
meta:
  layout: auth
  title: Login
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
        <v-card>
          <v-toolbar title="Login" color="secondary" />
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
              <v-btn @click="login" block color="secondary">Register</v-btn>
            </v-form>
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
</template>

<script setup>
import useVuelidate from "@vuelidate/core";
import { required, minLength, email } from "@vuelidate/validators";

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
  try {
    const response = await axios.post("/auth/login", { email, password });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
</script>
