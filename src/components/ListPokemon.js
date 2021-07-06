import React, {useEffect, useState} from "react";
import {View, SectionList, Text} from "react-native";
import {listStyles} from "../styles/list.styles";

const Settings = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(async () => {
    await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then(result => result.json())
      .then(response => setPokemon(response));
  }, []);

  const result = pokemon
    ? {
        name: pokemon && pokemon.name,
        id: pokemon.id,
        image: `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`
      }
    : null;
  console.log(result.name);
  return (
    <View style={listStyles.container}>
      {result &&
        result.name.map(pokemon => {
          <SectionList
            sections={pokemon.name}
            renderItem={({item}) => <Text style={listStyles.item}>{item}</Text>}
            renderSectionHeader={({section}) => (
              <Text style={listStyles.sectionHeader}>{section.title}</Text>
            )}
            keyExtractor={(item, index) => index}
          />;
        })}
    </View>
  );
};

export default Settings;
