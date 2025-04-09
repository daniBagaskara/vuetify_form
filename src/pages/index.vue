<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'customLight' : 'customDark'
}
</script>

<template>
  <v-app>
    <v-main>
      <v-container>
        <v-btn @click="toggleTheme" class="bg-info">Toggle Theme</v-btn>
        <v-card class="mt-4" title="This is themed" subtitle="Light / Dark support">
          <v-card-text>
            Sekarang tema bisa diubah secara dinamis.
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>
