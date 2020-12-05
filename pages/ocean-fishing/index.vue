<template>
  <main>
    <h1 class="h2">Ocean Fishing</h1>
    <div class="filters">
      <div class="locationFilter filter">
        Location:
        <button @click="toggleGladionBay" :class="{ 'filter-on': gladionBay }">Gladion Bay</button>
        <button @click="toggleRhotanoSea" :class="{ 'filter-on': rhotanoSea }">Rhotano Sea</button>
        <button @click="toggleNorthern" :class="{ 'filter-on': northern }">Northern Strait of Merlthor</button>
        <button @click="toggleSouthern" :class="{ 'filter-on': southern }">Southern Strait of Merlthor</button>
      </div>
      <div class="timeOfDayFilter filter" v-if="gladionBay || rhotanoSea || northern || southern">
        Spectral Time of Day:
        <button @click="toggleDay" :class="{ 'filter-on': day }">Day</button>
        <button @click="toggleEvening" :class="{ 'filter-on': evening }">Evening</button>
        <button @click="toggleNight" :class="{ 'filter-on': night }">Night</button>        
      </div>      
    </div>
    <div>
      <h3 class="h4">Point Strategy</h3>
      <div class="location-baits-wrapper">
        <table class="location-baits">
          <tr>
            <th>Location</th>
            <th>Phase</th>
            <th>Weather/Time of Day</th>
            <th>Bait</th>
            <th>Strategy</th>
          </tr>
          <tr v-if="gladionBay">
            <td>Gladion Bay</td>
            <td>Before Spectral</td>
            <td>Normal</td>
            <td>Krill</td>
            <td>Surface Slap - Tarnished Shark !!! <br /> Reel only !!!</td>
          </tr>
          <tr v-if="gladionBay">
            <td>Gladion Bay</td>
            <td>Before Spectral</td>
            <td>Showers</td>
            <td>Plump Worm</td>
            <td>Surface Slap - Goby or chovy <br /> Reel only !!!</td>
          </tr>
          <tr v-if="gladionBay && day">
            <td>Gladion Bay</td>
            <td>Spectral</td>
            <td>Day</td>
            <td>Ragworm</td>
            <td>Doublehook ! when > 5 secs</td>
          </tr>
          <tr v-if="gladionBay && evening">
            <td>Gladion Bay</td>
            <td>Spectral</td>
            <td>Evening</td>
            <td>Plump Worm</td>
            <td>Doublehook !!!</td>
          </tr>
          <tr v-if="gladionBay && night">
            <td>Gladion Bay</td>
            <td>Spectral</td>
            <td>Night</td>
            <td>Krill + Krill x2 <br />= <strong>Glowworm</strong></td>
            <td>(Navigator's Print) + (Heavenskey) x2 <br />= <strong>Sothis</strong></td>
          </tr>
          <tr v-if="gladionBay">
            <td>Gladion Bay</td>
            <td>After Spectral</td>
            <td>Any</td>
            <td>Krill  x3 <br />= <strong>Krill</strong></td>
            <td>(Gladion chovy) x3 <br />= <strong>Drunkfish</strong></td>
          </tr>
          <tr v-if="rhotanoSea">
            <td>Rhotano Sea</td>
            <td>Before Spectral</td>
            <td>Any</td>
            <td>Plump Worm</td>
            <td>Surface Slap (Chrome Hammerhead !!!) <br /> Reel only !!!</td>
          </tr>
          <tr v-if="rhotanoSea && day">
            <td>Rhotano Sea</td>
            <td>Spectral</td>
            <td>Day</td>
            <td>Plump Worm</td>
            <td>Doublehook !!!</td>
          </tr>
          <tr v-if="rhotanoSea && evening">
            <td>Rhotano Sea</td>
            <td>Spectral</td>
            <td>Evening</td>
            <td>Ragworm + Rat Tail <br />= <strong>Rat Tail</strong></td>
            <td>(Silencer !) + (Deep Sea Eel !!) <br />= <strong>(Stonescale)</strong></td>
          </tr>
          <tr v-if="rhotanoSea && night">
            <td>Rhotano Sea</td>
            <td>Spectral</td>
            <td>Night</td>
            <td>Krill</td>
            <td>Doublehook ! when > 5secs</td>
          </tr>
          <tr v-if="rhotanoSea">
            <td>Rhotano Sea</td>
            <td>After Spectral</td>
            <td>Any</td>
            <td>Plump Worm x2 <br />= <strong>Krill</strong></td>
            <td>(Crimson Monkfish) x2 <br />= <strong>(Sabaton !!!)</strong></td>
          </tr>
          <tr v-if="northern">
            <td>Northern Strait of Merlthor</td>
            <td>Before Spectral</td>
            <td>Normal</td>
            <td>Krill</td>
            <td>Surface Slap (Oschon's stone !!)<br /> Reel only !!!</td>
          </tr>
          <tr v-if="northern">
            <td>Northern Strait of Merlthor</td>
            <td>Before Spectral</td>
            <td>Snow/Blizzard</td>
            <td>Ragworm</td>
            <td>Surface Slap (Megasquid !!)<br /> Reel only !!!</td>
          </tr>
          <tr v-if="northern && day">
            <td>Northern Strait of Merlthor</td>
            <td>Spectral</td>
            <td>Day</td>
            <td>Plump Worm x 3 <br />= <strong>Heavey Steel Jig</strong></td>
            <td>(Gugrusaurus !!!) x 3 <br />= <strong>(Elasmosaurus)</strong></td>
          </tr>
          <tr v-if="northern && evening">
            <td>Northern Strait of Merlthor</td>
            <td>Spectral</td>
            <td>Evening</td>
            <td>Ragworm</td>
            <td>Doublehook ! when > 5secs</td>
          </tr>
          <tr v-if="northern && night">
            <td>Northern Strait of Merlthor</td>
            <td>Spectral</td>
            <td>Night</td>
            <td>Krill</td>
            <td>Doublehook !! when > 5secs</td>
          </tr>
          <tr v-if="northern">
            <td>Northern Strait of Merlthor</td>
            <td>After Spectral</td>
            <td>Any</td>
            <td>Ragworm + Mooch <br />= <strong>Ragworm</strong></td>
            <td>(Tossed dagger !) + (Elder Dinicthys !!) <br />= <strong>(Shooting Star !!!)</strong></td>
          </tr>
          <tr v-if="southern">
            <td>Southern Strait of Merlthor</td>
            <td>Before Spectral</td>
            <td>Any</td>
            <td>Krill</td>
            <td>Surface Slap (Momora Mora !!!)<br />Reel only !!!</td>
          </tr>
          <tr v-if="southern && day">
            <td>Southern Strait of Merlthor</td>
            <td>Spectral</td>
            <td>Day</td>
            <td>Krill</td><td>Doublehook on !! (@ 5 secs)</td>
          </tr>
          <tr v-if="southern && evening">
            <td>Southern Strait of Merlthor</td>
            <td>Spectral</td>
            <td>Evening</td>
            <td>Ragworm + Mooch</td>
            <td>(Hi-Aetherlouse !) + (Doublehook on !!!) <br /> or (Doublehook on ! when > 5 secs)</td>
          </tr>
          <tr v-if="southern && night">
            <td>Southern Strait of Merlthor</td>
            <td>Spectral</td>
            <td>Night</td>
            <td>( Ragworm + Mooch ) x2 <br />= <strong>Shrimp Cage Feeder</strong></td>
            <td>(Hi-Aetherlouse ! + Great Grandmarlyn !!) x2 <br />= <strong>(Coral Manta)</strong></td>
          </tr>
          <tr v-if="southern">
            <td>Southern Strait of Merlthor</td>
            <td>After Spectral</td>
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
      gladionBay: false,
      rhotanoSea: false,
      northern: false,
      southern: false,
      day: true,
      evening: false,
      night: false
    }
  },
  methods: {
    toggleDay() {
      this.day = !this.day;    
    },
    toggleEvening() {
      this.evening = !this.evening;
    },
    toggleNight() {
      this.night = !this.night;
    },
    toggleGladionBay() {
      this.gladionBay = !this.gladionBay;
    },
    toggleRhotanoSea() {
      this.rhotanoSea = !this.rhotanoSea;
    },
    toggleNorthern() {
      this.northern = !this.northern;
    },
    toggleSouthern() {
      this.southern = !this.southern;
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