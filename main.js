//https://pokeapi.co/api/v2/pokemon/132/
//-----          URL BASE ----------/iformacion-pokemon
const url = 'https://pokeapi.co/api/v2/pokemon?limit=20'
let generateBtn = document.getElementById('gerate-pokemon')
let allPokemonContainer = document.getElementById('poke-container') 

const fetchPokemons = () => {
    fetch(url)
    .then(response => response.json())
    .then((allPokemon)=> {
        console.log(allPokemon)
        allPokemon.results.forEach( pokemon => {

            fetchPokemonData(pokemon)
        });
    })
}

const fetchPokemonData = (pokemon) => {
    let urlPoke = pokemon.url
    fetch(urlPoke)
    .then(response => response.json())
    .then((pokeData) => {
        console.log(pokeData)
        makePokemon(pokeData)
    })
}

const makePokemon = (pokeData) => {

    let pokeContainer = document.createElement('div')
    pokeContainer.classList.add('poke-container')

    let pokeContainerIMG = document.createElement('div')
    pokeContainerIMG.classList.add('img-poke')

    
    let pokeName = document.createElement('h4')
    pokeName.innerHTML = pokeData.name.toUpperCase()

    let pokeNumber = document.createElement('p')
    pokeNumber.innerHTML = '#' + pokeData.id

    let imgFront = document.createElement('img')
    imgFront.src = pokeData.sprites.front_default
    imgFront.classList.add('zoom-img')

    let imgBack = document.createElement('img')
    imgBack.src = pokeData.sprites.back_default
    imgBack.classList.add('zoom-img')

    pokeContainerIMG.append(imgFront, imgBack)
    pokeContainer.append( pokeName, pokeNumber, pokeContainerIMG)
    

    allPokemonContainer.appendChild(pokeContainer )

}

const makeEverything = () => {

    fetchPokemons()
}

generateBtn.addEventListener('click', makeEverything)