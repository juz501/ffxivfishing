<template>
  <main>
    <h1 class="h2">Ocean Fishing</h1>
    <div class="filters">
      <div class="filter">
        <button @click="toggleGladionBayDay" :class="{ 'filter-on': gladionBayDay }">Gladion Bay (Day)</button>
        <button @click="toggleGladionBayEvening" :class="{ 'filter-on': gladionBayEvening }">Gladion Bay (Evening)</button>
        <button @click="toggleGladionBayNight" :class="{ 'filter-on': gladionBayNight }">Gladion Bay (Night)</button>
      </div>
      <div class="filter">
        <button @click="toggleRhotanoSeaDay" :class="{ 'filter-on': rhotanoSeaDay }">Rhotano Sea (Day)</button>
        <button @click="toggleRhotanoSeaEvening" :class="{ 'filter-on': rhotanoSeaEvening }">Rhotano Sea (Evening)</button>
        <button @click="toggleRhotanoSeaNight" :class="{ 'filter-on': rhotanoSeaNight }">Rhotano Sea (Night)</button>
      </div>
      <div class="filter">
        <button @click="toggleNorthernDay" :class="{ 'filter-on': northernDay }">Northern Strait of Merlthor (Day)</button>
        <button @click="toggleNorthernEvening" :class="{ 'filter-on': northernEvening }">Northern Strait of Merlthor (Evening)</button>
        <button @click="toggleNorthernNight" :class="{ 'filter-on': northernNight }">Northern Strait of Merlthor (Night)</button>
      </div>
      <div class="filter">
        <button @click="toggleSouthernDay" :class="{ 'filter-on': southernDay }">Southern Strait of Merlthor (Day)</button>
        <button @click="toggleSouthernEvening" :class="{ 'filter-on': southernEvening }">Southern Strait of Merlthor (Evening)</button>
        <button @click="toggleSouthernNight" :class="{ 'filter-on': southernNight }">Southern Strait of Merlthor (Night)</button>
      </div>            
    </div>
    <div>
      <h3 class="h4">Point Strategy</h3>
      <div class="location-baits-wrapper">
        <table class="location-baits">
          <tr>
            <th>Location</th>
            <th>Phase</th>
            <th>Weather</th>
            <th>Time</th>
            <th>Bait</th>
            <th>Strategy</th>
          </tr>
          <tr v-if="gladionBayDay || gladionBayEvening || gladionBayNight">
            <td>Gladion Bay</td>
            <td>Before Spectral</td>
            <td>Normal</td>
            <td>Any</td>
            <td>Krill</td>
            <td>Surface Slap - Tarnished Shark !!! <br /> Reel only !!!</td>
          </tr>
          <tr v-if="gladionBayDay || gladionBayEvening || gladionBayNight">
            <td>Gladion Bay</td>
            <td>Before Spectral</td>
            <td>Showers</td>
            <td>Any</td>
            <td>Plump Worm</td>
            <td>Surface Slap - Goby or chovy <br /> Reel only !!!</td>
          </tr>
          <tr v-if="gladionBayDay">
            <td>Gladion Bay</td>
            <td>Spectral</td>
            <td>Normal</td>
            <td>Day</td>
            <td>Ragworm</td>
            <td>Doublehook ! when > 5 secs</td>
          </tr>
          <tr v-if="gladionBayEvening">
            <td>Gladion Bay</td>
            <td>Spectral</td>
            <td>Normal</td>
            <td>Evening</td>
            <td>Plump Worm</td>
            <td>Doublehook !!!</td>
          </tr>
          <tr v-if="gladionBayNight">
            <td>Gladion Bay</td>
            <td>Spectral</td>
            <td>Normal</td>
            <td>Night</td>
            <td>Krill + Krill x2 <br />= <strong>Glowworm</strong></td>
            <td>(Navigator's Print) + (Heavenskey) x2 <br />= <strong>Sothis</strong></td>
          </tr>
          <tr v-if="gladionBayDay || gladionBayEvening || gladionBayNight">
            <td>Gladion Bay</td>
            <td>After Spectral</td>
            <td>Normal</td>
            <td>Any</td>
            <td>Krill  x3 <br />= <strong>Krill</strong></td>
            <td>(Gladion chovy) x3 <br />= <strong>Drunkfish</strong></td>
          </tr>
          <tr v-if="rhotanoSeaDay || rhotanoSeaEvening || rhotanoSeaNight">
            <td>Rhotano Sea</td>
            <td>Before Spectral</td>
            <td>Normal</td>
            <td>Any</td>
            <td>Plump Worm</td>
            <td>Surface Slap (Chrome Hammerhead !!!) <br /> Reel only !!!</td>
          </tr>
          <tr v-if="rhotanoSeaDay">
            <td>Rhotano Sea</td>
            <td>Spectral</td>
            <td>Normal</td>
            <td>Day</td>
            <td>Plump Worm</td>
            <td>Doublehook !!!</td>
          </tr>
          <tr v-if="rhotanoSeaEvening">
            <td>Rhotano Sea</td>
            <td>Spectral</td>
            <td>Normal</td>
            <td>Evening</td>
            <td>Ragworm + Rat Tail <br />= <strong>Rat Tail</strong></td>
            <td>(Silencer !) + (Deep Sea Eel !!) <br />= <strong>(Stonescale)</strong></td>
          </tr>
          <tr v-if="rhotanoSeaNight">
            <td>Rhotano Sea</td>
            <td>Spectral</td>
            <td>Normal</td>
            <td>Night</td>
            <td>Krill</td>
            <td>Doublehook ! when > 5secs</td>
          </tr>
          <tr v-if="rhotanoSeaDay || rhotanoSeaEvening || rhotanoSeaNight">
            <td>Rhotano Sea</td>
            <td>After Spectral</td>
            <td>Normal</td>
            <td>Any</td>
            <td>Plump Worm x2 <br />= <strong>Krill</strong></td>
            <td>(Crimson Monkfish) x2 <br />= <strong>(Sabaton !!!)</strong></td>
          </tr>
          <tr v-if="northernDay || northernEvening || northernNight">
            <td>Northern Strait of Merlthor</td>
            <td>Before Spectral</td>
            <td>Normal</td>
            <td>Any</td>
            <td>Krill</td>
            <td>Surface Slap (Oschon's stone !!)<br /> Reel only !!!</td>
          </tr>
          <tr v-if="northernDay || northernEvening || northernNight">
            <td>Northern Strait of Merlthor</td>
            <td>Before Spectral</td>
            <td>Snow/Blizzard</td>
            <td>Any</td>
            <td>Ragworm</td>
            <td>Surface Slap (Megasquid !!)<br /> Reel only !!!</td>
          </tr>
          <tr v-if="northernDay">
            <td>Northern Strait of Merlthor</td>
            <td>Spectral</td>
            <td>Normal</td>
            <td>Day</td>
            <td>Plump Worm x 3 <br />= <strong>Heavey Steel Jig</strong></td>
            <td>(Gugrusaurus !!!) x 3 <br />= <strong>(Elasmosaurus)</strong></td>
          </tr>
          <tr v-if="northernEvening">
            <td>Northern Strait of Merlthor</td>
            <td>Spectral</td>
            <td>Normal</td>
            <td>Evening</td>
            <td>Ragworm</td>
            <td>Doublehook ! when > 5secs</td>
          </tr>
          <tr v-if="northernNight">
            <td>Northern Strait of Merlthor</td>
            <td>Spectral</td>
            <td>Normal</td>
            <td>Night</td>
            <td>Krill</td>
            <td>Doublehook !! when > 5secs</td>
          </tr>
          <tr v-if="northernDay || northernEvening || northernNight">
            <td>Northern Strait of Merlthor</td>
            <td>After Spectral</td>
            <td>Normal</td>
            <td>Any</td>
            <td>Ragworm + Mooch <br />= <strong>Ragworm</strong></td>
            <td>(Tossed dagger !) + (Elder Dinicthys !!) <br />= <strong>(Shooting Star !!!)</strong></td>
          </tr>
          <tr v-if="southernDay || southernEvening || southernNight">
            <td>Southern Strait of Merlthor</td>
            <td>Before Spectral</td>
            <td>Normal</td>
            <td>Any</td>
            <td>Krill</td>
            <td>Surface Slap (Momora Mora !!!)<br />Reel only !!!</td>
          </tr>
          <tr v-if="southernDay">
            <td>Southern Strait of Merlthor</td>
            <td>Spectral</td>
            <td>Normal</td>
            <td>Day</td>
            <td>Krill</td>
            <td>Doublehook on !! (@ 5 secs)</td>
          </tr>
          <tr v-if="southernEvening">
            <td>Southern Strait of Merlthor</td>
            <td>Spectral</td>
            <td>Normal</td>
            <td>Evening</td>
            <td>Ragworm + Mooch</td>
            <td>(Hi-Aetherlouse !) + (Doublehook on !!!) <br /> or (Doublehook on ! when > 5 secs)</td>
          </tr>
          <tr v-if="southernNight">
            <td>Southern Strait of Merlthor</td>
            <td>Spectral</td>
            <td>Normal</td>
            <td>Night</td>
            <td>( Ragworm + Mooch ) x2 <br />= <strong>Shrimp Cage Feeder</strong></td>
            <td>(Hi-Aetherlouse ! + Great Grandmarlyn !!) x2 <br />= <strong>(Coral Manta)</strong></td>
          </tr>
          <tr v-if="southernDay || southernEvening || southernNight">
            <td>Southern Strait of Merlthor</td>
            <td>After Spectral</td>
            <td>Normal</td>
            <td>Any</td>
            <td>Krill + Mooch <br />= <strong>Plump Worm</strong></td>
            <td> (Barracuda !!) + (Gladdius !!) <br />= <strong>(Leviathan !!!)</strong></td>
          </tr>
        </table>
      </div>
    </div>    
  </main>
</template>
<script>
export default {
  data() {
    return {
      gladionBayDay: false,
      gladionBayEvening: false,
      gladionBayNight: false,
      rhotanoSeaDay: false,
      rhotanoSeaEvening: false,
      rhotanoSeaNight: false,
      northernDay: false,
      northernEvening: false,
      northernNight: false,
      southernDay: false,
      southernEvening: false,
      southernNight: false
    }
  },
  methods: {
    toggleGladionBayDay() {
      this.gladionBayDay = !this.gladionBayDay;
    },
    toggleGladionBayEvening() {
      this.gladionBayEvening = !this.gladionBayEvening;
    },
    toggleGladionBayNight() {
      this.gladionBayNight = !this.gladionBayNight;
    },
    toggleRhotanoSeaDay() {
      this.rhotanoSeaDay = !this.rhotanoSeaDay;
    },
    toggleRhotanoSeaEvening() {
      this.rhotanoSeaEvening = !this.rhotanoSeaEvening;
    },
    toggleRhotanoSeaNight() {
      this.rhotanoSeaNight = !this.rhotanoSeaNight;
    },
    toggleNorthernDay() {
      this.northernDay = !this.northernDay;
    },
    toggleNorthernEvening() {
      this.northernEvening = !this.northernEvening;
    },
    toggleNorthernNight() {
      this.northernNight = !this.northernNight;
    },
    toggleSouthernDay() {
      this.southernDay = !this.southernDay;
    },
    toggleSouthernEvening() {
      this.southernEvening = !this.southernEvening;
    },
    toggleSouthernNight() {
      this.southernNight = !this.southernNight;
    }
  }  
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/base/shared/_variables.scss';
.location-baits-wrapper {
  display: flex;
  justify-content: center;

  .location-baits {
    th {
      font-weight: 700;
      font-family: $heading-font-family;
      font-size: rem-calc(20);
      padding: 5px;
      border-bottom: 1px solid $nav-background-color;
      &.vertical {
        vertical-align: middle;
      }
    }

    td {
      padding: 10px 5px;
      text-align: center;
      
      &.vertical {
        vertical-align: middle;
      }
    }
  }
}
</style>