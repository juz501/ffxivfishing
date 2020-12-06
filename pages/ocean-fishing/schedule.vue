<template>
  <main>
    <h1 class="h2">Ocean Fishing Schedule</h1>

    <p>Schedule in under contruction!</p>
  </main>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      routes: {
        northernNightDayEveningRoute: 0,
        northernDayEveningNightRoute: 1,
        northernEveningNightDayRoute: 2,
        rhotanoSeaNightDayEveningRoute: 3,
        rhotanoSeaDayEveningNightRoute: 4,
        rhotanoSeaEveningNightDayRoute: 5
      },
      datetime: new Date()
    }
  },
  computed: {
    ...mapGetters({
      routeTitles: 'oceanFishing/getRouteTitles',
      routePattern: 'oceanFishing/getRoutePattern',
      routeScheduleByDatetime: 'oceanFishing/getRouteScheduleByDatetime',
    }),
    routeSchedule() {
      return this.routeScheduleByDatetime(this.datetime);
    }
  }
}
</script>