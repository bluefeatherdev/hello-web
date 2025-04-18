// JavaScript
console.log("Hello World! {'🌿🖥️'};");

// Prueba: Conexión API
const apiConnection = async () => {
    // Conexión API con fetch (async/await)
    const apiURL = "https://pokeapi.co/api/v2/pokemon/";
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data);
        data.results.forEach(element => {
            console.log(`${element.name}`);
        });
    } catch (error) {
        console.error(`Error: ${error}`);
    }
};
// apiConnection();

// Prueba: Obtener todos los pokemones
const fetchAllPokemons = async () => {
    // Conexión API con fetch (async/await)
    try {
        let results = [];
        let newURL = 'https://pokeapi.co/api/v2/pokemon/?limit=1303';
        const response = await fetch(newURL);
        const data = await response.json();
        results = data.results;
        console.log(`Total Pokemons: ${results.length}`);
        console.log(results);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
};
// fetchAllPokemons();

// Prueba: Obtener un pokemon específico
const getPokemonInfo = async (id) => {
    // Conexión API con fetch (async/await)
    try {
        let newURL = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const response = await fetch(newURL);
        const data = await response.json();
        pokemonId = data.id;
        pokemonName = data.name;
        pokemonAbilities = data.abilities;
        pokemonSprites = data.sprites;
        console.log(pokemonId);
        console.log(pokemonName);
        console.log(pokemonAbilities);
        console.log(pokemonSprites);
        console.log(Object.keys(data));
        console.log(Object.keys(data).length);
        console.log(data);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
};
// getPokemonInfo(5);

// Prueba: Mostrar 15 pokemones en HTML con fetch
let cardContainer = document.getElementById("cardContainer");
const showOnePokemonWithFetch = async (id) => {
    // Conexión API con fetch (async/await)
    try {
        let newURL = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const response = await fetch(newURL);
        const data = await response.json();
        const pokemonId = data.id;
        const pokemonName = data.name;
        const pokemonAbilities = data.abilities;
        const pokemonSprites = data.sprites;
        
        cardContainer.innerHTML += `
            <div class="card">
                <h2>${pokemonName}</h2>
                <p>ID: ${pokemonId}</p>
                <p>Name: ${pokemonName}</p>
                <p>Abilities: ${pokemonAbilities.map(ability => ability.ability.name).join(', ')}</p>
                <p>Sprites:</p>
                <img src="${pokemonSprites.front_default}" alt="${pokemonName}">
            </div>
            <hr>
        `;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
};

// Mostrar primeros 15 pokemones (fetch)
// for (let i = 1; i <= 15; i++) {
//     if (i >= 1026) {
//         console.log(`Pokemon ID: ${i + 8975}`);
//         showOnePokemonWithFetch(i + 8975);
//     } else {
//         console.log(`Pokemon ID: ${i}`);
//         showOnePokemonWithFetch(i);
//     }
// }

// Mostrar 15 pokemones en HTML con Promise
const showPokemonsWithPromise = async () => {
    // Conexión API con Promise (async/await)
    try {
        let promises = [];
        for (let i = 1; i <= 15; i++) {
            let id = i >= 1026 ? i + 8975 : i;
            let newURL = `https://pokeapi.co/api/v2/pokemon/${id}`;
            promises.push(fetch(newURL).then(response => response.json()));
        }

        let results = await Promise.all(promises);
        results.forEach(data => {
            let pokemonId = data.id;
            let pokemonName = data.name;
            let pokemonAbilities = data.abilities;
            let pokemonSprites = data.sprites;

            cardContainer.innerHTML += `
                <div class="card">
                    <h2>${pokemonName}</h2>
                    <p>ID: ${pokemonId}</p>
                    <p>Name: ${pokemonName}</p>
                    <p>Abilities: ${pokemonAbilities.map(ability => ability.ability.name).join(', ')}</p>
                    <p>Sprites:</p>
                    <img src="${pokemonSprites.front_default}" alt="${pokemonName}">
                </div>
                <hr>
            `;
        });
    } catch (error) {
        console.error(`Error: ${error}`);
    }
};
showPokemonsWithPromise();

