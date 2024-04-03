
const poke = {};

function convertPokeApiDetailsPokemon(pokeDetail) {
    const pokemon = new Pokemon();
    pokemon.number = pokeDetail.id;
    pokemon.name = pokeDetail.name;

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types;

    pokemon.types = types
    pokemon.type = type;

    //pokemon.hp = pokeDetail.hp

    pokemon.image = pokeDetail.sprites.other.dream_world.front_default;

    return pokemon;
}

function convertePokemonDetails(poke)
{
    const pokemon = new PokemonDetalhes();

    pokemon.number = poke.id;
    pokemon.name = poke.name;

    const types = poke.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types;

    pokemon.types = types
    pokemon.type = type;

    poke.stats.forEach((s) => {
        switch (s.stat.name) {
            case "hp":
                pokemon.hp = s
                break;
            case "attack":
                pokemon.atk = s
                break;
            case "defense":
                pokemon.def = s
                break;
            case "special-attack":
                pokemon.satk = s
                break;
            case "special-defense":
                pokemon.sdef = s
                break;
            case "speed":
                pokemon.spd = s
                break;
            default:
                break;
        }
    })

    pokemon.image = poke.sprites.other.dream_world.front_default;

    return pokemon
}

poke.getPokemonsDetail = (pokemon) =>
{
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailsPokemon);
}


poke.getPokemons = (offset = 0, limit = 5) => {

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

   return fetch(url)
            .then((response) => response.json())
            .then((responseBody) => responseBody.results)
            .then((pokemons) => pokemons.map(poke.getPokemonsDetail))
            .then((details) => Promise.all(details))
            .then((pokemonsDetails) => pokemonsDetails)
};

poke.consultaPokemon = (pokeName) => {

    const url = 'https://pokeapi.co/api/v2/pokemon/';
    return fetch(url + pokeName)
            .then((response) => response.json())
            .then(convertePokemonDetails)
}
