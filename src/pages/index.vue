<route lang="yaml">
meta:
  title: Home
</route>
<template>
  <v-app>
    <!-- Hero Section -->
    <v-main class="hero">
      <v-container class="fill-height">
        <v-row align="center" justify="center">
          <v-col cols="12" md="6" class="pa-4">
            <!-- Heading dengan gradient dari Vuetify -->
            <div class="mb-4">
              <h1 class="text-h4 text-md-h3 font-weight-bold">
                <span class="text-primary">Effortless Forms,</span>
                <span class="text-secondary"> Powerful Results</span>
              </h1>
            </div>

            <p class="text-subtitle-1 text-grey text-darken-2 mb-6">
              Build beautiful, responsive forms in minutes. MyForm makes data
              collection simple and insightful.
            </p>

            <!-- Button dengan icon -->
            <div class="d-flex justify-start">
              <v-btn
                x-large
                color="primary"
                class="mr-4 text-capitalize"
                elevation="2"
                :to="{ path: '/register' }"
              >
                <v-icon left>mdi-rocket-launch</v-icon>
                Get Started
              </v-btn>
              <v-btn
                x-large
                variant="outlined"
                color="primary"
                class="text-capitalize"
              >
                <v-icon left>mdi-information-outline</v-icon>
                Learn More
              </v-btn>
            </div>

            <!-- Stats dengan cards -->
            <v-row class="mt-6">
              <v-col cols="4">
                <v-card flat class="text-center py-2" color="primary lighten-5">
                  <div class="text-h5 font-weight-bold primary--text">10k+</div>
                  <div class="caption grey--text">Users</div>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card
                  flat
                  class="text-center py-2"
                  color="secondary lighten-5"
                >
                  <div class="text-h5 font-weight-bold secondary--text">
                    98%
                  </div>
                  <div class="caption grey--text">Satisfaction</div>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card flat class="text-center py-2 text-accent">
                  <div class="text-h5 font-weight-bold accent--text">24/7</div>
                  <div class="caption grey--text">Support</div>
                </v-card>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" md="6" class="pa-4">
            <!-- Form Card -->
            <v-card elevation="4" rounded="lg">
              <v-card-title class="headline">
                <v-icon color="primary" class="mr-2">mdi-form-select</v-icon>
                Simple Contact Form
              </v-card-title>

              <v-card-text>
                <v-text-field
                  label="Your Name"
                  outlined
                  dense
                  class="mb-2"
                  prepend-inner-icon="mdi-account-outline"
                ></v-text-field>
                <v-text-field
                  label="Your Email"
                  outlined
                  dense
                  class="mb-2"
                  prepend-inner-icon="mdi-email-outline"
                ></v-text-field>
                <v-textarea
                  label="Message"
                  outlined
                  dense
                  rows="3"
                  prepend-inner-icon="mdi-message-text-outline"
                ></v-textarea>
              </v-card-text>

              <v-card-actions class="pa-4">
                <v-btn color="primary" elevation="1">
                  <v-icon left>mdi-send</v-icon>
                  Submit
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn icon color="primary lighten-3">
                  <v-icon>mdi-check-circle</v-icon>
                </v-btn>
                <v-btn icon color="primary lighten-3">
                  <v-icon>mdi-shield-check</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <!-- Bottom decorative element -->
        <v-row>
          <v-col cols="12">
            <div class="text-center">
              <v-chip
                small
                outlined
                color="primary"
                class="mx-1"
                v-for="n in 5"
                :key="n"
              >
                <v-icon x-small left v-if="n === 1">mdi-star</v-icon>
                <v-icon x-small left v-else-if="n === 3">mdi-heart</v-icon>
                <v-icon x-small left v-else-if="n === 5">mdi-thumb-up</v-icon>
              </v-chip>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false, // Controls the mobile navigation drawer
    };
  },
};
</script>
