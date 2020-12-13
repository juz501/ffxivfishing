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
            <th>Start Zone/Area</th>          
            <th>Start NPC</th>
            <th>Items Needed</th>
            <th>End Zone/Area</th>
            <th>End NPC</th>
            <th>Bonus</th>
          </tr>
          <tr v-if="level1">
            <td><strong><strong>Adventurers' Relish</strong></strong><br/>Level 1</td>
            <td><strong><strong>Lower La Noscea</strong></strong><br/>Limsa Lominsa</td>
            <td><strong>Wyrkhoisk</strong><br/>(x31, y20)</td>
            <td><strong>Lominsan Anchovy x 3</strong></td>
            <td><strong>Lower La Noscea</strong><br/>Limsa Lominsa</td>
            <td><strong>Unsynwilf</strong><br/>(x10, y8)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level1">
            <td><strong>Soup to Guts</strong><br/>Level 1</td>
            <td><strong>Lower La Noscea</strong><br/>Limsa Lominsa</td>
            <td><strong>Wyrkholsk</strong><br/>(x31, y20)</td>
            <td><strong>Merlthor Goby x3</strong></td>
            <td><strong>Lower La Noscea</strong><br/>Limsa Lominsa</td>
            <td><strong>Unsynwilf</strong><br/>(x10, y8)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level1">
            <td><strong>A Kelping Hand</strong><br/>Level 1</td>
            <td><strong>Lower La Noscea</strong><br/>Limsa Lominsa</td>
            <td><strong>Wyrkholsk</strong><br/>(x31, y20)</td>
            <td><strong>Malm Kelp x3</strong></td>
            <td><strong>Lower La Noscea</strong><br/>Limsa Lominsa</td>
            <td><strong>Unsynwilf</strong><br/>(x10, y8)</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level1">
            <td><strong>Poor Boys Eat Well</strong><br/>Level 1</td>
            <td><strong>Lower La Noscea</strong><br/>Limsa Lominsa</td>
            <td><strong>Wyrkholsk</strong><br/>(x31, y20)</td>
            <td><strong>Finger Shrimp x3</strong></td>
            <td><strong>Lower La Noscea</strong><br/>Limsa Lominsa</td>
            <td><strong>Unsynwilf</strong><br/>(x10, y8)</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level5">
            <td><strong>Splendor in the Glass</strong><br/>Level 5</td>
            <td><strong>Lower La Noscea</strong><br/>Limsa Lominsa</td>
            <td><strong>Wyrkholsk</strong><br/>(x31, y20)</td>
            <td><strong>Harbor Herring x3</strong></td>
            <td><strong>Lower La Noscea</strong><br/>Limsa Lominsa</td>
            <td><strong>Unsynwilf</strong><br/>(x10, y8)</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level5">
            <td><strong>Cloud Cutlet</strong><br/>Level 5</td>
            <td><strong>Lower La Noscea</strong><br/>Limsa Lominsa</td>
            <td><strong>Wyrkholsk</strong><br/>(x31, y20)</td>
            <td><strong>Ocean Cloud x3</strong></td>
            <td><strong>Lower La Noscea</strong><br/>Limsa Lominsa</td>
            <td><strong>Unsynwilf</strong><br/>(x10, y8)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level5">
            <td><strong>They Taste Just as Pretty</strong><br/>Level 5</td>
            <td><strong>Lower La Noscea</strong><br/>Limsa Lominsa</td>
            <td><strong>Wyrkholsk</strong><br/>(x31, y20)</td>
            <td><strong>Coral Butterfly x3</strong></td>
            <td><strong>Lower La Noscea</strong><br/>Limsa Lominsa</td>
            <td><strong>Unsynwilf</strong><br/>(x10, y8)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level5">
            <td><strong>Yummy in the Tummy</strong><br/>Level 5</td>
            <td><strong>Lower La Noscea</strong><br/>Limsa Lominsa</td>
            <td><strong>Wyrkholsk</strong><br/>(x31, y20)</td>
            <td><strong>Sea Cucumber x3</strong></td>
            <td><strong>Lower La Noscea</strong><br/>Limsa Lominsa</td>
            <td><strong>Unsynwilf</strong><br/>(x10, y8)</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level10">
            <td><strong>Fish by Many Other Names</strong><br/>Level 10</td>
            <td><strong>Western La Noscea</strong><br/>Swiftperch</td>
            <td><strong>Swygskyf</strong><br/>(x34, y31)</td>
            <td><strong>Moraby Flounder x3</strong></td>
            <td><strong>Western La Noscea</strong><br/>Swiftperch</td>
            <td><strong>Q'molosi</strong><br/>(x34, y31)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level10">
            <td><strong>Just Add Water</strong><br/>Level 10</td>
            <td><strong>Western La Noscea</strong><br/>Swiftperch</td>
            <td><strong>Swygskyf</strong><br/>(x34, y31)</td>
            <td><strong>Tiger Cod x3</strong></td>
            <td><strong>Western La Noscea</strong><br/>Swiftperch</td>
            <td><strong>Q'molosi</strong><br/>(x34, y31)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level10">
            <td><strong>The Fertile Incandescent</strong><br/>Level 10</td>
            <td><strong>Western La Noscea</strong><br/>Swiftperch</td>
            <td><strong>Swygskyf</strong><br/>(x34, y31)</td>
            <td><strong>Harbor Herring x3</strong></td>
            <td><strong>Western La Noscea</strong><br/>Swiftperch</td>
            <td><strong>Q'molosi</strong><br/>(x34, y31)</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level10">
            <td><strong>Brain Candy</strong><br/>Level 10</td>
            <td><strong>Western La Noscea</strong><br/>Swiftperch</td>
            <td><strong>Swygskyf</strong><br/>(x34, y31)</td>
            <td><strong>Pebble Crab x3</strong></td>
            <td><strong>Western La Noscea</strong><br/>Swiftperch</td>
            <td><strong>Q'molosi</strong><br/>(x34, y31)</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level15">
            <td><strong>The Deepest Cut</strong><br/>Level 15</td>
            <td><strong>Western La Noscea</strong><br/>Aleport</td>
            <td><strong>Orwen</strong><br/>(x27, y27)</td>
            <td><strong>Razor Clam x3</strong></td>
            <td><strong>Western La Noscea</strong><br/>Aleport</td>
            <td><strong>Fupepe</strong><br/>(x27, y26)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level15">
            <td><strong>The Moral of the Coral</strong><br/>Level 15</td>
            <td><strong>Western La Noscea</strong><br/>Aleport</td>
            <td><strong>Orwen</strong><br/>(x27, y27)</td>
            <td><strong>White Coral x3</strong></td>
            <td><strong>Western La Noscea</strong><br/>Aleport</td>
            <td><strong>Fupepe</strong><br/>(x27, y26)</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level15">
            <td><strong>Crab Life by the Horns</strong><br/>Level 15</td>
            <td><strong>Western La Noscea</strong><br/>Aleport</td>
            <td><strong>Orwen</strong><br/>(x27, y27)</td>
            <td><strong>Helmet Crab x3</strong></td>
            <td><strong>Western La Noscea</strong><br/>Aleport</td>
            <td><strong>Fupepe</strong><br/>(x27, y26)</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level15">
            <td><strong>Shell Game (Fisher)</strong><br/>Level 15</td>
            <td><strong>Western La Noscea</strong><br/>Aleport</td>
            <td><strong>Orwen</strong><br/>(x27, y27)</td>
            <td><strong>Rothlyt Oyster x3</strong></td>
            <td><strong>Western La Noscea</strong><br/>Aleport</td>
            <td><strong>Fupepe</strong><br/>(x27, y26)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level20">
            <td><strong>Sounds Fishy to Me</strong><br/>Level 20</td>
            <td><strong>South Shroud</strong><br/>Quarrymill</td>
            <td><strong>Nyell</strong><br/>(x25, y20)</td>
            <td><strong>Copperfish x3</strong></td>
            <td><strong>South Shroud</strong><br/>Quarrymill</td>
            <td><strong>Daca Jinjahl</strong><br/>(x27, y26)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level20">
            <td><strong>Blind Ambition</strong><br/>Level 20</td>
            <td><strong>South Shroud</strong><br/>Quarrymill</td>
            <td><strong>Nyell</strong><br/>(x25, y20)</td>
            <td><strong>Dark Sleeper x3</strong></td>
            <td><strong>South Shroud</strong><br/>Quarrymill</td>
            <td><strong>Daca Jinjahl</strong><br/>(x27, y26)</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level20">
            <td><strong>The Long and the Shortcrust</strong><br/>Level 20</td>
            <td><strong>South Shroud</strong><br/>Quarrymill</td>
            <td><strong>Nyell</strong><br/>(x25, y20)</td>
            <td><strong>Black Eel x3</strong></td>
            <td><strong>South Shroud</strong><br/>Quarrymill</td>
            <td><strong>Daca Jinjahl</strong><br/>(x27, y26)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level20">
            <td><strong>Food Chain Reaction</strong><br/>Level 20</td>
            <td><strong>South Shroud</strong><br/>Quarrymill</td>
            <td><strong>Nyell</strong><br/>(x25, y20)</td>
            <td><strong>Faerie Bass x3</strong></td>
            <td><strong>South Shroud</strong><br/>Quarrymill</td>
            <td><strong>Daca Jinjahl</strong><br/>(x27, y26)</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level25">
            <td><strong>Fishing 101</strong><br/>Level 25</td>
            <td><strong>South Shroud</strong><br/>Quarrymill</td>
            <td><strong>Nyell</strong><br/>(x25, y20)</td>
            <td><strong>Dark Bass x3</strong></td>
            <td><strong>South Shroud</strong><br/>Quarrymill</td>
            <td><strong>Daca Jinjahl</strong><br/>(x27, y26)</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level25">
            <td><strong>A Shocking Soiree</strong><br/>Level 25</td>
            <td><strong>South Shroud</strong><br/>Quarrymill</td>
            <td><strong>Nyell</strong><br/>(x25, y20)</td>
            <td><strong>Black Ghost x3</strong></td>
            <td><strong>South Shroud</strong><br/>Quarrymill</td>
            <td><strong>Daca Jinjahl</strong><br/>(x27, y26)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level25">
            <td><strong>A Watery Web of Lies</strong><br/>Level 25</td>
            <td><strong>South Shroud</strong><br/>Quarrymill</td>
            <td><strong>Nyell</strong><br/>(x25, y20)</td>
            <td><strong>Yugr'am Salmon x3</strong></td>
            <td><strong>South Shroud</strong><br/>Quarrymill</td>
            <td><strong>Daca Jinjahl</strong><br/>(x27, y26)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level25">
            <td><strong>The Truth Will Set You Free</strong><br/>Level 25</td>
            <td><strong>South Shroud</strong><br/>Quarrymill</td>
            <td><strong>Nyell</strong><br/>(x25, y20)</td>
            <td><strong>Five-ilm Pleco x3</strong></td>
            <td><strong>South Shroud</strong><br/>Quarrymill</td>
            <td><strong>Daca Jinjahl</strong><br/>(x27, y26)</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level30">
            <td><strong>The Blue Period</strong><br/>Level 30</td>
            <td><strong>Eastern La Noscea</strong><br/>Costa del Sol</td>
            <td><strong>Nahctahr</strong><br/>(x30, y30)</td>
            <td><strong>Sea Pickle x3</strong></td>
            <td><strong>Eastern La Noscea</strong><br/>Costa del Sol</td>
            <td><strong>F'abodji</strong><br/>(x30, y31)</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level30">
            <td><strong>Kitchen Nightmares No More</strong><br/>Level 30</td>
            <td><strong>Eastern La Noscea</strong><br/>Costa del Sol</td>
            <td><strong>Nahctahr</strong><br/>(x30, y30)</td>
            <td><strong>Black Sole x3</strong></td>
            <td><strong>Eastern La Noscea</strong><br/>Costa del Sol</td>
            <td><strong>F'abodji</strong><br/>(x30, y31)</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level30">
            <td><strong>A Recipe for Disaster</strong><br/>Level 30</td>
            <td><strong>Eastern La Noscea</strong><br/>Costa del Sol</td>
            <td><strong>Nahctahr</strong><br/>(x30, y30)</td>
            <td><strong>Ash Tuna x3</strong></td>
            <td><strong>Eastern La Noscea</strong><br/>Costa del Sol</td>
            <td><strong>F'abodji</strong><br/>(x30, y31)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level30">
            <td><strong>Just Call Me Late for Dinner</strong><br/>Level 30</td>
            <td><strong>Eastern La Noscea</strong><br/>Costa del Sol</td>
            <td><strong>Nahctahr</strong><br/>(x30, y30)</td>
            <td><strong>Indigo Herring x3</strong></td>
            <td><strong>Eastern La Noscea</strong><br/>Costa del Sol</td>
            <td><strong>F'abodji</strong><br/>(x30, y31)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level35">
            <td><strong>Fry Me a River</strong><br/>Level 35</td>
            <td><strong>Coerthas Central Highlands</strong><br/>First Dicasterial Observatorium of<br/>Aetherial and Astrological Phenomena</td>
            <td><strong>Cimeaurant</strong><br/>(x26, y28)</td>
            <td><strong>Giant Bass x3</strong></td>
            <td><strong>Coerthas Central Highlands</strong><br/>First Dicasterial Observatorium of<br/>Aetherial and Astrological Phenomena</td>
            <td><strong>Drividot</strong><br/>(x28, y28)</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level35">
            <td><strong>The Perks of Politics</strong><br/>Level 35</td>
            <td><strong>Coerthas Central Highlands</strong><br/>First Dicasterial Observatorium of<br/>Aetherial and Astrological Phenomena</td>
            <td><strong>Cimeaurant</strong><br/>(x26, y28)</td>
            <td><strong>Seema x3</strong></td>
            <td><strong>Coerthas Central Highlands</strong><br/>First Dicasterial Observatorium of<br/>Aetherial and Astrological Phenomena</td>
            <td><strong>Drividot</strong><br/>(x28, y28)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level35">
            <td><strong>Gathering Light</strong><br/>Level 35</td>
            <td><strong>Coerthas Central Highlands</strong><br/>First Dicasterial Observatorium of<br/>Aetherial and Astrological Phenomena</td>
            <td><strong>Cimeaurant</strong><br/>(x26, y28)</td>
            <td><strong>Lamp Marimo x3</strong></td>
            <td><strong>Coerthas Central Highlands</strong><br/>First Dicasterial Observatorium of<br/>Aetherial and Astrological Phenomena</td>
            <td><strong>Drividot</strong><br/>(x28, y28)</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level35">
            <td><strong>Hands Off Our Fish</strong><br/>Level 35</td>
            <td><strong>Coerthas Central Highlands</strong><br/>First Dicasterial Observatorium of<br/>Aetherial and Astrological Phenomena</td>
            <td><strong>Cimeaurant</strong><br/>(x26, y28)</td>
            <td><strong>Crimson Trout x3</strong></td>
            <td><strong>Coerthas Central Highlands</strong><br/>First Dicasterial Observatorium of<br/>Aetherial and Astrological Phenomena</td>
            <td><strong>Drividot</strong><br/>(x28, y28)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level40">
            <td><strong>Empire Builder</strong><br/>Level 40</td>
            <td><strong>Coerthas Central Highlands</strong><br/>Whitebrim Front</td>
            <td><strong>Voilinaut</strong><br/>(x12, y16)</td>
            <td><strong>Bronze Lake Trout x3</strong></td>
            <td><strong>Coerthas Central Highlands</strong><br/>Whitebrim Front</td>
            <td><strong>Louviaune</strong><br/>(x13, y16)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level40">
            <td><strong>Laird of the Lakes</strong><br/>Level 40</td>
            <td><strong>Coerthas Central Highlands</strong><br/>Whitebrim Front</td>
            <td><strong>Voilinaut</strong><br/>(x12, y16)</td>
            <td><strong>Northern Pike x3</strong></td>
            <td><strong>Coerthas Central Highlands</strong><br/>Whitebrim Front</td>
            <td><strong>Louviaune</strong><br/>(x13, y16)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level40">
            <td><strong>Make a Fish</strong><br/>Level 40</td>
            <td><strong>Coerthas Central Highlands</strong><br/>Whitebrim Front</td>
            <td><strong>Voilinaut</strong><br/>(x12, y16)</td>
            <td><strong>Abalathian Smelt x3</strong></td>
            <td><strong>Coerthas Central Highlands</strong><br/>Whitebrim Front</td>
            <td><strong>Louviaune</strong><br/>(x13, y16)</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level40">
            <td><strong>Rationally Speaking</strong><br/>Level 40</td>
            <td><strong>Coerthas Central Highlands</strong><br/>Whitebrim Front</td>
            <td><strong>Voilinaut</strong><br/>(x12, y16)</td>
            <td><strong>Golden Loach x3</strong></td>
            <td><strong>Coerthas Central Highlands</strong><br/>Whitebrim Front</td>
            <td><strong>Louviaune</strong><br/>(x13, y16)</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level45">
            <td><strong>Snail Fail</strong><br/>Level 45</td>
            <td><strong>Mor Dhona</strong><br/>Saint Coinach's Find</td>
            <td><strong>K'leytai</strong><br/>(x29, y12)</td>
            <td><strong>Ignus Snail x3</strong></td>
            <td><strong>Mor Dhona</strong><br/>Saint Coinach's Find</td>
            <td><strong>Clifton</strong><br/>(x30, y12)</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level45">
            <td><strong>Awash in Evidence</strong><br/>Level 45</td>
            <td><strong>Mor Dhona</strong><br/>Saint Coinach's Find</td>
            <td><strong>K'leytai</strong><br/>(x29, y12)</td>
            <td><strong>Ilsabardian Bass x3</strong></td>
            <td><strong>Mor Dhona</strong><br/>Saint Coinach's Find</td>
            <td><strong>Clifton</strong><br/>(x30, y12)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level45">
            <td><strong>Sleeper Creeper</strong><br/>Level 45</td>
            <td><strong>Mor Dhona</strong><br/>Saint Coinach's Find</td>
            <td><strong>K'leytai</strong><br/>(x29, y12)</td>
            <td><strong>Sludgeskipper x3</strong></td>
            <td><strong>Mor Dhona</strong><br/>Saint Coinach's Find</td>          
            <td><strong>Clifton</strong><br/>(x30, y12)</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level45">
            <td><strong>Putting the Zap on Nature</strong><br/>Level 45</td>
            <td><strong>Mor Dhona</strong><br/>Saint Coinach's Find</td>
            <td><strong>K'leytai</strong><br/>(x29, y12)</td>
            <td><strong>Boltfish x3</strong></td>
            <td><strong>Mor Dhona</strong><br/>Saint Coinach's Find</td>
            <td><strong>Clifton</strong><br/>(x30, y12)</td>
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
            <th>Start Zone/Area</th>
            <th>Start NPC</th>
            <th>Items Needed</th>
            <th>End Zone/Area</th>
            <th>End NPC</th>
            <th>Bonus</th>
          </tr>
          <tr v-if="level50">
            <td><strong>The Voice of the Fury</strong><br/>Level 50</td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Eloin</strong><br/>(x10, y10)</td>
            <td><strong>Blueclaw Shrimp x 3</strong></td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Cesteline</strong><br/>(x10, y10)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level50">
            <td><strong>A Whole Lot of Nope (L)</strong><br/>Level 50</td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Eloin</strong><br/>(x10, y10)</td>
            <td><strong>Blueclaw Shrimp x 6</strong></td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Cesteline</strong><br/>(x10, y10)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level50">
            <td><strong>Please Halone, Tell Me I'm Still Asleep</strong><br/>Level 50</td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Eloin</strong><br/>(x10, y10)</td>
            <td><strong>Coerthan Crab x 3</strong></td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Cesteline</strong><br/>(x10, y10)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level50">
            <td><strong>Snipped for Spirituality (L)</strong><br/>Level 50</td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Eloin</strong><br/>(x10, y10)</td>
            <td><strong>Coerthan Crab x 6</strong></td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Cesteline</strong><br/>(x10, y10)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level50">
            <td><strong>Dine or Spine</strong><br/>Level 50</td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Eloin</strong><br/>(x10, y10)</td>
            <td><strong>Lake Urchin x 3</strong></td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Cesteline</strong><br/>(x10, y10)</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level50">
            <td><strong>Lurchin' from Urchins (L)</strong><br/>Level 50</td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Eloin</strong><br/>(x10, y10)</td>
            <td><strong>Lake Urchin x 6</strong></td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Cesteline</strong><br/>(x10, y10)</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level52">
            <td><strong>Fish Oils and Forgotten Spoils</strong><br/>Level 52</td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Eloin</strong><br/>(x10, y10)</td>
            <td><strong>Grass Carp x 3</strong></td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Cesteline</strong><br/>(x10, y10)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level52">
            <td><strong>Valuing the Vintage (L)</strong><br/>Level 52</td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Eloin</strong><br/>(x10, y10)</td>
            <td><strong>Grass Carp x 6</strong></td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Cesteline</strong><br/>(x10, y10)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level52">
            <td><strong>Loose Lips Heal (Broken) Hips</strong><br/>Level 52</td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Eloin</strong><br/>(x10, y10)</td>
            <td><strong>Three-lip Carp x 3</strong></td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Cesteline</strong><br/>(x10, y10)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level52">
            <td><strong>Prayer and Prejudice (L)</strong><br/>Level 52</td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Eloin</strong><br/>(x10, y10)</td>
            <td><strong>Three-lip Carp x 6</strong></td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Cesteline</strong><br/>(x10, y10)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level52">
            <td><strong>Bounty of Sky, Bounty of Earth</strong><br/>Level 52</td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Eloin</strong><br/>(x10, y10)</td>
            <td><strong>Cloudfish x 3</strong></td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Cesteline</strong><br/>(x10, y10)</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level52">
            <td><strong>Eating Like the Natives (L)</strong><br/>Level 52</td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Eloin</strong><br/>(x10, y10)</td>
            <td><strong>Cloudfish x 6</strong></td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Cesteline</strong><br/>(x10, y10)</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level54">
            <td><strong>Analysis of Paralysis</strong><br/>Level 54</td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Eloin</strong><br/>(x10, y10)</td>
            <td><strong>Mahu Wai x 3</strong></td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Cesteline</strong><br/>(x10, y10)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level54">
            <td><strong>Sending a Feeling to My Spine (L)</strong><br/>Level 54</td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Eloin</strong><br/>(x10, y10)</td>
            <td><strong>Mahu Wai x 6</strong></td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Cesteline</strong><br/>(x10, y10)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level54">
            <td><strong>The Aquariums of Ishgard</strong><br/>Level 54</td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Eloin</strong><br/>(x10, y10)</td>
            <td><strong>Buoyant Oviform x 3</strong></td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Cesteline</strong><br/>(x10, y10)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level54">
            <td><strong>A Win-win Situation (L)</strong><br/>Level 54</td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Eloin</strong><br/>(x10, y10)</td>
            <td><strong>Buoyant Oviform x 6</strong></td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Cesteline</strong><br/>(x10, y10)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level54">
            <td><strong>Bearing of the Blue</strong><br/>Level 54</td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Eloin</strong><br/>(x10, y10)</td>
            <td><strong>Blue Cloud Coral x 3</strong></td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Cesteline</strong><br/>(x10, y10)</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level54">
            <td><strong>Blue of Sky and Sea (L)</strong><br/>Level 54</td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Eloin</strong><br/>(x10, y10)</td>
            <td><strong>Blue Cloud Coral x 6</strong></td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Cesteline</strong><br/>(x10, y10)</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level56">
            <td><strong>Dining with Dravanians</strong><br/>Level 56</td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Eloin</strong><br/>(x10, y10)</td>
            <td><strong>Hundred Fin x 3</strong></td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Cesteline</strong><br/>(x10, y10)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level56">
            <td><strong>Hundred Fins for a Hundred Wings (L)</strong><br/>Level 56</td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Eloin</strong><br/>(x10, y10)</td>
            <td><strong>Hundred Fin x 6</strong></td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Cesteline</strong><br/>(x10, y10)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level56">
            <td><strong>Solo Out the Bolo</strong><br/>Level 56</td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Eloin</strong><br/>(x10, y10)</td>
            <td><strong>Brown Bolo x 3</strong></td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Cesteline</strong><br/>(x10, y10)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level56">
            <td><strong>Sucking on Face (L)</strong><br/>Level 56</td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Eloin</strong><br/>(x10, y10)</td>
            <td><strong>Brown Bolo x 6</strong></td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Cesteline</strong><br/>(x10, y10)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level56">
            <td><strong>Pipira Pirouette</strong><br/>Level 56</td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Eloin</strong><br/>(x10, y10)</td>
            <td><strong>Pipira Pira x 3</strong></td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Cesteline</strong><br/>(x10, y10)</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level56">
            <td><strong>Plus One or Two or Three (L)</strong><br/>Level 56</td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Eloin</strong><br/>(x10, y10)</td>
            <td><strong>Pipira Pira x 6</strong></td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Cesteline</strong><br/>(x10, y10)</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level58">
            <td><strong>Spew Forth and Spawn</strong><br/>Level 58</td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Eloin</strong><br/>(x10, y10)</td>
            <td><strong>Fountfish x 3</strong></td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Cesteline</strong><br/>(x10, y10)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level58">
            <td><strong>Unleash the Hydro Cannons (L)</strong><br/>Level 58</td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Eloin</strong><br/>(x10, y10)</td>
            <td><strong>Fountfish x 6</strong></td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Cesteline</strong><br/>(x10, y10)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level58">
            <td><strong>They Call It the Kissing Disease</strong><br/>Level 58</td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Eloin</strong><br/>(x10, y10)</td>
            <td><strong>Yalm Lobster x 3</strong></td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Cesteline</strong><br/>(x10, y10)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level58">
            <td><strong>Angling for Ailments (L)</strong><br/>Level 58</td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Eloin</strong><br/>(x10, y10)</td>
            <td><strong>Yalm Lobster x 6</strong></td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Cesteline</strong><br/>(x10, y10)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level58">
            <td><strong>Warmer than Wine</strong><br/>Level 58</td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Eloin</strong><br/>(x10, y10)</td>
            <td><strong>Bullwhip x 3</strong></td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Cesteline</strong><br/>(x10, y10)</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level58">
            <td><strong>What Does Not Break Us, Devours Us (L)</strong><br/>Level 58</td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Eloin</strong><br/>(x10, y10)</td>
            <td><strong>Bullwhip x 6</strong></td>
            <td><strong>Coerthas</strong><br />Foundation</td>
            <td><strong>Cesteline</strong><br/>(x10, y10)</td>
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
            <th>Start Zone/Area</th>
            <th>Start NPC</th>
            <th>Items Needed</th>
            <th>End Zone/Area</th>
            <th>End NPC</th>
            <th>Bonus</th>
          </tr>
          <tr v-if="level60">
            <td><strong>Slow Wash, Rapids Jumper</strong><br/>Level 60</td>
            <td><strong>Hingashi</strong><br/>Kugane</td>
            <td><strong>Keltraeng</strong><br/>(x11.6, y9.6)</td>
            <td><strong>Rapids Jumper x 3</strong></td>
            <td><strong>Hingashi</strong><br/>Kugane</td>
            <td><strong>Geimrael</strong><br/>(x11.7, y9.6)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level60">
            <td><strong>If a Leaf Falls in the Water</strong><br/>Level 60</td>
            <td><strong>Hingashi</strong><br/>Kugane</td>
            <td><strong>Keltraeng</strong><br/>(x11.6, y9.6)</td>
            <td><strong>Fallen Leaf x 3</strong></td>
            <td><strong>Hingashi</strong><br/>Kugane</td>
            <td><strong>Geimrael</strong><br/>(x11.7, y9.6)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level60">
            <td><strong>There Can Be Only One</strong><br/>Level 60</td>
            <td><strong>Hingashi</strong><br/>Kugane</td>
            <td><strong>Keltraeng</strong><br/>(x11.6, y9.6)</td>
            <td><strong>Highland Perch x 3</strong></td>
            <td><strong>Hingashi</strong><br/>Kugane</td>
            <td><strong>Geimrael</strong><br/>(x11.7, y9.6)</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level62">
            <td><strong>Lighter Wallets</strong><br/>Level 62</td>
            <td><strong>Hingashi</strong><br/>Kugane</td>
            <td><strong>Keltraeng</strong><br/>(x11.6, y9.6)</td>
            <td><strong>Glass Manta x 6</strong></td>
            <td><strong>Hingashi</strong><br/>Kugane</td>
            <td><strong>Geimrael</strong><br/>(x11.7, y9.6)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level62">
            <td><strong>In a Pickle</strong><br/>Level 62</td>
            <td><strong>Hingashi</strong><br/>Kugane</td>
            <td><strong>Keltraeng</strong><br/>(x11.6, y9.6)</td>
            <td><strong>Eastern Sea Pickle x 6</strong></td>
            <td><strong>Hingashi</strong><br/>Kugane</td>
            <td><strong>Geimrael</strong><br/>(x11.7, y9.6)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level62">
            <td><strong>Perhaps Not-So-Common</strong><br/>Level 62</td>
            <td><strong>Hingashi</strong><br/>Kugane</td>
            <td><strong>Keltraeng</strong><br/>(x11.6, y9.6)</td>
            <td><strong>Common Whelk x 4</strong></td>
            <td><strong>Hingashi</strong><br/>Kugane</td>
            <td><strong>Geimrael</strong><br/>(x11.7, y9.6)</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level64">
            <td><strong>Catfish Scheme</strong><br/>Level 64</td>
            <td><strong>Hingashi</strong><br/>Kugane</td>
            <td><strong>Keltraeng</strong><br/>(x11.6, y9.6)</td>
            <td><strong>Longhair Catfish x 3</strong></td>
            <td><strong>Hingashi</strong><br/>Kugane</td>
            <td><strong>Geimrael</strong><br/>(x11.7, y9.6)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level64">
            <td><strong>Curtains for Pleco</strong><br/>Level 64</td>
            <td><strong>Hingashi</strong><br/>Kugane</td>
            <td><strong>Keltraeng</strong><br/>(x11.6, y9.6)</td>
            <td><strong>Curtain Pleco x 3</strong></td>
            <td><strong>Hingashi</strong><br/>Kugane</td>
            <td><strong>Geimrael</strong><br/>(x11.7, y9.6)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level64">
            <td><strong>Marooned Minnow</strong><br/>Level 64</td>
            <td><strong>Hingashi</strong><br/>Kugane</td>
            <td><strong>Keltraeng</strong><br/>(x11.6, y9.6)</td>
            <td><strong>Tail Mountains Minnow x 3</strong></td>
            <td><strong>Hingashi</strong><br/>Kugane</td>
            <td><strong>Geimrael</strong><br/>(x11.7, y9.6)</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level66">
            <td><strong>Peculiar De-light</strong><br/>Level 66</td>
            <td><strong>Hingashi</strong><br/>Kugane</td>
            <td><strong>Keltraeng</strong><br/>(x11.6, y9.6)</td>
            <td><strong>Sea Lamp x 6</strong></td>
            <td><strong>Hingashi</strong><br/>Kugane</td>
            <td><strong>Geimrael</strong><br/>(x11.7, y9.6)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level66">
            <td><strong>Step by Steppe</strong><br/>Level 66</td>
            <td><strong>Hingashi</strong><br/>Kugane</td>
            <td><strong>Keltraeng</strong><br/>(x11.6, y9.6)</td>
            <td><strong>Redfin x 6</strong></td>
            <td><strong>Hingashi</strong><br/>Kugane</td>
            <td><strong>Geimrael</strong><br/>(x11.7, y9.6)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level66">
            <td><strong>Unbeliebubble</strong><br/>Level 66</td>
            <td><strong>Hingashi</strong><br/>Kugane</td>
            <td><strong>Keltraeng</strong><br/>(x11.6, y9.6)</td>
            <td><strong>Doman Bubble Eye x 4</strong></td>
            <td><strong>Hingashi</strong><br/>Kugane</td>
            <td><strong>Geimrael</strong><br/>(x11.7, y9.6)</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level68">
            <td><strong>Blood in the Water</strong><br/>Level 68</td>
            <td><strong>Hingashi</strong><br/>Kugane</td>
            <td><strong>Keltraeng</strong><br/>(x11.6, y9.6)</td>
            <td><strong>Steelshark x 3</strong></td>
            <td><strong>Hingashi</strong><br/>Kugane</td>
            <td><strong>Geimrael</strong><br/>(x11.7, y9.6)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level68">
            <td><strong>To the Teeth</strong><br/>Level 68</td>
            <td><strong>Hingashi</strong><br/>Kugane</td>
            <td><strong>Keltraeng</strong><br/>(x11.6, y9.6)</td>
            <td><strong>Tawny Wench Shark x 3</strong></td>
            <td><strong>Hingashi</strong><br/>Kugane</td>
            <td><strong>Geimrael</strong><br/>(x11.7, y9.6)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level68">
            <td><strong>Pre-octopied</strong><br/>Level 68</td>
            <td><strong>Hingashi</strong><br/>Kugane</td>
            <td><strong>Keltraeng</strong><br/>(x11.6, y9.6)</td>
            <td><strong>Koromo Octopus x3</strong></td>
            <td><strong>Hingashi</strong><br/>Kugane</td>
            <td><strong>Geimrael</strong><br/>(x11.7, y9.6)</td>
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
            <th>Start Zone/Area</th>
            <th>Start NPC</th>
            <th>Items Needed</th>
            <th>End Zone/Area</th>
            <th>End NPC</th>
            <th>Bonus</th>
          </tr>
          <tr v-if="level70">
            <td><strong>Eco-Warrior of Light</strong><br/>Level 70</td>
            <td><strong>Norvrandt</strong><br/>The Crystarium</td>
            <td><strong>Eirikur</strong><br/>(x9.7, y9.0)</td>
            <td><strong>Xanthic Bass x 3</strong></td>
            <td><strong>Norvrandt</strong><br/>The Crystarium</td>
            <td><strong>Shue-Hann</strong><br/>(x9.7, y9.0)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level70">
            <td><strong>Needs More Egg</strong><br/>Level 70</td>
            <td><strong>Norvrandt</strong><br/>The Crystarium</td>
            <td><strong>Eirikur</strong><br/>(x9.7, y9.0)</td>
            <td><strong>Sand Egg x 3</strong></td>
            <td><strong>Norvrandt</strong><br/>The Crystarium</td>
            <td><strong>Shue-Hann</strong><br/>(x9.7, y9.0)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level70">
            <td><strong>The Source of the Problem</strong><br/>Level 70</td>
            <td><strong>Norvrandt</strong><br/>The Crystarium</td>
            <td><strong>Eirikur</strong><br/>(x9.7, y9.0)</td>
            <td><strong>Purple Ghost x 6</strong></td>
            <td><strong>Norvrandt</strong><br/>The Crystarium</td>
            <td><strong>Shue-Hann</strong><br/>(x9.7, y9.0)</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level72">
            <td><strong>Jelly Salad</strong><br/>Level 72</td>
            <td><strong>Norvrandt</strong><br/>The Crystarium</td>
            <td><strong>Eirikur</strong><br/>(x9.7, y9.0)</td>
            <td><strong>Blood Cloud x 3</strong></td>
            <td><strong>Norvrandt</strong><br/>The Crystarium</td>
            <td><strong>Shue-Hann</strong><br/>(x9.7, y9.0)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level72">
            <td><strong>Full of Fish</strong><br/>Level 72</td>
            <td><strong>Norvrandt</strong><br/>The Crystarium</td>
            <td><strong>Eirikur</strong><br/>(x9.7, y9.0)</td>
            <td><strong>Geayi x 6</strong></td>
            <td><strong>Norvrandt</strong><br/>The Crystarium</td>
            <td><strong>Shue-Hann</strong><br/>(x9.7, y9.0)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level72">
            <td><strong>Aetherquake</strong><br/>Level 72</td>
            <td><strong>Norvrandt</strong><br/>The Crystarium</td>
            <td><strong>Eirikur</strong><br/>(x9.7, y9.0)</td>
            <td><strong>Finned Eggplant x 6</strong></td>
            <td><strong>Norvrandt</strong><br/>The Crystarium</td>
            <td><strong>Shue-Hann</strong><br/>(x9.7, y9.0)</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level74">
            <td><strong>Faerie Fish</strong><br/>Level 74</td>
            <td><strong>Norvrandt</strong><br/>The Crystarium</td>
            <td><strong>Eirikur</strong><br/>(x9.7, y9.0)</td>
            <td><strong>Lemonfish x 3</strong></td>
            <td><strong>Norvrandt</strong><br/>The Crystarium</td>
            <td><strong>Shue-Hann</strong><br/>(x9.7, y9.0)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level74">
            <td><strong>The Bride Aquatic</strong><br/>Level 74</td>
            <td><strong>Norvrandt</strong><br/>The Crystarium</td>
            <td><strong>Eirikur</strong><br/>(x9.7, y9.0)</td>
            <td><strong>Little Flirt x 6</strong></td>
            <td><strong>Norvrandt</strong><br/>The Crystarium</td>
            <td><strong>Shue-Hann</strong><br/>(x9.7, y9.0)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level74">
            <td><strong>A Cherry-red Herring</strong><br/>Level 74</td>
            <td><strong>Norvrandt</strong><br/>The Crystarium</td>
            <td><strong>Eirikur</strong><br/>(x9.7, y9.0)</td>
            <td><strong>Cherry Herring x 3</strong></td>
            <td><strong>Norvrandt</strong><br/>The Crystarium</td>
            <td><strong>Shue-Hann</strong><br/>(x9.7, y9.0)</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level76">
            <td><strong>Crab Corps</strong><br/>Level 76</td>
            <td><strong>Norvrandt</strong><br/>The Crystarium</td>
            <td><strong>Eirikur</strong><br/>(x9.7, y9.0)</td>
            <td><strong>Gourmand Crab x 6</strong></td>
            <td><strong>Norvrandt</strong><br/>The Crystarium</td>
            <td><strong>Shue-Hann</strong><br/>(x9.7, y9.0)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level76">
            <td><strong>Magic Mushrooms</strong><br/>Level 76</td>
            <td><strong>Norvrandt</strong><br/>The Crystarium</td>
            <td><strong>Eirikur</strong><br/>(x9.7, y9.0)</td>
            <td><strong>Paradise Crab x 6</strong></td>
            <td><strong>Norvrandt</strong><br/>The Crystarium</td>
            <td><strong>Shue-Hann</strong><br/>(x9.7, y9.0)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level76">
            <td><strong>Fish for Days</strong><br/>Level 76</td>
            <td><strong>Norvrandt</strong><br/>The Crystarium</td>
            <td><strong>Eirikur</strong><br/>(x9.7, y9.0)</td>
            <td><strong>Hucho Taimen x 3</strong></td>
            <td><strong>Norvrandt</strong><br/>The Crystarium</td>
            <td><strong>Shue-Hann</strong><br/>(x9.7, y9.0)</td>
            <td class="vertical"><img src="/img/triple-turn-in.png" alt="Triple Turn In" width="120" height="30" /></td>
          </tr>
          <tr v-if="level78">
            <td><strong>Short-term Gains</strong><br/>Level 78</td>
            <td><strong>Norvrandt</strong><br/>The Crystarium</td>
            <td><strong>Eirikur</strong><br/>(x9.7, y9.0)</td>
            <td><strong>Black Tri-star x 3</strong></td>
            <td><strong>Norvrandt</strong><br/>The Crystarium</td>
            <td><strong>Shue-Hann</strong><br/>(x9.7, y9.0)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level78">
            <td><strong>Deep-sea Diving</strong><br/>Level 78</td>
            <td><strong>Norvrandt</strong><br/>The Crystarium</td>
            <td><strong>Eirikur</strong><br/>(x9.7, y9.0)</td>
            <td><strong>Azure Sea Spider x 3</strong></td>
            <td><strong>Norvrandt</strong><br/>The Crystarium</td>
            <td><strong>Shue-Hann</strong><br/>(x9.7, y9.0)</td>
            <td class="vertical"></td>
          </tr>
          <tr v-if="level78">
            <td><strong>A Feast for the Senses</strong><br/>Level 78</td>
            <td><strong>Norvrandt</strong><br/>The Crystarium</td>
            <td><strong>Eirikur</strong><br/>(x9.7, y9.0)</td>
            <td><strong>Stippled Eel x 3</strong></td>
            <td><strong>Norvrandt</strong><br/>The Crystarium</td>
            <td><strong>Shue-Hann</strong><br/>(x9.7, y9.0)</td>
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