<template>
  <nav class="wrapper no-padding white-bg">
    <nuxt-link to="/fish-leves">Fishing Leves</nuxt-link>
    <nuxt-link to="/fish-timers">Fishing Timers</nuxt-link>
    <nuxt-link to="/fish-db">Fish Database</nuxt-link>
  </nav>
</template>
<style scoped>
  nav {
    display: flex;
    justify-items: center;
  }

  nav > a {
    background-color: #cce;
    padding: 1rem 0.5rem;
    margin-right: 0.1rem;    
  }
</style>