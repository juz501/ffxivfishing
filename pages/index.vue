<template>
  <div class="content wrapper">
    <header>
      <span class="h1">FFXIV Fishing Tool</span>  
    </header>
    <main>

    </main>
    <footer>
      Current Eorzea Time: {{ et }}
    </footer>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'homepage',
  layout: 'default',
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
  }
}
</script>
