<template>
  <main>
    <h1 class="h2">Fishing Levequests</h1>
    <div class="filters">
      <div class="mainFilter filter">
        <button @click="toggleARR" :class="{ 'filter-on': arr }">ARR</button>
        <button @click="toggleHeavensward" :class="{ 'filter-on': heavensward }">Heavensward</button>
        <button @click="toggleStormblood" :class="{ 'filter-on': stormblood }">Stormblood</button>
        <button @click="toggleShadowbringers" :class="{ 'filter-on': shadowbringers }">Shadowbringers</button>
      </div>
      <div v-if="arr" class="levelFilter filter">
        Level:
        <button @click="toggleLevel1" :class="{ 'filter-on': level1 }">1</button>
        <button @click="toggleLevel5" :class="{ 'filter-on': level5 }">5</button>
        <button @click="toggleLevel10" :class="{ 'filter-on': level10 }">10</button>
        <button @click="toggleLevel15" :class="{ 'filter-on': level15 }">15</button>
        <button @click="toggleLevel20" :class="{ 'filter-on': level20 }">20</button>
        <button @click="toggleLevel25" :class="{ 'filter-on': level25 }">25</button>
        <button @click="toggleLevel30" :class="{ 'filter-on': level30 }">30</button>
        <button @click="toggleLevel35" :class="{ 'filter-on': level35 }">35</button>
        <button @click="toggleLevel40" :class="{ 'filter-on': level40 }">40</button>
        <button @click="toggleLevel45" :class="{ 'filter-on': level45 }">45</button>
      </div>
      <div v-if="heavensward" class="levelFilter filter">
        Level:
        <button @click="toggleLevel50" :class="{ 'filter-on': level50 }">50</button>
        <button @click="toggleLevel52" :class="{ 'filter-on': level52 }">52</button>
        <button @click="toggleLevel54" :class="{ 'filter-on': level54 }">54</button>
        <button @click="toggleLevel56" :class="{ 'filter-on': level56 }">56</button>
        <button @click="toggleLevel58" :class="{ 'filter-on': level58 }">58</button>        
      </div>
      <div v-if="stormblood" class="levelFilter filter">
        Level:
        <button @click="toggleLevel60" :class="{ 'filter-on': level60 }">60</button>
        <button @click="toggleLevel62" :class="{ 'filter-on': level62 }">62</button>
        <button @click="toggleLevel64" :class="{ 'filter-on': level64 }">64</button>
        <button @click="toggleLevel66" :class="{ 'filter-on': level66 }">66</button>
        <button @click="toggleLevel68" :class="{ 'filter-on': level68 }">68</button>        
      </div>
      <div v-if="shadowbringers" class="levelFilter filter">
        Level:
        <button @click="toggleLevel70" :class="{ 'filter-on': level70 }">70</button>
        <button @click="toggleLevel72" :class="{ 'filter-on': level72 }">72</button>
        <button @click="toggleLevel74" :class="{ 'filter-on': level74 }">74</button>
        <button @click="toggleLevel76" :class="{ 'filter-on': level76 }">76</button>
        <button @click="toggleLevel78" :class="{ 'filter-on': level78 }">78</button>        
      </div>
    </div>
    <div v-if="arr">
      <h2 class="h3">A Realm Reborn</h2>
      <div class="levequests-wrapper">
        <table class="levequests">
          <tr>
            <th>Guildeve</th>
            <th>Start NPC</th>          
            <th>Items Needed</th>
            <th>Baits</th>
            <th>Fishing Holes</th>
            <th>End NPC</th>
            <th>Bonus</th>
          </tr>
          <tr v-if="level1">
            <td><strong><strong>Adventurers' Relish</strong></strong><br/>Level 1</td>
            <td><strong>Wyrkhoisk</strong> (x31,&nbsp;y20) <strong>Lower La&nbsp;Noscea</strong> Limsa&nbsp;Lominsa</td>
            <td><strong>Lominsan&nbsp;Anchovy&nbsp;x3</strong></td>
            <td>Lugworm</td>
            <td>Limsa Lominsa Lower Decks, Limsa Lominsa Upper Decks</td>
            <td><strong>Unsynwilf</strong> (x10,&nbsp;y8) <strong>Lower La&nbsp;Noscea</strong> Limsa&nbsp;Lominsa</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level1">
            <td><strong>Soup to Guts</strong><br/>Level 1</td>
            <td><strong>Wyrkholsk</strong> (x31,&nbsp;y20) <strong>Lower La&nbsp;Noscea</strong> Limsa&nbsp;Lominsa</td>
            <td><strong>Merlthor&nbsp;Goby&nbsp;x3</strong></td>
            <td>Lugworm</td>
            <td>Limsa Lominsa Lower Decks, Limsa Lominsa Upper Decks</td>
            <td><strong>Unsynwilf</strong> (x10,&nbsp;y8) <strong>Lower La&nbsp;Noscea</strong> Limsa&nbsp;Lominsa</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level1">
            <td><strong>A Kelping Hand</strong><br/>Level 1</td>
            <td><strong>Wyrkholsk</strong> (x31,&nbsp;y20) <strong>Lower La&nbsp;Noscea</strong> Limsa&nbsp;Lominsa</td>
            <td><strong>Malm&nbsp;Kelp&nbsp;x3</strong></td>
            <td>Lugworm</td>
            <td>Limsa Lominsa Lower Decks, Limsa Lominsa Upper Decks</td>
            <td><strong>Unsynwilf</strong> (x10,&nbsp;y8) <strong>Lower La&nbsp;Noscea</strong> Limsa&nbsp;Lominsa</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level1">
            <td><strong>Poor Boys Eat Well</strong><br/>Level 1</td>
            <td><strong>Wyrkholsk</strong> (x31,&nbsp;y20) <strong>Lower La&nbsp;Noscea</strong> Limsa&nbsp;Lominsa</td>
            <td><strong>Finger Shrimp x3</strong></td>
            <td>Lugworm</td>
            <td>Limsa Lominsa Lower Decks, Limsa Lominsa Upper Deck</td>
            <td><strong>Unsynwilf</strong> (x10,&nbsp;y8) <strong>Lower La&nbsp;Noscea</strong> Limsa&nbsp;Lominsa</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level5">
            <td><strong>Splendor in the Glass</strong><br/>Level 5</td>
            <td><strong>Wyrkholsk</strong> (x31,&nbsp;y20) <strong>Lower La&nbsp;Noscea</strong> Limsa&nbsp;Lominsa</td>
            <td><strong>Harbor&nbsp;Herring&nbsp;x3</strong></td>
            <td>Pill&nbsp;Bug</td>
            <td>Limsa Lominsa Lower Decks, Limsa Lominsa Upper Decks</td>
            <td><strong>Unsynwilf</strong> (x10,&nbsp;y8) <strong>Lower La&nbsp;Noscea</strong> Limsa&nbsp;Lominsa</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level5">
            <td><strong>Cloud Cutlet</strong><br/>Level 5</td>
            <td><strong>Wyrkholsk</strong> (x31,&nbsp;y20) <strong>Lower La&nbsp;Noscea</strong> Limsa&nbsp;Lominsa</td>
            <td><strong>Ocean&nbsp;Cloud&nbsp;x3</strong></td>
            <td>Pill&nbsp;Bug</td>
            <td>Limsa Lominsa Lower Decks, Limsa Lominsa Upper Decks</td>
            <td><strong>Unsynwilf</strong> (x10,&nbsp;y8) <strong>Lower La&nbsp;Noscea</strong> Limsa&nbsp;Lominsa</td>            
            <td class="vertical"></td>
          </tr>
          <tr v-if="level5">
            <td><strong>They Taste Just as Pretty</strong><br/>Level 5</td>
            <td><strong>Wyrkholsk</strong> (x31,&nbsp;y20) <strong>Lower La&nbsp;Noscea</strong> Limsa&nbsp;Lominsa</td>
            <td><strong>Coral&nbsp;Butterfly&nbsp;x3</strong></td>
            <td>Pill&nbsp;Bug</td>
            <td>Limsa Lominsa Lower Decks, Limsa Lominsa Upper Decks</td>
            <td><strong>Unsynwilf</strong> (x10,&nbsp;y8) <strong>Lower La&nbsp;Noscea</strong> Limsa&nbsp;Lominsa</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level5">
            <td><strong>Yummy in the Tummy</strong><br/>Level 5</td>
            <td><strong>Wyrkholsk</strong> (x31,&nbsp;y20) <strong>Lower La&nbsp;Noscea</strong> Limsa&nbsp;Lominsa</td>
            <td><strong>Sea&nbsp;Cucumber&nbsp;x3</strong></td>
            <td>Pill&nbsp;Bug</td>
            <td>Moraby Bay, Oschon's Torch, The Salt Strand, Zephyr Drift</td>
            <td><strong>Unsynwilf</strong> (x10,&nbsp;y8) <strong>Lower La&nbsp;Noscea</strong> Limsa&nbsp;Lominsa</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level10">
            <td><strong>Fish by Many Other Names</strong><br/>Level 10</td>
            <td><strong>Swygskyf</strong> (x34,&nbsp;y31) <strong>Western La&nbsp;Noscea</strong> Swiftperch</td>
            <td><strong>Moraby&nbsp;Flounder&nbsp;x3</strong></td>
            <td>Goby&nbsp;Ball</td>
            <td>Swiftperch</td>
            <td><strong>Q'molosi</strong> (x34,&nbsp;y31) <strong>Western La&nbsp;Noscea</strong> Swiftperch</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level10">
            <td><strong>Just Add Water</strong><br/>Level 10</td>
            <td><strong>Swygskyf</strong> (x34,&nbsp;y31) <strong>Western La&nbsp;Noscea</strong> Swiftperch</td>
            <td><strong>Tiger&nbsp;Cod&nbsp;x3</strong></td>
            <td>Goby&nbsp;Ball</td>
            <td>Skull Valley, Swiftperch</td>
            <td><strong>Q'molosi</strong> (x34,&nbsp;y31) <strong>Western La&nbsp;Noscea</strong> Swiftperch</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level10">
            <td><strong>The Fertile Incandescent</strong><br/>Level 10</td>
            <td><strong>Swygskyf</strong> (x34,&nbsp;y31) <strong>Western La&nbsp;Noscea</strong> Swiftperch</td>
            <td><strong>Harbor&nbsp;Herring&nbsp;x3</strong></td>
            <td>Goby&nbsp;Ball</td>
            <td>Swiftperch, The Brewer's Beacon</td>
            <td><strong>Q'molosi</strong> (x34,&nbsp;y31) <strong>Western La&nbsp;Noscea</strong> Swiftperch</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level10">
            <td><strong>Brain Candy</strong><br/>Level 10</td>
            <td><strong>Swygskyf</strong> (x34,&nbsp;y31) <strong>Western La&nbsp;Noscea</strong> Swiftperch</td>
            <td><strong>Pebble&nbsp;Crab&nbsp;x3</strong></td>
            <td>Goby&nbsp;Ball</td>
            <td>Swiftperch, </td>
            <td><strong>Q'molosi</strong> (x34,&nbsp;y31) <strong>Western La&nbsp;Noscea</strong> Swiftperch</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level15">
            <td><strong>The Deepest Cut</strong><br/>Level 15</td>
            <td><strong>Orwen</strong> (x27,&nbsp;y27) <strong>Western La&nbsp;Noscea</strong> Aleport</td>
            <td><strong>Razor&nbsp;Clam&nbsp;x3</strong></td>
            <td>Rat&nbsp;Tail</td>
            <td>Skull Valley</td>
            <td><strong>Fupepe</strong> (x27,&nbsp;y26) <strong>Western La&nbsp;Noscea</strong> Aleport</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level15">
            <td><strong>The Moral of the Coral</strong><br/>Level 15</td>
            <td><strong>Orwen</strong> (x27,&nbsp;y27) <strong>Western La&nbsp;Noscea</strong> Aleport</td>
            <td><strong>White&nbsp;Coral&nbsp;x3</strong></td>
            <td>Rat&nbsp;Tail</td>
            <td>Swiftperch, The Brewer's Beacon</td>
            <td><strong>Fupepe</strong> (x27,&nbsp;y26) <strong>Western La&nbsp;Noscea</strong> Aleport</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level15">
            <td><strong>Crab Life by the Horns</strong><br/>Level 15</td>
            <td><strong>Orwen</strong> (x27,&nbsp;y27) <strong>Western La&nbsp;Noscea</strong> Aleport</td>
            <td><strong>Helmet&nbsp;Crab&nbsp;x3</strong></td>
            <td>Rat&nbsp;Tail</td>
            <td>The Brewer's Beacon</td>
            <td><strong>Fupepe</strong> (x27,&nbsp;y26) <strong>Western La&nbsp;Noscea</strong> Aleport</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level15">
            <td><strong>Shell Game (Fisher)</strong><br/>Level 15</td>
            <td><strong>Orwen</strong> (x27,&nbsp;y27) <strong>Western La&nbsp;Noscea</strong> Aleport</td>
            <td><strong>Rothlyt&nbsp;Oyster&nbsp;x3</strong></td>
            <td>Rat&nbsp;Tail</td>
            <td>Skull Valley, The Brewer's Beacon</td>
            <td><strong>Fupepe</strong> (x27,&nbsp;y26) <strong>Western La&nbsp;Noscea</strong> Aleport</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level20">
            <td><strong>Sounds Fishy to Me</strong><br/>Level 20</td>
            <td><strong>Nyell</strong> (x25,&nbsp;y20) <strong>South&nbsp;Shroud</strong> Quarrymill</td>
            <td><strong>Copperfish&nbsp;x3</strong></td>
            <td>Butterworm</td>
            <td>East Hathoeva River</td>
            <td><strong>Daca&nbsp;Jinjahl</strong> (x27,&nbsp;y26) <strong>South&nbsp;Shroud</strong> Quarrymill</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level20">
            <td><strong>Blind Ambition</strong><br/>Level 20</td>
            <td><strong>Nyell</strong> (x25,&nbsp;y20) <strong>South&nbsp;Shroud</strong> Quarrymill</td>
            <td><strong>Dark&nbsp;Sleeper&nbsp;x3</strong></td>
            <td>Butterworm</td>
            <td>East Hathoeva River, Upper Hathoeva River, Middle Hathoeva River</td>
            <td><strong>Daca&nbsp;Jinjahl</strong> (x27,&nbsp;y26) <strong>South&nbsp;Shroud</strong> Quarrymill</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level20">
            <td><strong>The Long and the Shortcrust</strong><br/>Level 20</td>
            <td><strong>Nyell</strong> (x25,&nbsp;y20) <strong>South&nbsp;Shroud</strong> Quarrymill</td>
            <td><strong>Black&nbsp;Eel&nbsp;x3</strong></td>
            <td>Butterworm</td>
            <td>East Hathoeva River, Upper Hathoeva River, Middle Hathoeva River</td>
            <td><strong>Daca&nbsp;Jinjahl</strong> (x27,&nbsp;y26) <strong>South&nbsp;Shroud</strong> Quarrymill</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level20">
            <td><strong>Food Chain Reaction</strong><br/>Level 20</td>
            <td><strong>Nyell</strong> (x25,&nbsp;y20) <strong>South&nbsp;Shroud</strong> Quarrymill</td>
            <td><strong>Faerie&nbsp;Bass&nbsp;x3</strong></td>
            <td>Butterworm</td>
            <td>East Hathoeva River, Upper Hathoeva River, Middle Hathoeva River</td>
            <td><strong>Daca&nbsp;Jinjahl</strong> (x27,&nbsp;y26) <strong>South&nbsp;Shroud</strong> Quarrymill</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level25">
            <td><strong>Fishing 101</strong><br/>Level 25</td>
            <td><strong>Nyell</strong> (x25,&nbsp;y20) <strong>South&nbsp;Shroud</strong> Quarrymill</td>
            <td><strong>Dark&nbsp;Bass&nbsp;x3</strong></td>
            <td>Bass&nbsp;Ball</td>
            <td>Goblinblood</td>
            <td><strong>Daca&nbsp;Jinjahl</strong> (x27,&nbsp;y26) <strong>South&nbsp;Shroud</strong> Quarrymill</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level25">
            <td><strong>A Shocking Soiree</strong><br/>Level 25</td>
            <td><strong>Nyell</strong> (x25,&nbsp;y20) <strong>South&nbsp;Shroud</strong> Quarrymill</td>
            <td><strong>Black&nbsp;Ghost&nbsp;x3</strong></td>
            <td>Bass&nbsp;Ball</td>
            <td>Goblinblood</td>
            <td><strong>Daca&nbsp;Jinjahl</strong> (x27,&nbsp;y26) <strong>South&nbsp;Shroud</strong> Quarrymill</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level25">
            <td><strong>A Watery Web of Lies</strong><br/>Level 25</td>
            <td><strong>Nyell</strong> (x25,&nbsp;y20) <strong>South&nbsp;Shroud</strong> Quarrymill</td>
            <td><strong>Yugr'am&nbsp;Salmon&nbsp;x3</strong></td>
            <td>Bass&nbsp;Ball</td>
            <td>Goblinblood</td>
            <td><strong>Daca&nbsp;Jinjahl</strong> (x27,&nbsp;y26) <strong>South&nbsp;Shroud</strong> Quarrymill</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level25">
            <td><strong>The Truth Will Set You Free</strong><br/>Level 25</td>
            <td><strong>Nyell</strong> (x25,&nbsp;y20) <strong>South&nbsp;Shroud</strong> Quarrymill</td>
            <td><strong>Five-ilm&nbsp;Pleco&nbsp;x3</strong></td>
            <td>Bass&nbsp;Ball</td>
            <td>Goblinblood</td>
            <td><strong>Daca&nbsp;Jinjahl</strong> (x27,&nbsp;y26) <strong>South&nbsp;Shroud</strong> Quarrymill</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level30">
            <td><strong>The Blue Period</strong><br/>Level 30</td>
            <td><strong>Nahctahr</strong> (x30,&nbsp;y30) <strong>Eastern La&nbsp;Noscea</strong> Costa&nbsp;del&nbsp;Sol</td>
            <td><strong>Sea&nbsp;Pickle&nbsp;x3</strong></td>
            <td>Spoon&nbsp;Worm</td>
            <td>North&nbsp;Bloodshore</td>
            <td><strong>F'abodji</strong> (x30,&nbsp;y31) <strong>Eastern La&nbsp;Noscea</strong> Costa&nbsp;del&nbsp;Sol</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level30">
            <td><strong>Kitchen Nightmares No More</strong><br/>Level 30</td>
            <td><strong>Nahctahr</strong> (x30,&nbsp;y30) <strong>Eastern La&nbsp;Noscea</strong> Costa&nbsp;del&nbsp;Sol</td>
            <td><strong>Black&nbsp;Sole&nbsp;x3</strong></td>
            <td>Spoon&nbsp;Worm</td>
            <td>North&nbsp;Bloodshore</td>
            <td><strong>F'abodji</strong> (x30,&nbsp;y31) <strong>Eastern La&nbsp;Noscea</strong> Costa&nbsp;del&nbsp;Sol</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level30">
            <td><strong>A Recipe for Disaster</strong><br/>Level 30</td>
            <td><strong>Nahctahr</strong> (x30,&nbsp;y30) <strong>Eastern La&nbsp;Noscea</strong> Costa&nbsp;del&nbsp;Sol</td>
            <td><strong>Ash&nbsp;Tuna&nbsp;x3</strong></td>
            <td>Spoon&nbsp;Worm</td>
            <td>Costa del Sol, North Bloodshore</td>
            <td><strong>F'abodji</strong> (x30,&nbsp;y31) <strong>Eastern La&nbsp;Noscea</strong> Costa&nbsp;del&nbsp;Sol</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level30">
            <td><strong>Just Call Me Late for Dinner</strong><br/>Level 30</td>
            <td><strong>Nahctahr</strong> (x30,&nbsp;y30) <strong>Eastern La&nbsp;Noscea</strong> Costa&nbsp;del&nbsp;Sol</td>
            <td><strong>Indigo&nbsp;Herring&nbsp;x3</strong></td>
            <td>Spoon&nbsp;Worm</td>
            <td>Costa del Sol</td>
            <td><strong>F'abodji</strong> (x30,&nbsp;y31) <strong>Eastern La&nbsp;Noscea</strong> Costa&nbsp;del&nbsp;Sol</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level35">
            <td><strong>Fry Me a River</strong><br/>Level 35</td>
            <td><strong>Cimeaurant</strong> (x26,&nbsp;y28) <strong>Coerthas Central&nbsp;Highlands</strong> First Dicasterial Observatorium of Aetherial and Astrological Phenomena</td>
            <td><strong>Giant Bass x3</strong></td>
            <td>Honey&nbsp;Worm</td>
            <td>Coerthas River</td>
            <td><strong>Drividot</strong> (x28,&nbsp;y28)  <strong>Coerthas Central&nbsp;Highlands</strong> First Dicasterial Observatorium of Aetherial and Astrological Phenomena</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level35">
            <td><strong>The Perks of Politics</strong><br/>Level 35</td>
            <td><strong>Cimeaurant</strong> (x26,&nbsp;y28) <strong>Coerthas Central&nbsp;Highlands</strong> First Dicasterial Observatorium of Aetherial and Astrological Phenomena</td>
            <td><strong>Seema x3</strong></td>
            <td>Honey&nbsp;Worm</td>
            <td>Coerthas River</td>
            <td><strong>Drividot</strong> (x28,&nbsp;y28)  <strong>Coerthas Central&nbsp;Highlands</strong> First Dicasterial Observatorium of Aetherial and Astrological Phenomena</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level35">
            <td><strong>Gathering Light</strong><br/>Level 35</td>
            <td><strong>Cimeaurant</strong> (x26,&nbsp;y28) <strong>Coerthas Central&nbsp;Highlands</strong> First Dicasterial Observatorium of Aetherial and Astrological Phenomena</td>
            <td><strong>Lamp Marimo x3</strong></td>
            <td>Honey&nbsp;Worm</td>
            <td>Daniffen Pass</td>
            <td><strong>Drividot</strong> (x28,&nbsp;y28)  <strong>Coerthas Central&nbsp;Highlands</strong> First Dicasterial Observatorium of Aetherial and Astrological Phenomena</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level35">
            <td><strong>Hands Off Our Fish</strong><br/>Level 35</td>
            <td><strong>Cimeaurant</strong> (x26,&nbsp;y28) <strong>Coerthas Central&nbsp;Highlands</strong> First Dicasterial Observatorium of Aetherial and Astrological Phenomena</td>
            <td><strong>Crimson&nbsp;Trout&nbsp;x3</strong></td>
            <td>Honey&nbsp;Worm</td>
            <td>Coerthas River</td>
            <td><strong>Drividot</strong> (x28,&nbsp;y28) <strong>Coerthas Central&nbsp;Highlands</strong> First Dicasterial Observatorium of Aetherial and Astrological Phenomena</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level40">
            <td><strong>Empire Builder</strong><br/>Level 40</td>
            <td><strong>Voilinaut</strong> (x12,&nbsp;y16) <strong>Coerthas Central&nbsp;Highlands</strong> Whitebrim&nbsp;Front</td>
            <td><strong>Bronze&nbsp;Lake&nbsp;Trout&nbsp;x3</strong></td>
            <td>Stem&nbsp;Borer</td>
            <td>The Nail</td>
            <td><strong>Louviaune</strong> (x13,&nbsp;y16) <strong>Coerthas Central&nbsp;Highlands</strong> Whitebrim&nbsp;Front</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level40">
            <td><strong>Laird of the Lakes</strong><br/>Level 40</td>
            <td><strong>Voilinaut</strong> (x12,&nbsp;y16) <strong>Coerthas Central&nbsp;Highlands</strong> Whitebrim&nbsp;Front</td>
            <td><strong>Northern&nbsp;Pike&nbsp;x3</strong></td>
            <td>Stem&nbsp;Borer</td>
            <td>The Nail</td>
            <td><strong>Louviaune</strong> (x13,&nbsp;y16) <strong>Coerthas Central&nbsp;Highlands</strong> Whitebrim&nbsp;Front</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level40">
            <td><strong>Make a Fish</strong><br/>Level 40</td>
            <td><strong>Voilinaut</strong> (x12,&nbsp;y16) <strong>Coerthas Central&nbsp;Highlands</strong> Whitebrim&nbsp;Front</td>
            <td><strong>Abalathian&nbsp;Smelt&nbsp;x3</strong></td>
            <td>Stem&nbsp;Borer</td>
            <td>The Nail</td>
            <td><strong>Louviaune</strong> (x13,&nbsp;y16) <strong>Coerthas Central&nbsp;Highlands</strong> Whitebrim&nbsp;Front</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level40">
            <td><strong>Rationally Speaking</strong><br/>Level 40</td>
            <td><strong>Voilinaut</strong> (x12,&nbsp;y16) <strong>Coerthas Central&nbsp;Highlands</strong> Whitebrim&nbsp;Front</td>
            <td><strong>Golden&nbsp;Loach&nbsp;x3</strong></td>
            <td>Stem&nbsp;Borer</td>
            <td>Daniffen Pass</td>
            <td><strong>Louviaune</strong> (x13,&nbsp;y16) <strong>Coerthas Central&nbsp;Highlands</strong> Whitebrim&nbsp;Front</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level45">
            <td><strong>Snail Fail</strong><br/>Level 45</td>
            <td><strong>K'leytai</strong> (x29,&nbsp;y12) <strong>Mor&nbsp;Dhona</strong> Saint&nbsp;Coinach's&nbsp;Find</td>
            <td><strong>Ignus&nbsp;Snail&nbsp;x3</strong></td>
            <td>Glowworm</td>
            <td>North Silvertear</td>
            <td><strong>Clifton</strong> (x30,&nbsp;y12) <strong>Mor&nbsp;Dhona</strong> Saint&nbsp;Coinach's&nbsp;Find</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level45">
            <td><strong>Awash in Evidence</strong><br/>Level 45</td>
            <td><strong>K'leytai</strong> (x29,&nbsp;y12) <strong>Mor&nbsp;Dhona</strong> Saint&nbsp;Coinach's&nbsp;Find</td>
            <td><strong>Ilsabardian&nbsp;Bass&nbsp;x3</strong></td>
            <td>Glowworm</td>
            <td>North Silvertear</td>
            <td><strong>Clifton</strong> (x30,&nbsp;y12) <strong>Mor&nbsp;Dhona</strong> Saint&nbsp;Coinach's&nbsp;Find</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level45">
            <td><strong>Sleeper Creeper</strong><br/>Level 45</td>
            <td><strong>K'leytai</strong> (x29,&nbsp;y12) <strong>Mor&nbsp;Dhona</strong> Saint&nbsp;Coinach's&nbsp;Find</td>
            <td><strong>Sludgeskipper&nbsp;x3</strong></td>
            <td>Glowworm</td>
            <td>North Silvertear</td>
            <td><strong>Clifton</strong> (x30,&nbsp;y12) <strong>Mor&nbsp;Dhona</strong> Saint&nbsp;Coinach's&nbsp;Find</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level45">
            <td><strong>Putting the Zap on Nature</strong><br/>Level 45</td>
            <td><strong>K'leytai</strong> (x29,&nbsp;y12) <strong>Mor&nbsp;Dhona</strong> Saint&nbsp;Coinach's&nbsp;Find</td>
            <td><strong>Boltfish&nbsp;x3</strong></td>
            <td>Glowworm</td>
            <td>The Tangle</td>
            <td><strong>Clifton</strong> (x30,&nbsp;y12) <strong>Mor&nbsp;Dhona</strong> Saint&nbsp;Coinach's&nbsp;Find</td>
            <td class="vertical"></td>
          </tr>
        </table>
      </div>
    </div>
    <div v-if="heavensward">
      <h2 class="h3">Heavensward</h2>
      <div class="levequests-wrapper">
        <table class="levequests">
          <tr>
            <th>Guildeve</th>
            <th>Start NPC</th>          
            <th>Items Needed</th>
            <th>Baits</th>
            <th>Fishing Holes</th>
            <th>End NPC</th>
            <th>Bonus</th>
          </tr>
          <tr v-if="level50">
            <td><strong>The Voice of the Fury</strong><br/>Level 50</td>
            <td><strong>Eloin</strong> (x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td><strong>Blueclaw&nbsp;Shrimp&nbsp;x3</strong></td>
            <td>Stonefly&nbsp;Nymph</td>
            <td>The Hundred Throes, The Smoldering Wastes, Whilom River</td>
            <td><strong>Cesteline</strong>(x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level50">
            <td><strong>A Whole Lot of Nope (L)</strong><br/>Level 50</td>
            <td><strong>Eloin</strong> (x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td><strong>Blueclaw&nbsp;Shrimp&nbsp;x6</strong></td>
            <td>Stonefly&nbsp;Nymph</td>
            <td>The Hundred Throes, The Smoldering Wastes, Whilom River</td>
            <td><strong>Cesteline</strong>(x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level50">
            <td><strong>Please Halone, Tell Me I'm Still Asleep</strong><br/>Level 50</td>
            <td><strong>Eloin</strong> (x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td><strong>Coerthan&nbsp;Crab&nbsp;x3</strong></td>
            <td>Stonefly&nbsp;Nymph</td>
            <td>Riversmeet</td>
            <td><strong>Cesteline</strong>(x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level50">
            <td><strong>Snipped for Spirituality (L)</strong><br/>Level 50</td>
            <td><strong>Eloin</strong> (x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td><strong>Coerthan&nbsp;Crab&nbsp;x6</strong></td>
            <td>Stonefly&nbsp;Nymph</td>
            <td>Riversmeet</td>
            <td><strong>Cesteline</strong>(x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level50">
            <td><strong>Dine or Spine</strong><br/>Level 50</td>
            <td><strong>Eloin</strong> (x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td><strong>Lake&nbsp;Urchin&nbsp;x3</strong></td>
            <td>Stonefly&nbsp;Nymph</td>
            <td>Ashpool, South Banepool, West Banepool</td>
            <td><strong>Cesteline</strong>(x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level50">
            <td><strong>Lurchin' from Urchins (L)</strong><br/>Level 50</td>
            <td><strong>Eloin</strong> (x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td><strong>Lake&nbsp;Urchin&nbsp;x6</strong></td>
            <td>Stonefly&nbsp;Nymph</td>
            <td>Ashpool, South Banepool, West Banepool</td>
            <td><strong>Cesteline</strong>(x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level52">
            <td><strong>Fish Oils and Forgotten Spoils</strong><br/>Level 52</td>
            <td><strong>Eloin</strong> (x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td><strong>Grass&nbsp;Carp&nbsp;x3</strong></td>
            <td>Stonefly&nbsp;Nymph</td>
            <td>The Hundred Throes</td>
            <td><strong>Cesteline</strong>(x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level52">
            <td><strong>Valuing the Vintage (L)</strong><br/>Level 52</td>
            <td><strong>Eloin</strong> (x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td><strong>Grass&nbsp;Carp&nbsp;x6</strong></td>
            <td>Stonefly&nbsp;Nymph</td>
            <td>The Hundred Throes</td>
            <td><strong>Cesteline</strong>(x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level52">
            <td><strong>Loose Lips Heal (Broken) Hips</strong><br/>Level 52</td>
            <td><strong>Eloin</strong> (x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td><strong>Three-lip&nbsp;Carp&nbsp;x3</strong></td>
            <td>Stonefly&nbsp;Nymph</td>
            <td>The Smoldering Wastes, Whilom River</td>
            <td><strong>Cesteline</strong>(x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level52">
            <td><strong>Prayer and Prejudice (L)</strong><br/>Level 52</td>
            <td><strong>Eloin</strong> (x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td><strong>Three-lip&nbsp;Carp&nbsp;x6</strong></td>
            <td>Stonefly&nbsp;Nymph</td>
            <td>The Smoldering Wastes, Whilom River</td>
            <td><strong>Cesteline</strong>(x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level52">
            <td><strong>Bounty of Sky, Bounty of Earth</strong><br/>Level 52</td>
            <td><strong>Eloin</strong> (x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td><strong>Cloudfish&nbsp;x3</strong></td>
            <td>Stonefly&nbsp;Nymph</td>
            <td>Eil Tohm, Weston Waters</td>
            <td><strong>Cesteline</strong>(x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level52">
            <td><strong>Eating Like the Natives (L)</strong><br/>Level 52</td>
            <td><strong>Eloin</strong> (x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td><strong>Cloudfish&nbsp;x6</strong></td>
            <td>Stonefly&nbsp;Nymph</td>
            <td>Eil Tohm, Weston Waters</td>
            <td><strong>Cesteline</strong>(x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level54">
            <td><strong>Analysis of Paralysis</strong><br/>Level 54</td>
            <td><strong>Eloin</strong> (x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td><strong>Mahu&nbsp;Wai&nbsp;x3</strong></td>
            <td>Red&nbsp;Balloon</td>
            <td>Cloudtop</td>
            <td><strong>Cesteline</strong>(x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level54">
            <td><strong>Sending a Feeling to My Spine (L)</strong><br/>Level 54</td>
            <td><strong>Eloin</strong> (x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td><strong>Mahu&nbsp;Wai&nbsp;x6</strong></td>
            <td>Red&nbsp;Balloon</td>
            <td>Cloudtop</td>
            <td><strong>Cesteline</strong>(x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level54">
            <td><strong>The Aquariums of Ishgard</strong><br/>Level 54</td>
            <td><strong>Eloin</strong> (x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td><strong>Buoyant&nbsp;Oviform&nbsp;x3</strong></td>
            <td>Red&nbsp;Balloon</td>
            <td>Cloudtop</td>
            <td><strong>Cesteline</strong>(x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level54">
            <td><strong>A Win-win Situation (L)</strong><br/>Level 54</td>
            <td><strong>Eloin</strong> (x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td><strong>Buoyant&nbsp;Oviform&nbsp;x6</strong></td>
            <td>Red&nbsp;Balloon</td>
            <td>Cloudtop</td>
            <td><strong>Cesteline</strong>(x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level54">
            <td><strong>Bearing of the Blue</strong><br/>Level 54</td>
            <td><strong>Eloin</strong> (x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td><strong>Blue Cloud&nbsp;Coral&nbsp;x3</strong></td>
            <td>Red&nbsp;Balloon</td>
            <td>Cloudtop</td>
            <td><strong>Cesteline</strong>(x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level54">
            <td><strong>Blue of Sky and Sea (L)</strong><br/>Level 54</td>
            <td><strong>Eloin</strong> (x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td><strong>Blue Cloud&nbsp;Coral&nbsp;x6</strong></td>
            <td>Red&nbsp;Balloon</td>
            <td>Cloudtop</td>
            <td><strong>Cesteline</strong>(x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level56">
            <td><strong>Dining with Dravanians</strong><br/>Level 56</td>
            <td><strong>Eloin</strong> (x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td><strong>Hundred&nbsp;Fin&nbsp;x3</strong></td>
            <td>Stonefly&nbsp;Nymph</td>
            <td>Weston Waters</td>
            <td><strong>Cesteline</strong>(x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level56">
            <td><strong>Hundred Fins for a Hundred Wings (L)</strong><br/>Level 56</td>
            <td><strong>Eloin</strong> (x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td><strong>Hundred&nbsp;Fin&nbsp;x6</strong></td>
            <td>Stonefly&nbsp;Nymph</td>
            <td>Weston Waters</td>
            <td><strong>Cesteline</strong>(x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level56">
            <td><strong>Solo Out the Bolo</strong><br/>Level 56</td>
            <td><strong>Eloin</strong> (x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td><strong>Brown&nbsp;Bolo&nbsp;x3</strong></td>
            <td>Red Balloon + Mooch</td>
            <td>Tharl Oom Khash</td>
            <td><strong>Cesteline</strong>(x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level56">
            <td><strong>Sucking on Face (L)</strong><br/>Level 56</td>
            <td><strong>Eloin</strong> (x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td><strong>Brown&nbsp;Bolo&nbsp;x6</strong></td>
            <td>Red Balloon + Mooch</td>
            <td>Tharl Oom Khash</td>
            <td><strong>Cesteline</strong>(x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level56">
            <td><strong>Pipira Pirouette</strong><br/>Level 56</td>
            <td><strong>Eloin</strong> (x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td><strong>Pipira&nbsp;Pira&nbsp;x3</strong></td>
            <td>Stonefly&nbsp;Nymph + Mooch</td>
            <td>The Hundred Throes, The Iron Feast, Whilom River</td>
            <td><strong>Cesteline</strong>(x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level56">
            <td><strong>Plus One or Two or Three (L)</strong><br/>Level 56</td>
            <td><strong>Eloin</strong> (x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td><strong>Pipira&nbsp;Pira&nbsp;x6</strong></td>
            <td>Stonefly&nbsp;Nymph + Mooch</td>
            <td>The Hundred Throes, The Iron Feast, Whilom River</td>
            <td><strong>Cesteline</strong>(x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level58">
            <td><strong>Spew Forth and Spawn</strong><br/>Level 58</td>
            <td><strong>Eloin</strong> (x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td><strong>Fountfish&nbsp;x3</strong></td>
            <td>Brute&nbsp;Leech</td>
            <td>Delta Quadrant, The Pappus Tree</td>
            <td><strong>Cesteline</strong>(x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level58">
            <td><strong>Unleash the Hydro Cannons (L)</strong><br/>Level 58</td>
            <td><strong>Eloin</strong> (x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td><strong>Fountfish&nbsp;x6</strong></td>
            <td>Brute&nbsp;Leech</td>
            <td>Delta Quadrant, The Pappus Tree</td>
            <td><strong>Cesteline</strong>(x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level58">
            <td><strong>They Call It the Kissing Disease</strong><br/>Level 58</td>
            <td><strong>Eloin</strong> (x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td><strong>Yalm&nbsp;Lobster&nbsp;x3</strong></td>
            <td>Brute&nbsp;Leech + Mooch</td>
            <td>Delta Quadrant</td>
            <td><strong>Cesteline</strong>(x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level58">
            <td><strong>Angling for Ailments (L)</strong><br/>Level 58</td>
            <td><strong>Eloin</strong> (x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td><strong>Yalm&nbsp;Lobster&nbsp;x6</strong></td>
            <td>Brute&nbsp;Leech + Mooch</td>
            <td>Delta Quadrant</td>
            <td><strong>Cesteline</strong>(x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level58">
            <td><strong>Warmer than Wine</strong><br/>Level 58</td>
            <td><strong>Eloin</strong> (x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td><strong>Bullwhip x3</strong></td>
            <td>Fiend&nbsp;Worm</td>
            <td>Aetherochemical Spill, Alpha Quadrant</td>
            <td><strong>Cesteline</strong>(x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level58">
            <td><strong>What Does Not Break Us, Devours Us (L)</strong><br/>Level 58</td>
            <td><strong>Eloin</strong> (x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td><strong>Bullwhip x6</strong></td>
            <td>Fiend&nbsp;Worm</td>
            <td>Aetherochemical Spill, Alpha Quadrant</td>
            <td><strong>Cesteline</strong>(x10,&nbsp;y10) <strong>Coerthas</strong> Foundation</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
        </table>
      </div>
    </div>
    <div v-if="stormblood">
      <h2 class="h3">Stormblood</h2>
      <div class="levequests-wrapper">
        <table class="levequests">
          <tr>
            <th>Guildeve</th>
            <th>Start NPC</th>          
            <th>Items Needed</th>
            <th>Baits</th>
            <th>Fishing Holes</th>
            <th>End NPC</th>
            <th>Bonus</th>
          </tr>
          <tr v-if="level60">
            <td><strong>Slow Wash, Rapids Jumper</strong><br/>Level 60</td>
            <td><strong>Keltraeng</strong> (x11.6,&nbsp;y9.6) <strong>Hingashi</strong> Kugane</td>
            <td><strong>Rapids&nbsp;Jumper&nbsp;x3</strong></td>
            <td>Salmon&nbsp;Roe</td>
            <td>The Slow Wash</td>
            <td><strong>Geimrael</strong> (x11.7,&nbsp;y9.6) <strong>Hingashi</strong> Kugane</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level60">
            <td><strong>If a Leaf Falls in the Water</strong><br/>Level 60</td>
            <td><strong>Keltraeng</strong> (x11.6,&nbsp;y9.6) <strong>Hingashi</strong> Kugane</td>
            <td><strong>Fallen&nbsp;Leaf&nbsp;x3</strong></td>
            <td>Salmon&nbsp;Roe</td>
            <td>Dimwold</td>
            <td><strong>Geimrael</strong> (x11.7,&nbsp;y9.6) <strong>Hingashi</strong> Kugane</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level60">
            <td><strong>There Can Be Only One</strong><br/>Level 60</td>
            <td><strong>Keltraeng</strong> (x11.6,&nbsp;y9.6) <strong>Hingashi</strong> Kugane</td>
            <td><strong>Highland&nbsp;Perch&nbsp;x3</strong></td>
            <td>Salmon&nbsp;Roe</td>
            <td>Mirage Creek</td>
            <td><strong>Geimrael</strong> (x11.7,&nbsp;y9.6) <strong>Hingashi</strong> Kugane</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level62">
            <td><strong>Lighter Wallets</strong><br/>Level 62</td>
            <td><strong>Keltraeng</strong> (x11.6,&nbsp;y9.6) <strong>Hingashi</strong> Kugane</td>
            <td><strong>Glass&nbsp;Manta&nbsp;x6</strong></td>
            <td>Large&nbsp;Gig&nbsp;Head</td>
            <td>Tamamizu</td>
            <td><strong>Geimrael</strong> (x11.7,&nbsp;y9.6) <strong>Hingashi</strong> Kugane</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level62">
            <td><strong>In a Pickle</strong><br/>Level 62</td>
            <td><strong>Keltraeng</strong> (x11.6,&nbsp;y9.6) <strong>Hingashi</strong> Kugane</td>
            <td><strong>Eastern Sea&nbsp;Pickle&nbsp;x6</strong></td>
            <td>Small&nbsp;Gig&nbsp;Head</td>
            <td>Sui-no-Sato</td>
            <td><strong>Geimrael</strong> (x11.7,&nbsp;y9.6) <strong>Hingashi</strong> Kugane</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level62">
            <td><strong>Perhaps Not-So-Common</strong><br/>Level 62</td>
            <td><strong>Keltraeng</strong> (x11.6,&nbsp;y9.6) <strong>Hingashi</strong> Kugane</td>
            <td><strong>Common&nbsp;Whelk&nbsp;x4</strong></td>
            <td>Small&nbsp;Gig&nbsp;Head</td>
            <td>The One River Southern Riverbed</td>
            <td><strong>Geimrael</strong> (x11.7,&nbsp;y9.6) <strong>Hingashi</strong> Kugane</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level64">
            <td><strong>Catfish Scheme</strong><br/>Level 64</td>
            <td><strong>Keltraeng</strong> (x11.6,&nbsp;y9.6) <strong>Hingashi</strong> Kugane</td>
            <td><strong>Longhair&nbsp;Catfish&nbsp;x3</strong></td>
            <td>Nightcrawler</td>
            <td>The One River (East), The One River (West)</td>
            <td><strong>Geimrael</strong> (x11.7,&nbsp;y9.6) <strong>Hingashi</strong> Kugane</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level64">
            <td><strong>Curtains for Pleco</strong><br/>Level 64</td>
            <td><strong>Keltraeng</strong> (x11.6,&nbsp;y9.6) <strong>Hingashi</strong> Kugane</td>
            <td><strong>Curtain&nbsp;Pleco&nbsp;x3</strong></td>
            <td>Midge&nbsp;Larva + Mooch</td>
            <td>Hak Khaal</td>
            <td><strong>Geimrael</strong> (x11.7,&nbsp;y9.6) <strong>Hingashi</strong> Kugane</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level64">
            <td><strong>Marooned Minnow</strong><br/>Level 64</td>
            <td><strong>Keltraeng</strong> (x11.6,&nbsp;y9.6) <strong>Hingashi</strong> Kugane</td>
            <td><strong>Tail&nbsp;Mountains Minnow&nbsp;x3</strong></td>
            <td>Midge&nbsp;Larva + Mooch</td>
            <td>Upper Yat Khaal</td>
            <td><strong>Geimrael</strong> (x11.7,&nbsp;y9.6) <strong>Hingashi</strong> Kugane</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level66">
            <td><strong>Peculiar De-light</strong><br/>Level 66</td>
            <td><strong>Keltraeng</strong> (x11.6,&nbsp;y9.6) <strong>Hingashi</strong> Kugane</td>
            <td><strong>Sea&nbsp;Lamp&nbsp;x6</strong></td>
            <td>Small&nbsp;Gig&nbsp;Head, Normal&nbsp;Gig&nbsp;Head, Large&nbsp;Gig&nbsp;Head</td>
            <td>The Kobayashi Maru</td>
            <td><strong>Geimrael</strong> (x11.7,&nbsp;y9.6) <strong>Hingashi</strong> Kugane</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level66">
            <td><strong>Step by Steppe</strong><br/>Level 66</td>
            <td><strong>Keltraeng</strong> (x11.6,&nbsp;y9.6) <strong>Hingashi</strong> Kugane</td>
            <td><strong>Redfin&nbsp;x6</strong></td>
            <td>Normal&nbsp;Gig&nbsp;Head</td>
            <td>Azim Khaat Eastern Lakebed</td>
            <td><strong>Geimrael</strong> (x11.7,&nbsp;y9.6) <strong>Hingashi</strong> Kugane</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level66">
            <td><strong>Unbeliebubble</strong><br/>Level 66</td>
            <td><strong>Keltraeng</strong> (x11.6,&nbsp;y9.6) <strong>Hingashi</strong> Kugane</td>
            <td><strong>Doman Bubble&nbsp;Eye&nbsp;x4</strong></td>
            <td>Small&nbsp;Gig&nbsp;Head + Ichthyosaur&nbsp;x7</td>
            <td>The Sunken Junk, The Sunken Junk (Ichthyosaur)</td>
            <td><strong>Geimrael</strong> (x11.7,&nbsp;y9.6) <strong>Hingashi</strong> Kugane</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level68">
            <td><strong>Blood in the Water</strong><br/>Level 68</td>
            <td><strong>Keltraeng</strong> (x11.6,&nbsp;y9.6) <strong>Hingashi</strong> Kugane</td>
            <td><strong>Steelshark&nbsp;x3</strong></td>
            <td>Stonefly&nbsp;Larva</td>
            <td>Heather Falls</td>
            <td><strong>Geimrael</strong> (x11.7,&nbsp;y9.6) <strong>Hingashi</strong> Kugane</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level68">
            <td><strong>To the Teeth</strong><br/>Level 68</td>
            <td><strong>Keltraeng</strong> (x11.6,&nbsp;y9.6) <strong>Hingashi</strong> Kugane</td>
            <td><strong>Tawny Wench&nbsp;Shark&nbsp;x3</strong></td>
            <td>Blue&nbsp;Bobbit + Mooch</td>
            <td>The Isle of Bekko</td>
            <td><strong>Geimrael</strong> (x11.7,&nbsp;y9.6) <strong>Hingashi</strong> Kugane</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level68">
            <td><strong>Pre-octopied</strong><br/>Level 68</td>
            <td><strong>Keltraeng</strong> (x11.6,&nbsp;y9.6) <strong>Hingashi</strong> Kugane</td>
            <td><strong>Koromo&nbsp;Octopus&nbsp;x3</strong></td>
            <td>Blue&nbsp;Bobbit + Mooch</td>
            <td>The Isle of Zekki</td>
            <td><strong>Geimrael</strong> (x11.7,&nbsp;y9.6) <strong>Hingashi</strong> Kugane</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
        </table>
      </div>
    </div>
    <div v-if="shadowbringers">
      <h2 class="h3">Shadowbringers</h2>
      <div class="levequests-wrapper">
        <table class="levequests">
          <tr>
            <th>Guildeve</th>
            <th>Start NPC</th>          
            <th>Items Needed</th>
            <th>Baits</th>
            <th>Fishing Holes</th>
            <th>End NPC</th>
            <th>Bonus</th>
          </tr>
          <tr v-if="level70">
            <td><strong>Eco-Warrior of Light</strong><br/>Level 70</td>
            <td><strong>Eirikur</strong> (x9.7,&nbsp;y9.0) <strong>Norvrandt</strong> The&nbsp;Crystarium</td>
            <td><strong>Xanthic&nbsp;Bass&nbsp;x3</strong></td>
            <td>Fruit&nbsp;Worm</td>
            <td>Sullen, The Source (Area)</td>
            <td><strong>Shue-Hann</strong> (x9.7,&nbsp;y9.0) <strong>Norvrandt</strong> The&nbsp;Crystarium</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level70">
            <td><strong>Needs More Egg</strong><br/>Level 70</td>
            <td><strong>Eirikur</strong> (x9.7,&nbsp;y9.0) <strong>Norvrandt</strong> The&nbsp;Crystarium</td>
            <td><strong>Sand&nbsp;Egg&nbsp;x3</strong></td>
            <td>Desert Dessert&nbsp;Frog</td>
            <td>The River of Sand</td>
            <td><strong>Shue-Hann</strong> (x9.7,&nbsp;y9.0) <strong>Norvrandt</strong> The&nbsp;Crystarium</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level70">
            <td><strong>The Source of the Problem</strong><br/>Level 70</td>
            <td><strong>Eirikur</strong> (x9.7,&nbsp;y9.0) <strong>Norvrandt</strong> The&nbsp;Crystarium</td>
            <td><strong>Purple&nbsp;Ghost&nbsp;x6</strong></td>
            <td>Small&nbsp;Gig&nbsp;Head + Noblefish&nbsp;x10</td>
            <td>Northeast Source, Southeast Source (Noblefish)</td>
            <td><strong>Shue-Hann</strong> (x9.7,&nbsp;y9.0) <strong>Norvrandt</strong> The&nbsp;Crystarium</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level72">
            <td><strong>Jelly Salad</strong><br/>Level 72</td>
            <td><strong>Eirikur</strong> (x9.7,&nbsp;y9.0) <strong>Norvrandt</strong> The&nbsp;Crystarium</td>
            <td><strong>Blood&nbsp;Cloud&nbsp;x3</strong></td>
            <td>Moyebi&nbsp;Shrimp</td>
            <td>Seagazer Shoals, The Eastern Kholusian Coast</td>
            <td><strong>Shue-Hann</strong> (x9.7,&nbsp;y9.0) <strong>Norvrandt</strong> The&nbsp;Crystarium</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level72">
            <td><strong>Full of Fish</strong><br/>Level 72</td>
            <td><strong>Eirikur</strong> (x9.7,&nbsp;y9.0) <strong>Norvrandt</strong> The&nbsp;Crystarium</td>
            <td><strong>Geayi&nbsp;x6</strong></td>
            <td>Normal&nbsp;Gig&nbsp;Head</td>
            <td>Southeas Source</td>
            <td><strong>Shue-Hann</strong> (x9.7,&nbsp;y9.0) <strong>Norvrandt</strong> The&nbsp;Crystarium</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level72">
            <td><strong>Aetherquake</strong><br/>Level 72</td>
            <td><strong>Eirikur</strong> (x9.7,&nbsp;y9.0) <strong>Norvrandt</strong> The&nbsp;Crystarium</td>
            <td><strong>Finned&nbsp;Eggplant&nbsp;x6</strong></td>
            <td>Large&nbsp;Gig&nbsp;Head</td>
            <td>The Isle of Ken (Lakebed)</td>
            <td><strong>Shue-Hann</strong> (x9.7,&nbsp;y9.0) <strong>Norvrandt</strong> The&nbsp;Crystarium</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level74">
            <td><strong>Faerie Fish</strong><br/>Level 74</td>
            <td><strong>Eirikur</strong> (x9.7,&nbsp;y9.0) <strong>Norvrandt</strong> The&nbsp;Crystarium</td>
            <td><strong>Lemonfish&nbsp;x3</strong></td>
            <td>Marble&nbsp;Nymph</td>
            <td>Handmirror Lake</td>
            <td><strong>Shue-Hann</strong> (x9.7,&nbsp;y9.0) <strong>Norvrandt</strong> The&nbsp;Crystarium</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level74">
            <td><strong>The Bride Aquatic</strong><br/>Level 74</td>
            <td><strong>Eirikur</strong> (x9.7,&nbsp;y9.0) <strong>Norvrandt</strong> The&nbsp;Crystarium</td>
            <td><strong>Little&nbsp;Flirt&nbsp;x6</strong></td>
            <td>Normal&nbsp;Gig&nbsp;Head</td>
            <td>North Lyhe Ghiah</td>
            <td><strong>Shue-Hann</strong> (x9.7,&nbsp;y9.0) <strong>Norvrandt</strong> The&nbsp;Crystarium</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level74">
            <td><strong>A Cherry-red Herring</strong><br/>Level 74</td>
            <td><strong>Eirikur</strong> (x9.7,&nbsp;y9.0) <strong>Norvrandt</strong> The&nbsp;Crystarium</td>
            <td><strong>Cherry&nbsp;Herring&nbsp;x3</strong></td>
            <td>Marble&nbsp;Nymph</td>
            <td>The Spoiled One</td>
            <td><strong>Shue-Hann</strong> (x9.7,&nbsp;y9.0) <strong>Norvrandt</strong> The&nbsp;Crystarium</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level76">
            <td><strong>Crab Corps</strong><br/>Level 76</td>
            <td><strong>Eirikur</strong> (x9.7,&nbsp;y9.0) <strong>Norvrandt</strong> The&nbsp;Crystarium</td>
            <td><strong>Gourmand&nbsp;Crab&nbsp;x6</strong></td>
            <td>Normal&nbsp;Gig&nbsp;Head + Treescale&nbsp;x10</td>
            <td>North Lake Tusi Mek'ta, North Lake Tusi Mek'ta (Treescale)</td>
            <td><strong>Shue-Hann</strong> (x9.7,&nbsp;y9.0) <strong>Norvrandt</strong> The&nbsp;Crystarium</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level76">
            <td><strong>Magic Mushrooms</strong><br/>Level 76</td>
            <td><strong>Eirikur</strong> (x9.7,&nbsp;y9.0) <strong>Norvrandt</strong> The&nbsp;Crystarium</td>
            <td><strong>Paradise&nbsp;Crab&nbsp;x6</strong></td>
            <td>Small&nbsp;Gig&nbsp;Head + Suldia&nbsp;Ruby&nbsp;x10</td>
            <td>Thysm Lran, Central Longmirror Lake (Suldia Ruby)</td>
            <td><strong>Shue-Hann</strong> (x9.7,&nbsp;y9.0) <strong>Norvrandt</strong> The&nbsp;Crystarium</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level76">
            <td><strong>Fish for Days</strong><br/>Level 76</td>
            <td><strong>Eirikur</strong> (x9.7,&nbsp;y9.0) <strong>Norvrandt</strong> The&nbsp;Crystarium</td>
            <td><strong>Hucho&nbsp;Taimen&nbsp;x3</strong></td>
            <td>Robber&nbsp;Ball</td>
            <td>Upper Watts River</td>
            <td><strong>Shue-Hann</strong> (x9.7,&nbsp;y9.0) <strong>Norvrandt</strong> The&nbsp;Crystarium</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level78">
            <td><strong>Short-term Gains</strong><br/>Level 78</td>
            <td><strong>Eirikur</strong> (x9.7,&nbsp;y9.0) <strong>Norvrandt</strong> The&nbsp;Crystarium</td>
            <td><strong>Black&nbsp;Tri-star&nbsp;x3</strong></td>
            <td>Robber&nbsp;Ball</td>
            <td>The Lozatl</td>
            <td><strong>Shue-Hann</strong> (x9.7,&nbsp;y9.0) <strong>Norvrandt</strong> The&nbsp;Crystarium</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level78">
            <td><strong>Deep-sea Diving</strong><br/>Level 78</td>
            <td><strong>Eirikur</strong> (x9.7,&nbsp;y9.0) <strong>Norvrandt</strong> The&nbsp;Crystarium</td>
            <td><strong>Azure Sea&nbsp;Spider&nbsp;x3</strong></td>
            <td>Short&nbsp;Bill&nbsp;Minnow</td>
            <td>Purpure, The Norvrandt Slope</td>
            <td><strong>Shue-Hann</strong> (x9.7,&nbsp;y9.0) <strong>Norvrandt</strong> The&nbsp;Crystarium</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level78">
            <td><strong>A Feast for the Senses</strong><br/>Level 78</td>
            <td><strong>Eirikur</strong> (x9.7,&nbsp;y9.0) <strong>Norvrandt</strong> The&nbsp;Crystarium</td>
            <td><strong>Stippled&nbsp;Eel&nbsp;x3</strong></td>
            <td>Short&nbsp;Bill&nbsp;Minnow</td>
            <td>Where the Dry Return</td>
            <td><strong>Shue-Hann</strong> (x9.7,&nbsp;y9.0) <strong>Norvrandt</strong> The&nbsp;Crystarium</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
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
      arr: false,
      heavensward: false,
      stormblood: false,
      shadowbringers: false,
      level1: false,
      level5: false,
      level10: false,
      level15: false,
      level20: false,
      level25: false,
      level30: false,
      level35: false,
      level40: false,
      level45: false,
      level50: false,
      level52: false,
      level54: false,
      level56: false,
      level58: false,
      level60: false,
      level62: false,
      level64: false,
      level66: false,
      level68: false,
      level70: false,
      level72: false,
      level74: false,
      level76: false,
      level78: false
    };
  },
  methods: {
    toggleLevel1() {
      this.level1 = ! this.level1;
    },
    toggleLevel5() {
      this.level5 = ! this.level5;
    },
    toggleLevel10() {
      this.level10 = ! this.level10;
    },
    toggleLevel15() {
      this.level15 = ! this.level15;
    },
    toggleLevel20() {
      this.level20 = ! this.level20;
    },
    toggleLevel25() {
      this.level25 = ! this.level25;
    },
    toggleLevel30() {
      this.level30 = ! this.level30;
    },
    toggleLevel35() {
      this.level35 = ! this.level35;
    },
    toggleLevel40() {
      this.level40 = ! this.level40;
    },
    toggleLevel45() {
      this.level45 = ! this.level45;
    },
    toggleLevel50() {
      this.level50 = ! this.level50;
    },
    toggleLevel52() {
      this.level52 = ! this.level52;
    },
    toggleLevel54() {
      this.level54 = ! this.level54;
    },
    toggleLevel56() {
      this.level56 = ! this.level56;
    },
    toggleLevel58() {
      this.level58 = ! this.level58;
    },
    toggleLevel60() {
      this.level60 = ! this.level60;
    },
    toggleLevel62() {
      this.level62 = ! this.level62;
    },
    toggleLevel64() {
      this.level64 = ! this.level64;
    },
    toggleLevel66() {
      this.level66 = ! this.level66;
    },
    toggleLevel68() {
      this.level68 = ! this.level68;
    },
    toggleLevel70() {
      this.level70 = ! this.level70;
    },
    toggleLevel72() {
      this.level72 = ! this.level72;
    },
    toggleLevel74() {
      this.level74 = ! this.level74;
    },
    toggleLevel76() {
      this.level76 = ! this.level76;
    },
    toggleLevel78() {
      this.level78 = ! this.level78;
    },
    toggleARR() {
      this.arr = ! this.arr;      
    },
    toggleHeavensward() {
      this.heavensward = ! this.heavensward;
    },
    toggleStormblood() {
      this.stormblood = ! this.stormblood;
    },
    toggleShadowbringers() {
      this.shadowbringers = ! this.shadowbringers;
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/base/shared/_variables.scss';

  .levequests-wrapper {
    display: flex;

    .levequests {
      flex: 1;

      th {
        font-weight: 700;
        font-family: $heading-font-family;
        font-size: rem-calc(10);
        padding: 5px;
        border-bottom: 1px solid $nav-background-color;

        @media screen and (min-width:700px) {
          font-size: rem-calc(20);
        }

        &.vertical {
          vertical-align: middle;
        }
      }
    
      td {
        padding: 2px 0;
        text-align: center;

        @media screen and (min-width:700px) {
          padding: 10px 5px;
        }
        
        @media screen and (max-width:699px) {
          img {
            max-width: 60px;
            max-height: 15px;
          }
        }
        
        &.vertical {
          vertical-align: middle;
        }
      }
    }
  }
</style>