/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { md3 } from "vuetify/blueprints";


// Composables
import { createVuetify } from 'vuetify'

// custom theme


// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  blueprint: md3,
  theme: {
    defaultTheme: "customLight",
    themes: {
      customLight: {
        dark: false,
        colors: {
          background: "#e2e8f1",
          surface: "#ffffff", // Untuk card, dialog, dsb.
          primary: "#3b82f6", // Biru modern (Tailwind style)
          onPrimary: "#ffffff", // Teks di atas warna primary
          secondary: "#64748b", // Abu-abu kebiruan
          onSecondary: "#ffffff",
          accent: "#3b82f6", // Biru modern (Tailwind style)
          onAccent: "#ffffff",
          error: "#ef4444", // Merah soft
          success: "#22c55e", // Hijau stabil
          warning: "#f59e0b", // Kuning orange
          info: "#0ea5e9", // Biru info
          onBackground: "#1e293b", // Teks utama
          onSurface: "#334155", // Teks pada card/dialog
        },
      },
      customDark: {
        dark: true,
        colors: {
          background: "#0f172a", // Biru gelap navy (Tailwind-style)
          surface: "#1e293b", // Untuk card dan elemen UI
          primary: "#3b82f6",
          onPrimary: "#ffffff",
          secondary: "#64748b",
          onSecondary: "#ffffff",
          error: "#ef4444",
          success: "#22c55e",
          warning: "#facc15",
          info: "#38bdf8",
          onBackground: "#f1f5f9",
          onSurface: "#e2e8f0",
        },
      },
    },
  },
});
