<template>
  <div class="content wrapper">
    <cheader />
    <nuxt />
    <cfooter />
    <div id="netlify-modal"></div>
  </div>
</template>
<script>
export default {
  name: 'defaultLayout',
  mounted() {
    window.netlifyIdentity = require( 'netlify-identity-widget' );
    netlifyIdentity.init({
      container: '#netlify-modal',
      locale: 'en'
    })
  }
}
</script>