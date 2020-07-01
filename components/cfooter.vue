<template>
  <footer class="wrapper white-bg">
    <span>&copy; Ice Phoenix 2020 - <a href="https://discord.gg/UCjXqNr" target="_blank" rel="noopener">Penguin Logistics</a></span>
    <span><nuxt-link to="/credits">credits</nuxt-link></span>
  </footer>
</template>
<script>
export default {
  name: 'cfooter'
}
</script>
<style scoped>
footer {
  display: flex;
  justify-content: space-between;  
}
</style>