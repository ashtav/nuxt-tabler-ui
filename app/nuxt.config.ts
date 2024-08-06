export default defineNuxtConfig({
  modules: [
    '../src/module',
    '@pinia/nuxt'
  ],

  compatibilityDate: '2024-07-19',

  components: {
    global: true,
    dirs: [
      '~/components',
    ]
  },

  ui: {
    toast: true,
    confirm: true,
    // plugins: ['toast', 'confirm', 'cropper']
  }
})