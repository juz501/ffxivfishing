<template>
  <div class="content wrapper">
    <header>
      <h1>FFXIV Fishing Tool</h1>
      <span class="timer">Eorzea Time: {{ et }}</span> 
    </header>
    <nuxt />
    <footer>&copy; Ice Phoenix 2020 - <a href="https://discord.gg/UCjXqNr" target="_blank">Penguin Logistics</a></footer>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

const baseOrcaFileName = 'orca';

export default {
  name: 'defaultLayout',
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