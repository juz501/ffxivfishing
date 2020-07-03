<template>
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
        <li v-if="loggedIn !== true"><a @click="login" href='#'>Login</a></li>
        <li v-if="loggedIn === true"><span>Logged In as {{ nickname }}</span>
        <li v-if="loggedIn === true"><a @click="logout" href='#'>Logout</a></li>
      </ul>
    </nav>
    <div id="netlify-modal"></div>
  </div>
</template>
<script>
export default {
  data: {
    loggedIn: false,
    nickname: ''
  },
  mounted() {
    window.netlifyIdentity = require( 'netlify-identity-widget' );
    netlifyIdentity.init({
      container: '#netlify-modal',
      locale: 'en'
    });
    window.netlifyIdentity.on('login', this.onLogin());
  },
  methods: {
    login() {
      if ( process.client && window && window.netlifyIdentity ) {
        window.netlifyIdentity.open();
      }
    },
    logout() {
      if ( process.client && window && window.netlifyIdentity ) {
        window.netlifyIdentity.logout();
      }
    },
    onLogin() {
      if ( process.client && window && window.netlifyIdentity ) {
        const user = window.netlifyIdentity.currentUser();
        if ( user ) {
          this.loggedIn = true;
          this.nickname = user.user_metadata.full_name;
        } else {
          this.loggedIn = false;
          this.nickname = '';
        }
      }
    }
  }
}
</script>
<style scoped>
  .menu-bar {
    display: flex;
    justify-content: space-between;
  }
</style>