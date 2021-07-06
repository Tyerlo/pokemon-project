import React from "react";
import {Text, Image, View} from "react-native";
import {imageStyle} from "../styles/image.styles";

const PokemonCard = ({pokemon}) => {
  return (
    <View style={imageStyle.container}>
      <View>
        <Text style={imageStyle.textInput}>{pokemon && pokemon.name}</Text>
        <Image style={imageStyle.pokemonImage} source={{uri: pokemon.image}} />
      </View>
    </View>
  );
};

export default PokemonCard;
