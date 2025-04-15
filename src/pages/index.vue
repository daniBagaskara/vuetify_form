<template>
  <!-- Hero section yang ditingkatkan -->
  <v-main class="hero-bg">
    <v-container class="fill-height">
      <v-row class="fill-height align-center">
        <v-col cols="12" md="6" class="hero-content">
          <!-- Hero content left -->
          <div class="accent-text font-weight-medium mb-2">
            SIMPLIFY FORM CREATION
          </div>
          <h1 class="hero-title font-weight-bold mb-4">
            Build Beautiful Forms in
            <span class="highlighted-text">Minutes</span>
          </h1>
          <p class="text-body-1 text-medium-emphasis mb-8">
            Collect information, gather feedback, and manage registrations with
            our intuitive form builder.
            <span class="text-primary">10x faster</span> than traditional tools.
          </p>

          <div class="d-flex flex-wrap gap-3">
            <v-btn
              color="primary"
              size="large"
              rounded="pill"
              elevation="1"
              class="text-none font-weight-bold"
              :to="{ path: '/register' }"
            >
              Start Building <v-icon class="ml-2">mdi-arrow-right</v-icon>
            </v-btn>

            <v-btn
              variant="outlined"
              color="primary"
              size="large"
              rounded="pill"
              class="text-none font-weight-bold"
            >
              <v-icon class="mr-2">mdi-play</v-icon> Watch Demo
            </v-btn>
          </div>
        </v-col>

        <v-col
          cols="12"
          md="6"
          class="d-none d-md-flex align-center justify-center position-relative"
        >
          <!-- Hero image right -->
          <div class="hero-image-container">
            <div class="hero-image-bg"></div>
            <div class="form-preview elevation-10">
              <div class="form-preview-header">
                <div class="form-preview-title">Event Registration</div>
              </div>
              <div class="form-preview-body">
                <div class="form-field mb-4">
                  <div class="form-label">Full Name</div>
                  <div class="form-input"></div>
                </div>
                <div class="form-field mb-4">
                  <div class="form-label">Email Address</div>
                  <div class="form-input"></div>
                </div>
                <div class="form-field">
                  <div class="form-label">Ticket Type</div>
                  <div class="form-radio-group">
                    <div class="form-radio"></div>
                    <div class="form-radio-label">Standard</div>
                  </div>
                  <div class="form-radio-group">
                    <div class="form-radio"></div>
                    <div class="form-radio-label">Premium</div>
                  </div>
                  <div class="form-radio-group">
                    <div class="form-radio"></div>
                    <div class="form-radio-label">VIP</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
import { ref } from "vue";

// Mobile navigation state
const drawer = ref(false);
</script>

<style scoped>
.hero-bg {
  background: linear-gradient(160deg, #f9fbff 0%, #f0f4ff 100%);
  position: relative;
  overflow: hidden;
}

.hero-bg::before {
  content: "";
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: linear-gradient(
    45deg,
    rgba(79, 70, 229, 0.03) 0%,
    rgba(79, 70, 229, 0.08) 100%
  );
  top: -200px;
  right: -100px;
}

.hero-bg::after {
  content: "";
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(
    45deg,
    rgba(79, 70, 229, 0.03) 0%,
    rgba(79, 70, 229, 0.08) 100%
  );
  bottom: -100px;
  left: 10%;
}

.fill-height {
  min-height: calc(100vh - 64px);
}

.hero-title {
  font-size: 3.5rem;
  line-height: 1.1;
  letter-spacing: -1px;
}

.highlighted-text {
  color: #4f46e5;
  position: relative;
}

.highlighted-text::after {
  content: "";
  position: absolute;
  bottom: 6px;
  left: 0;
  width: 100%;
  height: 8px;
  background-color: rgba(79, 70, 229, 0.2);
  z-index: -1;
}

.accent-text {
  color: #4f46e5;
  letter-spacing: 1.5px;
  font-size: 0.875rem;
}

.gap-3 {
  gap: 12px;
}

.gap-6 {
  gap: 24px;
}

.hero-image-container {
  position: relative;
  width: 100%;
  height: 460px;
}

.hero-image-bg {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(79, 70, 229, 0.7) 0%, #4f46e5 100%);
  bottom: 0;
  right: 0;
  z-index: 0;
}

.form-preview {
  position: absolute;
  width: 340px;
  height: 420px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.form-preview-header {
  background: #4f46e5;
  padding: 20px;
  color: white;
}

.form-preview-title {
  font-weight: bold;
  font-size: 1.25rem;
}

.form-preview-body {
  padding: 24px;
}

.form-field {
  margin-bottom: 16px;
}

.form-label {
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 6px;
  color: #374151;
}

.form-input {
  height: 40px;
  background: #f3f4f6;
  border-radius: 6px;
}

.form-radio-group {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.form-radio {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid #d1d5db;
  margin-right: 8px;
}

.form-radio-label {
  font-size: 0.875rem;
  color: #374151;
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-content {
    text-align: center;
    padding: 0 16px;
  }

  .d-flex.flex-wrap {
    justify-content: center;
  }

  .mt-12 {
    margin-top: 2rem !important;
    text-align: center;
  }

  .d-flex.flex-wrap.gap-6 {
    justify-content: center;
  }
}
</style>
