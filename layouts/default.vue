<template>
  <div class="content wrapper">
    <cheader />
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