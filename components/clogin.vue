<template>
  <nav>
    <ul>
      <li v-if="currentUser">{{ fullName }}</li>
      <li data-netlify-identity-button></li>
    </ul>
  </nav>
</template>
<script>
import { mapState } from 'vuex';

export default {
  mounted() {
    if ( process.client && window.netlifyIdentity ) {
      const ni = window.netlifyIdentity;
      ni.on( 'login', user => this.$store.dispatch( 'setUser', user));
      ni.on( 'logout', () => this.$store.dispatch( 'setUser', null));
    }
  },
  computed: mapState({
    currentUser: state => state.currentUser,
    fullName: state => state.currentUser ? state.currentUser.user_metadata.full_name : ''
  })
}
</script>