// import React,{useState} from 'react'

// export const fetchPokemons = () => {
//     const [pokemon, setPokemon] = useState();
//     const [loading, setLoading] = useState(true);

//     export const fetchPokemons = async pokemon => {
//       return await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
//         .then(result => result.json())
//         .then(response => setPokemon(response))
//         .finally(() => setLoading(false));
//     };

//     const result = pokemon
//       ? {
//           name: pokemon.name,
//           id: pokemon.id,
//           image: `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`
//         }
//       : {};
//     return (

//     )
// }
