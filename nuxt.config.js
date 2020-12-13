export default {
  build: {
    vendor: ['eorzea-time', 'vuex'],
  },
  head: {
    script: [
      { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&display=swap'}
    ]
  },
  css: [
    '@/assets/scss/style.scss'
  ],
  plugins: [
    {
      src: '~/plugins/vue-toggle-button.js',
      ssr: false
    }
  ],  
  components: true,
  productionTip: false,
  devtools: true,
  target: 'static'
}