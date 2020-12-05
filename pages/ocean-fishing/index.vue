<template>
  <main>
    <h1 class="h2">Ocean Fishing</h1>
    <div class="filters">
      <div class="filter mainFilter">
        <h2 class="h3">Type</h2>
        <button @click="gotoPerRoute" :class="{ 'filter-on': perRoute}">Per Route</button>
        <button @click="gotoPerLocationTime" :class="{ 'filter-on': perLocationTime}">Per Location</button>
      </div>
      <div class="filter routeFilter" v-if="perRoute">        
        <button @click="gotoRhotanaoSeaDayRoute" :class="{ 'filter-on': rhotanoSeaDayRoute}">Rhotano Sea (Day > Evening > Night)</button>
        <button @click="gotoRhotanoSeaEveningRoute" :class="{ 'filter-on': rhotanoSeaEveningRoute}">Rhotano Sea (Evening > Night > Day)</button>
        <button @click="gotoRhotanoSeaNightRoute" :class="{ 'filter-on': rhotanoSeaNightRoute}">Rhotano Sea (Night > Day > Evening)</button>
      </div>
      <div class="filter routeFilter" v-if="perRoute">
        <button @click="gotoNorthernDayRoute" :class="{ 'filter-on': northernDayRoute}">Northern Strait (Day > Evening > Night)</button>
        <button @click="gotoNorthernEveningRoute" :class="{ 'filter-on': northernEveningRoute}">Northern Strait (Evening > Night > Day)</button>
        <button @click="gotoNorthernNightRoute" :class="{ 'filter-on': northernNightRoute}">Northern Strait (Night > Day > Evening)</button>
      </div>
      <div class="filter locationFilter" v-if="perLocationTime">
        <button @click="toggleGladionBayDay" :class="{ 'filter-on': gladionBayDay }">Gladion Bay (Day)</button>
        <button @click="toggleGladionBayEvening" :class="{ 'filter-on': gladionBayEvening }">Gladion Bay (Evening)</button>
        <button @click="toggleGladionBayNight" :class="{ 'filter-on': gladionBayNight }">Gladion Bay (Night)</button>
      </div>
      <div class="filter locationFilter" v-if="perLocationTime">
        <button @click="toggleSouthernDay" :class="{ 'filter-on': southernDay }">Southern Strait of Merlthor (Day)</button>
        <button @click="toggleSouthernEvening" :class="{ 'filter-on': southernEvening }">Southern Strait of Merlthor (Evening)</button>
        <button @click="toggleSouthernNight" :class="{ 'filter-on': southernNight }">Southern Strait of Merlthor (Night)</button>
      </div>
      <div class="filter locationFilter" v-if="perLocationTime">
        <button @click="toggleRhotanoSeaDay" :class="{ 'filter-on': rhotanoSeaDay }">Rhotano Sea (Day)</button>
        <button @click="toggleRhotanoSeaEvening" :class="{ 'filter-on': rhotanoSeaEvening }">Rhotano Sea (Evening)</button>
        <button @click="toggleRhotanoSeaNight" :class="{ 'filter-on': rhotanoSeaNight }">Rhotano Sea (Night)</button>
      </div>
      <div class="filter locationFilter" v-if="perLocationTime">
        <button @click="toggleNorthernDay" :class="{ 'filter-on': northernDay }">Northern Strait of Merlthor (Day)</button>
        <button @click="toggleNorthernEvening" :class="{ 'filter-on': northernEvening }">Northern Strait of Merlthor (Evening)</button>
        <button @click="toggleNorthernNight" :class="{ 'filter-on': northernNight }">Northern Strait of Merlthor (Night)</button>
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
          <tr v-if="((northernDayRoute || northernEveningRoute || northernNightRoute ) && perRoute )">
            <td>Southern Strait of Merlthor</td>
            <td>Before Spectral</td>
            <td>Normal</td>
            <td>Any</td>
            <td>Krill</td>
            <td>Surface Slap (Momora Mora !!!)<br />Reel only !!!</td>
          </tr>
          <tr v-if="( northernDayRoute && perRoute )">
            <td>Southern Strait of Merlthor</td>
            <td>Spectral</td>
            <td>Normal</td>
            <td>Day</td>
            <td>Krill</td>
            <td>Doublehook on !! (@ 5 secs)</td>
          </tr>
          <tr v-if="( northernEveningRoute && perRoute )">
            <td>Southern Strait of Merlthor</td>
            <td>Spectral</td>
            <td>Normal</td>
            <td>Evening</td>
            <td>Ragworm + Mooch</td>
            <td>(Hi-Aetherlouse !) + (Doublehook on !!!) <br /> or (Doublehook on ! when > 5 secs)</td>
          </tr>
          <tr v-if="( northernNightRoute && perRoute )">
            <td>Southern Strait of Merlthor</td>
            <td>Spectral</td>
            <td>Normal</td>
            <td>Night</td>
            <td>( Ragworm + Mooch ) x2 <br />= <strong>Shrimp Cage Feeder</strong></td>
            <td>(Hi-Aetherlouse ! + Great Grandmarlyn !!) x2 <br />= <strong>(Coral Manta)</strong></td>
          </tr>
          <tr v-if="((northernDayRoute || northernEveningRoute || northernNightRoute ) && perRoute )">
            <td>Southern Strait of Merlthor</td>
            <td>After Spectral</td>
            <td>Normal</td>
            <td>Any</td>
            <td>Krill + Mooch <br />= <strong>Plump Worm</strong></td>
            <td> (Barracuda !!) + (Gladdius !!) <br />= <strong>(Leviathan !!!)</strong></td>
          </tr>
          <tr v-if="((gladionBayDay || gladionBayEvening || gladionBayNight) && perLocationTime ) ||
            ((rhotanoSeaDayRoute || rhotanoSeaEveningRoute || rhotanoSeaNightRoute ||
              northernDayRoute || northernEveningRoute || northernNightRoute) && perRoute)">
            <td>Gladion Bay</td>
            <td>Before Spectral</td>
            <td>Normal</td>
            <td>Any</td>
            <td>Krill</td>
            <td>Surface Slap - Tarnished Shark !!! <br /> Reel only !!!</td>
          </tr>
          <tr v-if="((gladionBayDay || gladionBayEvening || gladionBayNight) && perLocationTime ) ||
            ((rhotanoSeaDayRoute || rhotanoSeaEveningRoute || rhotanoSeaNightRoute ||
              northernDayRoute || northernEveningRoute || northernNightRoute) && perRoute)">
            <td>Gladion Bay</td>
            <td>Before Spectral</td>
            <td>Showers</td>
            <td>Any</td>
            <td>Plump Worm</td>
            <td>Surface Slap - Goby or chovy <br /> Reel only !!!</td>
          </tr>
          <tr v-if="( gladionBayDay && perLocationTime ) || ((rhotanoSeaDayRoute || northernNightRoute) && perRoute)">
            <td>Gladion Bay</td>
            <td>Spectral</td>
            <td>Normal</td>
            <td>Day</td>
            <td>Ragworm</td>
            <td>Doublehook ! when > 5 secs</td>
          </tr>
          <tr v-if="( gladionBayEvening && perLocationTime ) || ((rhotanoSeaEveningRoute || northernDayRoute) && perRoute)">
            <td>Gladion Bay</td>
            <td>Spectral</td>
            <td>Normal</td>
            <td>Evening</td>
            <td>Plump Worm</td>
            <td>Doublehook !!!</td>
          </tr>
          <tr v-if="( gladionBayNight && perLocationTime ) || ((rhotanoSeaNightRoute || northernEveningRoute) && perRoute)">
            <td>Gladion Bay</td>
            <td>Spectral</td>
            <td>Normal</td>
            <td>Night</td>
            <td>Krill + Krill x2 <br />= <strong>Glowworm</strong></td>
            <td>(Navigator's Print) + (Heavenskey) x2 <br />= <strong>Sothis</strong></td>
          </tr>
          <tr v-if="((gladionBayDay || gladionBayEvening || gladionBayNight) && perLocationTime ) ||
            ((rhotanoSeaDayRoute || rhotanoSeaEveningRoute || rhotanoSeaNightRoute ||
              northernDayRoute || northernEveningRoute || northernNightRoute) && perRoute)">
            <td>Gladion Bay</td>
            <td>After Spectral</td>
            <td>Normal</td>
            <td>Any</td>
            <td>Krill  x3 <br />= <strong>Krill</strong></td>
            <td>(Gladion chovy) x3 <br />= <strong>Drunkfish</strong></td>
          </tr>
          <tr v-if="((southernDay || southernEvening || southernNight) && perLocationTime ) || 
            ((rhotanoSeaDayRoute || rhotanoSeaEveningRoute || rhotanoSeaNightRoute ) && perRoute )">
            <td>Southern Strait of Merlthor</td>
            <td>Before Spectral</td>
            <td>Normal</td>
            <td>Any</td>
            <td>Krill</td>
            <td>Surface Slap (Momora Mora !!!)<br />Reel only !!!</td>
          </tr>
          <tr v-if="( southernDay && perLocationTime )|| ( rhotanoSeaNightRoute && perRoute )">
            <td>Southern Strait of Merlthor</td>
            <td>Spectral</td>
            <td>Normal</td>
            <td>Day</td>
            <td>Krill</td>
            <td>Doublehook on !! (@ 5 secs)</td>
          </tr>
          <tr v-if="( southernEvening && perLocationTime ) || ( rhotanoSeaDayRoute && perRoute )">
            <td>Southern Strait of Merlthor</td>
            <td>Spectral</td>
            <td>Normal</td>
            <td>Evening</td>
            <td>Ragworm + Mooch</td>
            <td>(Hi-Aetherlouse !) + (Doublehook on !!!) <br /> or (Doublehook on ! when > 5 secs)</td>
          </tr>
          <tr v-if="( southernNight && perLocationTime ) || ( rhotanoSeaEveningRoute && perRoute )">
            <td>Southern Strait of Merlthor</td>
            <td>Spectral</td>
            <td>Normal</td>
            <td>Night</td>
            <td>( Ragworm + Mooch ) x2 <br />= <strong>Shrimp Cage Feeder</strong></td>
            <td>(Hi-Aetherlouse ! + Great Grandmarlyn !!) x2 <br />= <strong>(Coral Manta)</strong></td>
          </tr>
          <tr v-if="((southernDay || southernEvening || southernNight) && perLocationTime ) || 
            ((rhotanoSeaDayRoute || rhotanoSeaEveningRoute || rhotanoSeaNightRoute ) && perRoute )">
            <td>Southern Strait of Merlthor</td>
            <td>After Spectral</td>
            <td>Normal</td>
            <td>Any</td>
            <td>Krill + Mooch <br />= <strong>Plump Worm</strong></td>
            <td> (Barracuda !!) + (Gladdius !!) <br />= <strong>(Leviathan !!!)</strong></td>
          </tr>
          <tr v-if="((rhotanoSeaDay || rhotanoSeaEvening || rhotanoSeaNight) && perLocationTime) ||
            ((rhotanoSeaDayRoute || rhotanoSeaEveningRoute || rhotanoSeaNightRoute) && perRoute)">
            <td>Rhotano Sea</td>
            <td>Before Spectral</td>
            <td>Normal</td>
            <td>Any</td>
            <td>Plump Worm</td>
            <td>Surface Slap (Chrome Hammerhead !!!) <br /> Reel only !!!</td>
          </tr>
          <tr v-if="(rhotanoSeaDay && perLocationTime) || (rhotanoSeaEveningRoute && perRoute)">
            <td>Rhotano Sea</td>
            <td>Spectral</td>
            <td>Normal</td>
            <td>Day</td>
            <td>Plump Worm</td>
            <td>Doublehook !!!</td>
          </tr>
          <tr v-if="(rhotanoSeaEvening && perLocationTime) || (rhotanoSeaNightRoute && perRoute)">
            <td>Rhotano Sea</td>
            <td>Spectral</td>
            <td>Normal</td>
            <td>Evening</td>
            <td>Ragworm + Rat Tail <br />= <strong>Rat Tail</strong></td>
            <td>(Silencer !) + (Deep Sea Eel !!) <br />= <strong>(Stonescale)</strong></td>
          </tr>
          <tr v-if="( rhotanoSeaNight && perLocationTime) || (rhotanoSeaDayRoute && perRoute)">
            <td>Rhotano Sea</td>
            <td>Spectral</td>
            <td>Normal</td>
            <td>Night</td>
            <td>Krill</td>
            <td>Doublehook ! when > 5secs</td>
          </tr>
          <tr v-if="((rhotanoSeaDay || rhotanoSeaEvening || rhotanoSeaNight) && perLocationTime) ||
            ((rhotanoSeaDayRoute || rhotanoSeaEveningRoute || rhotanoSeaNightRoute) && perRoute)">
            <td>Rhotano Sea</td>
            <td>After Spectral</td>
            <td>Normal</td>
            <td>Any</td>
            <td>Plump Worm x2 <br />= <strong>Krill</strong></td>
            <td>(Crimson Monkfish) x2 <br />= <strong>(Sabaton !!!)</strong></td>
          </tr>
          <tr v-if="(( northernDay || northernEvening || northernNight ) && perLocationTime ) ||
            ((northernDayRoute || northernEveningRoute || northernNightRoute) && perRoute)">
            <td>Northern Strait of Merlthor</td>
            <td>Before Spectral</td>
            <td>Normal</td>
            <td>Any</td>
            <td>Krill</td>
            <td>Surface Slap (Oschon's stone !!)<br /> Reel only !!!</td>
          </tr>
          <tr v-if="(( northernDay || northernEvening || northernNight ) && perLocationTime ) ||
            ((northernDayRoute || northernEveningRoute || northernNightRoute) && perRoute)">
            <td>Northern Strait of Merlthor</td>
            <td>Before Spectral</td>
            <td>Snow/Blizzard</td>
            <td>Any</td>
            <td>Ragworm</td>
            <td>Surface Slap (Megasquid !!)<br /> Reel only !!!</td>
          </tr>
          <tr v-if="( northernDay && perLocationTime ) || ( northernEveningRoute && perRoute )">
            <td>Northern Strait of Merlthor</td>
            <td>Spectral</td>
            <td>Normal</td>
            <td>Day</td>
            <td>Plump Worm x 3 <br />= <strong>Heavey Steel Jig</strong></td>
            <td>(Gugrusaurus !!!) x 3 <br />= <strong>(Elasmosaurus)</strong></td>
          </tr>
          <tr v-if="( northernEvening && perLocationTime ) || ( northernNightRoute && perRoute )">
            <td>Northern Strait of Merlthor</td>
            <td>Spectral</td>
            <td>Normal</td>
            <td>Evening</td>
            <td>Ragworm</td>
            <td>Doublehook ! when > 5secs</td>
          </tr>
          <tr v-if="( northernNight && perLocationTime ) || ( northernDayRoute && perRoute )">
            <td>Northern Strait of Merlthor</td>
            <td>Spectral</td>
            <td>Normal</td>
            <td>Night</td>
            <td>Krill</td>
            <td>Doublehook !! when > 5secs</td>
          </tr>
          <tr v-if="(( northernDay || northernEvening || northernNight ) && perLocationTime ) ||
            ((northernDayRoute || northernEveningRoute || northernNightRoute) && perRoute)">
            <td>Northern Strait of Merlthor</td>
            <td>After Spectral</td>
            <td>Normal</td>
            <td>Any</td>
            <td>Ragworm + Mooch <br />= <strong>Ragworm</strong></td>
            <td>(Tossed dagger !) + (Elder Dinicthys !!) <br />= <strong>(Shooting Star !!!)</strong></td>
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
      perRoute: true,
      perLocationTime: false,
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
      southernNight: false,
      rhotanoSeaDayRoute: false,
      rhotanoSeaEveningRoute: false,
      rhotanoSeaNightRoute: false,
      northernDayRoute: false,
      northernEveningRoute: false,
      northernNightRoute: false,
    }
  },
  methods: {   
    gotoPerRoute() {
      this.perRoute = true;
      this.perLocationTime = false;
    },
    gotoPerLocationTime() {
      this.perRoute = false;
      this.perLocationTime = true;
    },
    gotoRhotanaoSeaDayRoute() {  // Gladion Day, Southern Evening, Rhotano Night
      this.rhotanoSeaDayRoute = true;
      this.rhotanoSeaEveningRoute = false;
      this.rhotanoSeaNightRoute = false;
      this.northernDayRoute = false;
      this.northernEveningRoute = false;
      this.northernNightRoute = false;
    },
    gotoRhotanoSeaEveningRoute() { // Gladion Evening, Southern Night, Rhotano Day
      this.rhotanoSeaDayRoute = false;
      this.rhotanoSeaEveningRoute = true;
      this.rhotanoSeaNightRoute = false;
      this.northernDayRoute = false;
      this.northernEveningRoute = false;
      this.northernNightRoute = false;
    },
    gotoRhotanoSeaNightRoute() { // Gladion Night, Southern Day, Rhotano Evening
      this.rhotanoSeaDayRoute = false;
      this.rhotanoSeaEveningRoute = false;
      this.rhotanoSeaNightRoute = true;
      this.northernDayRoute = false;
      this.northernEveningRoute = false;
      this.northernNightRoute = false;
    },
    gotoNorthernDayRoute() { // Southern Day, Gladion Evening, Northern Night
      this.rhotanoSeaDayRoute = false;
      this.rhotanoSeaEveningRoute = false;
      this.rhotanoSeaNightRoute = false;
      this.northernDayRoute = true;
      this.northernEveningRoute = false;
      this.northernNightRoute = false;
    },
    gotoNorthernEveningRoute() { // Southern Evening, Gladion Night, Northern Day
      this.rhotanoSeaDayRoute = false;
      this.rhotanoSeaEveningRoute = false;
      this.rhotanoSeaNightRoute = false;
      this.northernDayRoute = false;
      this.northernEveningRoute = true;
      this.northernNightRoute = false;
    },
    gotoNorthernNightRoute() { // Southern Night, Gladdion Day, Northern Evening
      this.rhotanoSeaDayRoute = false;
      this.rhotanoSeaEveningRoute = false;
      this.rhotanoSeaNightRoute = false;
      this.northernDayRoute = false;
      this.northernEveningRoute = false;
      this.northernNightRoute = true;
    },
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