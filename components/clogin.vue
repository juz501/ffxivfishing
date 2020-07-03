<template>
  <nav>
    <ul>
      <li data-netlify-identity-button></li>
    </ul>
  </nav>
</template>
<script>
export default {
  mounted() {
    if ( process.client && window.netlifyIdentity ) {
      const ni = window.netlifyIdentity;
      ni.on( 'login', user => this.$store.dispatch( 'setUser', user));
      ni.on( 'logout', () => this.$store.dispatch( 'setUser', null));
    }
  }
}
</script>