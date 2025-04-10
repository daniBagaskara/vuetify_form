<route lang="yaml">
meta:
  layout: auth
  title: Register
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
          <v-toolbar title="Register" color="primary" />
          <v-card-text>
            <v-form>
              <v-text-field
                clearable
                variant="underlined"
                v-model="form.name"
                label="Name"
                required
                :error-messages="v$.name.$errors.map((e) => e.$message)"
                @blur="v$.name.$touch()"
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
                type="password"
                required
                :error-messages="v$.password.$errors.map((e) => e.$message)"
                @blur="v$.password.$touch()"
              ></v-text-field>
              <v-text-field
                clearable
                variant="underlined"
                v-model="form.confirmPassword"
                label="Confirm Password"
                type="password"
                required
                :error-messages="
                  v$.confirmPassword.$errors.map((e) => e.$message)
                "
                @blur="v$.confirmPassword.$touch()"
              ></v-text-field>
              <v-btn @click="register" block color="primary">Register</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
        <div class="d-flex align-center justify-space-between mt-2">
          <p class="mb-0">Already have an account?</p>
          <v-btn variant="text" color="primary" to="/login">Login</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import useVuelidate from "@vuelidate/core";
import { required, minLength, sameAs, email } from "@vuelidate/validators";

const form = reactive({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const rules = {
  name: { required },
  email: { required, email },
  password: { required, minLength: minLength(6) },
  confirmPassword: {
    required,
    sameAsPassword: sameAs(() => form.password),
  },
};

const v$ = useVuelidate(rules, form);

const register = () => {
  v$.value.$touch();
  if (!v$.value.$invalid) {
    // Form is valid, proceed with registration
    console.log("Form submitted:", form);
    // Make API call to register user
  }
};
</script>
