<template>
  <div>
    <header class="wrapper white-bg">
      <nuxt-link to="/">
        <h1 v-if="isHomepage">FFXIV Fishing Tool</h1>
        <span v-if="!isHomepage" class="h1">FFXIV Fishing Tool</span>
      </nuxt-link>
      <cclock />
    </header>
    <cnav login="login" />
  </div>
</template>
<script>
export default {
  props: [
    'login'
  ],
  data() {
    return {
      isHomepage: this.$route.path == "/"
    }
  }  
}
</script>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
}

header .timer {
  margin: auto 0;
}
</style>