<template>
  <client-only>
    <div class="darkmode-toggle">
      <toggle-button @change="handleDarkMode" :labels="{checked: 'Dark Mode', unchecked: 'Light Mode'}" :css-colors="true" :width="90"/>
    </div>
  </client-only>
</template>
<script>
export default {
  name: 'cdarkmode',
  props: {
    handleDarkMode: Function,
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/base/shared/_variables.scss';
  .darkmode-toggle {
    display: flex;
    align-items: center;
    .vue-js-switch {
      ::v-deep {

        .v-switch-core {
          background-color: $nav-background-color;
        }
        
        .v-switch-label {
          color: $hover-color;
        }

      }

      &.toggled ::v-deep {

        .v-switch-core {
          background-color: $nav-dark-background-color;
        }

        .v-switch-label {
          color: $white;  
        }
        
      }

            
    }
  }

</style>