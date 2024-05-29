//DESARROLLA AQUI TUS SOLUCIONES
//Ejercicio 1
const getRandomPokemon = async () => {
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon`)
        if (resp.ok) {
            const resultado = await resp.json()
            const pokemonRandom = resultado.results[Math.floor(Math.random() * resultado.results.length)].url
            const resultado2 = await fetch(pokemonRandom)
            const resultado3 = await resultado2.json()
            return resultado3
        } else {
            throw 'El estado o el stage no son correctos.'
        }
        } catch (error) {
            throw 'La web no existe.'
        }
}
        
        getRandomPokemon()
                .then((resp) => {console.log(resp)})
                .catch((error) => {console.error(error)})

// Ejercicio 2
const getImageAndName = async (pokemon) => {
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        if (resp.ok) {
            const resultado = await resp.json()
            const img = resultado.sprites.front_default;
            const name = resultado.name
            return {img, name}
        } else {
            throw 'El estado o el stage no son correctos.'
        }
        } catch (error) {
            throw 'La web no existe.'
        }
}
        
getImageAndName('pikachu')
    .then((resp) => {console.log(resp)})
    .catch((error) => {console.error(error)})

// Ejercicio 3
const printImageAndName = async (pokemon) => {
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        if (resp.ok) {
            const resultado = await resp.json()
            const img = resultado.sprites.front_default;
            const name = resultado.name

            const section = document.createElement('section');

            const imgDOM = document.createElement('img');
            imgDOM.src = img
            imgDOM.alt = name
            
            const nameDOM = document.createElement('h1');
            nameDOM.innerHTML = name


            return 'section.append(imgDOM, nameDOM)'
        } else {
            throw 'El estado o el stage no son correctos.'
        }
        } catch (error) {
            throw 'La web no existe.'
        }
}
        
printImageAndName('pikachu')
    .then((resp) => {console.log(resp)})
    .catch((error) => {console.error(error)})