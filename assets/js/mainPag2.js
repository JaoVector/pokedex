

const pokemonDetail = document.getElementById('pokedex');

let pokeName = '';
let pokeData = '';
let nomePagina = '';


window.onload = function () {
    const urlParam = new URLSearchParams(window.location.search)
    const pokemonNome = urlParam.get('name')
 
    if(pokemonNome) {
       poke.consultaPokemon(pokemonNome).then((pokemonD) => { 
         
          pokemonDetail.innerHTML  =  
          `  <div id="top">
                <div id="top-bar">
                   <span id="name">${pokemonD.name}</span>
                   <span id="number">${'#' + pokemonD.number.toString().padStart(3, '0')}</span>
                </div>
                <div id="poke-image">
                   <img src="${pokemonD.image}" id="pokemon-image" alt="${pokemonD.name}">
                </div>
             </div>
             <div id="data">
                <div class="types">
                    ${pokemonD.types.map((type) => `<span class="type ${type}">${type}</span>`).join('')}
                </div>
                <h4 class="base-stats">Base Stats</h4>
                <div id="stats">
                   <div class="stat-row">
                      <div class="stat-desc">HP</div>
                      <div class="stat-number">${pokemonD.hp.base_stat.toString().padStart(3, '0')}</div>
                      <div class="stat-bar">
                         <div class="bar-outer">
                            <div class="bar-inner" style="width:${pokemonD.hp.base_stat.toString()}%">
                            </div>
                         </div>
                      </div>
                   </div>
                   <div class="stat-row">
                     <div class="stat-desc">ATK</div>
                     <div class="stat-number">${pokemonD.atk.base_stat.toString().padStart(3, '0')}</div>
                     <div class="stat-bar">
                        <div class="bar-outer">
                           <div class="bar-inner" style="width:${pokemonD.atk.base_stat.toString()}%">
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="stat-row">
                    <div class="stat-desc">DEF</div>
                    <div class="stat-number">${pokemonD.def.base_stat.toString().padStart(3, '0')}</div>
                    <div class="stat-bar">
                        <div class="bar-outer">
                            <div class="bar-inner" style="width:${pokemonD.def.base_stat.toString()}%">
                            </div>
                        </div>
                    </div>
                  </div>
                  <div class="stat-row">
                    <div class="stat-desc">SATK</div>
                    <div class="stat-number">${pokemonD.satk.base_stat.toString().padStart(3, '0')}</div>
                    <div class="stat-bar">
                        <div class="bar-outer">
                            <div class="bar-inner" style="width:${pokemonD.satk.base_stat.toString()}%">
                            </div>
                        </div>
                    </div>
                  </div>
                  <div class="stat-row">
                    <div class="stat-desc">SDEF</div>
                    <div class="stat-number">${pokemonD.sdef.base_stat.toString().padStart(3, '0')}</div>
                    <div class="stat-bar">
                        <div class="bar-outer">
                            <div class="bar-inner" style="width:${pokemonD.sdef.base_stat.toString()}%">
                            </div>
                        </div>
                    </div>
                  </div>
                  <div class="stat-row">
                    <div class="stat-desc">SPD</div>
                    <div class="stat-number">${pokemonD.spd.base_stat.toString().padStart(3, '0')}</div>
                    <div class="stat-bar">
                        <div class="bar-outer">
                            <div class="bar-inner" style="width:${pokemonD.spd.base_stat.toString()}%">
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
             </div>
          ` 

          const cor = ConsultaTipoCores(pokemonD.type)
          const baseStats = document.querySelector('.base-stats')
          const barOuter = document.querySelectorAll('.bar-outer')
          const barInner = document.querySelectorAll('.bar-inner')
          const statDesc = document.querySelectorAll('.stat-desc')
          pokemonDetail.style.backgroundColor = cor
          baseStats.style.color = cor

          const barOuterArray = Array.from(barOuter)
          const barInnerArray = Array.from(barInner)
          const statDescArray = Array.from(statDesc)

          barOuterArray.map(barOuter => {
            barOuter.style.backgroundColor = ConverteRGBtoRGBA(cor)  
          })

          barInnerArray.map(barInner => {
            barInner.style.backgroundColor = cor
          })
          
          statDescArray.map(statDesc => {
            statDesc.style.color = cor
          })
       })
    }
 }

 function ConverteRGBtoRGBA(corRgb) {
   var rgbValues = corRgb.match(/\d+/g)
   var r = parseInt(rgbValues[0])
   var g = parseInt(rgbValues[1])
   var b = parseInt(rgbValues[2])

   return `rgba(${r}, ${g}, ${b}, 0.3)`
 }

 function ConsultaTipoCores(pokeType) {
   switch (pokeType) {
      case 'normal':
         return 'rgb(170, 166, 127)';
      case 'fire':
         return 'rgb(245, 125, 49)';
      case 'water':
         return 'rgb(100, 147, 235)';
      case 'electric':
         return 'rgb(249, 207, 48)';
      case 'grass':
         return 'rgb(116, 203, 72)';
      case 'ground':
         return 'rgb(222, 193, 107)';
      case 'flying':
         return 'rgb(168, 145, 236)';
      case 'poison':
         return 'rgb(164, 62, 158)';
      case 'fighting':
         return 'rgb(193, 34, 57)';
      case 'psychic':
         return 'rgb(251, 85, 132)';
      case 'dark':
         return 'rgb(117, 87, 76)';
      case 'rock':
         return 'rgb(182, 158, 49)';
      case 'bug':
         return 'rgb(167, 183, 35)';
      case 'ghost':
         return 'rgb(112, 85, 155)';
      case 'steel':
         return 'rgb(183, 185, 208)';
      case 'dragon':
         return 'rgb(112, 55, 255)';
      case 'fairy':
         return 'rgb(230, 158, 172)';
      case 'ice':
         return 'rgb(154, 214, 223)'
      default:
         return 'rgb(0, 0, 0)';   
      case "":
         break;
   }
}
