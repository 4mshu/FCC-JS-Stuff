const searchBtn = document.getElementById("search-button");
const pokemonAPI = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokeWeight = document.getElementById("weight");
const pokeHeight = document.getElementById("height");
const pokemonTypes = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

searchBtn.addEventListener("click", function() {

    pokemonName.innerText = "";
    pokemonId.innerText = "";
    pokeWeight.innerText = "";
    pokeHeight.innerText = "";
    hp.innerText = "";
    attack.innerText = "";
    defense.innerText = "";
    specialAttack.innerText = "";
    specialDefense.innerText = "";
    speed.innerText = "";
    pokemonTypes.innerHTML = "";
    const spriteElement = document.getElementById("sprite");
    if (spriteElement) {
        spriteElement.parentElement.remove();
    }

    const toSearch = document.getElementById("search-input");
    const cleanedSearch = toSearch.value.replace(/♀/g, "f").replace(/♂/g, "m").replace(/[!@#$%^&*(),.?":{}|<>~`[\]\\;/+=_-]/g, "");
    const pokemon = cleanedSearch.toLowerCase();

    const fetchData = async () => {
        try {
            const res = await fetch(pokemonAPI);
            const data = await res.json();
            findPokemon(data, pokemon);
        } catch (err) {
            console.log(err);
        }
    };
    fetchData();
});

const findPokemon = (data, pokemon) => {
    const { results } = data;
    const result = results.filter(item => item.name === pokemon || item.id == pokemon);
    if (!result[0]) {
        alert("Pokémon not found");
        return;
    }
    const { id, name, url } = result[0];
    const pokeStats = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            displayStats(data);
        } catch (err) {
            console.log(err);
        }
    };
    pokeStats();
};

const addImage = (sprites) => {
    const newDiv = document.createElement('div');
    const newImg = document.createElement('img');
    newImg.id = 'sprite';
    newImg.src = sprites.front_default;
    newDiv.appendChild(newImg);
    document.body.appendChild(newDiv);
};

const pokeTypes = (types) => {
    for (let i = 0; i < types.length; i++) {
        const newElement = document.createElement('p');
        newElement.innerText = types[i].type.name;
        pokemonTypes.appendChild(newElement);
    }
};

const displayStats = (data) => {
    console.log(data);
    const { name, id, weight, height, stats, sprites, types } = data;
    pokemonName.innerText = name.toUpperCase();
    pokemonId.innerText = id;
    pokeWeight.innerText = weight;
    pokeHeight.innerText = height;
    hp.innerText = stats[0].base_stat;
    attack.innerText = stats[1].base_stat;
    defense.innerText = stats[2].base_stat;
    specialAttack.innerText = stats[3].base_stat;
    specialDefense.innerText = stats[4].base_stat;
    speed.innerText = stats[5].base_stat;
    
    addImage(sprites);
    pokeTypes(types);
};
