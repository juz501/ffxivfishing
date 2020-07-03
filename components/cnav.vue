<template>
  <div class="wrapper no-padding white-bg menu-bar">
    <nav>
      <ul>
        <li><nuxt-link to="/fish-leves">Fishing Leves</nuxt-link></li>
        <li><nuxt-link to="/fish-timers">Fishing Timers</nuxt-link></li>
        <li><nuxt-link to="/fish-db">Fish Database</nuxt-link></li>
      </ul>
    </nav>
    <nav data-netlify-identity-menu></nav>
    <button @click="user"></button>
    {{ user }}
  </div>
</template>
<script>
export default {
  data: {
    user: ''
  },
  computed: {
    user() {
      let username = '';
      if (typeof (window) !== "undefined" && window.netlifyIdentity ) {
        const loginUser = window.netlifyIdentity.currentUser();
        this.user = loginUser.toString();
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