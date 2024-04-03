
const pokemons = document.getElementById('pokemonLi');
const carregaMais = document.getElementById('moreButton');
const limit = 5;
let offset = 0

const maxRecords = 151
let pokeName = '';
let pokeData = '';
let nomePagina = '';

function loadPokemonsItens(offset, limit) {
   poke.getPokemons(offset, limit).then((pokemonli = []) => {
      pokemons.innerHTML += pokemonli.map((pokemon) => 
      `  <li class="pokemon ${pokemon.type}")>
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
               <ol class="types">
                  ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
               </ol>
               <img src="${pokemon.image}" alt="${pokemon.name}">   
            </div>
         </li>
      `
      )
      .join('');
   });
}

pokemons.addEventListener('click', (event) => {

   const objetoClick = event.target
   if(objetoClick.tagName === "SPAN" && objetoClick.classList.contains('name'))
   {
      pokeName = objetoClick.textContent
   }
   window.open(`/pokemondetails.html?name=${pokeName}`, '_blank')
})


loadPokemonsItens(offset, limit);

carregaMais.addEventListener('click', () => {
   offset += limit

   const nextPage = offset + limit;

   if (nextPage >= maxRecords) {

      const novoLimit = maxRecords - offset;
      loadPokemonsItens(offset, novoLimit);
      carregaMais.parentElement.removeChild(carregaMais);

   } else {
      loadPokemonsItens(offset, limit);
   }
})



   