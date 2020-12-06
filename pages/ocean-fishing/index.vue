<template>
  <main>
    <h1 class="h2">Ocean Fishing Reference</h1>
    <div class="filters">
      <div class="filter mainFilter">
        <h2 class="h3">{{sectionTitles.type}}</h2>
        <button @click="gotoPerRoute" :class="{ 'filter-on': filters.perRoute}">{{typeTitles.route}}</button>
        <button @click="gotoPerLocationTime" :class="{ 'filter-on': filters.perLocationTime}">{{typeTitles.location}}</button>
      </div>
      <div v-if="filters.perRoute">
        <h2 class="h3">{{sectionTitles.route}}</h2>
        <div class="filter routeFilter">
          <button @click="gotoNorthernNightDayEveningRoute" :class="{ 'filter-on': filters.northernNightDayEveningRoute}">{{routeTitles[routes.northernNightDayEveningRoute]}}</button>
          <button @click="gotoNorthernDayEveningNightRoute" :class="{ 'filter-on': filters.northernDayEveningNightRoute}">{{routeTitles[routes.northernDayEveningNightRoute]}}</button>
          <button @click="gotoNorthernEveningNightDayRoute" :class="{ 'filter-on': filters.northernEveningNightDayRoute}">{{routeTitles[routes.northernEveningNightDayRoute]}}</button>
        </div>      
        <div class="filter routeFilter">
          <button @click="gotoRhotanoSeaNightDayEveningRoute" :class="{ 'filter-on': filters.rhotanoSeaNightDayEveningRoute}">{{routeTitles[routes.rhotanoSeaNightDayEveningRoute]}}</button>
          <button @click="gotoRhotanoSeaDayEveningNightRoute" :class="{ 'filter-on': filters.rhotanoSeaDayEveningNightRoute}">{{routeTitles[routes.rhotanoSeaDayEveningNightRoute]}}</button>
          <button @click="gotoRhotanoSeaEveningNightDayRoute" :class="{ 'filter-on': filters.rhotanoSeaEveningNightDayRoute}">{{routeTitles[routes.rhotanoSeaEveningNightDayRoute]}}</button>
        </div>
      </div>
      <div v-if="filters.perLocationTime">
        <h2 class="h3">{{sectionTitles.location}}</h2>
        <div class="filter routeFilter">
          <button @click="toggleGladionBayDay" :class="{ 'filter-on': filters.gladionBayDay }">{{locationFilterTitles.gladionBay.day}}</button>
          <button @click="toggleGladionBayEvening" :class="{ 'filter-on': filters.gladionBayEvening }">{{locationFilterTitles.gladionBay.evening}}</button>
          <button @click="toggleGladionBayNight" :class="{ 'filter-on': filters.gladionBayNight }">{{locationFilterTitles.gladionBay.night}}</button>
        </div>
        <div class="filter routeFilter">
          <button @click="toggleSouthernDay" :class="{ 'filter-on': filters.southernDay }">{{locationFilterTitles.southern.day}}</button>
          <button @click="toggleSouthernEvening" :class="{ 'filter-on': filters.southernEvening }">{{locationFilterTitles.southern.evening}}</button>
          <button @click="toggleSouthernNight" :class="{ 'filter-on': filters.southernNight }">{{locationFilterTitles.southern.night}}</button>
        </div>
        <div class="filter routeFilter">
          <button @click="toggleRhotanoSeaDay" :class="{ 'filter-on': filters.rhotanoSeaDay }">{{locationFilterTitles.rhotanoSea.day}}</button>
          <button @click="toggleRhotanoSeaEvening" :class="{ 'filter-on': filters.rhotanoSeaEvening }">{{locationFilterTitles.rhotanoSea.evening}}</button>
          <button @click="toggleRhotanoSeaNight" :class="{ 'filter-on': filters.rhotanoSeaNight }">{{locationFilterTitles.rhotanoSea.night}}</button>
        </div>
        <div class="filter routeFilter">
          <button @click="toggleNorthernDay" :class="{ 'filter-on': filters.northernDay }">{{locationFilterTitles.northern.day}}</button>
          <button @click="toggleNorthernEvening" :class="{ 'filter-on': filters.northernEvening }">{{locationFilterTitles.northern.evening}}</button>
          <button @click="toggleNorthernNight" :class="{ 'filter-on': filters.northernNight }">{{locationFilterTitles.northern.night}}</button>
        </div>
      </div>
    </div>
    <div v-if="( currentState.route !== null && filters.perRoute ) || ( hasLocations && filters.perLocationTime )">
      <h3 class="h4">{{sectionTitles.strat}}</h3>
      <div class="location-baits-wrapper">
        <table class="location-baits" v-if="filters.perRoute">
          <thead>
            <tr>
              <th>{{stratHeadings.location}}</th>
              <th>{{stratHeadings.phase}}</th>
              <th>{{stratHeadings.weather}}</th>
              <th>{{stratHeadings.time}}</th>
              <th>{{stratHeadings.bait}}</th>
              <th>{{stratHeadings.strat}}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in routeLocationOrder[currentState.route]" :key="i">
              <td>{{ content[item.location].location }}</td>
              <td>{{ content[item.location][item.phase].phase }}</td>
              <td>{{ content[item.location][item.phase].weather }}</td>
              <td>{{ content[item.location][item.phase].time }}</td>
              <td v-html="content[item.location][item.phase].bait"></td>
              <td v-html="content[item.location][item.phase].strategy"></td>              
            </tr>
          </tbody>
        </table>
        <table class="location-baits" v-if="filters.perLocationTime">
          <thead>
            <tr>
              <th>{{stratHeadings.location}}</th>
              <th>{{stratHeadings.phase}}</th>
              <th>{{stratHeadings.weather}}</th>
              <th>{{stratHeadings.time}}</th>
              <th>{{stratHeadings.bait}}</th>
              <th>{{stratHeadings.strat}}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in locationTimes" :key="i">
              <td>{{content[item.location].location}}</td>
              <td>{{content[item.location][item.phase].phase}}</td>
              <td>{{content[item.location][item.phase].weather}}</td>
              <td>{{content[item.location][item.phase].time}}</td>
              <td v-html="content[item.location][item.phase].bait"></td>
              <td v-html="content[item.location][item.phase].strategy"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>    
  </main>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      filters: {
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
        rhotanoSeaDayEveningNightRoute: false,
        rhotanoSeaEveningNightDayRoute: false,
        rhotanoSeaNightDayEveningRoute: false,
        northernDayEveningNightRoute: false,
        northernEveningNightDayRoute: false,
        northernNightDayEveningRoute: false,
      },
      currentState: {
        route: null     
      },
      routes: {
        northernNightDayEveningRoute: 0,
        northernDayEveningNightRoute: 1,
        northernEveningNightDayRoute: 2,
        rhotanoSeaNightDayEveningRoute: 3,
        rhotanoSeaDayEveningNightRoute: 4,
        rhotanoSeaEveningNightDayRoute: 5,
      }
    }
  },
  methods: {   
    gotoPerRoute() {
      this.filters.perRoute = true;
      this.filters.perLocationTime = false;
    },
    gotoPerLocationTime() {
      this.filters.perRoute = false;
      this.filters.perLocationTime = true;
    },
    gotoNorthernNightDayEveningRoute() { // Southern Night, Gladdion Day, Northern Evening
      this.filters.northernNightDayEveningRoute = true;
      this.filters.northernDayEveningNightRoute = false;
      this.filters.northernEveningNightDayRoute = false;
      this.filters.rhotanoSeaNightDayEveningRoute = false;
      this.filters.rhotanoSeaDayEveningNightRoute = false;
      this.filters.rhotanoSeaEveningNightDayRoute = false;
      this.currentState.route = this.routes.northernNightDayEveningRoute;
    },
    gotoNorthernDayEveningNightRoute() { // Southern Day, Gladion Evening, Northern Night
      this.filters.northernNightDayEveningRoute = false;
      this.filters.northernDayEveningNightRoute = true;
      this.filters.northernEveningNightDayRoute = false;
      this.filters.rhotanoSeaNightDayEveningRoute = false;
      this.filters.rhotanoSeaDayEveningNightRoute = false;
      this.filters.rhotanoSeaEveningNightDayRoute = false;
      this.currentState.route = this.routes.northernDayEveningNightRoute;
    },
    gotoNorthernEveningNightDayRoute() { // Southern Evening, Gladion Night, Northern Day
      this.filters.northernNightDayEveningRoute = false;
      this.filters.northernDayEveningNightRoute = false;
      this.filters.northernEveningNightDayRoute = true;
      this.filters.rhotanoSeaNightDayEveningRoute = false;
      this.filters.rhotanoSeaDayEveningNightRoute = false;
      this.filters.rhotanoSeaEveningNightDayRoute = false;
      this.currentState.route = this.routes.northernEveningNightDayRoute;
    },
    gotoRhotanoSeaNightDayEveningRoute() { // Gladion Night, Southern Day, Rhotano Evening
      this.filters.northernNightDayEveningRoute = false;
      this.filters.northernDayEveningNightRoute = false;
      this.filters.northernEveningNightDayRoute = false;
      this.filters.rhotanoSeaNightDayEveningRoute = true;
      this.filters.rhotanoSeaDayEveningNightRoute = false;
      this.filters.rhotanoSeaEveningNightDayRoute = false;
      this.currentState.route = this.routes.rhotanoSeaNightDayEveningRoute;
    },
    gotoRhotanoSeaDayEveningNightRoute() {  // Gladion Day, Southern Evening, Rhotano Night
      this.filters.northernNightDayEveningRoute = false;
      this.filters.northernDayEveningNightRoute = false;
      this.filters.northernEveningNightDayRoute = false;
      this.filters.rhotanoSeaNightDayEveningRoute = false;
      this.filters.rhotanoSeaDayEveningNightRoute = true;
      this.filters.rhotanoSeaEveningNightDayRoute = false;
      this.currentState.route = this.routes.rhotanoSeaDayEveningNightRoute;
    },
    gotoRhotanoSeaEveningNightDayRoute() { // Gladion Evening, Southern Night, Rhotano Day
      this.filters.northernNightDayEveningRoute = false;
      this.filters.northernDayEveningNightRoute = false;
      this.filters.northernEveningNightDayRoute = false;
      this.filters.rhotanoSeaNightDayEveningRoute = false;
      this.filters.rhotanoSeaEveningNightDayRoute = true;
      this.filters.rhotanoSeaDayEveningNightRoute = false;
      this.currentState.route = this.routes.rhotanoSeaEveningNightDayRoute;
    },
    toggleGladionBayDay() {
      this.filters.gladionBayDay = !this.filters.gladionBayDay;
    },
    toggleGladionBayEvening() {
      this.filters.gladionBayEvening = !this.filters.gladionBayEvening;
    },
    toggleGladionBayNight() {
      this.filters.gladionBayNight = !this.filters.gladionBayNight;
    },
    toggleRhotanoSeaDay() {
      this.filters.rhotanoSeaDay = !this.filters.rhotanoSeaDay;
    },
    toggleRhotanoSeaEvening() {
      this.filters.rhotanoSeaEvening = !this.filters.rhotanoSeaEvening;
    },
    toggleRhotanoSeaNight() {
      this.filters.rhotanoSeaNight = !this.filters.rhotanoSeaNight;
    },
    toggleNorthernDay() {
      this.filters.northernDay = !this.filters.northernDay;
    },
    toggleNorthernEvening() {
      this.filters.northernEvening = !this.filters.northernEvening;
    },
    toggleNorthernNight() {
      this.filters.northernNight = !this.filters.northernNight;
    },
    toggleSouthernDay() {
      this.filters.southernDay = !this.filters.southernDay;
    },
    toggleSouthernEvening() {
      this.filters.southernEvening = !this.filters.southernEvening;
    },
    toggleSouthernNight() {
      this.filters.southernNight = !this.filters.southernNight;
    }    
  },
  computed: {
    ...mapGetters({
      sectionTitles: 'oceanFishing/getSectionTitles',
      typeTitles: 'oceanFishing/getTypeTitles',
      routeTitles: 'oceanFishing/getRouteTitles',
      content: 'oceanFishing/getContent',
      locationFilterTitles: 'oceanFishing/getLocationFilterTitles',
      stratHeadings: 'oceanFishing/getStratHeadings',
      routeLocationOrder: 'oceanFishing/getRouteLocationOrder',
      locationTimeOrder: 'oceanFishing/getLocationTimeOrder'
    }),
    locationTimes() {
      return this.locationTimeOrder(this.filters);
    },
    hasLocations() {
      return (
        this.filters.gladionBayDay ||
        this.filters.gladionBayEvening ||
        this.filters.gladionBayNight ||
        this.filters.southernDay ||
        this.filters.southernEvening ||
        this.filters.southernNight ||
        this.filters.rhotanoSeaDay ||
        this.filters.rhotanoSeaEvening ||
        this.filters.rhotanoSeaNight ||
        this.filters.northernDay ||
        this.filters.northernEvening ||
        this.filters.northernNight
        );
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