import {
  content,
  sectionTitles,
  titleFilterTitles,
  targetTitles,
  typeTitles,
  routeTitles,
  locationFilterTitles,
  stratHeadings
} from '../content/oceanFishing';

export const NORTHERN_NIGHT_DAY_EVENING = 0;
export const NORTHERN_DAY_EVENING_NIGHT = 1;
export const NORTHERN_EVENING_NIGHT_DAY = 2;
export const RHOTANO_NIGHT_DAY_EVENING = 3;
export const RHOTANO_DAY_EVENING_NIGHT = 4;
export const RHOTANO_EVENING_NIGHT_DAY = 5;
export const ROTHLYT_NIGHT_DAY_EVENING = 6;
export const ROTHLYT_DAY_EVENING_NIGHT = 7;
export const ROTHLYT_EVENING_NIGHT_DAY = 8;
export const BLOODBRINE_NIGHT_DAY_EVENING = 9;
export const BLOODBRINE_DAY_EVENING_NIGHT = 10;
export const BLOODBRINE_EVENING_NIGHT_DAY = 11;
export const JELLY_ROUTE = 12;
export const SEA_DRAGON_ROUTE = 13;
export const OCTOPUS_ROUTE = 14;
export const SHARK_ROUTE = 15;
export const CRAB_ROUTE = 16;
export const BALLOON_ROUTE = 17;
export const MANTA_ROUTE = 18;

export const state = () => (
  {
    filters: {
      targetFish: true,
      targetTitle: false,
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
      cieldalaesDay: false,
      cieldalaesEvening: false,
      cieldalaesNight: false,
      rothlytSoundDay: false,
      rothlytSoundEvening: false,
      rothlytSoundNight: false,
      bloodbrineSeaDay: false,
      bloodbrineSeaEvening: false,
      bloodbrineSeaNight: false,
      jellyRoute: false,
      seaDragonRoute: false,
      octopusRoute: false,
      sharkRoute: false,
      crabRoute: false,
      balloonRoute: false, 
      mantaRoute: false,     
      rhotanoSeaDayEveningNightRoute: false,
      rhotanoSeaEveningNightDayRoute: false,
      rhotanoSeaNightDayEveningRoute: false,
      northernDayEveningNightRoute: false,
      northernEveningNightDayRoute: false,
      northernNightDayEveningRoute: false,
      rothlytSoundDayEveningNightRoute: false,
      rothlytSoundEveningNightDayRoute: false,
      rothlytSoundNightDayEveningRoute: false,
      bloodbrineSeaDayEveningNightRoute: false,
      bloodbrineSeaEveningNightDayRoute: false,
      bloodbrineSeaNightDayEveningRoute: false
    },
    routes: {
      northernNightDayEveningRoute: NORTHERN_NIGHT_DAY_EVENING,
      northernDayEveningNightRoute: NORTHERN_DAY_EVENING_NIGHT,
      northernEveningNightDayRoute: NORTHERN_EVENING_NIGHT_DAY,
      rhotanoSeaNightDayEveningRoute: RHOTANO_NIGHT_DAY_EVENING,
      rhotanoSeaDayEveningNightRoute: RHOTANO_DAY_EVENING_NIGHT,
      rhotanoSeaEveningNightDayRoute: RHOTANO_EVENING_NIGHT_DAY,
      rothlytSoundNightDayEveningRoute: ROTHLYT_NIGHT_DAY_EVENING,
      rothlytSoundDayEveningNightRoute: ROTHLYT_DAY_EVENING_NIGHT,
      rothlytSoundEveningNightDayRoute: ROTHLYT_EVENING_NIGHT_DAY,
      bloodbrineSeaNightDayEveningRoute: BLOODBRINE_NIGHT_DAY_EVENING,
      bloodbrineSeaDayEveningNightRoute: BLOODBRINE_DAY_EVENING_NIGHT,
      bloodbrineSeaEveningNightDayRoute: BLOODBRINE_EVENING_NIGHT_DAY,
      jellyRoute: JELLY_ROUTE,
      seaDragonRoute: SEA_DRAGON_ROUTE,
      octopusRoute: OCTOPUS_ROUTE,
      sharkRoute: SHARK_ROUTE,
      crabRoute: CRAB_ROUTE,
      balloonRoute: BALLOON_ROUTE,
      mantaRoute: MANTA_ROUTE
    },
    currentRoute: null,
    currentTitleRoute: null,
    sectionTitles,
    targetTitles,
    titleFilterTitles,
    typeTitles,
    routeTitles,
    routeLocationOrder: [
      [ // 'Northern Strait (Night > Day > Evening)'
        { location: 'southern', phase: 'beforeSpectral' },
        { location: 'southern', phase: 'spectralNight' },
        { location: 'southern', phase: 'afterSpectral' },
        { location: 'gladionBay', phase: 'beforeSpectral' },
        { location: 'gladionBay', phase: 'beforeSpectralShowers' },
        { location: 'gladionBay', phase: 'spectralDay' },
        { location: 'gladionBay', phase: 'afterSpectral' },
        { location: 'northern', phase: 'beforeSpectral' },
        { location: 'northern', phase: 'beforeSpectralSnow' },
        { location: 'northern', phase: 'spectralEvening' },
        { location: 'northern', phase: 'afterSpectral' }
      ],
      [ // 'Northern Strait (Day > Evening > Night)'
        { location: 'southern', phase: 'beforeSpectral' },
        { location: 'southern', phase: 'spectralDay' },
        { location: 'southern', phase: 'afterSpectral' },
        { location: 'gladionBay', phase: 'beforeSpectral' },
        { location: 'gladionBay', phase: 'beforeSpectralShowers' },
        { location: 'gladionBay', phase: 'spectralEvening' },
        { location: 'gladionBay', phase: 'afterSpectral' },
        { location: 'northern', phase: 'beforeSpectral' },
        { location: 'northern', phase: 'beforeSpectralSnow' },
        { location: 'northern', phase: 'spectralNight' },
        { location: 'northern', phase: 'afterSpectral' }
      ],
      [ // 'Northern Strait (Evening > Night > Day)'
        { location: 'southern', phase: 'beforeSpectral' },
        { location: 'southern', phase: 'spectralEvening' },
        { location: 'southern', phase: 'afterSpectral' },
        { location: 'gladionBay', phase: 'beforeSpectral' },
        { location: 'gladionBay', phase: 'beforeSpectralShowers' },
        { location: 'gladionBay', phase: 'spectralNight' },
        { location: 'gladionBay', phase: 'afterSpectral' },
        { location: 'northern', phase: 'beforeSpectral' },
        { location: 'northern', phase: 'beforeSpectralSnow' },
        { location: 'northern', phase: 'spectralDay' },
        { location: 'northern', phase: 'afterSpectral' }
      ],
      [ // 'Rhotano Sea (Night > Day > Evening)'
        { location: 'gladionBay', phase: 'beforeSpectral' },
        { location: 'gladionBay', phase: 'beforeSpectralShowers' },
        { location: 'gladionBay', phase: 'spectralNight' },
        { location: 'gladionBay', phase: 'afterSpectral' },
        { location: 'southern', phase: 'beforeSpectral' },
        { location: 'southern', phase: 'spectralDay' },
        { location: 'southern', phase: 'afterSpectral' },
        { location: 'rhotanoSea', phase: 'beforeSpectral' },
        { location: 'rhotanoSea', phase: 'spectralEvening' },
        { location: 'rhotanoSea', phase: 'afterSpectral' }
      ],
      [ // 'Rhotano Sea (Day > Evening > Night)'
        { location: 'gladionBay', phase: 'beforeSpectral' },
        { location: 'gladionBay', phase: 'beforeSpectralShowers' },
        { location: 'gladionBay', phase: 'spectralDay' },
        { location: 'gladionBay', phase: 'afterSpectral' },
        { location: 'southern', phase: 'beforeSpectral' },
        { location: 'southern', phase: 'spectralEvening' },
        { location: 'southern', phase: 'afterSpectral' },
        { location: 'rhotanoSea', phase: 'beforeSpectral' },
        { location: 'rhotanoSea', phase: 'spectralNight' },
        { location: 'rhotanoSea', phase: 'afterSpectral' }
      ],
      [ // 'Rhotano Sea (Evening > Night > Day)'
        { location: 'gladionBay', phase: 'beforeSpectral' },
        { location: 'gladionBay', phase: 'beforeSpectralShowers' },
        { location: 'gladionBay', phase: 'spectralEvening' },
        { location: 'gladionBay', phase: 'afterSpectral' },
        { location: 'southern', phase: 'beforeSpectral' },
        { location: 'southern', phase: 'spectralNight' },
        { location: 'southern', phase: 'afterSpectral' },
        { location: 'rhotanoSea', phase: 'beforeSpectral' },
        { location: 'rhotanoSea', phase: 'spectralDay' },
        { location: 'rhotanoSea', phase: 'afterSpectral' }
      ],
      [ // 'Rothlyt Sound (Night > Day > Evening)'
        { location: 'cieldalaes', phase: 'beforeSpectral' },
        { location: 'cieldalaes', phase: 'spectralNight' },
        { location: 'cieldalaes', phase: 'afterSpectral' },
        { location: 'rhotanoSea', phase: 'beforeSpectral' },
        { location: 'rhotanoSea', phase: 'spectralDay' },
        { location: 'rhotanoSea', phase: 'afterSpectral' },
        { location: 'rothlytSound', phase: 'beforeSpectral' },
        { location: 'rothlytSound', phase: 'spectralEvening' },
        { location: 'rothlytSound', phase: 'afterSpectral' }
      ],
      [ // 'Rothlyt Sound (Day > Evening > Night)'
        { location: 'cieldalaes', phase: 'beforeSpectral' },
        { location: 'cieldalaes', phase: 'spectralDay' },
        { location: 'cieldalaes', phase: 'afterSpectral' },
        { location: 'rhotanoSea', phase: 'beforeSpectral' },
        { location: 'rhotanoSea', phase: 'spectralEvening' },
        { location: 'rhotanoSea', phase: 'afterSpectral' },
        { location: 'rothlytSound', phase: 'beforeSpectral' },
        { location: 'rothlytSound', phase: 'spectralNight' },
        { location: 'rothlytSound', phase: 'afterSpectral' }
      ],
      [ // 'Rothlyt Sound (Evening > Night > Day)'
        { location: 'cieldalaes', phase: 'beforeSpectral' },
        { location: 'cieldalaes', phase: 'spectralEvening' },
        { location: 'cieldalaes', phase: 'afterSpectral' },
        { location: 'rhotanoSea', phase: 'beforeSpectral' },
        { location: 'rhotanoSea', phase: 'spectralNight' },
        { location: 'rhotanoSea', phase: 'afterSpectral' },
        { location: 'rothlytSound', phase: 'beforeSpectral' },
        { location: 'rothlytSound', phase: 'spectralDay' },
        { location: 'rothlytSound', phase: 'afterSpectral' }
      ],
      [ // 'Bloodbrine Sea (Night > Day > Evening)'
        { location: 'cieldalaes', phase: 'beforeSpectral' },
        { location: 'cieldalaes', phase: 'spectralNight' },
        { location: 'cieldalaes', phase: 'afterSpectral' },
        { location: 'northern', phase: 'beforeSpectral' },
        { location: 'northern', phase: 'beforeSpectralSnow' },
        { location: 'northern', phase: 'spectralDay' },
        { location: 'northern', phase: 'afterSpectral' },
        { location: 'bloodbrineSea', phase: 'beforeSpectral' },
        { location: 'bloodbrineSea', phase: 'spectralEvening' },
        { location: 'bloodbrineSea', phase: 'afterSpectral' }
      ],
      [ // 'Bloodbrine Sea (Day > Evening > Night)'
        { location: 'cieldalaes', phase: 'beforeSpectral' },
        { location: 'cieldalaes', phase: 'spectralDay' },
        { location: 'cieldalaes', phase: 'afterSpectral' },
        { location: 'northern', phase: 'beforeSpectral' },
        { location: 'northern', phase: 'beforeSpectralSnow' },
        { location: 'northern', phase: 'spectralEvening' },
        { location: 'northern', phase: 'afterSpectral' },
        { location: 'bloodbrineSea', phase: 'beforeSpectral' },
        { location: 'bloodbrineSea', phase: 'spectralNight' },
        { location: 'bloodbrineSea', phase: 'afterSpectral' }
      ],
      [ // 'Bloodbrine Sea (Evening > Night > Day)'
        { location: 'cieldalaes', phase: 'beforeSpectral' },
        { location: 'cieldalaes', phase: 'spectralEvening' },
        { location: 'cieldalaes', phase: 'afterSpectral' },
        { location: 'northern', phase: 'beforeSpectral' },
        { location: 'northern', phase: 'beforeSpectralSnow' },
        { location: 'northern', phase: 'spectralNight' },
        { location: 'northern', phase: 'afterSpectral' },
        { location: 'bloodbrineSea', phase: 'beforeSpectral' },
        { location: 'bloodbrineSea', phase: 'spectralDay' },
        { location: 'bloodbrineSea', phase: 'afterSpectral' }
      ]
    ],
    locationFilterTitles,
    stratHeadings,
    content
  }
)

const pushFiltersJelly = (results) => {
  results.push({ location: 'gladionBay', phase: 'beforeSpectral'})
  results.push({ location: 'gladionBay', phase: 'beforeSpectralShowers' })
  results.push({ location: 'gladionBay', phase: 'spectralDay'})
  results.push({ location: 'gladionBay', phase: 'afterSpectral'})
  results.push({ location: 'jellyRouteEvening', phase: 'beforeSpectral'})
  results.push({ location: 'jellyRouteEvening', phase: 'spectralEvening'})
  results.push({ location: 'jellyRouteEvening', phase: 'afterSpectral'})
  results.push({ location: 'rhotanoSea', phase: 'beforeSpectral'})
  results.push({ location: 'jellyRouteNight', phase: 'spectralNight'})
  results.push({ location: 'rhotanoSea', phase: 'afterSpectral'})
  return results;
}

const pushFiltersSeaDragon = (results) => {
  results.push({ location: 'seaDragonRouteNight', phase: 'beforeSpectral'})
  results.push({ location: 'seaDragonRouteNight', phase: 'spectralNight'})
  results.push({ location: 'seaDragonRouteNight', phase: 'afterSpectral'})
  results.push({ location: 'gladionBay', phase: 'beforeSpectral'})
  results.push({ location: 'gladionBay', phase: 'beforeSpectralShowers' })
  results.push({ location: 'gladionBay', phase: 'spectralDay'})
  results.push({ location: 'gladionBay', phase: 'afterSpectral'})
  results.push({ location: 'northern', phase: 'beforeSpectral'})
  results.push({ location: 'northern', phase: 'beforeSpectralSnow' });
  results.push({ location: 'seaDragonRouteEvening', phase: 'spectralEvening'})
  results.push({ location: 'northern', phase: 'afterSpectral'})
  return results;
}

const pushFiltersOctopus = (results) => {
  results.push({ location: 'southern', phase: 'beforeSpectral'})
  results.push({ location: 'southern', phase: 'spectralDay'})
  results.push({ location: 'southern', phase: 'afterSpectral'})
  results.push({ location: 'octopusRouteEvening', phase: 'beforeSpectral'})
  results.push({ location: 'octopusRouteEvening', phase: 'spectralEvening'})
  results.push({ location: 'octopusRouteEvening', phase: 'afterSpectral'})
  results.push({ location: 'northern', phase: 'beforeSpectral'})
  results.push({ location: 'northern', phase: 'beforeSpectralSnow' });
  results.push({ location: 'octopusRouteNight', phase: 'spectralNight'})
  results.push({ location: 'northern', phase: 'afterSpectral'})
  return results;
}

const pushFiltersShark = (results) => {
  results.push({ location: 'sharkRouteEvening', phase: 'beforeSpectral'})
  results.push({ location: 'sharkRouteEvening', phase: 'spectralEvening'})
  results.push({ location: 'sharkRouteEvening', phase: 'afterSpectral'})
  results.push({ location: 'southern', phase: 'beforeSpectral'})
  results.push({ location: 'southern', phase: 'spectralNight'})
  results.push({ location: 'southern', phase: 'afterSpectral'})
  results.push({ location: 'sharkRouteDay', phase: 'beforeSpectral'})
  results.push({ location: 'sharkRouteDay', phase: 'spectralDay'})
  results.push({ location: 'sharkRouteDay', phase: 'afterSpectral'})
  return results;
}

const pushFiltersCrab = (results) => {
  results.push({ location: 'crabRouteEvening', phase: 'beforeSpectral'})
  results.push({ location: 'crabRouteEvening', phase: 'spectralEvening'})
  results.push({ location: 'crabRouteEvening', phase: 'afterSpectral'})
  results.push({ location: 'crabRouteNight', phase: 'beforeSpectral'})
  results.push({ location: 'crabRouteNight', phase: 'spectralNight'})
  results.push({ location: 'crabRouteNight', phase: 'afterSpectral'})
  results.push({ location: 'crabRouteDay', phase: 'beforeSpectral'})
  results.push({ location: 'crabRouteDay', phase: 'spectralDay'})
  results.push({ location: 'crabRouteDay', phase: 'afterSpectral'})
  
  return results;
}

const pushFiltersBalloon = (results) => {
  results.push({ location: 'balloonRouteDay', phase: 'beforeSpectral'})
  results.push({ location: 'balloonRouteDay', phase: 'spectralDay'})
  results.push({ location: 'balloonRouteDay', phase: 'afterSpectral'})
  results.push({ location: 'balloonRouteEvening', phase: 'beforeSpectral'})
  results.push({ location: 'balloonRouteEvening', phase: 'spectralEvening'})
  results.push({ location: 'balloonRouteEvening', phase: 'afterSpectral'})
  results.push({ location: 'balloonRouteNight', phase: 'beforeSpectral'})
  results.push({ location: 'balloonRouteNight', phase: 'spectralNight'})
  results.push({ location: 'balloonRouteNight', phase: 'afterSpectral'})
  return results;
}

const pushFiltersManta = (results) => {
  results.push({ location: 'mantaRouteDay', phase: 'beforeSpectral'})
  results.push({ location: 'mantaRouteDay', phase: 'spectralDay'})
  results.push({ location: 'mantaRouteDay', phase: 'afterSpectral'})
  results.push({ location: 'northern', phase: 'beforeSpectral'})
  results.push({ location: 'northern', phase: 'beforeSpectralSnow' });
  results.push({ location: 'northern', phase: 'spectralEvening'})
  results.push({ location: 'northern', phase: 'afterSpectral'})
  results.push({ location: 'bloodbrineSea', phase: 'beforeSpectral'})
  results.push({ location: 'mantaRouteNight', phase: 'spectralNight'})
  results.push({ location: 'bloodbrineSea', phase: 'afterSpectral'})
  return results;
}

const pushFiltersGladionBay = (filters, results) => {
  if (filters.gladionBayDay || filters.gladionBayEvening || filters.gladionBayNight ) {
    results.push({ location: 'gladionBay', phase: 'beforeSpectral' });
    results.push({ location: 'gladionBay', phase: 'beforeSpectralShowers' });
  }
  if (filters.gladionBayDay) {
    results.push({ location: 'gladionBay', phase: 'spectralDay' });
  }
  if (filters.gladionBayEvening) {
    results.push({ location: 'gladionBay', phase: 'spectralEvening' });
  }
  if (filters.gladionBayNight) {
    results.push({ location: 'gladionBay', phase: 'spectralNight' });
  }
  if (filters.gladionBayDay || filters.gladionBayEvening || filters.gladionBayNight ) {
    results.push({ location: 'gladionBay', phase: 'afterSpectral' });
  }
  return results;
}

const pushFiltersSouthern = (filters, results) => {
  if (filters.southernDay || filters.southernEvening || filters.southernNight ) {
    results.push({ location: 'southern', phase: 'beforeSpectral' });      
  }
  if (filters.southernDay) {
    results.push({ location: 'southern', phase: 'spectralDay' });
  }
  if (filters.southernEvening) {
    results.push({ location: 'southern', phase: 'spectralEvening' });
  }
  if (filters.southernNight) {
    results.push({ location: 'southern', phase: 'spectralNight' });
  }
  if (filters.southernDay || filters.southernEvening || filters.southernNight ) {
    results.push({ location: 'southern', phase: 'afterSpectral' });
  }
  return results;
}

const pushFiltersCieldalaes = (filters, results) => {
  if (filters.cieldalaesDay || filters.cieldalaesEvening || filters.cieldalaesNight ) {
    results.push({ location: 'cieldalaes', phase: 'beforeSpectral' });      
  }
  if (filters.cieldalaesDay) {
    results.push({ location: 'cieldalaes', phase: 'spectralDay' });
  }
  if (filters.cieldalaesEvening) {
    results.push({ location: 'cieldalaes', phase: 'spectralEvening' });
  }
  if (filters.cieldalaesNight) {
    results.push({ location: 'cieldalaes', phase: 'spectralNight' });
  }
  if (filters.cieldalaesDay || filters.cieldalaesEvening || filters.cieldalaesNight ) {
    results.push({ location: 'cieldalaes', phase: 'afterSpectral' });
  }
  return results;
}

const pushFiltersRhotanoSea = (filters, results) => {
  if (filters.rhotanoSeaDay || filters.rhotanoSeaEvening || filters.rhotanoSeaNight ) {
    results.push({ location: 'rhotanoSea', phase: 'beforeSpectral' });      
  }
  if (filters.rhotanoSeaDay) {
    results.push({ location: 'rhotanoSea', phase: 'spectralDay' });
  }
  if (filters.rhotanoSeaEvening) {
    results.push({ location: 'rhotanoSea', phase: 'spectralEvening' });
  }
  if (filters.rhotanoSeaNight) {
    results.push({ location: 'rhotanoSea', phase: 'spectralNight' });
  }
  if (filters.rhotanoSeaDay || filters.rhotanoSeaEvening || filters.rhotanoSeaNight ) {
    results.push({ location: 'rhotanoSea', phase: 'afterSpectral' });
  }
  return results;
}

const pushFiltersNorthern = (filters, results) => {
  if (filters.northernDay || filters.northernEvening || filters.northernNight ) {
    results.push({ location: 'northern', phase: 'beforeSpectral' });      
  }
  if (filters.northernDay || filters.northernEvening || filters.northernNight ) {
    results.push({ location: 'northern', phase: 'beforeSpectralSnow' });      
  }
  if (filters.northernDay) {
    results.push({ location: 'northern', phase: 'spectralDay' });
  }
  if (filters.northernEvening) {
    results.push({ location: 'northern', phase: 'spectralEvening' });
  }
  if (filters.northernNight) {
    results.push({ location: 'northern', phase: 'spectralNight' });
  }
  if (filters.northernDay || filters.northernEvening || filters.northernNight ) {
    results.push({ location: 'northern', phase: 'afterSpectral' });
  }
  return results;
}

const pushFiltersRothlytSound = (filters, results) => {
  if (filters.rothlytSoundDay || filters.rothlytSoundEvening || filters.rothlytSoundNight ) {
    results.push({ location: 'rothlytSound', phase: 'beforeSpectral' });      
  }
  if (filters.rothlytSoundDay) {
    results.push({ location: 'rothlytSound', phase: 'spectralDay' });
  }
  if (filters.rothlytSoundEvening) {
    results.push({ location: 'rothlytSound', phase: 'spectralEvening' });
  }
  if (filters.rothlytSoundNight) {
    results.push({ location: 'rothlytSound', phase: 'spectralNight' });
  }
  if (filters.rothlytSoundDay || filters.rothlytSoundEvening || filters.rothlytSoundNight ) {
    results.push({ location: 'rothlytSound', phase: 'afterSpectral' });
  }
  return results;
}

const pushFiltersBloodbrineSea = (filters, results) => {
  if (filters.bloodbrineSeaDay || filters.bloodbrineSeaEvening || filters.bloodbrineSeaNight ) {
    results.push({ location: 'bloodbrineSea', phase: 'beforeSpectral' });      
  }
  if (filters.bloodbrineSeaDay) {
    results.push({ location: 'bloodbrineSea', phase: 'spectralDay' });
  }
  if (filters.bloodbrineSeaEvening) {
    results.push({ location: 'bloodbrineSea', phase: 'spectralEvening' });
  }
  if (filters.bloodbrineSeaNight) {
    results.push({ location: 'bloodbrineSea', phase: 'spectralNight' });
  }
  if (filters.bloodbrineSeaDay || filters.bloodbrineSeaEvening || filters.bloodbrineSeaNight ) {
    results.push({ location: 'bloodbrineSea', phase: 'afterSpectral' });
  }
  return results;
}

export const getters = {
  getTargetTitles(state) {
    return state.targetTitles;
  },
  getTitleFilterTitles(state) {
    return state.titleFilterTitles;
  },
  getSectionTitles(state) {
    return state.sectionTitles;
  },
  getTypeTitles(state) {
    return state.typeTitles;
  },
  getRouteTitles(state) {
    return state.routeTitles;
  },
  getContent(state) {
    return state.content;
  },
  getLocationFilterTitles(state) {
    return state.locationFilterTitles;
  },
  getStratHeadings(state) {
    return state.stratHeadings;
  },
  getTargetTitleOrder(state) {
    let results = [];
    if (state.filters.jellyRoute) {
      results = pushFiltersJelly(results);
    }
    if (state.filters.seaDragonRoute) {
      results = pushFiltersSeaDragon(results);
    }
    if (state.filters.octopusRoute) {
      results = pushFiltersOctopus(results);
    }
    if (state.filters.sharkRoute) {
      results = pushFiltersShark(results);
    }
    if (state.filters.crabRoute) {
      results = pushFiltersCrab(results);
    }
    if (state.filters.balloonRoute) {
      results = pushFiltersBalloon(results);
    }
    if (state.filters.mantaRoute) {
      results = pushFiltersManta(results);
    }
    return results;
  },
  getRouteLocationOrder(state) {
    return state.routeLocationOrder;
  },
  getLocationTimeOrder(state) {
    let results = [];
    results = pushFiltersGladionBay(state.filters, results);
    results = pushFiltersSouthern(state.filters, results);
    results = pushFiltersCieldalaes(state.filters, results);
    results = pushFiltersRhotanoSea(state.filters, results);
    results = pushFiltersNorthern(state.filters, results);
    results = pushFiltersRothlytSound(state.filters, results);
    results = pushFiltersBloodbrineSea(state.filters, results);
    
    return results;
  },
  hasLocations(state) {
    return (
      state.filters.gladionBayDay ||
      state.filters.gladionBayEvening ||
      state.filters.gladionBayNight ||
      state.filters.southernDay ||
      state.filters.southernEvening ||
      state.filters.southernNight ||
      state.filters.rhotanoSeaDay ||
      state.filters.rhotanoSeaEvening ||
      state.filters.rhotanoSeaNight ||
      state.filters.northernDay ||
      state.filters.northernEvening ||
      state.filters.northernNight ||
      state.filters.cieldalaesDay ||
      state.filters.cieldalaesEvening ||
      state.filters.cieldalaesNight ||
      state.filters.rothlytSoundDay ||
      state.filters.rothlytSoundEvening ||
      state.filters.rothlytSoundNight ||
      state.filters.bloodbrineSeaDay ||
      state.filters.bloodbrineSeaEvening ||
      state.filters.bloodbrineSeaNight
    );
  }
}

export const mutations = {
  updateFilters(state, filters) {
    state.filters = {...state.filters, ...filters};
  },
  updateCurrentRoute(state, currentRoute) {
    state.currentRoute = currentRoute;
    const resetRouteFilters = {
      rhotanoSeaDayEveningNightRoute: false,
      rhotanoSeaEveningNightDayRoute: false,
      rhotanoSeaNightDayEveningRoute: false,
      northernDayEveningNightRoute: false,
      northernEveningNightDayRoute: false,
      northernNightDayEveningRoute: false,
      rothlytSoundDayEveningNightRoute: false,
      rothlytSoundEveningNightDayRoute: false,
      rothlytSoundNightDayEveningRoute: false,
      bloodbrineSeaDayEveningNightRoute: false,
      bloodbrineSeaEveningNightDayRoute: false,
      bloodbrineSeaNightDayEveningRoute: false      
    };
    switch (currentRoute) {
      case NORTHERN_NIGHT_DAY_EVENING:
        state.filters = {...state.filters, ...resetRouteFilters, ...{ northernNightDayEveningRoute: true }};
      break;
      case NORTHERN_DAY_EVENING_NIGHT:
        state.filters = {...state.filters, ...resetRouteFilters, ...{ northernDayEveningNightRoute: true }};
      break;
      case NORTHERN_EVENING_NIGHT_DAY:
        state.filters = {...state.filters, ...resetRouteFilters, ...{ northernEveningNightDayRoute: true }};
      break;
      case RHOTANO_NIGHT_DAY_EVENING:
        state.filters = {...state.filters, ...resetRouteFilters, ...{ rhotanoSeaNightDayEveningRoute: true }};
      break;
      case RHOTANO_DAY_EVENING_NIGHT:
        state.filters = {...state.filters, ...resetRouteFilters, ...{ rhotanoSeaDayEveningNightRoute: true }};
      break;
      case RHOTANO_EVENING_NIGHT_DAY:
        state.filters = {...state.filters, ...resetRouteFilters, ...{ rhotanoSeaEveningNightDayRoute: true }};
      break;
      case ROTHLYT_NIGHT_DAY_EVENING:
        state.filters = {...state.filters, ...resetRouteFilters, ...{ rothlytSoundNightDayEveningRoute: true }};
      break;
      case ROTHLYT_DAY_EVENING_NIGHT:
        state.filters = {...state.filters, ...resetRouteFilters, ...{ rothlytSoundDayEveningNightRoute: true }};
      break;
      case ROTHLYT_EVENING_NIGHT_DAY:
        state.filters = {...state.filters, ...resetRouteFilters, ...{ rothlytSoundEveningNightDayRoute: true }};
      break;
      case BLOODBRINE_NIGHT_DAY_EVENING:
        state.filters = {...state.filters, ...resetRouteFilters, ...{ bloodbrineSeaNightDayEveningRoute: true }};
      break;
      case BLOODBRINE_DAY_EVENING_NIGHT:
        state.filters = {...state.filters, ...resetRouteFilters, ...{ bloodbrineSeaDayEveningNightRoute: true }};
      break;
      case BLOODBRINE_EVENING_NIGHT_DAY:
        state.filters = {...state.filters, ...resetRouteFilters, ...{ bloodbrineSeaEveningNightDayRoute: true }};
      break;
    }
  },
  updateCurrentTitleRoute(state, currentTitleRoute) {
    state.currentTitleRoute = currentTitleRoute;
    const resetRouteFilters = {
      jellyRoute: false,
      seaDragonRoute: false,
      octopusRoute: false,
      sharkRoute: false,
      crabRoute: false,
      balloonRoute: false,
      mantaRoute: false
    };
    switch (currentTitleRoute) {
      case JELLY_ROUTE:
        state.filters = {...state.filters, ...resetRouteFilters, ...{ jellyRoute: true }};
      break;
      case SEA_DRAGON_ROUTE:
        state.filters = {...state.filters, ...resetRouteFilters, ...{ seaDragonRoute: true }};
      break;
      case OCTOPUS_ROUTE:
        state.filters = {...state.filters, ...resetRouteFilters, ...{ octopusRoute: true }};
      break;
      case SHARK_ROUTE:
        state.filters = {...state.filters, ...resetRouteFilters, ...{ sharkRoute: true }};
      break;
      case CRAB_ROUTE:
        state.filters = {...state.filters, ...resetRouteFilters, ...{ crabRoute: true }};
      break;
      case BALLOON_ROUTE:
        state.filters = {...state.filters, ...resetRouteFilters, ...{ balloonRoute: true }};
      break;
      case MANTA_ROUTE:
        state.filters = {...state.filters, ...resetRouteFilters, ...{ mantaRoute: true }};
      break;
    }
  }
}