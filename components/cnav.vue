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
    {{ nickname }}
  </div>
</template>
<script>
export default {
  data: {
    nickname: '',
    roles: []
  },
  mounted() {
    if (typeof (window) !== "undefined" && window.netlifyIdentity ) {
      window.netlifyIdentity.on('login', user => {
        this.nickname = user.user_metadata.full_name;
        this.roles = user.roles
      })
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