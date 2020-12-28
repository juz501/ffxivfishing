export const sectionTitles = {
  target: 'Target',
  type: 'Display Type',
  route: 'Routes',
  location: 'Locations',
  strat: 'Bait & Strategies'
};

export const titleFilterTitles = {
  jelly: 'Jelled Together - Rhotano&nbsp;Sea (Day&nbsp;>&nbsp;Evening&nbsp;>&nbsp;Night)',
  seaDragon: 'Maritime Dragonslayers - Northern&nbsp;Strait (Night&nbsp;>&nbsp;Day&nbsp;>&nbsp;Evening)',
  octopus: 'Octopus Travelers - Northern&nbsp;Strait (Day&nbsp;>&nbsp;Evening&nbsp;>&nbsp;Night)',
  shark: 'Certifiable Shark Hunters - Rhotano&nbsp;Sea (Evening&nbsp;>&nbsp;Night&nbsp;>&nbsp;Day)',
  crab: 'Crab Boat Crew - Bloodbrine&nbsp;Sea (Evening&nbsp;>&nbsp;Night&nbsp;>&nbsp;Day)',
  balloon: 'Balloon Catchers - Rothlyt&nbsp;Sound (Day&nbsp;>&nbsp;Evening&nbsp;>&nbsp;Night)',
  manta: 'Sticking it to the Manta - Bloodbrine&nbsp;Sea (Day&nbsp;>&nbsp;Evening&nbsp;>&nbsp;Night)'
};

export const targetTitles = {
  fish: 'Fish',
  title: 'Title'
};

export const typeTitles = {
  route: 'Per Route',
  location: 'Per Location'
};

export const routeTitles = [
  'Northern&nbsp;Strait (Night&nbsp;>&nbsp;Day&nbsp;>&nbsp;Evening) - Coral Manta',
  'Northern&nbsp;Strait (Day&nbsp;>&nbsp;Evening&nbsp;>&nbsp;Night)',
  'Northern&nbsp;Strait (Evening&nbsp;>&nbsp;Night&nbsp;>&nbsp;Day) - Sothis&nbsp;Elasmosaur',
  'Rhotano&nbsp;Sea (Night&nbsp;>&nbsp;Day&nbsp;>&nbsp;Evening) - Sothis&nbsp;Stonescale',
  'Rhotano&nbsp;Sea (Day&nbsp;>&nbsp;Evening&nbsp;>&nbsp;Night)',
  'Rhotano&nbsp;Sea (Evening&nbsp;>&nbsp;Night&nbsp;>&nbsp;Day) - Coral Manta',
  'Rothlyt&nbsp;Sound (Night&nbsp;>&nbsp;Day&nbsp;>&nbsp;Evening) - Hafgufa&nbsp;Placodus',
  'Rothlyt&nbsp;Sound (Day&nbsp;>&nbsp;Evening&nbsp;>&nbsp;Night) - Stonescale',
  'Rothlyt&nbsp;Sound (Evening&nbsp;>&nbsp;Night&nbsp;>&nbsp;Day)',
  'Bloodbrine&nbsp;Sea (Night&nbsp;>&nbsp;Day&nbsp;>&nbsp;Evening) - Hafgufa&nbsp;Elasmosaur',
  'Bloodbrine&nbsp;Sea (Day&nbsp;>&nbsp;Evening&nbsp;>&nbsp;Night)',
  'Bloodbrine&nbsp;Sea (Evening&nbsp;>&nbsp;Night&nbsp;>&nbsp;Day) - Seafaring Toad'
];

export const locationFilterTitles = {
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
};

export const stratHeadings = {
  location: 'Location',
  phase: 'Phase',
  weather: 'Weather',
  time: 'Time',
  bait: 'Bait',
  strat: 'Strategy'
};

export const content = {
  gladionBay: {
    location: 'Gladion Bay',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Krill',
      strategy: [
        '<em>Krill => Spectral&nbsp;Megalodon(!!!)</em> >&nbsp;18secs',
        'Surface&nbsp;Slap <em>Tarnished&nbsp;Shark(!!!)</em>',
        'Do not hook (! or !!) after Surface Slap'
      ]
    },
    beforeSpectralShowers: {
      phase: 'Before Spectral',
      weather: 'Showers',
      time: 'Any',
      bait: 'Plump&nbsp;Worm',
      strategy: [
        '<em>Plump&nbsp;Worm => Spectral&nbsp;Megalodon(!!!)</em>'
      ]
    },
    spectralDay: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Day',
      bait: 'Ragworm',
      strategy: [
        'Blind&nbsp;Double&nbsp;Hook(!) when&nbsp;>&nbsp;6secs <em>Ragworm => Casket&nbsp;Oyster(!)</em> or <em>Ragworm => Nimble&nbsp;Dancer(!)</em>',
      ] 
    },
    spectralEvening: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Evening',
      bait: 'Plump&nbsp;Worm',
      strategy: [
        'Identical&nbsp;Cast + Double&nbsp;Hook(!!!)',
        '<em>Plump&nbsp;Worm => Funnel&nbsp;Shark(!!!)</em>'
      ]
    },
    spectralNight: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Night',
      bait: 'Krill, Glowworm', 
      strategy: [
        '<em>Krill => Navigator\'s&nbsp;Print(!)</em>',
        '<em>Glowworm => Heavenskey(!)</em> twice',
        'Intuition: Double&nbsp;Hook(!!!) <strong>Glowworm => Sothis(!!!)</strong>'
      ]  
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Krill', 
      strategy: [
        '<em>Krill => Gladion&nbsp;Chovy(!)</em> three times',
        'Intuition: <strong>Krill => Drunkfish(!!!)</strong>'
      ]
    }
  },
  southern: {
    location: 'Southern Strait of Merlthor',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Krill',
      strategy: [
        '<em>Krill => Spectral&nbsp;Discus(!!!)</em> >&nbsp;18secs',
        'Surface&nbsp;Slap <em>Momora&nbsp;Mora(!!!)</em>',
        'Do not hook (! or !!) after Surface Slap'
      ]
    },
    spectralDay: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Day',
      bait: 'Krill',
      strategy: [
        '<em>Krill => Mythril&nbsp;Sovereign(!!)</em> (Identical&nbsp;Cast + Double&nbsp;Hook(!!))'
      ]
    },
    spectralEvening: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Evening',
      bait: 'Ragworm', 
      strategy: [
        '<em>Ragworm => Hi-Aetherlouse(!)</em>',
        'Mooch + Double&nbsp;Hook(!!!) <em>Hi-Aetherlouse(!) => Rougesaurous(!!!)</em>',
      ]
    },
    spectralNight: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Night',
      bait: 'Ragworm, Shrimp Cage Feeder',
      strategy: [
        '<em>Ragworm => Hi-Aetherlouse(!)</em>',
        'Mooch <em>Hi-Aetherlouse(!) => Great&nbsp;Grandmarlyn(!!)</em> twice',
        'Intuition: <strong>Shrimp&nbsp;Cage&nbsp;Feeder => Coral&nbsp;Manta(!!!)</strong>',
        'Mooch + Double&nbsp;Hook(!!) <em>Hi-Aetherlouse(!) => Aetheric&nbsp;Seadragon(!!)</em>'
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Krill, Plump&nbsp;Worm',
      strategy: [
        '<em>Krill => Ghoul&nbsp;Barracuda(!!)</em>',
        'Mooch <em>Ghoul&nbsp;Barracuda(!!) => Gladdius(!!)</em>',
        'Intuition: <strong>Plump&nbsp;Worm => Little&nbsp;Leviathan(!!!)</strong>'
      ]
    }
  },
  rhotanoSea: {
    location: 'Rhotano Sea',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Plump&nbsp;Worm',
      strategy: [        
        '<em>Plump&nbsp;Worm => Spectral&nbsp;Bass(!!!)</em> >&nbsp;18secs',
        'Surface&nbsp;Slap <em>Chrome&nbsp;Hammerhead(!!!)</em>',
        'Do not hook (! or !!) after Surface Slap'
      ]
    },
    spectralDay: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Day',
      bait: 'Plump&nbsp;Worm',
      strategy: [
        '<em>Plump&nbsp;Worm => Executioner(!!!)</em> (Blind&nbsp;Double&nbsp;Hook(!!!))'
      ]
    },
    spectralEvening: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Evening',
      bait: 'Ragworm, Rat&nbsp;Tail',
      strategy: [
        '<em>Ragworm => Silencer(!)</em>',
        '<em>Rat&nbsp;Tail => Deep&nbsp;Sea&nbsp;Eel(!!)</em>',
        'Intuition: <strong>Rat&nbsp;Tail => Stonescale(!!!)</strong>'
      ]
    },      
    spectralNight: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Night',
      bait: 'Krill',
      strategy: [
        '<em>Krill => Floating&nbsp;Saucer(!)</em> (Blind&nbsp;Double&nbsp;Hook(!) when&nbsp;>&nbsp;6secs)'
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Plump&nbsp;Worm, Krill',
      strategy: [
        '<em>Plump&nbsp;Worm => Crimson&nbsp;Monkfish(!!)</em> twice (Identical&nbsp;Cast)',
        'Intuition: <strong>Krill => Sabaton(!!!)</strong>'
      ]
    }
  },
  northern: {
    location: 'Northern Strait of Merlthor',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Krill',
      strategy: [
        '<em>Krill => Spectral&nbsp;Sea&nbsp;Bo(!!!)</em> >&nbsp;18secs',
        'Surface&nbsp;Slap <em>Megasquid(!!)</em>',
        'Do not hook (! or !!) after Surface Slap'
      ]
    },
    beforeSpectralSnow: {
      phase: 'Before Spectral',
      weather: 'Snow/Blizzard',
      time: 'Any',
      bait: 'Ragworm',
      strategy: [
        '<em>Ragworm => Spectral&nbsp;Sea&nbsp;Bo(!!!)</em> >&nbsp;18secs',
        'Surface&nbsp;Slap <em>Orchon\'s&nbsp;Stone&nbsp;(!!)</em>',
        'Do not hook (! or !!) after Surface Slap'
      ]
    },
    spectralDay: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Day',
      bait: 'Plump&nbsp;Worm, Heavy&nbsp;Steel&nbsp;Jig',
      strategy: [
        '<em>Plump&nbsp;Worm => Gugrusaurus(!!!)</em> three times (Identical&nbsp;Cast + Double&nbsp;Hook(!!!))',
        'Intuition: <strong>Heavy&nbsp;Steel&nbsp;Jig => Elasmosaurus(!!!)</strong>',
      ]
    },
    spectralEvening: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Evening',
      bait: 'Ragworm',
      strategy: [
        '<em>Ragworm => Coral&nbsp;Seadragon(!)</em> (Blind&nbsp;Double&nbsp;Hook(!) when&nbsp;>&nbsp;6secs)'
      ]
    },
    spectralNight: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Night',
      bait: 'Krill',
      strategy: [
        '<em>Krill => Mopbeard(!!)</em> or <em>Krill => The&nbsp;Fallen&nbsp;One(!!)</em> (Identical&nbsp;Cast + Double&nbsp;Hook(!!) when&nbsp;>&nbsp;4secs)'
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Ragworm',
      strategy: [
        '<em>Ragworm => Tossed&nbsp;Dagger(!)</em>',
        'Mooch + Double&nbsp;Hook(!!) <em>Tossed&nbsp;Dagger(!) => Elder&nbsp;Dinicthys(!!)</em>',
        'Intuition: <strong>Ragworm => Shooting&nbsp;Star(!!!)</strong>'
      ]
    }
  },
  cieldalaes: {
    location: 'Cieldalaes',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Ragworm',
      strategy: [
        '<em>Ragworm => Spectral&nbsp;Butterfly(!!!)</em> >&nbsp;10secs &amp; <&nbsp;18secs',
        'Surface&nbsp;Slap <em>King&nbsp;Cobrafish(!!!)</em>',
        'Do not hook (! or !!) after Surface Slap'
      ]
    },
    spectralDay: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Day',
      bait: 'Plump&nbsp;Worm',
      strategy: [
        'Blind&nbsp;Double&nbsp;Hook(!!!) when&nbsp;<&nbsp;3secs <em>Plump&nbsp;Worm => Jetborne&nbsp;Manta(!!!)</em>',
        'Blind&nbsp;Double&nbsp;Hook(!!!) when&nbsp;>&nbsp;3secs <em>Plump&nbsp;Worm => Callichthyid(!!!)</em>'
      ]
    },
    spectralEvening: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Evening',
      bait: 'Plump&nbsp;Worm',
      strategy: [
        'Blind&nbsp;Double&nbsp;Hook&nbsp;!! when&nbsp;>&nbsp;6secs <em>Plump&nbsp;Worm => Meandering&nbsp;Mora(!!)</em> or <em>Plump&nbsp;Worm => Devil\'s&nbsp;Sting(!!)</em>'
      ]
    },
    spectralNight: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Night',
      bait: 'Plump&nbsp;Worm, Krill, Squid&nbsp;Strip',
      strategy: [
        '<em>Plump&nbsp;Worm => Jetborn&nbsp;Manta(!!!)</em> (Blind&nbsp;Double&nbsp;Hook(!!!) when&nbsp;<&nbsp;3secs)',
        '<em>Krill => Mistbeard\'s&nbsp;Cup(!!)</em>',
        'Intuition: <strong>Squid&nbsp;Strip => Hafgufa(!!!)</strong>'
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Ragworm, Krill',
      strategy: [
        '<em>Ragworm => Metalic&nbsp;Boxfish(!)</em> three times (Identical&nbsp;Cast + Double&nbsp;Hook(!))',
        '<strong>Krill => Cieldalaes&nbsp;Geode(!!!)</strong>',
        'Double&nbsp;Hook(!!!) when&nbsp;>&nbsp;17secs <em>Ragworm => Mamahi-mahi(!!!)</em>'
      ]
    }
  },
  rothlytSound: {
    location: 'Rothlyt Sound',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Ragworm',
      strategy: [
        '<em>Ragworm => Spectresaur(!!!)</em> >&nbsp;14secs',
        'Surface&nbsp;Slap <em>Thavnairian&nbsp;Shark(!!!)</em>',
        'Do not hook (! or !!) after Surface Slap'
      ]
    },
    spectralDay: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Day',
      bait: 'Krill',
      strategy: [
        'Identical&nbsp;Cast + Double&nbsp;Hook(!!) when&nbsp;>&nbsp;4secs <em>Krill => Pearl&nbsp;Bombfish(!!)</em>',
        'Identical&nbsp;Cast + Double&nbsp;Hook(!!) when&nbsp;>&nbsp;6secs <em>Krill => Knifejaw(!!)</em>'
      ]
    },
    spectralEvening: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Evening',
      bait: 'Ragworm, Krill',
      strategy: [
        '<em>Ragworm => Rothlyt&nbsp;Mussel(!!!)</em>',
        'Mooch <em>Rothlyt&nbsp;Mussel(!!!) => Trollfish(!)</em>',
        'Intuition: <strong>Ragworm => Placodus(!!!)</strong>',
        'Identical&nbsp;Cast + Double&nbsp;Hook(!!) when&nbsp;>&nbsp;6secs <em>Krill => Knifejaw(!!)</em>'
      ]
    },
    spectralNight: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Night',
      bait: 'Krill',
      strategy: [
        'Identical&nbsp;Cast + Double&nbsp;Hook(!!) when&nbsp;>&nbsp;4secs <em>Krill => Pearl&nbsp;Bombfish(!!)</em>',
        'Identical&nbsp;Cast + Double&nbsp;Hook(!!) when&nbsp;>&nbsp;6secs <em>Krill => Knifejaw(!!)</em>'
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Ragworm',
      strategy: [
        '<em>Ragworm => Rothlyt&nbsp;Kelp(!)</em> three times (Identical&nbsp;Cast + Double&nbsp;Hook(!))',
        'Intuition: <strong>Ragworm => Ginko&nbsp;Fin(!!!)</strong>',
        'Blind&nbsp;Double&nbsp;Hook(!) when&nbsp;>&nbsp;10secs <em>Ragworm => Honeycomb&nbsp;Fish(!)</em>'
      ]
    }
  },
  bloodbrineSea: {
    location: 'Bloodbrine Sea',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Krill',
      strategy: [
        '<em>Krill => Spectral&nbsp;Eel(!!!)</em> >&nbsp;14secs',
        'Surface&nbsp;Slap <em>True&nbsp;Scad(!!)</em>',
        'Do not hook (! or !!) after Surface Slap'
      ]
    },
    spectralDay: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Day',
      bait: 'Krill, Pillbug, Ragworm',
      strategy: [
        '<em>Krill => Beatific&nbsp;Vision(!!)</em> three times',
        'Intuition: <strong>Pillbug => Seafaring&nbsp;Toad(!!!)</strong>',
        'Double&nbsp;Hook(!) <em>Ragworm => Exterminator(!)</em>'
      ]
    },    
    spectralEvening: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Evening',
      bait: 'Plump&nbsp;Worm',
      strategy: [
        'Blind&nbsp;Double&nbsp;Hook(!!!) when&nbsp;>&nbsp;7secs <em>Plump&nbsp;Worm => Quartz&nbsp;Hammerhead(!!!)</em>'
      ]
    },
    spectralNight: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Night',
      bait: 'Krill',
      strategy: [
        'Double&nbsp;Hook(!!) <em>Krill => Beatific&nbsp;Vision(!!)</em> or Double&nbsp;Hook(!!) <em>Krill => Skaldminni(!!)</em>'
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Ragworm, Krill',
      strategy: [
        '<em>Ragworm => Sunken&nbsp;Mask(!!!)</em> (Double&nbsp;Hook(!!!))',
        'Intuition: <strong>Krill => Bareface(!!!)</strong>'
      ]
    }
  },
  jellyRouteEvening: {
    location: 'Southern Strait of Merlthor',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Ragworm',
      strategy: [
        'Identical&nbsp;Cast + Double&nbsp;Hook(!) <em>Ragworm => La&nbsp;Noscean&nbsp;Jelly(!)</em>',
        'You are relying on others to proc Spectral <em>Krill => Spectral&nbsp;Discus(!!!)</em>'

      ]
    },
    spectralEvening: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Evening',
      bait: 'Ragworm',
      strategy: [
        'Double&nbsp;Hook(!) when&nbsp;>&nbsp;5&nbsp;secs <em>Ragworm => Sea&nbsp;Nettle(!)</em>'
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Ragworm',
      strategy: [
        'Identical&nbsp;Cast + Double&nbsp;Hook(!) <em>Ragworm => La&nbsp;Noscean&nbsp;Jelly(!)</em>'
      ]
    }
  },
  jellyRouteNight: {
    location: 'Rhotano Sea',
    spectralNight: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Night',
      bait: 'Krill',
      strategy: [
        'Double&nbsp;Hook(!) when&nbsp;>&nbsp;5secs <em>Krill => Floating&nbsp;Saucer(!)</em>'
      ]
    }
  },
  seaDragonRouteNight: {
    location: 'Southern Strait of Merlthor',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Ragworm',
      strategy: [
        'Double&nbsp;Hook(!) when&nbsp;>&nbsp;7secs <em>Shaggy&nbsp;Seadragon(!)</em>',
        'You are relying on others to proc Spectral with <em>Krill => Spectral&nbsp;Megalodon(!!!)</em>'
      ]
    },
    spectralNight: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Night',
      bait: 'Ragworm',
      strategy: [
        '<em>Ragworm => Hi-Aetherlouse(!)',
        'Mooch + Double&nbsp;Hook&nbsp;!! <em>Hi-Aetherlouse(!) => Aetheric&nbsp;Seadragon(!!)</em>'
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Ragworm',
      strategy: [
        'Double&nbsp;Hook(!) when&nbsp;>&nbsp;7secs <em>Ragworm => Shaggy&nbsp;Seadragon(!)</em>'
      ]
    }
  },
  seaDragonRouteEvening: {
    location: 'Northrn Strait of Merlthor',
    spectralEvening: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Evening',
      bait: 'Ragworm',
      strategy: [
        'Double&nbsp;Hook(!) when&nbsp;>&nbsp;8secs <em>Ragworm => Coral&nbsp;Seadragon(!)</em>'
      ]
    }
  },
  octopusRouteEvening: {
    location: 'Gladion Bay',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Showers (or Normal)',
      time: 'Any',
      bait: 'Krill',
      strategy: [
        'Identical&nbsp;Cast + Double&nbsp;Hook(!!) <em>Krill => Cyan&nbsp;Octopus(!!)</em>'
      ]
    },
    spectralEvening: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Evening',
      bait: 'Krill',
      strategy: [
        'Identical&nbsp;Cast + Double&nbsp;Hook(!!) <em>Krill => Merman\'s&nbsp;Mane(!!)</em>'
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Krill',
      strategy: [
        'Identical&nbsp;Cast + Double&nbsp;Hook(!!) <em>Krill => Cyan&nbsp;Octopus(!!)</em>'
      ]
    }
  },
  octopusRouteNight: {
    location: 'Northern Strait of Merlthor',
    spectralNight: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Night',
      bait: 'Krill',
      strategy: [
        'Blind&nbsp;Double&nbsp;Hook(!!) when&nbsp;>&nbsp;5secs <em>Krill => Mopbeard(!!)</em>'
      ]
    }
  },
  sharkRouteEvening: {
    location: 'Gladion Bay',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Plump&nbsp;Worm',
      strategy: [
        'Identical&nbsp;Cast + Double&nbsp;Hook(!!!) when&nbsp;>&nbsp;12secs <em>Plump&nbsp;Worm => Tarnished&nbsp;Shark(!!!)</em>',
        'You are relying on others to proc Spectral with <em>Krill => Spectral&nbsp;Megalodon(!!!)</em>'
      ]
    },
    spectralEvening: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Evening',
      bait: 'Plump&nbsp;Worm',
      strategy: [
        'Blind&nbsp;Double&nbsp;Hook(!!!) + Identical&nbsp;Cast <em>Plump&nbsp;Worm => Funnel&nbsp;Shark(!!!)</em>',
        'Identical&nbsp;Cast + Double&nbsp;Hook(!!) <em>Plump&nbsp;Worm => Ghost&nbsp;Shark(!!)</em>'
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Plump&nbsp;Worm',
      strategy: [
        'Blind&nbsp;Double&nbsp;Hook(!!!) + Identical&nbsp;Cast when&nbsp;>&nbsp;12secs <em>Plump&nbsp;Worm => Tarnished&nbsp;Shark(!!!)</em>'
      ]
    }
  },
  sharkRouteDay: {
    location: 'Rhotano Sea',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Plump&nbsp;Worm',
      strategy: [
        'Identical&nbsp;Cast + Double&nbsp;Hook(!!!) <em>Plump&nbsp;Worm => Chrome&nbsp;Hammerhead(!!!)</em>'
      ]
    },
    spectralDay: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Day',
      bait: 'Plump&nbsp;Worm',
      strategy: [
        'Blind&nbsp;Double&nbsp;Hook(!!!) + Identical&nbsp;Cast <em>Plump&nbsp;Worm => Executioner(!!!)</em> or <em>Plump&nbsp;Worm => Sweeper(!!)</em>'
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Plump&nbsp;Worm',
      strategy: [
        'Blind&nbsp;Double&nbsp;Hook(!!!) + Identical&nbsp;Cast <em>Plump&nbsp;Worm => Chrome&nbsp;Hammerhead(!!!)</em>'
      ]
    }
  },
  crabRouteEvening: {
    location: 'Cieldalaes',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Krill',
      strategy: [
        'Identical&nbsp;Cast + Double&nbsp;Hook(!!) <em>Krill => Tortoiseshell&nbsp;Crab(!!)</em>',
        'You are relying on others to proc Spectral with <em>Ragworm => Spectral&nbsp;Butterfly(!!!)</em>'
      ]
    },
    spectralEvening: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Evening',
      bait: 'Krill',
      strategy: [
        'Blind&nbsp;Double&nbsp;Hook(!!) when&nbsp<&nbsp;5secs <em>Krill => Titanshell&nbsp;Crab(!!)</em>'
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Krill',
      strategy: [
        'Identical&nbsp;Cast + Double&nbsp;Hook(!!) <em>Tortoiseshell&nbsp;Crab(!!)</em>'
      ]
    }
  },
  crabRouteNight: {
    location: 'Northern Strait of Merlthor',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Krill',
      strategy: [
        'Identical&nbsp;Cast + Double&nbsp;Hook(!!) <em>Krill => Net&nbsp;Crawler(!!)</em>'
      ]
    },
    spectralNight: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Night',
      bait: 'Ragworm',
      strategy: [
        'Identical&nbsp;Cast + Double&nbsp;Hook(!) <em>Ragworm => Bartholomew&nbsp;the&nsbp;Chopper(!)</em>',
        'You are relying on others to proc Spectral with <em>Krill => Spectral&nbsp;Sea&nbsp;Bo(!!!)</em>'
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Krill',
      strategy: [
        'Identical&nbsp;Cast + Double&nbsp;Hook(!!) <em>Krill => Net&nbsp;Crawler(!!)</em>'
      ]
    }
  },
  crabRouteDay: {
    location: 'Bloodbrine Sea',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Ragworm',
      strategy: [
        'Identical&nbsp;Cast + Double&nbsp;Hook(!) <em>Ragworm => Thaliak&nbsp;Crab(!)</em> or <em>Ragworm => Bloodpolish&nbsp;Crab(!)</em>',
        'You are relying on others to proc Spectral with <em>Krill => Spectral&nbsp;Eel(!!!)</em>'
      ]
    },
    spectralDay: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Day',
      bait: 'Ragworm',
      strategy: [
        'Identical&nbsp;Cast + Double&nbsp;Hook(!) <em>Ragworm => Oracular&nbsp;Crab(!)</em> or <em>Ragworm => Exterminator(!)</em>'
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Ragworm',
      strategy: [
        'Identical&nbsp;Cast + Double&nbsp;Hook(!) <em>Ragworm => Thaliak&nbsp;Crab(!)</em> or <em>Ragworm => Bloodpolish&nbsp;Crab(!)</em>'
      ]
    }
  },
  balloonRouteDay: {
    location: 'Cieldalaes',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Thunderstorms,<br /><em>Normal</em>',
      time: 'Any',
      bait: 'Ragworm',
      strategy: [
        'Blind&nbsp;Double&nbsp;Hook(!) when&nbsp;<&nbsp;12secs <em>Ragworm => Metallic&nbsp;Boxfish(!)</em>',
        'Identical&nbsp;Cast + Double&nbsp;Hook(!) => <em>Ragworm => Metallic&nbsp;Boxfish(!)</em>'
      ]
    },
    spectralDay: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Day',
      bait: 'Ragworm',
      strategy: [
        'Identical&nbsp;Cast + Double&nbsp;Hook(!) <em>Ragworm => Mythril&nbsp;Boxfish(!)</em>'
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Ragworm',
      strategy: [
        'Blind&nbsp;Double&nbsp;Hook(!) when&nbsp;<&nbsp;12secs <em>Ragworm => Metallic&nbsp;Boxfish(!)</em>',
        'Identical&nbsp;Cast + Double&nbsp;Hook(!) => <em>Ragworm => Metallic&nbsp;Boxfish(!)</em>'
      ]
    }
  },
  balloonRouteEvening: {
    location: 'Rhotano Sea',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Ragworm',
      strategy: [
        'Double&nbsp;Hook(!) when&nbsp;>&nbsp;9secs <em>Ragworm => Lampfish(!)</em>',
        'Surface&nbsp;Slap <em>Rhotano&nbsp;Sardine(!)</em>',
        'You are relying on others to proc Spectral with <em>Plump&nbsp;Worm => Spectral&nbsp;Bass(!!!)</em>'
      ]
    },
    spectralEvening: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Evening',
      bait: 'Ragworm',
      strategy: [
        'Identical&nbsp;Cast + Double&nbsp;Hook(!) <em>Ragworm => Silencer(!)</em>'
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Ragworm',
      strategy: [
        'Double&nbsp;Hook(!) when&nbsp;>&nbsp;9secs <em>Ragworm => Lampfish(!)</em>',
        'Surface&nbsp;Slap <em>Rhotano&nbsp;Sardine(!)</em>'
      ]
    }
  },
  balloonRouteNight: {
    location: 'Rothlyt Sound',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Ragworm',
      strategy: [
        'Blind&nbsp;Double&nbsp;Hook(!) when&nbsp;>&nbsp;12secs <em>Ragworm => Honeycomb&nbsp;Fish(!)</em>'
      ]
    },
    spectralNight: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Night',
      bait: 'Krill',
      strategy: [
        'Identical&nbsp;Cast + Double&nbsp;Hook(!!) <em>Krill => Pearl&nbsp;Bombfish(!!)</em>'
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Ragworm',
      strategy: [
        'Blind&nbsp;Double&nbsp;Hook(!) when&nbsp;>&nbsp;12secs <em>Ragworm => Honeycomb&nbsp;Fish(!)</em>'
      ]
    }
  },
  mantaRouteDay: {
    location: 'Cieldalaes',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Plump&nbsp;Worm',
      strategy: [
        'Blind&nbsp;Double&nbsp;Hook(!!) when&nbsp;>&nbsp;14secs <em>Plump&nbsp;Worm => Goobbue&nbsp;Ray(!!)</em>',
        'You are relying on others to proc Spectral with <em>Ragworm => Spectral&nbsp;Butterfly(!!!)</em>'
      ]
    },
    spectralDay: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Day',
      bait: 'Plump&nbsp;Worm',
      strategy: [
        'Blind&nbsp;Double&nbsp;Hook(!!!) when&nbsp;<&nbsp;5secs <em>Plump&nbsp;Worm => Jetborne&nbsp;Manta(!!!)</em>'
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Plump&nbsp;Worm',
      strategy: [
        'Blind&nbsp;Double&nbsp;Hook(!!) when&nbsp;>&nbsp;14secs <em>Plump&nbsp;Worm => Goobbue&nbsp;Ray(!!)</em>'
      ]
    }
  },
  mantaRouteNight: {
    location: 'Bloodbrine&nbsp;Sea',
    spectralNight: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Night',
      bait: 'Krill',
      strategy: [
        'Blind&nbsp;Double&nbsp;Hook(!!) when&nbsp;6secs <em>Krill => Skaldminni(!!)</em>'
      ]
    }
  }
};
