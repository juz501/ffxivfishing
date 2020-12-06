import Vue from 'vue';

export const NORTHERN_NIGHT_DAY_EVENING = 1;
export const NORTHERN_DAY_EVENING_NIGHT = 2;
export const NORTHERN_EVENING_NIGHT_DAY = 3;
export const RHOTANO_NIGHT_DAY_EVENING = 4;
export const RHOTANO_DAY_EVENING_NIGHT = 5;
export const RHOTANO_EVENING_NIGHT_DAY = 6;

export const state = () => (
  {
    sectionTitles: {
      type: 'Display Type',
      route: 'Routes',
      location: 'Locations',
      strat: 'Bait & Strategies'
    },
    typeTitles: {
      route: 'Per Route',
      location: 'Per Location'
    },
    routePattern: [
      0,3,1,4,2,5,0,3,1,4,2,5,
      3,0,4,1,5,2,3,0,4,1,5,2,
      1,4,2,5,0,3,1,4,2,5,0,3,
      4,1,5,2,3,0,4,1,5,2,3,0,
      2,5,0,3,1,4,2,5,0,3,1,4,
      5,2,3,0,4,1,5,2,3,0,4,1
    ],
    originalRoutePattern: [
      1,4,2,5,3,6,1,4,2,5,3,6,
      4,1,5,2,6,3,4,1,5,2,6,3,
      2,5,3,6,1,4,2,5,3,6,1,4,
      5,2,6,3,4,1,5,2,6,3,4,1,
      3,6,1,4,2,5,3,6,1,4,2,5,
      6,3,4,1,5,2,6,3,4,1,5,2
    ],
    routeTitles: [
      'Northern Strait (Night > Day > Evening)',
      'Northern Strait (Day > Evening > Night)',
      'Northern Strait (Evening > Night > Day)',
      'Rhotano Sea (Night > Day > Evening)',
      'Rhotano Sea (Day > Evening > Night)',
      'Rhotano Sea (Evening > Night > Day)'
    ],
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
        { location: 'northern', phase: 'afterSpectral' },
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
        { location: 'northern', phase: 'afterSpectral' },
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
        { location: 'northern', phase: 'afterSpectral' },
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
        { location: 'rhotanoSea', phase: 'afterSpectral' },
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
        { location: 'rhotanoSea', phase: 'afterSpectral' },
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
        { location: 'rhotanoSea', phase: 'afterSpectral' },
      ]
    ],
    locationFilterTitles: {
      gladionBay: {
        day: 'Gladion Bay (Day)',
        evening: 'Gladion Bay (Evening)',
        night: 'Gladion Bay (Night)'
      },
      southern: {
        day: 'Southern Strait of Merlthor (Day)',
        evening: 'Southern Strait of Merlthor (Evening)',
        night: 'Southern Strait of Merlthor (Night)'
      },
      rhotanoSea: {
        day: 'Rhotano Sea (Day)',
        evening: 'Rhotano Sea (Evening)',
        night: 'Rhotano Sea (Night)'
      },
      northern: {
        day: 'Northern Strait of Merlthor (Day)',
        evening: 'Northern Strait of Merlthor (Evening)',
        night: 'Northern Strait of Merlthor (Night)'
      }
    },
    stratHeadings: {
      location: 'Location',
      phase: 'Phase',
      weather: 'Weather',
      time: 'Time',
      bait: 'Bait',
      strat: 'Strategy'
    },
    content: {
      gladionBay: {
        location: 'Gladion Bay',
        beforeSpectral: {
          phase: 'Before Spectral',
          weather: 'Normal',
          time: 'Any',
          bait: 'Krill',
          strategy: 'Surface&nbsp;Slap (Tarnished&nbsp;Shark&nbsp;!!!) Reel&nbsp;only&nbsp;!!!' },
        beforeSpectralShowers: {
          phase: 'Before Spectral',
          weather: 'Showers',
          time: 'Any',
          bait: 'Plump Worm',
          strategy: 'Surface&nbsp;Slap (Goby&nbsp;or&nbsp;chovy) Reel&nbsp;only&nbsp;!!!' },
        spectralDay: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Day',
          bait: 'Ragworm',
          strategy: 'Doublehook&nbsp;! when&nbsp;>&nbsp;5secs' },
        spectralEvening: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Evening',
          bait: 'Plump Worm',
          strategy: 'Doublehook&nbsp;!!!' },
        spectralNight: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Night',
          bait: 'Krill + Glowworm&nbsp;x2 =&nbsp;<strong>Glowworm</strong>',
          strategy: '(Navigator\'s&nbsp;Print) + (Heavenskey)&nbsp;x2 =&nbsp;<strong>Sothis</strong>' },
        afterSpectral: {
          phase: 'After Spectral',
          weather: 'Normal',
          time: 'Any',
          bait: 'Krill&nbsp;x3 =&nbsp;<strong>Krill</strong>',
          strategy: '(Gladion&nbsp;chovy)&nbsp;x3 =&nbsp;<strong>Drunkfish</strong>'
        }
      },
      southern: {
        location: 'Southern Strait of Merlthor',
        beforeSpectral: {
          phase: 'Before Spectral',
          weather: 'Normal',
          time: 'Any',
          bait: 'Krill',
          strategy: 'Surface&nbsp;Slap (Momora&nbsp;Mora&nbsp;!!!), Reel&nbsp;only&nbsp;!!!' },
        spectralDay: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Day',
          bait: 'Krill',
          strategy: 'Doublehook&nbsp;!! (@&nbsp;5secs)' },
        spectralEvening: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Evening',
          bait: 'Ragworm + Mooch',
          strategy: '(Hi-Aetherlouse&nbsp;!) + (Doublehook&nbsp;!!!) or (Doublehook&nbsp;! when&nbsp;>&nbsp;5&nbsp;secs)' },
        spectralNight: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Night',
          bait: '(&nbsp;Ragworm + Mooch&nbsp;)&nbsp;x2 =&nbsp;<strong>Shrimp&nbsp;Cage&nbsp;Feeder</strong>',
          strategy: '(Hi-Aetherlouse&nbsp;! + Great&nbsp;Grandmarlyn&nbsp;!!)&nbsp;x2 =&nbsp;<strong>(Coral&nbsp;Manta)</strong>' },
        afterSpectral: {
          phase: 'After Spectral',
          weather: 'Normal',
          time: 'Any',
          bait: 'Krill&nbsp;+&nbsp;Mooch =&nbsp;<strong>Plump&nbsp;Worm</strong>',
          strategy: '(Barracuda&nbsp;!!) + (Gladdius&nbsp;!!) =&nbsp;<strong>(Leviathan&nbsp;!!!)</strong>'
        }
      },
      rhotanoSea: {
        location: 'Rhotano Sea',
        beforeSpectral: {
          phase: 'Before Spectral',
          weather: 'Normal',
          time: 'Any',
          bait: 'Plump Worm',
          strategy: 'Surface&nbsp;Slap (Chrome&nbsp;Hammerhead&nbsp;!!!) Reel&nbsp;only&nbsp;!!!' },
        spectralDay: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Day',
          bait: 'Plump Worm',
          strategy: 'Doublehook&nbsp;!!!' },
        spectralEvening: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Evening',
          bait: 'Ragworm + Rat&nbsp;Tail =&nbsp;<strong>Rat&nbsp;Tail</strong>',
          strategy: '(Silencer&nbsp;!) + (Deep&nbsp;Sea&nbsp;Eel&nbsp;!!) =&nbsp;<strong>(Stonescale)</strong>' },
        spectralNight: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Night',
          bait: 'Krill',
          strategy: 'Doublehook&nbsp;! when&nbsp;>&nbsp;5secs' },
        afterSpectral: {
          phase: 'After Spectral',
          weather: 'Normal',
          time: 'Any',
          bait: 'Plump&nbsp;Worm&nbsp;x2 =&nbsp;<strong>Krill</strong>',
          strategy: '(Crimson&nbsp;Monkfish)&nbsp;x2 =&nbsp;<strong>(Sabaton&nbsp;!!!)</strong>'
        }
      },
      northern: {
        location: 'Northern Strait of Merlthor',
        beforeSpectral: {
          phase: 'Before Spectral',
          weather: 'Normal',
          time: 'Any',
          bait: 'Krill',
          strategy: 'Surface&nbsp;Slap (Oschon\'s&nbsp;stone&nbsp;!!) Reel&nbsp;only&nbsp;!!!' },
        beforeSpectralSnow: {
          phase: 'Before Spectral',
          weather: 'Snow/Blizzard',
          time: 'Any',
          bait: 'Ragworm',
          strategy: 'Surface&nbsp;Slap (Megasquid&nbsp;!!) Reel&nbsp;only&nbsp;!!!' },
        spectralDay: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Day',
          bait: 'Plump&nbsp;Worm&nbsp;x3 =&nbsp;<strong>Heavy&nbsp;Steel&nbsp;Jig</strong>',
          strategy: '(Gugrusaurus&nbsp;!!!)&nbsp;x3 =&nbsp;<strong>(Elasmosaurus)</strong>' },
        spectralEvening: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Evening',
          bait: 'Ragworm',
          strategy: 'Doublehook&nbsp;! when&nbsp;>&nbsp;5secs' },
        spectralNight: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Night',
          bait: 'Krill',
          strategy: 'Doublehook&nbsp;!! when&nbsp;>&nbsp;5secs' },
        afterSpectral: {
          phase: 'After Spectral',
          weather: 'Normal',
          time: 'Any',
          bait: 'Ragworm + Mooch =&nbsp;<strong>Ragworm</strong>',
          strategy: '(Tossed&nbsp;dagger&nbsp;!) + (Elder&nbsp;Dinicthys&nbsp;!!) =&nbsp;<strong>(Shooting&nbsp;Star&nbsp;!!!)</strong>'
        }
      }
    }
  }
)


export const getters = {
  getSectionTitles(state) {
    return state.sectionTitles;
  },
  getTypeTitles(state) {
    return state.typeTitles;
  },
  getRoutePattern(state) {
    return state.routePattern;
  },
  getOriginalRoutePattern(state) {
    return state.originalRoutePattern;
  },
  getRouteScheduleByDatetime: (state) => (datetime) => {
    return [];
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
  getRouteLocationOrder(state) {
    return state.routeLocationOrder;
  },
  getLocationTimeOrder: (state) => (filters) => {
    let results = [];
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
  },
}