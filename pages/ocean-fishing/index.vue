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
            <td>{{southernContent.location}}</td>
            <td>{{southernContent.beforeSpectral.phase}}</td>
            <td>{{southernContent.beforeSpectral.weather}}</td>
            <td>{{southernContent.beforeSpectral.time}}</td>
            <td v-html="southernContent.beforeSpectral.bait"></td>
            <td v-html="southernContent.beforeSpectral.strategy"></td>
          </tr>
          <tr v-if="( northernDayRoute && perRoute )">
            <td>{{southernContent.location}}</td>
            <td>{{southernContent.spectralDay.phase}}</td>
            <td>{{southernContent.spectralDay.weather}}</td>
            <td>{{southernContent.spectralDay.time}}</td>
            <td v-html="southernContent.spectralDay.bait"></td>
            <td v-html="southernContent.spectralDay.strategy"></td>
          </tr>
          <tr v-if="( northernEveningRoute && perRoute )">
            <td>{{southernContent.location}}</td>
            <td>{{southernContent.spectralEvening.phase}}</td>
            <td>{{southernContent.spectralEvening.weather}}</td>
            <td>{{southernContent.spectralEvening.time}}</td>
            <td v-html="southernContent.spectralEvening.bait"></td>
            <td v-html="southernContent.spectralEvening.strategy"></td>
          </tr>
          <tr v-if="( northernNightRoute && perRoute )">
            <td>{{southernContent.location}}</td>
            <td>{{southernContent.spectralNight.phase}}</td>
            <td>{{southernContent.spectralNight.weather}}</td>
            <td>{{southernContent.spectralNight.time}}</td>
            <td v-html="southernContent.spectralNight.bait"></td>
            <td v-html="southernContent.spectralNight.strategy"></td>
          </tr>
          <tr v-if="((northernDayRoute || northernEveningRoute || northernNightRoute ) && perRoute )">
            <td>{{southernContent.location}}</td>
            <td>{{southernContent.afterSpectral.phase}}</td>
            <td>{{southernContent.afterSpectral.weather}}</td>
            <td>{{southernContent.afterSpectral.time}}</td>
            <td v-html="southernContent.afterSpectral.bait"></td>
            <td v-html="southernContent.afterSpectral.strategy"></td>
          </tr>
          <tr v-if="((gladionBayDay || gladionBayEvening || gladionBayNight) && perLocationTime ) ||
            ((rhotanoSeaDayRoute || rhotanoSeaEveningRoute || rhotanoSeaNightRoute ||
              northernDayRoute || northernEveningRoute || northernNightRoute) && perRoute)">
            <td>{{gladionBayContent.location}}</td>
            <td>{{gladionBayContent.beforeSpectral.phase}}</td>
            <td>{{gladionBayContent.beforeSpectral.weather}}</td>
            <td>{{gladionBayContent.beforeSpectral.time}}</td>
            <td v-html="gladionBayContent.beforeSpectral.bait"></td>
            <td v-html="gladionBayContent.beforeSpectral.strategy"></td>
          </tr>
          <tr v-if="((gladionBayDay || gladionBayEvening || gladionBayNight) && perLocationTime ) ||
            ((rhotanoSeaDayRoute || rhotanoSeaEveningRoute || rhotanoSeaNightRoute ||
              northernDayRoute || northernEveningRoute || northernNightRoute) && perRoute)">
            <td>{{gladionBayContent.location}}</td>
            <td>{{gladionBayContent.beforeSpectralShowers.phase}}</td>
            <td>{{gladionBayContent.beforeSpectralShowers.weather}}</td>
            <td>{{gladionBayContent.beforeSpectralShowers.time}}</td>
            <td v-html="gladionBayContent.beforeSpectralShowers.bait"></td>
            <td v-html="gladionBayContent.beforeSpectralShowers.strategy"></td>
          </tr>
          <tr v-if="( gladionBayDay && perLocationTime ) || ((rhotanoSeaDayRoute || northernNightRoute) && perRoute)">
            <td>{{gladionBayContent.location}}</td>
            <td>{{gladionBayContent.spectralDay.phase}}</td>
            <td>{{gladionBayContent.spectralDay.weather}}</td>
            <td>{{gladionBayContent.spectralDay.time}}</td>
            <td v-html="gladionBayContent.spectralDay.bait"></td>
            <td v-html="gladionBayContent.spectralDay.strategy"></td>
          </tr>
          <tr v-if="( gladionBayEvening && perLocationTime ) || ((rhotanoSeaEveningRoute || northernDayRoute) && perRoute)">
            <td>{{gladionBayContent.location}}</td>
            <td>{{gladionBayContent.spectralEvening.phase}}</td>
            <td>{{gladionBayContent.spectralEvening.weather}}</td>
            <td>{{gladionBayContent.spectralEvening.time}}</td>
            <td v-html="gladionBayContent.spectralEvening.bait"></td>
            <td v-html="gladionBayContent.spectralEvening.strategy"></td>
          </tr>
          <tr v-if="( gladionBayNight && perLocationTime ) || ((rhotanoSeaNightRoute || northernEveningRoute) && perRoute)">
            <td>{{gladionBayContent.location}}</td>
            <td>{{gladionBayContent.spectralNight.phase}}</td>
            <td>{{gladionBayContent.spectralNight.weather}}</td>
            <td>{{gladionBayContent.spectralNight.time}}</td>
            <td v-html="gladionBayContent.spectralNight.bait"></td>
            <td v-html="gladionBayContent.spectralNight.strategy"></td>
          </tr>
          <tr v-if="((gladionBayDay || gladionBayEvening || gladionBayNight) && perLocationTime ) ||
            ((rhotanoSeaDayRoute || rhotanoSeaEveningRoute || rhotanoSeaNightRoute ||
              northernDayRoute || northernEveningRoute || northernNightRoute) && perRoute)">
            <td>{{gladionBayContent.location}}</td>
            <td>{{gladionBayContent.afterSpectral.phase}}</td>
            <td>{{gladionBayContent.afterSpectral.weather}}</td>
            <td>{{gladionBayContent.afterSpectral.time}}</td>
            <td v-html="gladionBayContent.afterSpectral.bait"></td>
            <td v-html="gladionBayContent.afterSpectral.strategy"></td>
          </tr>
          <tr v-if="((southernDay || southernEvening || southernNight) && perLocationTime ) || 
            ((rhotanoSeaDayRoute || rhotanoSeaEveningRoute || rhotanoSeaNightRoute ) && perRoute )">
            <td>{{southernContent.location}}</td>
            <td>{{southernContent.beforeSpectral.phase}}</td>
            <td>{{southernContent.beforeSpectral.weather}}</td>
            <td>{{southernContent.beforeSpectral.time}}</td>
            <td v-html="southernContent.beforeSpectral.bait"></td>
            <td v-html="southernContent.beforeSpectral.strategy"></td>
          </tr>
          <tr v-if="( southernDay && perLocationTime )|| ( rhotanoSeaNightRoute && perRoute )">
            <td>{{southernContent.location}}</td>
            <td>{{southernContent.spectralDay.phase}}</td>
            <td>{{southernContent.spectralDay.weather}}</td>
            <td>{{southernContent.spectralDay.time}}</td>
            <td v-html="southernContent.spectralDay.bait"></td>
            <td v-html="southernContent.spectralDay.strategy"></td>
          </tr>
          <tr v-if="( southernEvening && perLocationTime ) || ( rhotanoSeaDayRoute && perRoute )">
            <td>{{southernContent.location}}</td>
            <td>{{southernContent.spectralEvening.phase}}</td>
            <td>{{southernContent.spectralEvening.weather}}</td>
            <td>{{southernContent.spectralEvening.time}}</td>
            <td v-html="southernContent.spectralEvening.bait"></td>
            <td v-html="southernContent.spectralEvening.strategy"></td>
          </tr>
          <tr v-if="( southernNight && perLocationTime ) || ( rhotanoSeaEveningRoute && perRoute )">
            <td>{{southernContent.location}}</td>
            <td>{{southernContent.spectralNight.phase}}</td>
            <td>{{southernContent.spectralNight.weather}}</td>
            <td>{{southernContent.spectralNight.time}}</td>
            <td v-html="southernContent.spectralNight.bait"></td>
            <td v-html="southernContent.spectralNight.strategy"></td>
          </tr>
          <tr v-if="((southernDay || southernEvening || southernNight) && perLocationTime ) || 
            ((rhotanoSeaDayRoute || rhotanoSeaEveningRoute || rhotanoSeaNightRoute ) && perRoute )">
            <td>{{southernContent.location}}</td>
            <td>{{southernContent.afterSpectral.phase}}</td>
            <td>{{southernContent.afterSpectral.weather}}</td>
            <td>{{southernContent.afterSpectral.time}}</td>
            <td v-html="southernContent.afterSpectral.bait"></td>
            <td v-html="southernContent.afterSpectral.strategy"></td>
          </tr>
          <tr v-if="((rhotanoSeaDay || rhotanoSeaEvening || rhotanoSeaNight) && perLocationTime) ||
            ((rhotanoSeaDayRoute || rhotanoSeaEveningRoute || rhotanoSeaNightRoute) && perRoute)">
            <td>{{rhotanoSeaContent.location}}</td>
            <td>{{rhotanoSeaContent.beforeSpectral.phase}}</td>
            <td>{{rhotanoSeaContent.beforeSpectral.weather}}</td>
            <td>{{rhotanoSeaContent.beforeSpectral.time}}</td>
            <td v-html="rhotanoSeaContent.beforeSpectral.bait"></td>
            <td v-html="rhotanoSeaContent.beforeSpectral.strategy"></td>
          </tr>
          <tr v-if="(rhotanoSeaDay && perLocationTime) || (rhotanoSeaEveningRoute && perRoute)">
            <td>{{rhotanoSeaContent.location}}</td>
            <td>{{rhotanoSeaContent.spectralDay.phase}}</td>
            <td>{{rhotanoSeaContent.spectralDay.weather}}</td>
            <td>{{rhotanoSeaContent.spectralDay.time}}</td>
            <td v-html="rhotanoSeaContent.spectralDay.bait"></td>
            <td v-html="rhotanoSeaContent.spectralDay.strategy"></td>
          </tr>
          <tr v-if="(rhotanoSeaEvening && perLocationTime) || (rhotanoSeaNightRoute && perRoute)">
            <td>{{rhotanoSeaContent.location}}</td>
            <td>{{rhotanoSeaContent.spectralEvening.phase}}</td>
            <td>{{rhotanoSeaContent.spectralEvening.weather}}</td>
            <td>{{rhotanoSeaContent.spectralEvening.time}}</td>
            <td v-html="rhotanoSeaContent.spectralDay.bait"></td>
            <td v-html="rhotanoSeaContent.spectralDay.strategy"></td>
          </tr>
          <tr v-if="( rhotanoSeaNight && perLocationTime) || (rhotanoSeaDayRoute && perRoute)">
            <td>{{rhotanoSeaContent.location}}</td>
            <td>{{rhotanoSeaContent.spectralNight.phase}}</td>
            <td>{{rhotanoSeaContent.spectralNight.weather}}</td>
            <td>{{rhotanoSeaContent.spectralNight.time}}</td>
            <td v-html="rhotanoSeaContent.spectralNight.bait"></td>
            <td v-html="rhotanoSeaContent.spectralNight.strategy"></td>
          </tr>
          <tr v-if="((rhotanoSeaDay || rhotanoSeaEvening || rhotanoSeaNight) && perLocationTime) ||
            ((rhotanoSeaDayRoute || rhotanoSeaEveningRoute || rhotanoSeaNightRoute) && perRoute)">
            <td>{{rhotanoSeaContent.location}}</td>
            <td>{{rhotanoSeaContent.afterSpectral.phase}}</td>
            <td>{{rhotanoSeaContent.afterSpectral.weather}}</td>
            <td>{{rhotanoSeaContent.afterSpectral.time}}</td>
            <td v-html="rhotanoSeaContent.afterSpectral.bait"></td>
            <td v-html="rhotanoSeaContent.afterSpectral.strategy"></td>
          </tr>
          <tr v-if="(( northernDay || northernEvening || northernNight ) && perLocationTime ) ||
            ((northernDayRoute || northernEveningRoute || northernNightRoute) && perRoute)">
            <td>{{northernContent.location}}</td>
            <td>{{northernContent.beforeSpectral.phase}}</td>
            <td>{{northernContent.beforeSpectral.weather}}</td>
            <td>{{northernContent.beforeSpectral.time}}</td>
            <td v-html="northernContent.beforeSpectral.bait"></td>
            <td v-html="northernContent.beforeSpectral.strategy"></td>
          </tr>
          <tr v-if="(( northernDay || northernEvening || northernNight ) && perLocationTime ) ||
            ((northernDayRoute || northernEveningRoute || northernNightRoute) && perRoute)">
            <td>{{northernContent.location}}</td>
            <td>{{northernContent.beforeSpectralSnow.phase}}</td>
            <td>{{northernContent.beforeSpectralSnow.weather}}</td>
            <td>{{northernContent.beforeSpectralSnow.time}}</td>
            <td v-html="northernContent.beforeSpectralSnow.bait"></td>
            <td v-html="northernContent.beforeSpectralSnow.strategy"></td>
          </tr>
          <tr v-if="( northernDay && perLocationTime ) || ( northernEveningRoute && perRoute )">
            <td>{{northernContent.location}}</td>
            <td>{{northernContent.spectralDay.phase}}</td>
            <td>{{northernContent.spectralDay.weather}}</td>
            <td>{{northernContent.spectralDay.time}}</td>
            <td v-html="northernContent.spectralDay.bait"></td>
            <td v-html="northernContent.spectralDay.strategy"></td>
          </tr>
          <tr v-if="( northernEvening && perLocationTime ) || ( northernNightRoute && perRoute )">
            <td>{{northernContent.location}}</td>
            <td>{{northernContent.spectralEvening.phase}}</td>
            <td>{{northernContent.spectralEvening.weather}}</td>
            <td>{{northernContent.spectralEvening.time}}</td>
            <td v-html="northernContent.spectralEvening.bait"></td>
            <td v-html="northernContent.spectralEvening.strategy"></td>
          </tr>
          <tr v-if="( northernNight && perLocationTime ) || ( northernDayRoute && perRoute )">
            <td>{{northernContent.location}}</td>
            <td>{{northernContent.spectralNight.phase}}</td>
            <td>{{northernContent.spectralNight.weather}}</td>
            <td>{{northernContent.spectralNight.time}}</td>
            <td v-html="northernContent.spectralNight.bait"></td>
            <td v-html="northernContent.spectralNight.strategy"></td>
          </tr>
          <tr v-if="(( northernDay || northernEvening || northernNight ) && perLocationTime ) ||
            ((northernDayRoute || northernEveningRoute || northernNightRoute) && perRoute)">
            <td>{{northernContent.location}}</td>
            <td>{{northernContent.afterSpectral.phase}}</td>
            <td>{{northernContent.afterSpectral.weather}}</td>
            <td>{{northernContent.afterSpectral.time}}</td>
            <td v-html="northernContent.afterSpectral.bait"></td>
            <td v-html="northernContent.afterSpectral.strategy"></td>
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
      gladionBayContent: {
        location: 'Gladion Bay',
        beforeSpectral: {
          phase: 'Before Spectral',
          weather: 'Normal',
          time: 'Any',
          bait: 'Krill',
          strategy: 'Surface Slap (Tarnished Shark !!!)<br />Reel only !!!'
        },
        beforeSpectralShowers: {
          phase: 'Before Spectral',
          weather: 'Showers',
          time: 'Any',
          bait: 'Plump Worm',
          strategy: 'Surface Slap - Goby or chovy <br /> Reel only !!!'
        },
        spectralDay: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Day',
          bait: 'Ragworm',
          strategy: 'Doublehook ! when > 5 secs'
        },
        spectralEvening: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Evening',
          bait: 'Plump Worm',
          strategy: 'Doublehook !!!'
        },
        spectralNight: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Night',
          bait: 'Krill + Glowworm x2 <br />= <strong>Glowworm</strong>',
          strategy: '(Navigator\'s Print) + (Heavenskey) x2 <br />= <strong>Sothis</strong>'
        },
        afterSpectral: {
          phase: 'After Spectral',
          weather: 'Normal',
          time: 'Any',
          bait: 'Krill  x3 <br />= <strong>Krill</strong>',
          strategy: '(Gladion chovy) x3 <br />= <strong>Drunkfish</strong>'
        }
      },
      southernContent: {
        location: 'Southern Strait of Merlthor',
        beforeSpectral: {
          phase: 'Before Spectral',
          weather: 'Normal',
          time: 'Any',
          bait: 'Krill',
          strategy: 'Surface Slap (Momora Mora !!!)<br />Reel only !!!'
        },
        spectralDay: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Day',
          bait: 'Krill',
          strategy: 'Doublehook on !! (@ 5 secs)'
        },
        spectralEvening: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Evening',
          bait: 'Ragworm + Mooch',
          strategy: '(Hi-Aetherlouse !) + (Doublehook on !!!) <br /> or (Doublehook on ! when > 5 secs)'
        },
        spectralNight: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Night',
          bait: '( Ragworm + Mooch ) x2 <br />= <strong>Shrimp Cage Feeder</strong>',
          strategy: '(Hi-Aetherlouse ! + Great Grandmarlyn !!) x2 <br />= <strong>(Coral Manta)</strong>'
        },
        afterSpectral: {
          phase: 'After Spectral',
          weather: 'Normal',
          time: 'Any',
          bait: 'Krill + Mooch <br />= <strong>Plump Worm</strong>',
          strategy: '(Barracuda !!) + (Gladdius !!) <br />= <strong>(Leviathan !!!)</strong>'
        }
      },
      rhotanoSeaContent: {
        location: 'Rhotano Sea',
        beforeSpectral: {
          phase: 'Before Spectral',
          weather: 'Normal',
          time: 'Any',
          bait: 'Plump Worm',
          strategy: 'Surface Slap (Chrome Hammerhead !!!) <br /> Reel only !!!'
        },
        spectralDay: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Day',
          bait: 'Plump Worm',
          strategy: 'Doublehook !!!'
        },
        spectralEvening: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Evening',
          bait: 'Ragworm + Rat Tail <br />= <strong>Rat Tail</strong>',
          strategy: '(Silencer !) + (Deep Sea Eel !!) <br />= <strong>(Stonescale)</strong>'
        },
        spectralNight: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Night',
          bait: 'Krill',
          strategy: 'Doublehook ! when > 5secs'
        },
        afterSpectral: {
          phase: 'After Spectral',
          weather: 'Normal',
          time: 'Any',
          bait: 'Plump Worm x2 <br />= <strong>Krill</strong>',
          strategy: '(Crimson Monkfish) x2 <br />= <strong>(Sabaton !!!)</strong>'
        }
      },
      northernContent: {
        location: 'Northern Strait of Merlthor',
        beforeSpectral: {
          phase: 'Before Spectral',
          weather: 'Normal',
          time: 'Any',
          bait: 'Krill',
          strategy: 'Surface Slap (Oschon\'s stone !!)<br /> Reel only !!!'
        },
        beforeSpectralSnow: {
          phase: 'Before Spectral',
          weather: 'Snow/Blizzard',
          time: 'Any',
          bait: 'Ragworm',
          strategy: 'Surface Slap (Megasquid !!)<br /> Reel only !!!'
        },
        spectralDay: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Day',
          bait: 'Plump Worm x 3 <br />= <strong>Heavy Steel Jig',
          strategy: '(Gugrusaurus !!!) x 3 <br />= <strong>(Elasmosaurus)</strong>'
        },
        spectralEvening: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Evening',
          bait: 'Ragworm',
          strategy: 'Doublehook ! when > 5secs'
        },
        spectralNight: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Night',
          bait: 'Krill',
          strategy: 'Doublehook !! when > 5secs'
        },
        afterSpectral: {
          phase: 'After Spectral',
          weather: 'Normal',
          time: 'Any',
          bait: 'Ragworm + Mooch <br />= <strong>Ragworm</strong>',
          strategy: '(Tossed dagger !) + (Elder Dinicthys !!) <br />= <strong>(Shooting Star !!!)</strong>'
        }
      }
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