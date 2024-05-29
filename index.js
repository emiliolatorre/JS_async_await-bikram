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
            const resultadoArray = Object.entries(resultado.sprites)
            const imgRandom = resultadoArray[Math.floor(Math.random() * resultadoArray.length)];
            const img = imgRandom[1]
            const name = imgRandom[0]
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



// async function getImageAndName (pokemon){

//     let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
//     let data = await response.json();
//     let name = data.name;
//     let img = data.sprites.front_default;
//     return {name, img}
    
// }