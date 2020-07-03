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
          <li data-netlify-identity-button></li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    'login'
  ]
}
</script>
<style scoped>
  .menu-bar {
    display: flex;
    justify-content: space-between;
  }
</style>