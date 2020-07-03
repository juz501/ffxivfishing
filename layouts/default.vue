<template>
  <div class="content wrapper">
    <cheader />
    <nuxt />
    <cfooter />
    <div id="netlify-modal"></div>
  </div>
</template>
<script>
import netlifyIdentity from 'netlify-identity-widget';

export default {
  name: 'defaultLayout',
  mounted() {
    netlifyIdentity.init({
      container: '#netlify-modal',
      locale: 'en'
    })
  }
}
</script>