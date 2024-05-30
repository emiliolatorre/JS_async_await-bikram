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
            throw error
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
            throw error
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
            return resultado
        } else {
            throw 'El estado o el stage no son correctos.'
        }
        } catch (error) {
            throw error
        }
}
        
printImageAndName('pikachu')
    .then(({sprites, name}) => {
        const img = sprites.front_default;
        const section = document.createElement('section');

            const imgDOM = document.createElement('img');
            imgDOM.src = img;
            imgDOM.alt = name;
            
            const nameDOM = document.createElement('h1');
            nameDOM.innerHTML = name;
            
            section.append(imgDOM, nameDOM);
        })
    .catch((error) => {console.error(error)})

//POKEMON VS PERRITOS
// Ejercicio 4
const getRandomDogImage = async () => {
    try {
        const resp = await fetch('https://dog.ceo/api/breeds/image/random');
        if (resp.ok) {
            const randomDog = await resp.json()
            return randomDog.message
        } else {
           throw console.error('El estado o el stage no son correctos.')
        }
    } catch (error) {
        throw 'La web no existe.'
    }
}

getRandomDogImage()
    .then((resp) => {console.log(resp)})
    .catch((error) => {console.log(error)})

// Ejercicio 5
const getRandomPokemonImage = async () => {
    try {
        const numeroRandom = Math.floor(Math.random() * 1024)+1
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${numeroRandom}`)
        if (resp.ok) {
            const resultado = await resp.json()
            const img = resultado.sprites.front_default;
            return img
        } else {
            throw 'El estado o el stage no son correctos.'
        }
        } catch (error) {
            throw error
        }
}
        
getRandomPokemonImage()
    .then((resp) => {console.log(resp)})
    .catch((error) => {console.error(error)})

// Ejercicio 6
const printPugVsPikachu = async () => {
    try {
        const numeroRandom = Math.floor(Math.random() * 1024)+1
        const respPikachu = await fetch(`https://pokeapi.co/api/v2/pokemon/${numeroRandom}`)
        const respPug = await fetch('https://dog.ceo/api/breeds/image/random');
        if (respPikachu.ok && respPug.ok) {
            const Pikachu = await respPikachu.json()
            const imgPikachu = Pikachu.sprites.front_default;

            const Pug = await respPug.json()
            const imgPug = Pug.message

            return {imgPikachu, imgPug}
        } else {
            throw 'El estado o el stage no son correctos.'
        }
        } catch (error) {
            throw error
        }

}
        
printPugVsPikachu()
    .then((resp) => {
        const PikachuPug = Object.values(resp);
        console.log (`${PikachuPug[0]} vs ${PikachuPug[1]}`)
    
    })
    .catch((error) => {console.error(error)})

// Ejercicio 7
const getRandomCharacter = async () => {
    try {
        const numeroRandom = Math.floor(Math.random() * 825)+1
        const resp = await fetch(`https://rickandmortyapi.com/api/character/${numeroRandom}`)
        if (resp.ok) {
            const resultado = await resp.json()
            return resultado
        } else {
            throw 'El estado o el stage no son correctos.'
        }
        } catch (error) {
            throw error
        }
}
        
getRandomCharacter()
    .then((resp) => {console.log(resp)})
    .catch((error) => {console.error(error)})

// Ejercicio 8
const getRandomCharacterInfo = async (personaje = 'rick') => {
    try {
        const respPersonaje = await fetch(`https://rickandmortyapi.com/api/character/?name=${personaje}`)
        const respEpisodes = await fetch (`https://rickandmortyapi.com/api/episode?name=${personaje}`)
        if (respPersonaje.ok && respEpisodes.ok) {
            const dataPersonaje = await respPersonaje.json()
            const name = dataPersonaje.results[0].name
            const img = dataPersonaje.results[0].image
            console.log(name)
            console.log(img)

            const dataEpisodes = await respEpisodes.json()
            const episodes = dataEpisodes.info.count
            const firstEpisode = dataEpisodes.results[0].name
            const dateEpisode = dataEpisodes.results[0].air_date

            return {img, name, episodes, firstEpisode, dateEpisode}
        } else {
            throw 'El estado o el stage no son correctos.'
        }
        } catch (error) {
            throw error
        }
}

getRandomCharacterInfo('rick')
    .then((resp) => {console.log(resp)})
    .catch((error) => {console.error(error)})

// Ejercicio 9
const getPrintRandomCharacterInfo = async (personaje = 'rick') => {
    try {
        const respPersonaje = await fetch(`https://rickandmortyapi.com/api/character/?name=${personaje}`)
        const respEpisodes = await fetch (`https://rickandmortyapi.com/api/episode?name=${personaje}`)
        if (respPersonaje.ok && respEpisodes.ok) {
            const dataPersonaje = await respPersonaje.json()
            const name = dataPersonaje.results[0].name
            const img = dataPersonaje.results[0].image
            console.log(name)
            console.log(img)

            const dataEpisodes = await respEpisodes.json()
            const episodes = dataEpisodes.info.count
            const firstEpisode = dataEpisodes.results[0].name
            const dateEpisode = dataEpisodes.results[0].air_date

            return {img, name, episodes, firstEpisode, dateEpisode}
        } else {
            throw 'El estado o el stage no son correctos.'
        }
        } catch (error) {
            throw error
        }
}

getPrintRandomCharacterInfo('rick')
    .then(({img, name, episodes, firstEpisode, dateEpisode}) => {
        const imgDOM = document.createElement('img');
        imgDOM.src = img;

        const nameDOM = document.createElement('h1');
        nameDOM.innerHTML = name

        const epsisodesDOM = document.createElement('p')
        epsisodesDOM.innerHTML = episodes;

        const firstEpisodeDOM = document.createElement('p');
        firstEpisodeDOM.innerHTML = firstEpisode

        const dateEpisodeDOM = document.createElement('p');
        dateEpisodeDOM.innerHTML = dateEpisode;

        const sectionDOM = document.createElement('section');
        sectionDOM.append(imgDOM, nameDOM, epsisodesDOM, firstEpisodeDOM, dateEpisodeDOM)
    })
    .catch((error) => {console.error(error)})