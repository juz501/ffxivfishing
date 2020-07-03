<template>
  <div>
    <div class="wrapper no-padding white-bg menu-bar">
      <nav>
        <ul>
          <li><nuxt-link to="/fish-leves">Fishing Leves</nuxt-link></li>
          <li><nuxt-link to="/fish-timers">Fishing Timers</nuxt-link></li>
          <li><nuxt-link to="/fish-db">Fish Database</nuxt-link></li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li v-if="!isLoggedIn"><a @click="login" href='#'>Login</a></li>
          <li v-if="isLoggedIn"><span>Logged In as {{ isLoggedIn.user_metadata.full_name }}</span>
          <li v-if="isLoggedIn"><a @click="logout" href='#'>Logout</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  methods: {
    ...mapActions({
      setUser: 'user/setUser'
    }),
    mounted() {
      window.netlifyIdentity = require( 'netlify-identity-widget' );
      netlifyIdentity.init();
    },
    login() {
      if ( process.client && window && window.netlifyIdentity ) {
        netlifyIdentity.open( 'login' );
        netlifyIdentity.on( 'login',
          ( user ) => {
            this.setUser( user );
            netlifyIdentity.close();
          }
        );
      }
    },
    logout() {
      if ( process.client && window && window.netlifyIdentity ) {
        this.setUser( null );
        window.netlifyIdentity.logout();
        this.$router.push('/');
      }
    }
  },
  computed: mapState({
    isLoggedIn: state => state.user.currentUser
  })
}
</script>
<style scoped>
  .menu-bar {
    display: flex;
    justify-content: space-between;
  }
</style>