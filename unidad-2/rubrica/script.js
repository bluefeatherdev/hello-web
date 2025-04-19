// JavaScript
console.log("Hello World! {'🌿🖥️'};");

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
            `;
        });
    } catch (error) {
        console.error(`Error: ${error}`);
    }
};
showPokemonsWithPromise();

