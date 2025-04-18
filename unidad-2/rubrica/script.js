// JavaScript
console.log("Hello World! {'🌿🖥️'};");

// Conexión API con fetch (async/await)
const apiConnection = async () => {
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
apiConnection();

// Conexión API con fetch (async/await)
const fetchAllPokemons = async () => {
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
fetchAllPokemons();

// Conexión API con fetch (async/await)
const getPokemonInfo = async () => {
    try {
        let newURL = 'https://pokeapi.co/api/v2/pokemon/1';
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
getPokemonInfo();

// Mostrar los datos en el HTML
let cardContainer = document.getElementById("cardContainer");
const showDataInHTML = async (id) => {
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

// Mostrar primeros 15 pokemones
for (let i = 1; i <= 15; i++) {
    if (i >= 1026) {
        console.log(`Pokemon ID: ${i + 8975}`);
        showDataInHTML(i + 8975);
    } else {
        console.log(`Pokemon ID: ${i}`);
        showDataInHTML(i);
    }
}
