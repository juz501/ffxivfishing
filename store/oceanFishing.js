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

export const state = () => (
  {
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
      cieldalaesDay: false,
      cieldalaesEvening: false,
      cieldalaesNight: false,
      rothlytSoundDay: false,
      rothlytSoundEvening: false,
      rothlytSoundNight: false,
      bloodbrineSeaDay: false,
      bloodbrineSeaEvening: false,
      bloodbrineSeaNight: false,
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
      bloodbrineSeaEveningNightDayRoute: BLOODBRINE_EVENING_NIGHT_DAY
    },
    currentRoute: null,
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
    routeTitles: [
      'Northern&nbsp;Strait (Night&nbsp;>&nbsp;Day&nbsp;>&nbsp;Evening) - Coral',
      'Northern&nbsp;Strait (Day&nbsp;>&nbsp;Evening&nbsp;>&nbsp;Night)',
      'Northern&nbsp;Strait (Evening&nbsp;>&nbsp;Night&nbsp;>&nbsp;Day) - Sothis&nbsp;Elasmo',
      'Rhotano&nbsp;Sea (Night&nbsp;>&nbsp;Day&nbsp;>&nbsp;Evening) - Sothis&nbsp;Stonescale',
      'Rhotano&nbsp;Sea (Day&nbsp;>&nbsp;Evening&nbsp;>&nbsp;Night)',
      'Rhotano&nbsp;Sea (Evening&nbsp;>&nbsp;Night&nbsp;>&nbsp;Day) - Coral',
      'Rothlyt&nbsp;Sound (Night&nbsp;>&nbsp;Day&nbsp;>&nbsp;Evening) - Hafgufa&nbsp;Placodus',
      'Rothlyt&nbsp;Sound (Day&nbsp;>&nbsp;Evening&nbsp;>&nbsp;Night) - Stonescale',
      'Rothlyt&nbsp;Sound (Evening&nbsp;>&nbsp;Night&nbsp;>&nbsp;Day)',
      'Bloodbrine&nbsp;Sea (Night&nbsp;>&nbsp;Day&nbsp;>&nbsp;Evening) - Hafgufa&nbsp;Elasmo',
      'Bloodbrine&nbsp;Sea (Day&nbsp;>&nbsp;Evening&nbsp;>&nbsp;Night)',
      'Bloodbrine&nbsp;Sea (Evening&nbsp;>&nbsp;Night&nbsp;>&nbsp;Day) - Toad'
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
    locationFilterTitles: {
      gladionBay: {
        day: 'Gladion&nbsp;Bay (Day)',
        evening: 'Gladion&nbsp;Bay (Evening)',
        night: 'Gladion&nbsp;Bay (Night)'
      },
      southern: {
        day: 'Southern&nbsp;Strait of Merlthor (Day)',
        evening: 'Southern&nbsp;Strait of Merlthor (Evening)',
        night: 'Southern&nbsp;Strait of Merlthor (Night)'
      },
      rhotanoSea: {
        day: 'Rhotano&nbsp;Sea (Day)',
        evening: 'Rhotano&nbsp;Sea (Evening)',
        night: 'Rhotano&nbsp;Sea (Night)'
      },
      northern: {
        day: 'Northern&nbsp;Strait of Merlthor (Day)',
        evening: 'Northern&nbsp;Strait of Merlthor (Evening)',
        night: 'Northern&nbsp;Strait of Merlthor (Night)'
      },
      cieldalaes: {
        day: 'Cieldalaes (Day)',
        evening: 'Cieldalaes (Evening)',
        night: 'Cieldalaes (Night)'
      },
      rothlytSound: {
        day: 'Rothlyt&nbsp;Sound (Day)',
        evening: 'Rothlyt&nbsp;Sound (Evening)',
        night: 'Rothlyt&nbsp;Sound (Night)'
      },
      bloodbrineSea: {
        day: 'Bloodbrine&nbsp;Sea (Day)',
        evening: 'Bloodbrine&nbsp;Sea (Evening)',
        night: 'Bloodbrine&nbsp;Sea (Night)'
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
          strategy: 'Surface&nbsp;Slap (Tarnished&nbsp;Shark&nbsp;!!!), Reel&nbsp;only&nbsp;!!! (Spectral&nbsp;Megalodon&nbsp;!!!)' },
        beforeSpectralShowers: {
          phase: 'Before Spectral',
          weather: 'Showers',
          time: 'Any',
          bait: 'Plump&nbsp;Worm',
          strategy: 'Surface&nbsp;Slap (Goby&nbsp;or&nbsp;chovy) Reel&nbsp;only&nbsp;!!! (Spectral&nbsp;Megalodon&nbsp;!!!)' },
        spectralDay: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Day',
          bait: 'Ragworm',
          strategy: 'Doublehook&nbsp;! when&nbsp;>&nbsp;5secs (Casket&nbsp;Oyster&nbsp;! or Nimble&nbsp;Dancer&nbsp;!)' },
        spectralEvening: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Evening',
          bait: 'Plump&nbsp;Worm',
          strategy: 'Doublehook&nbsp;!!! (Funnel&nbsp;Shark&nbsp;!!!)' },
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
          strategy: 'Surface&nbsp;Slap (Momora&nbsp;Mora&nbsp;!!!), Reel&nbsp;only&nbsp;!!! (Spectral&nbsp;Discus&nbsp;!!!)' },
        spectralDay: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Day',
          bait: 'Krill',
          strategy: 'Doublehook&nbsp;!! @&nbsp;5secs (Mythril&nbsp;Sovereign&nbsp;!!)' },
        spectralEvening: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Evening',
          bait: 'Ragworm + Mooch, <em>Ragworm</em>',
          strategy: 'Doublehook&nbsp;!!! (Hi-Aetherlouse&nbsp;! + Roguesaurus&nbsp;!!!) or <em>Doublehook&nbsp;! when&nbsp;>&nbsp;5&nbsp;secs (Sea&nbsp;Nettle&nbsp;!)</em>' },
        spectralNight: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Night',
          bait: '(Ragworm + Mooch) or (Ragworm + Mooch)&nbsp;x2 =&nbsp;<strong>Shrimp&nbsp;Cage&nbsp;Feeder</strong>',
          strategy: '(Hi-Aetherlouse&nbsp;! + Aetheric&nbsp;Seadragon&nbsp;!!) or (Hi-Aetherlouse&nbsp;! + Great&nbsp;Grandmarlyn&nbsp;!!)&nbsp;x2 =&nbsp;<strong>(Coral&nbsp;Manta)</strong>' },
        afterSpectral: {
          phase: 'After Spectral',
          weather: 'Normal',
          time: 'Any',
          bait: 'Krill&nbsp;+&nbsp;Mooch =&nbsp;<strong>Plump&nbsp;Worm</strong>',
          strategy: '(Ghoul&nbsp;Barracuda&nbsp;!!) + (Gladdius&nbsp;!!) =&nbsp;<strong>(Little&nbsp;Leviathan&nbsp;!!!)</strong>'
        }
      },
      rhotanoSea: {
        location: 'Rhotano Sea',
        beforeSpectral: {
          phase: 'Before Spectral',
          weather: 'Normal',
          time: 'Any',
          bait: 'Plump Worm, <em>Ragworm</em>',
          strategy: 'Surface&nbsp;Slap (Chrome&nbsp;Hammerhead&nbsp;!!!) Reel&nbsp;only&nbsp;!!! (Spectral&nbsp;Bass&nbsp;!!!), <em>Lampfish&nbsp;!</em>' },
        spectralDay: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Day',
          bait: 'Plump Worm',
          strategy: 'Doublehook&nbsp;!!! (Executioner&nbsp;!!!)' },
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
          strategy: 'Doublehook&nbsp;! when&nbsp;>&nbsp;5secs (Floating&nbsp;Saucer&nbsp;!)' },
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
          strategy: 'Surface&nbsp;Slap (Oschon\'s&nbsp;stone&nbsp;!!) Reel&nbsp;only&nbsp;!!! (Spectral&nbsp;Sea&nbsp;Bo&nbsp;!!!)' },
        beforeSpectralSnow: {
          phase: 'Before Spectral',
          weather: 'Snow/Blizzard',
          time: 'Any',
          bait: 'Ragworm',
          strategy: 'Surface&nbsp;Slap (Megasquid&nbsp;!!) Reel&nbsp;only&nbsp;!!! (Spectral&nbsp;Sea&nbsp;Bo&nbsp;!!!)' },
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
          strategy: 'Doublehook&nbsp;! when&nbsp;>&nbsp;5secs (Coral&nbsp;Seadragon&nbsp;!)' },
        spectralNight: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Night',
          bait: 'Krill',
          strategy: 'Doublehook&nbsp;!! when&nbsp;>&nbsp;5secs (Mopbeard&nbsp;!!)' },
        afterSpectral: {
          phase: 'After Spectral',
          weather: 'Normal',
          time: 'Any',
          bait: 'Ragworm + Mooch =&nbsp;<strong>Ragworm</strong>',
          strategy: '(Tossed&nbsp;dagger&nbsp;!) + (Elder&nbsp;Dinicthys&nbsp;!!) =&nbsp;<strong>(Shooting&nbsp;Star&nbsp;!!!)</strong>'
        }
      },
      cieldalaes: {
        location: 'Cieldalaes',
        beforeSpectral: {
          phase: 'Before Spectral',
          weather: 'Normal',
          time: 'Any',
          bait: 'Ragworm',
          strategy: 'Surface&nbsp;Slap (King&nbsp;Cobrafish&nbsp;!!!), (Spectral&nbsp;Butterfly&nbsp;!!!)' },
        spectralDay: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Day',
          bait: 'Ragworm',
          strategy: 'Doublehook&nbsp;!! when&nbsp;>&nbsp;5secs (Devil\'s&nbsp;Sting&nbsp;!!)' },
        spectralEvening: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Evening',
          bait: 'Plumpworm &amp; <em>Krill</em>',
          strategy: 'Doublehook&nbsp;!! (Meandering&nbsp;Mora&nbsp;!! &amp; <em>Flaming&nbsp;Eel&nbsp;!!</em>)' },
        spectralNight: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Night',
          bait: 'Plump&nbsp;Wormx2 + Krill =<strong>Squid Strip</strong>',
          strategy: 'Jetborne&nbsp;Manta&nbsp;!!!&nbsp;x2 + Mistbeard\'s&nbsp;Cup&nbsp!! =<strong>Hafgufa&nbsp;!!!</strong>)' },
        afterSpectral: {
          phase: 'After Spectral',
          weather: 'Normal',
          time: 'Any',
          bait: 'Ragworm&nbsp;x3 =<strong>Krill</strong>',
          strategy: 'Metalic&nbsp;Boxfish&nbsp;!&nbsp;x3 =<strong>Cieldalaes&nbsp;Geode&nbsp;!!!</strong>'
        }
      },
      rothlytSound: {
        location: 'Rothlyt Sound',
        beforeSpectral: {
          phase: 'Before Spectral',
          weather: 'Normal',
          time: 'Any',
          bait: 'Ragworm',
          strategy: 'Surface&nbsp;Slap (Thavnairian&nbsp;Shark&nbsp;!!!), (Spectresaur&nbsp;!!!)' },
        spectralDay: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Day',
          bait: 'Krill',
          strategy: 'Doublehook&nbsp;!! when&nbsp;>&nbsp;5secs (Pearl&nbsp;Bombfish&nbsp;!! &amp; Knifejaw&nbsp;!!)' },
        spectralEvening: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Evening',
          bait: 'Ragworm + Mooch =<strong>Ragworm</strong>',
          strategy: 'Rothlyt&nbsp;Mussel&nbsp;!!! + Trollfish&nbsp;! =<strong>Placodus&nbsp;!!!</strong>' },
        spectralNight: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Night',
          bait: 'Ragworm',
          strategy: 'Doublehook&nbsp;!! when&nbsp;>&nbsp;5secs (Pearl&nbsp;Bombfish&nbsp;!! &amp; Knifejaw&nbsp;!!)' },
        afterSpectral: {
          phase: 'After Spectral',
          weather: 'Normal',
          time: 'Any',
          bait: 'Ragworm&nbsp;x3 =<strong>Ragworm</strong>',
          strategy: '(Rothlyt&nbsp;Kelp&nbsp;!)&nbsp;x3= <strong>Ginkgo Fin</strong>'
        }
      },
      bloodbrineSea: {
        location: 'Bloodbrine Sea',
        beforeSpectral: {
          phase: 'Before Spectral',
          weather: 'Normal',
          time: 'Any',
          bait: 'Krill',
          strategy: 'Reel&nbsp;only&nbsp;!!! (Spectral&nbsp;Eel&nbsp;!!!)' },
        spectralDay: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Day',
          bait: 'Krill x3 = <strong>Pillbug</strong>',
          strategy: '(Beatific&nbsp;Vision&nbsp;!!) x3 = <strong>Seafaring&nbsp;Toad&nbsp;!!!</strong>' },
        spectralEvening: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Evening',
          bait: 'Plump&nbsp;Worm',
          strategy: 'Doublehook&nbsp;!!! when&nbsp;>&nbsp;5secs (Quartz&nbsp;Hammerhead&nbsp;!!!)' },
        spectralNight: {
          phase: 'Spectral',
          weather: 'Normal',
          time: 'Night',
          bait: 'Krill',
          strategy: 'Doublehook&nbsp;!! (Skaldminni&nbsp;!!)' },
        afterSpectral: {
          phase: 'After Spectral',
          weather: 'Normal',
          time: 'Any',
          bait: 'Snagging&nbsp;+&nbsp;Ragworm =<strong>Krill</strong>',
          strategy: 'Sunken&nbsp;Mask&nbsp;!!! =<strong>Bareface&nbsp;!!!</strong>'
        }
      }
    }
  }
)

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
  }
}