<template>
  <main>
    <h1 class="h2">Ocean Fishing Reference</h1>
    <div class="filters">
      <div class="filterGroup mainFilter">
        <div class="filter">        
          <h2 class="h3">{{sectionTitles.target}}</h2>
          <button @click="gotoTargetFish" :class="{ 'filter-on': filters.targetFish}" v-html="targetTitles.fish"></button>
          <button @click="gotoTargetTitle" :class="{ 'filter-on': filters.targetTitle}" v-html="targetTitles.title"></button>
        </div>
        <div class="filter" v-if="filters.targetFish">
          <h2 class="h3">{{sectionTitles.type}}</h2>
          <button @click="gotoPerRoute" :class="{ 'filter-on': filters.perRoute}" v-html="typeTitles.route"></button>
          <button @click="gotoPerLocationTime" :class="{ 'filter-on': filters.perLocationTime}" v-html="typeTitles.location"></button>
        </div>
        <div class="filter mainFilter">
          <h2 class="h3">Route Schedule</h2>
          <a href="https://proyebat.github.io/oceancalculator/" target="_blank" rel="nofollow noopener">Ocean Fishing Schedule Calculator</a>
        </div>
      </div>
      <div v-if="filters.perRoute && filters.targetFish">
        <h2 class="h3">{{sectionTitles.route}}</h2>
        <div class="filter routeFilter filterGroup">
          <button @click="gotoNorthernNightDayEveningRoute" :class="{ 'filter-on': filters.northernNightDayEveningRoute}" v-html="routeTitles[routes.northernNightDayEveningRoute]"></button>
          <button @click="gotoNorthernDayEveningNightRoute" :class="{ 'filter-on': filters.northernDayEveningNightRoute}" v-html="routeTitles[routes.northernDayEveningNightRoute]"></button>
          <button @click="gotoNorthernEveningNightDayRoute" :class="{ 'filter-on': filters.northernEveningNightDayRoute}" v-html="routeTitles[routes.northernEveningNightDayRoute]"></button>
        </div>      
        <div class="filter routeFilter filterGroup">
          <button @click="gotoRhotanoSeaNightDayEveningRoute" :class="{ 'filter-on': filters.rhotanoSeaNightDayEveningRoute}" v-html="routeTitles[routes.rhotanoSeaNightDayEveningRoute]"></button>
          <button @click="gotoRhotanoSeaDayEveningNightRoute" :class="{ 'filter-on': filters.rhotanoSeaDayEveningNightRoute}" v-html="routeTitles[routes.rhotanoSeaDayEveningNightRoute]"></button>
          <button @click="gotoRhotanoSeaEveningNightDayRoute" :class="{ 'filter-on': filters.rhotanoSeaEveningNightDayRoute}" v-html="routeTitles[routes.rhotanoSeaEveningNightDayRoute]"></button>
        </div>
        <div class="filter routeFilter filterGroup">
          <button @click="gotoRothlytSoundNightDayEveningRoute" :class="{ 'filter-on': filters.rothlytSoundNightDayEveningRoute}" v-html="routeTitles[routes.rothlytSoundNightDayEveningRoute]"></button>
          <button @click="gotoRothlytSoundDayEveningNightRoute" :class="{ 'filter-on': filters.rothlytSoundDayEveningNightRoute}" v-html="routeTitles[routes.rothlytSoundDayEveningNightRoute]"></button>
          <button @click="gotoRothlytSoundEveningNightDayRoute" :class="{ 'filter-on': filters.rothlytSoundEveningNightDayRoute}" v-html="routeTitles[routes.rothlytSoundEveningNightDayRoute]"></button>
        </div>
        <div class="filter routeFilter filterGroup">
          <button @click="gotoBloodbrineSeaNightDayEveningRoute" :class="{ 'filter-on': filters.bloodbrineSeaNightDayEveningRoute}" v-html="routeTitles[routes.bloodbrineSeaNightDayEveningRoute]"></button>
          <button @click="gotoBloodbrineSeaDayEveningNightRoute" :class="{ 'filter-on': filters.bloodbrineSeaDayEveningNightRoute}" v-html="routeTitles[routes.bloodbrineSeaDayEveningNightRoute]"></button>
          <button @click="gotoBloodbrineSeaEveningNightDayRoute" :class="{ 'filter-on': filters.bloodbrineSeaEveningNightDayRoute}" v-html="routeTitles[routes.bloodbrineSeaEveningNightDayRoute]"></button>
        </div>
      </div>
      <div v-if="filters.perLocationTime && filters.targetFish">
        <h2 class="h3">{{sectionTitles.location}}</h2>
        <div class="filter locationFilter filterGroup">
          <button @click="toggleGaladionBayDay" :class="{ 'filter-on': filters.galadionBayDay }" v-html="locationFilterTitles.galadionBay.day"></button>
          <button @click="toggleGaladionBayEvening" :class="{ 'filter-on': filters.galadionBayEvening }" v-html="locationFilterTitles.galadionBay.evening"></button>
          <button @click="toggleGaladionBayNight" :class="{ 'filter-on': filters.galadionBayNight }" v-html="locationFilterTitles.galadionBay.night"></button>
          <button @click="toggleSouthernDay" :class="{ 'filter-on': filters.southernDay }" v-html="locationFilterTitles.southern.day"></button>
          <button @click="toggleSouthernEvening" :class="{ 'filter-on': filters.southernEvening }" v-html="locationFilterTitles.southern.evening"></button>
          <button @click="toggleSouthernNight" :class="{ 'filter-on': filters.southernNight }" v-html="locationFilterTitles.southern.night"></button>
          <button @click="toggleCieldalaesDay" :class="{ 'filter-on': filters.cieldalaesDay }" v-html="locationFilterTitles.cieldalaes.day"></button>
          <button @click="toggleCieldalaesEvening" :class="{ 'filter-on': filters.cieldalaesEvening }" v-html="locationFilterTitles.cieldalaes.evening"></button>
          <button @click="toggleCieldalaesNight" :class="{ 'filter-on': filters.cieldalaesNight }" v-html="locationFilterTitles.cieldalaes.night"></button>
          <button @click="toggleRhotanoSeaDay" :class="{ 'filter-on': filters.rhotanoSeaDay }" v-html="locationFilterTitles.rhotanoSea.day"></button>
          <button @click="toggleRhotanoSeaEvening" :class="{ 'filter-on': filters.rhotanoSeaEvening }" v-html="locationFilterTitles.rhotanoSea.evening"></button>
          <button @click="toggleRhotanoSeaNight" :class="{ 'filter-on': filters.rhotanoSeaNight }" v-html="locationFilterTitles.rhotanoSea.night"></button>
          <button @click="toggleNorthernDay" :class="{ 'filter-on': filters.northernDay }" v-html="locationFilterTitles.northern.day"></button>
          <button @click="toggleNorthernEvening" :class="{ 'filter-on': filters.northernEvening }" v-html="locationFilterTitles.northern.evening"></button>
          <button @click="toggleNorthernNight" :class="{ 'filter-on': filters.northernNight }" v-html="locationFilterTitles.northern.night"></button>
          <button @click="toggleRothlytSoundDay" :class="{ 'filter-on': filters.rothlytSoundDay }" v-html="locationFilterTitles.rothlytSound.day"></button>
          <button @click="toggleRothlytSoundEvening" :class="{ 'filter-on': filters.rothlytSoundEvening }" v-html="locationFilterTitles.rothlytSound.evening"></button>
          <button @click="toggleRothlytSoundNight" :class="{ 'filter-on': filters.rothlytSoundNight }" v-html="locationFilterTitles.rothlytSound.night"></button>
          <button @click="toggleBloodbrineSeaDay" :class="{ 'filter-on': filters.bloodbrineSeaDay }" v-html="locationFilterTitles.bloodbrineSea.day"></button>
          <button @click="toggleBloodbrineSeaEvening" :class="{ 'filter-on': filters.bloodbrineSeaEvening }" v-html="locationFilterTitles.bloodbrineSea.evening"></button>
          <button @click="toggleBloodbrineSeaNight" :class="{ 'filter-on': filters.bloodbrineSeaNight }" v-html="locationFilterTitles.bloodbrineSea.night"></button>
        </div>
      </div>
      <div v-if="filters.targetTitle">
        <h2 class="h3">{{sectionTitles.location}}</h2>
        <div class="filter routeFilter filterGroup">
          <button @click="gotoJelly" :class="{ 'filter-on': filters.jellyRoute }" v-html="titleFilterTitles.jelly"></button>
          <button @click="gotoSeaDragon" :class="{ 'filter-on': filters.seaDragonRoute }" v-html="titleFilterTitles.seaDragon"></button>
          <button @click="gotoOctopus" :class="{ 'filter-on': filters.octopusRoute }" v-html="titleFilterTitles.octopus"></button>
        </div>
        <div class="filter routeFilter filterGroup">
          <button @click="gotoShark" :class="{ 'filter-on': filters.sharkRoute }" v-html="titleFilterTitles.shark"></button>
          <button @click="gotoCrab" :class="{ 'filter-on': filters.crabRoute }" v-html="titleFilterTitles.crab"></button>
          <button @click="gotoBalloon" :class="{ 'filter-on': filters.balloonRoute }" v-html="titleFilterTitles.balloon"></button>
        </div>
        <div class="filter routeFilter filterGroup">
          <button @click="gotoManta" :class="{ 'filter-on': filters.mantaRoute }" v-html="titleFilterTitles.manta"></button>
        </div>
      </div>   
    </div>
    <div v-if="( currentRoute !== null && filters.perRoute && filters.targetFish ) || ( currentTitleRoute !== null && filters.targetTitle ) || ( hasLocations && filters.perLocationTime && filters.targetFish )">
      <h3 class="h4">{{sectionTitles.strat}}</h3>
      <div class="location-baits-wrapper">
        <table class="location-baits" v-if="filters.perRoute && filters.targetFish">
          <thead>
            <tr>
              <th v-html="stratHeadings.conditions"></th>
              <th v-html="stratHeadings.bait"></th>
              <th v-html="stratHeadings.strat"></th>
              <th v-html="stratHeadings.doublehook"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in routeLocationOrder[currentRoute]" :key="i">
              <td v-if="item">
                <div v-if="item.location && content[item.location]" v-html="content[item.location].location"></div>
                <div class="conditions">
                  <span class="phase" v-if="item.location && content[item.location] && item.phase && content[item.location][item.phase]" v-html="content[item.location][item.phase].phase"></span>
                  <span class="weather" v-if="item.location && content[item.location] && item.phase && content[item.location][item.phase] && content[item.location][item.phase].weather != 'Normal'" v-html="content[item.location][item.phase].weather"></span>
                  <span class="time" v-if="item.location && content[item.location] && item.phase && content[item.location][item.phase] && content[item.location][item.phase].time != 'Any'" v-html="content[item.location][item.phase].time"></span>
                </div>
              </td>
              <td v-if="item.location && content[item.location] && item.phase && content[item.location][item.phase]" v-html="content[item.location][item.phase].bait"></td>
              <td class="strat" v-if="item.location && content[item.location] && item.phase && content[item.location][item.phase] && content[item.location][item.phase].strategy">
                <ol v-if="Array.isArray(content[item.location][item.phase].strategy)">
                  <li v-for="(strat, index) in content[item.location][item.phase].strategy" v-html="strat" :key="`routestrat-${index}`"></li>
                </ol>
              </td>
              <td class="double-hook" v-if="item.location && content[item.location] && item.phase && content[item.location][item.phase] && content[item.location][item.phase].doublehook">
                <ol v-if="Array.isArray(content[item.location][item.phase].doublehook)">
                  <li v-for="(dh, index) in content[item.location][item.phase].doublehook" v-html="dh" :key="`routedh-${index}`"></li>
                </ol>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="location-baits" v-if="filters.perLocationTime && filters.targetFish">
          <thead>
            <tr>
              <th v-html="stratHeadings.conditions"></th>
              <th v-html="stratHeadings.bait"></th>
              <th v-html="stratHeadings.strat"></th>
              <th v-html="stratHeadings.doublehook"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in locationTimeOrder" :key="i">
              <td v-if="item">
                <div v-if="item.location && content[item.location]" v-html="content[item.location].location"></div>
                <div class="conditions">
                  <span class="phase" v-if="item.location && content[item.location] && item.phase && content[item.location][item.phase]" v-html="content[item.location][item.phase].phase"></span>
                  <span class="weather" v-if="item.location && content[item.location] && item.phase && content[item.location][item.phase] && content[item.location][item.phase].weather != 'Normal'" v-html="content[item.location][item.phase].weather"></span>
                  <span class="time" v-if="item.location && content[item.location] && item.phase && content[item.location][item.phase] && content[item.location][item.phase].time != 'Any'" v-html="content[item.location][item.phase].time"></span>
                </div>
              </td>
              <td v-if="item.location && content[item.location] && item.phase && content[item.location][item.phase]" v-html="content[item.location][item.phase].bait"></td>
              <td class="strat" v-if="item.location && content[item.location] && item.phase && content[item.location][item.phase] && content[item.location][item.phase].strategy">
                <ol v-if="Array.isArray(content[item.location][item.phase].strategy)">
                  <li v-for="(strat, index) in content[item.location][item.phase].strategy" v-html="strat" :key="`timestrat-${index}`"></li>
                </ol>
              </td>
              <td class="double-hook" v-if="item.location && content[item.location] && item.phase && content[item.location][item.phase] && content[item.location][item.phase].doublehook">
                <ol v-if="Array.isArray(content[item.location][item.phase].doublehook)">
                  <li v-for="(dh, index) in content[item.location][item.phase].doublehook" v-html="dh" :key="`routedh-${index}`"></li>
                </ol>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="location-baits" v-if="filters.targetTitle">
          <thead>
            <tr>
              <th v-html="stratHeadings.conditions"></th>
              <th v-html="stratHeadings.bait"></th>
              <th v-html="stratHeadings.strat"></th>
              <th v-html="stratHeadings.doublehook"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in targetTitleOrder" :key="i">
              <td v-if="item">
                <div v-if="item.location && content[item.location]" v-html="content[item.location].location"></div>
                <div class="conditions">
                  <span class="phase" v-if="item.location && content[item.location] && item.phase && content[item.location][item.phase]" v-html="content[item.location][item.phase].phase"></span>
                  <span class="weather" v-if="item.location && content[item.location] && item.phase && content[item.location][item.phase] && content[item.location][item.phase].weather != 'Normal'" v-html="content[item.location][item.phase].weather"></span>
                  <span class="time" v-if="item.location && content[item.location] && item.phase && content[item.location][item.phase] && content[item.location][item.phase].time != 'Any'" v-html="content[item.location][item.phase].time"></span>
                </div>
              </td>
              <td v-if="item.location && content[item.location] && item.phase && content[item.location][item.phase]" v-html="content[item.location][item.phase].bait"></td>
              <td class="strat" v-if="item.location && content[item.location] && item.phase && content[item.location][item.phase] && content[item.location][item.phase].strategy">
                <ol v-if="Array.isArray(content[item.location][item.phase].strategy)">
                  <li v-for="(strat, index) in content[item.location][item.phase].strategy" v-html="strat" :key="`titlestrat-${index}`"></li>
                </ol>
              </td>
              <td class="double-hook" v-if="item.location && content[item.location] && item.phase && content[item.location][item.phase] && content[item.location][item.phase].doublehook">
                <ol v-if="Array.isArray(content[item.location][item.phase].doublehook)">
                  <li v-for="(dh, index) in content[item.location][item.phase].doublehook" v-html="dh" :key="`titledh-${index}`"></li>
                </ol>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>    
  </main>
</template>
<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState('oceanFishing', ['filters', 'routes', 'currentRoute', 'currentTitleRoute']),
    ...mapGetters({
      targetTitles: 'oceanFishing/getTargetTitles',
      sectionTitles: 'oceanFishing/getSectionTitles',
      typeTitles: 'oceanFishing/getTypeTitles',
      routeTitles: 'oceanFishing/getRouteTitles',
      content: 'oceanFishing/getContent',
      titleFilterTitles: 'oceanFishing/getTitleFilterTitles',
      locationFilterTitles: 'oceanFishing/getLocationFilterTitles',
      stratHeadings: 'oceanFishing/getStratHeadings',
      routeLocationOrder: 'oceanFishing/getRouteLocationOrder',      
      locationTimeOrder: 'oceanFishing/getLocationTimeOrder',
      targetTitleOrder: 'oceanFishing/getTargetTitleOrder',
      hasLocations: 'oceanFishing/hasLocations'
    })   
  },
  methods: {
    gotoTargetFish() {
      this.$store.commit('oceanFishing/updateFilters', { targetFish: true, targetTitle: false });
    },
    gotoTargetTitle() {
      this.$store.commit('oceanFishing/updateFilters', { targetFish: false, targetTitle: true });
    },
    gotoPerRoute() {
      this.$store.commit('oceanFishing/updateFilters', { perRoute: true, perLocationTime: false });
    },
    gotoPerLocationTime() {
      this.$store.commit('oceanFishing/updateFilters', { perRoute: false, perLocationTime: true });
    },
    gotoNorthernNightDayEveningRoute() { // Southern Night, Galadion Day, Northern Evening
      this.$store.commit('oceanFishing/updateCurrentRoute', this.routes.northernNightDayEveningRoute);
    },
    gotoNorthernDayEveningNightRoute() { // Southern Day, Galadion Evening, Northern Night
      this.$store.commit('oceanFishing/updateCurrentRoute', this.routes.northernDayEveningNightRoute);
    },
    gotoNorthernEveningNightDayRoute() { // Southern Evening, Galadion Night, Northern Day
      this.$store.commit('oceanFishing/updateCurrentRoute', this.routes.northernEveningNightDayRoute);      
    },
    gotoRhotanoSeaNightDayEveningRoute() { // Galadion Night, Southern Day, Rhotano Evening
      this.$store.commit('oceanFishing/updateCurrentRoute', this.routes.rhotanoSeaNightDayEveningRoute);
    },
    gotoRhotanoSeaDayEveningNightRoute() {  // Galadion Day, Southern Evening, Rhotano Night
      this.$store.commit('oceanFishing/updateCurrentRoute', this.routes.rhotanoSeaDayEveningNightRoute);
    },
    gotoRhotanoSeaEveningNightDayRoute() { // Galadion Evening, Southern Night, Rhotano Day
      this.$store.commit('oceanFishing/updateCurrentRoute', this.routes.rhotanoSeaEveningNightDayRoute);      
    },
    gotoRothlytSoundNightDayEveningRoute() { // Cieldalaes Night, Rhotano Day, Rothlyt Evening
      this.$store.commit('oceanFishing/updateCurrentRoute', this.routes.rothlytSoundNightDayEveningRoute);      
    },
    gotoRothlytSoundDayEveningNightRoute() { // Cieldalaes Day, Rhotano Evening, Rothlyt Night
      this.$store.commit('oceanFishing/updateCurrentRoute', this.routes.rothlytSoundDayEveningNightRoute);
    },
    gotoRothlytSoundEveningNightDayRoute() { // Cieldalaes Evening, Rhotano Night, Rothlyt Day
      this.$store.commit('oceanFishing/updateCurrentRoute', this.routes.rothlytSoundEveningNightDayRoute);      
    },
    gotoBloodbrineSeaNightDayEveningRoute() { // Cieldalaes Night, Northrn Day, Bloodbrine Evening
      this.$store.commit('oceanFishing/updateCurrentRoute', this.routes.bloodbrineSeaNightDayEveningRoute);      
    },
    gotoBloodbrineSeaDayEveningNightRoute() { // Cieldalaes Day, Northern Evening, Bloodbrine Night
      this.$store.commit('oceanFishing/updateCurrentRoute', this.routes.bloodbrineSeaDayEveningNightRoute);
    },
    gotoBloodbrineSeaEveningNightDayRoute() { // Cieldalaes Evening, Northern Night, Bloodbrine Day
      this.$store.commit('oceanFishing/updateCurrentRoute', this.routes.bloodbrineSeaEveningNightDayRoute);      
    },
    gotoJelly() {
      this.$store.commit('oceanFishing/updateCurrentTitleRoute', this.routes.jellyRoute);
    },
    gotoSeaDragon() {
      this.$store.commit('oceanFishing/updateCurrentTitleRoute', this.routes.seaDragonRoute);
    },
    gotoOctopus() {
      this.$store.commit('oceanFishing/updateCurrentTitleRoute', this.routes.octopusRoute);
    },
    gotoShark() {
      this.$store.commit('oceanFishing/updateCurrentTitleRoute', this.routes.sharkRoute);
    },
    gotoCrab() {
      this.$store.commit('oceanFishing/updateCurrentTitleRoute', this.routes.crabRoute);
    },
    gotoBalloon() {
      this.$store.commit('oceanFishing/updateCurrentTitleRoute', this.routes.balloonRoute);
    },
    gotoManta() {
      this.$store.commit('oceanFishing/updateCurrentTitleRoute', this.routes.mantaRoute);
    },
    toggleGaladionBayDay() {
      this.$store.commit('oceanFishing/updateFilters', { galadionBayDay: !this.filters.galadionBayDay });      
    },
    toggleGaladionBayEvening() {
      this.$store.commit('oceanFishing/updateFilters', { galadionBayEvening: !this.filters.galadionBayEvening });
    },
    toggleGaladionBayNight() {
      this.$store.commit('oceanFishing/updateFilters', { galadionBayNight: !this.filters.galadionBayNight });
    },
    toggleRhotanoSeaDay() {
      this.$store.commit('oceanFishing/updateFilters', { rhotanoSeaDay: !this.filters.rhotanoSeaDay });
    },
    toggleRhotanoSeaEvening() {
      this.$store.commit('oceanFishing/updateFilters', { rhotanoSeaEvening: !this.filters.rhotanoSeaEvening });
    },
    toggleRhotanoSeaNight() {
      this.$store.commit('oceanFishing/updateFilters', { rhotanoSeaNight: !this.filters.rhotanoSeaNight });
    },
    toggleNorthernDay() {
      this.$store.commit('oceanFishing/updateFilters', { northernDay: !this.filters.northernDay });
    },
    toggleNorthernEvening() {
      this.$store.commit('oceanFishing/updateFilters', { northernEvening: !this.filters.northernEvening });
    },
    toggleNorthernNight() {
      this.$store.commit('oceanFishing/updateFilters', { northernNight: !this.filters.northernNight });
    },
    toggleSouthernDay() {
      this.$store.commit('oceanFishing/updateFilters', { southernDay: !this.filters.southernDay });
    },
    toggleSouthernEvening() {
      this.$store.commit('oceanFishing/updateFilters', { southernEvening: !this.filters.southernEvening });
    },
    toggleSouthernNight() {
      this.$store.commit('oceanFishing/updateFilters', { southernNight: !this.filters.southernNight });
    },
    toggleCieldalaesDay() {
      this.$store.commit('oceanFishing/updateFilters', { cieldalaesDay: !this.filters.cieldalaesDay });
    },
    toggleCieldalaesEvening() {
      this.$store.commit('oceanFishing/updateFilters', { cieldalaesEvening: !this.filters.cieldalaesEvening });
    },
    toggleCieldalaesNight() {
      this.$store.commit('oceanFishing/updateFilters', { cieldalaesNight: !this.filters.cieldalaesNight });
    },
    toggleRothlytSoundDay() {
      this.$store.commit('oceanFishing/updateFilters', { rothlytSoundDay: !this.filters.rothlytSoundDay });
    },
    toggleRothlytSoundEvening() {
      this.$store.commit('oceanFishing/updateFilters', { rothlytSoundEvening: !this.filters.rothlytSoundEvening });
    },
    toggleRothlytSoundNight() {
      this.$store.commit('oceanFishing/updateFilters', { rothlytSoundNight: !this.filters.rothlytSoundNight });      
    },
    toggleBloodbrineSeaDay() {
      this.$store.commit('oceanFishing/updateFilters', { bloodbrineSeaDay: !this.filters.bloodbrineSeaDay });
    },
    toggleBloodbrineSeaEvening() {
      this.$store.commit('oceanFishing/updateFilters', { bloodbrineSeaEvening: !this.filters.bloodbrineSeaEvening });
    },
    toggleBloodbrineSeaNight() {
      this.$store.commit('oceanFishing/updateFilters', { bloodbrineSeaNight: !this.filters.bloodbrineSeaNight });
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
      padding: 2px 1px;
      text-align: center;
      
      @media screen and (min-width: 700px) {
        padding: 10px 5px;
      }

      &.strat {
        max-width:500px;
      }

      &.double-hook {
        white-space: nowrap;
      }

      &.strat, &.double-hook {
        text-align: left;

        ol {
          list-style: decimal inside;          
        }
      }
      
      &.vertical {
        vertical-align: middle;
      }
    }
  }
}
</style>