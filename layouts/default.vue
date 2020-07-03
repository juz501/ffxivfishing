<template>
  <div class="content wrapper">
    <cheader login="login"/>
    <nuxt />
    <cfooter />
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  name: 'defaultLayout'
}
</script>