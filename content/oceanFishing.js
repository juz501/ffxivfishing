export const sectionTitles = {
  target: 'Target',
  type: 'Display Type',
  route: 'Routes',
  location: 'Locations',
  strat: 'Bait & Strategies'
};

export const titleFilterTitles = {
  jelly: 'Jelled Together<br/>Rhotano&nbsp;Sea<br/>Day&nbsp;>&nbsp;Evening&nbsp;>&nbsp;Night',
  seaDragon: 'Maritime Dragonslayers<br/>Northern&nbsp;Strait<br/>Night&nbsp;>&nbsp;Day&nbsp;>&nbsp;Evening',
  octopus: 'Octopus Travelers<br/>Northern&nbsp;Strait<br/>Day&nbsp;>&nbsp;Evening&nbsp;>&nbsp;Night',
  shark: 'Certifiable Shark Hunters<br/>Rhotano&nbsp;Sea<br/>Evening&nbsp;>&nbsp;Night&nbsp;>&nbsp;Day)',
  crab: 'Crab Boat Crew<br/>Bloodbrine&nbsp;Sea<br/>Evening&nbsp;>&nbsp;Night&nbsp;>&nbsp;Day',
  balloon: 'Balloon Catchers<br/>Rothlyt&nbsp;Sound<br/>Day&nbsp;>&nbsp;Evening&nbsp;>&nbsp;Night',
  manta: 'Sticking it to the Manta<br/>Bloodbrine&nbsp;Sea<br/>Day&nbsp;>&nbsp;Evening&nbsp;>&nbsp;Night'
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
  'Northern&nbsp;Strait of Merlthor<br/>Night&nbsp;>&nbsp;Day&nbsp;>&nbsp;Evening<br/>Coral Manta',
  'Northern&nbsp;Strait of Merlthor<br/>Day&nbsp;>&nbsp;Evening&nbsp;>&nbsp;Night',
  'Northern&nbsp;Strait of Merlthor<br/>Evening&nbsp;>&nbsp;Night&nbsp;>&nbsp;Day<br/>Sothis',
  'Rhotano&nbsp;Sea<br/>Night&nbsp;>&nbsp;Day&nbsp;>&nbsp;Evening<br />Stonescale',
  'Rhotano&nbsp;Sea<br/>Day&nbsp;>&nbsp;Evening&nbsp;>&nbsp;Night',
  'Rhotano&nbsp;Sea<br/>Evening&nbsp;>&nbsp;Night&nbsp;>&nbsp;Day<br/>Coral Manta',
  'Rothlyt&nbsp;Sound<br/>Night&nbsp;>&nbsp;Day&nbsp;>&nbsp;Evening<br/>Hafgufa + Placodus',
  'Rothlyt&nbsp;Sound<br/>Day&nbsp;>&nbsp;Evening&nbsp;>&nbsp;Night<br/>Stonescale',
  'Rothlyt&nbsp;Sound<br/>Evening&nbsp;>&nbsp;Night&nbsp;>&nbsp;Day<br/>',
  'Bloodbrine&nbsp;Sea<br/>Night&nbsp;>&nbsp;Day&nbsp;>&nbsp;Evening<br/>Hafgufa + Elasmosaurus',
  'Bloodbrine&nbsp;Sea<br/>Day&nbsp;>&nbsp;Evening&nbsp;>&nbsp;Night',
  'Bloodbrine&nbsp;Sea<br/>Evening&nbsp;>&nbsp;Night&nbsp;>&nbsp;Day<br/>Seafaring Toad'
];

export const locationFilterTitles = {
  galadionBay: {
    day: 'Galadion&nbsp;Bay (Day)',
    evening: 'Galadion&nbsp;Bay (Evening)',
    night: 'Galadion&nbsp;Bay (Night)'
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
  conditions: 'Conditions',
  bait: 'Bait',
  strat: 'Strategy',
  doublehook: 'Double Hook Priority'
};

export const content = {
  galadionBay: {
    location: 'Galadion Bay',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Krill',
      strategy: [
        '<em>Krill => Spectral&nbsp;Megalodon(!!!)</em> >&nbsp;18s',
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
        '<em>Ragworm => Casket&nbsp;Oyster(!)</em>',
        '<em>Ragworm => Nimble&nbsp;Dancer(!)</em>'
      ],
      doublehook: [
        'Nimble Dancer(!)x2 10-18s [Blind]',
        'Casket Oyster(!)x2 6-12s [Blind]',
        'Merman\'s Mane(!!)x4 2-6s',
        'Ghost Shark(!!)x4 2-7s',
      ] 
    },
    spectralEvening: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Evening',
      bait: 'Plump&nbsp;Worm',
      strategy: [
        '<em>Plump&nbsp;Worm => Funnel&nbsp;Shark(!!!)</em>',
        '<em>Plump&nbsp;Worm => Quicksilver&nbsp;Blade(!!!)</em>'
      ],
      doublehook: [
        'Funnel Shark(!!!)x4 5-10s',
        'Quicksilver Blade(!!)x2 3-7s',
        'Merman\'s Mane(!!)x4 2-6s',
        'Ghost Shark(!!)x4 2-7s',
      ]
    },
    spectralNight: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Night',
      bait: 'Krill, Glowworm', 
      strategy: [
        '<em>Krill => Navigator\'s&nbsp;Print(!)</em> + <em>Glowworm => Heavenskey(!)</em> twice',
        'Intuition: <strong>Glowworm => Sothis(!!!)</strong>'
      ],
      doublehook: [
        'Merman\'s Mane(!!)x4 2-6s',
        'Ghost Shark(!!)x4 2-7s',
      ]  
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Krill', 
      strategy: [
        '<em>Krill => Galadion&nbsp;Chovy(!)</em> three times',
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
        '<em>Krill => Spectral&nbsp;Discus(!!!)</em> >&nbsp;18s',
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
        '<em>Krill => Mythril&nbsp;Sovereign(!!)</em>',
        'Mooch <em>Hi-Aetherlouse(!) => Great Grandmarlin(!!!)</em>'
      ],
      doublehook: [
        'Mythril&nbsp;Sovereign(!!)x2 6-8s',
        'Great Grandmarlin(!!!)x2 2-3s',
      ]
    },
    spectralEvening: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Evening',
      bait: 'Ragworm', 
      strategy: [
        '<em>Ragworm => Hi-Aetherlouse(!) => Rougesaurus(!!!)</em>',
        '<em>Ragworm => Sea Nettle(!)</em>',
        '<em>Ragworm => Hi-Aetherlouse(!) => Great Grandmarlin(!!!)</em>',
      ],
      doublehook: [
        'Roguesaurus(!!)x2 2-6s',
        'Sea Nettle(!)x4 4-9s',
        'Great Grandmarlin(!!!)x2 2-3s',
      ]
    },
    spectralNight: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Night',
      bait: 'Ragworm, Shrimp Cage Feeder',
      strategy: [
        '<em>Ragworm => Hi-Aetherlouse(!) => Great&nbsp;Grandmarlyn(!!)</em> twice',
        'Intuition: <strong>Shrimp&nbsp;Cage&nbsp;Feeder => Coral&nbsp;Manta(!!!)</strong>',
        '<em>Ragworm => Hi-Aetherlouse(!) => Aetheric&nbsp;Seadragon(!!)</em>'
      ],
      doublehook: [
        'Aetheric&nbsp;Seadragon(!!)x2 2-6s',
        'Great Grandmarlin(!!!)x2 2-3s',
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Krill, Plump&nbsp;Worm',
      strategy: [
        '<em>Krill => Ghoul&nbsp;Barracuda(!!) => Gladdius(!!)</em>',
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
        '<em>Plump&nbsp;Worm => Spectral&nbsp;Bass(!!!)</em> >&nbsp;18s',
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
        '<em>Plump&nbsp;Worm => Executioner(!!!)</em>'
      ],
      doublehook: [
        'Executioner(!!!)x4 4-10s [Blind]',
        'Sweeper(!!)x2 3-8s',
        'Silencer(!)x4 2-8s'
      ]
    },
    spectralEvening: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Evening',
      bait: 'Ragworm, Rat&nbsp;Tail',
      strategy: [
        '<em>Ragworm => Silencer(!)</em> + <em>Rat&nbsp;Tail => Deep&nbsp;Sea&nbsp;Eel(!!)</em>',
        'Intuition: <strong>Rat&nbsp;Tail => Stonescale(!!!)</strong>'
      ],
      doublehook: [
        'Silencer(!)x4 2-8s'
      ]
    },      
    spectralNight: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Night',
      bait: 'Krill',
      strategy: [
        '<em>Krill => Floating&nbsp;Saucer(!)</em>'
      ],
      doublehook: [
        'Floating Saucer(!)x4 6-11s [Blind]',
        'Slipsnail(!)x2 3-8s',
        'Silencer(!)x4 2-8s'
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Plump&nbsp;Worm, Krill',
      strategy: [
        '<em>Plump&nbsp;Worm => Crimson&nbsp;Monkfish(!!)</em> twice',
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
        '<em>Krill => Spectral&nbsp;Sea&nbsp;Bo(!!!)</em> >&nbsp;18s',
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
        '<em>Ragworm => Spectral&nbsp;Sea&nbsp;Bo(!!!)</em> >&nbsp;18s',
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
        '<em>Plump&nbsp;Worm => Gugrusaurus(!!!)</em> three times',
        'Intuition: <strong>Heavy&nbsp;Steel&nbsp;Jig => Elasmosaurus(!!!)</strong>',
      ],
      doublehook: [
        'Gugrusaurus(!!!)x4 2-10s',
      ]
    },
    spectralEvening: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Evening',
      bait: 'Ragworm',
      strategy: [
        '<em>Ragworm => Coral&nbsp;Seadragon(!)</em>',
        '<em>Krill => The Fallen One(!!)</em>',
      ],
      doublehook: [
        'Coral Seadragon(!)x4 5-12s [Blind]',
        'The Fallen One(!!)x2 6-9s',
        'Gugrusaurus(!!!)x4 2-10s',
      ]
    },
    spectralNight: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Night',
      bait: 'Ragworm',
      strategy: [
        '<em>Ragworm => Bartholomew the Chopper(!)</em>',
        '<em>Krill => Mopbeard(!!)</em>'
      ],
      doublehook: [
        'Bartholomew the Chopper(!)x4 3-8s',
        'Mopbeard(!!)x4 4-9s',
        'Gugrusaurus(!!!)x4 2-10s',
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Ragworm',
      strategy: [
        '<em>Ragworm => Tossed&nbsp;Dagger(!) => Elder&nbsp;Dinicthys(!!)</em>',
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
        '<em>Ragworm => Spectral&nbsp;Butterfly(!!!)</em> >&nbsp;10s &amp; <&nbsp;18s',
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
        '<em>Plump&nbsp;Worm => Callichthyid(!!!)</em>',
        '<em>Plump&nbsp;Worm => Jetborne&nbsp;Manta(!!!)</em>',
        '<em>Krill => Devil\'s Sting(!!)</em>'
      ],
      doublehook: [
        'Devil\'s Sting(!!)x2 5-10s',
        'Callichthyid(!!!)x2 4-6s',
        'Titanshell Crab(!!)x4 2-3s',
        'Jetborne Manta(!!!)x4 2-3s',
        'Mythril Boxfish(!)x4 2-5s'
      ]
    },
    spectralEvening: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Evening',
      bait: 'Plump&nbsp;Worm, Krill',
      strategy: [
        '<em>Plump&nbsp;Worm => Meandering&nbsp;Mora(!!)</em>',
        '<em>Plump&nbsp;Worm => Jetborne Manta(!!!)</em>',
        '<em>Krill => Flaming Eel(!!)</em>',
        '<em>Krill => Titanshell Crab(!!)</em>',
      ],
      doublehook: [
        'Meandering Mora(!!)x2 6-12s [Blind]',
        'Flaming Eel(!!)x2 6-7s',
        'Titanshell Crab(!!)x4 2-3s',
        'Jetborne Manta(!!!)x4 2-3s [Blind]',
        'Mythril Boxfish(!)x4 2-5s'
      ]
    },
    spectralNight: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Night',
      bait: 'Plump&nbsp;Worm, Krill, Squid&nbsp;Strip',
      strategy: [
        '<em>Plump&nbsp;Worm => Jetborn&nbsp;Manta(!!!)</em> twice + <em>Krill => Mistbeard\'s&nbsp;Cup(!!)</em>',
        'Intuition: <strong>Squid&nbsp;Strip => Hafgufa(!!!)</strong>',
        '<em>Krill => Titanshell Crab(!!)</em>',
      ],
      doublehook: [
        'Titanshell Crab(!!)x4 2-3s',
        'Jetborne Manta(!!!)x4 2-3s [Blind]',
        'Mythril Boxfish(!)x4 2-5s'
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Ragworm, Krill',
      strategy: [
        '<em>Ragworm => Metalic&nbsp;Boxfish(!)</em> three times',
        '<strong>Krill => Cieldalaes&nbsp;Geode(!!!)</strong>',
        'Double&nbsp;Hook(!!!) when&nbsp;>&nbsp;17s <em>Ragworm => Mamahi-mahi(!!!)</em>'
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
        '<em>Ragworm => Spectresaur(!!!)</em> >&nbsp;14s',
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
        '<em>Krill => Pearl&nbsp;Bombfish(!!)</em>',
        '<em>Krill => Knifejaw(!!)</em>',
        '<em>Plump&nbsp;Worm => Panoptes(!!)</em>'
      ],
      doublehook: [
        'Pearl Bombfish(!!)x4 3-6s [Blind]',
        'Knife Jaw(!!)x2 6-9s [Blind]',
        'Panoptes(!!)x4 3-6s [Blind]',
        'Garum Jug(!)x4 2-3s',
        'Trollfish(!)x2 2-6s'
      ]
    },
    spectralEvening: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Evening',
      bait: 'Ragworm, Krill',
      strategy: [
        '<em>Ragworm => Rothlyt&nbsp;Mussel(!!!) => Trollfish(!)</em>',
        'Intuition: <strong>Ragworm => Placodus(!!!)</strong>',
        '<em>Krill => Knifejaw(!!)</em>',
      ],
      doublehook: [
        'Knife Jaw(!!)x2 6-8s [Blind]',
        'Trollfish(!)x2 2-6s'
      ]
    },
    spectralNight: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Night',
      bait: 'Krill',
      strategy: [
        '<em>Krill => Pearl&nbsp;Bombfish(!!)</em>',
        '<em>Krill => Knifejaw(!!)</em>'
      ],
      doublehook: [
        'Pearl Bombfish(!!)x4 3-6s [Blind]',
        'Knife Jaw(!!)x2 6-8s [Blind]',
        'Garum Jug(!)x4 2-3s',
        'Trollfish(!)x2 2-6s'
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Ragworm',
      strategy: [
        '<em>Ragworm => Rothlyt&nbsp;Kelp(!)</em> three times',
        'Intuition: <strong>Ragworm => Ginko&nbsp;Fin(!!!)</strong>',
        'Blind&nbsp;Double&nbsp;Hook(!) when&nbsp;>&nbsp;10s <em>Ragworm => Honeycomb&nbsp;Fish(!)</em>'
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
        '<em>Krill => Spectral&nbsp;Eel(!!!)</em> >&nbsp;14s',
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
      ],
      doublehook: [
        'Exterminator(!)x4 6-7s [Blind]',
        'Quartz Hammerhead(!!!)x2 7-8s [Blind]',
        'Oracular Crab(!)x4 2-3s',
        'Beatific Vision(!!)x4 1-2s'
      ]
    },    
    spectralEvening: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Evening',
      bait: 'Plump&nbsp;Worm',
      strategy: [
        '<em>Plump&nbsp;Worm => Quartz&nbsp;Hammerhead(!!!)</em>'
      ],
      doublehook: [
        'Quartz Hammerhead(!!!)x2 6-8s [Blind]',
        'Beatific Vision(!!)x4 2-3s'
      ]
    },
    spectralNight: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Night',
      bait: 'Krill',
      strategy: [
        '<em>Krill => Beatific&nbsp;Vision(!!)</em>',
        '<em>Krill => Skaldminni(!!)</em>'
      ],
      doublehook: [
        'Quartz Hammerhead(!!!)x2 6-8s',
        'Skaldminni(!!)x4 2-7s',
        'Beatific Vision(!!)x4 2-3s'
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
        'Double&nbsp;Hook(!) when&nbsp;>&nbsp;5&nbsp;s <em>Ragworm => Sea&nbsp;Nettle(!)</em>'
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
        'Double&nbsp;Hook(!) when&nbsp;>&nbsp;5s <em>Krill => Floating&nbsp;Saucer(!)</em>'
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
        'Double&nbsp;Hook(!) when&nbsp;>&nbsp;7s <em>Shaggy&nbsp;Seadragon(!)</em>',
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
        'Double&nbsp;Hook(!) when&nbsp;>&nbsp;7s <em>Ragworm => Shaggy&nbsp;Seadragon(!)</em>'
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
        'Double&nbsp;Hook(!) when&nbsp;>&nbsp;8s <em>Ragworm => Coral&nbsp;Seadragon(!)</em>'
      ]
    }
  },
  octopusRouteEvening: {
    location: 'Galadion Bay',
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
        'Blind&nbsp;Double&nbsp;Hook(!!) when&nbsp;>&nbsp;5s <em>Krill => Mopbeard(!!)</em>'
      ]
    }
  },
  sharkRouteEvening: {
    location: 'Galadion Bay',
    beforeSpectral: {
      phase: 'Before Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Plump&nbsp;Worm',
      strategy: [
        'Identical&nbsp;Cast + Double&nbsp;Hook(!!!) when&nbsp;>&nbsp;12s <em>Plump&nbsp;Worm => Tarnished&nbsp;Shark(!!!)</em>',
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
        'Blind&nbsp;Double&nbsp;Hook(!!!) + Identical&nbsp;Cast when&nbsp;>&nbsp;12s <em>Plump&nbsp;Worm => Tarnished&nbsp;Shark(!!!)</em>'
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
        'Blind&nbsp;Double&nbsp;Hook(!!) when&nbsp<&nbsp;5s <em>Krill => Titanshell&nbsp;Crab(!!)</em>'
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
        'Blind&nbsp;Double&nbsp;Hook(!) when&nbsp;<&nbsp;12s <em>Ragworm => Metallic&nbsp;Boxfish(!)</em>',
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
        'Blind&nbsp;Double&nbsp;Hook(!) when&nbsp;<&nbsp;12s <em>Ragworm => Metallic&nbsp;Boxfish(!)</em>',
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
        'Double&nbsp;Hook(!) when&nbsp;>&nbsp;9s <em>Ragworm => Lampfish(!)</em>',
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
        'Double&nbsp;Hook(!) when&nbsp;>&nbsp;9s <em>Ragworm => Lampfish(!)</em>',
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
        'Blind&nbsp;Double&nbsp;Hook(!) when&nbsp;>&nbsp;12s <em>Ragworm => Honeycomb&nbsp;Fish(!)</em>'
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
        'Blind&nbsp;Double&nbsp;Hook(!) when&nbsp;>&nbsp;12s <em>Ragworm => Honeycomb&nbsp;Fish(!)</em>'
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
        'Blind&nbsp;Double&nbsp;Hook(!!) when&nbsp;>&nbsp;14s <em>Plump&nbsp;Worm => Goobbue&nbsp;Ray(!!)</em>',
        'You are relying on others to proc Spectral with <em>Ragworm => Spectral&nbsp;Butterfly(!!!)</em>'
      ]
    },
    spectralDay: {
      phase: 'Spectral',
      weather: 'Normal',
      time: 'Day',
      bait: 'Plump&nbsp;Worm',
      strategy: [
        'Blind&nbsp;Double&nbsp;Hook(!!!) when&nbsp;<&nbsp;5s <em>Plump&nbsp;Worm => Jetborne&nbsp;Manta(!!!)</em>'
      ]
    },
    afterSpectral: {
      phase: 'After Spectral',
      weather: 'Normal',
      time: 'Any',
      bait: 'Plump&nbsp;Worm',
      strategy: [
        'Blind&nbsp;Double&nbsp;Hook(!!) when&nbsp;>&nbsp;14s <em>Plump&nbsp;Worm => Goobbue&nbsp;Ray(!!)</em>'
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
        'Blind&nbsp;Double&nbsp;Hook(!!) when&nbsp;6s <em>Krill => Skaldminni(!!)</em>'
      ]
    }
  }
};
