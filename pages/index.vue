<template>
  <div class="content wrapper">
    <header>
      <span class="h1">FFXIV Fishing Tool</span>
      <span class="timer">Eorzea Time: {{ et }}</span> 
    </header>
    <main>
        <img id="orca" :src="orcaImage" alt="Skadi with Orca"
          :srcset="orcaSourceSet"
          sizes="(max-width: 1021px) 769w, (max-width: 1919px) 1024w, (max-width: 3839px) 1920w, 3840w" width="100%"
        />
    </main>    
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

const baseOrcaFileName = 'orca';

export default {
  name: 'homepage',
  layout: 'default',
  computed: {
    ...mapGetters({
      et: 'eorzeaTime/getTime'
    }),
    orcaSourceSet() {
      return `${require(`~/assets/images/${baseOrcaFileName}_768.jpg`)} 768w,` +
      ` ${require(`~/assets/images/${baseOrcaFileName}_1024.jpg`)} 1024w,` +
      ` ${require(`~/assets/images/${baseOrcaFileName}_1920.jpg`)} 1920w,` + 
      ` ${require(`~/assets/images/${baseOrcaFileName}_3840.jpg`)} 3840w,` ;
    },
    orcaImage() {
      return `~/assets/images/${baseOrcaFileName}_3840.jpg`;
    }
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
