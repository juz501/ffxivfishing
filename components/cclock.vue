<template>
  <no-ssr>
    <span class="timer">Eorzea Time: {{ et }}</span>
  </no-ssr>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'cclock',
  computed: {
    ...mapGetters({
      et: 'eorzeaTime/getTime'
    })
  },
  methods: {
    ...mapActions({
      updateTime: 'eorzeaTime/updateTime'
    })    
  },
  mounted() {
    const self = this;
    self.updateTime();
    
    self.intervalID1 = setInterval( function() {
      self.updateTime();
    }, 500 );
  },
  beforeDestroy() {
    if ( self.intervalID1 ) {
      clearInterval(self.intervalID1)
    }
  }
}
</script>