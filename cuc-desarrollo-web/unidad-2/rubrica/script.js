// JavaScript
console.log("Hello World! {'🌿🖥️'};");

// Obtener el contenedor de tarjetas y el selector
const cardContainer = document.getElementById('cardContainer');
const pokemonSelector = document.getElementById('pokemonSelector');

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

            // Crear la tarjeta
            cardContainer.innerHTML += `
                <div class="card" data-name="${pokemonName}">
                    <h2>${pokemonName}</h2>
                    <p>ID: ${pokemonId}</p>
                    <p>Name: ${pokemonName}</p>
                    <p>Abilities: ${pokemonAbilities.map(ability => ability.ability.name).join(', ')}</p>
                    <p>Sprites:</p>
                    <img src="${pokemonSprites.front_default}" alt="${pokemonName}">
                </div>
            `;

            // Agregar opción al selector
            const option = document.createElement('option');
            option.value = pokemonName;
            option.textContent = pokemonName;
            pokemonSelector.appendChild(option);
        });

        // Agregar evento al selector
        pokemonSelector.addEventListener('change', function () {
            const selected = this.value;
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                if (selected === 'all') {
                    card.style.display = 'block';
                } else {
                    if (card.getAttribute('data-name') === selected) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });

    } catch (error) {
        console.error(`Error: ${error}`);
    }
};
showPokemonsWithPromise();

// Centrar la tarjeta si es la única visible
pokemonSelector.addEventListener('change', function () {
    const selected = this.value;
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (selected === 'all') {
            card.style.display = 'block';
        } else {
            if (card.getAttribute('data-name') === selected) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });

    // Evaluar cuántas cards están visibles
    const visibleCards = Array.from(cards).filter(card => card.style.display !== 'none');

    if (visibleCards.length === 1) {
        cardContainer.classList.add('single');
    } else {
        cardContainer.classList.remove('single');
    }
});
