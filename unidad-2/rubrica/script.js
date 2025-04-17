// JavaScript
console.log("Hello World! {'🌿🖥️'};");

// Conexión API con Fetch (async/await)
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
}
apiConnection();
