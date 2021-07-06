import React, {useState} from "react";
import {View, TextInput, Text, TouchableOpacity} from "react-native";
import PokemonCard from "./PokemonCard";
import {btnStyles} from "../styles/button.styles";
import {errorStyles} from "../styles/error.styles";
import {Formik} from "formik";
import Icon from "react-native-vector-icons/FontAwesome";
import {searchValidaitonSchema} from "../util/Validation";

const SearchPokemon = () => {
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(true);

  const fetchPokemons = async pokemon => {
    return await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(result => result.json())
      .then(response => setPokemon(response))
      .finally(() => setLoading(false));
  };

  const result = pokemon
    ? {
        name: pokemon.name,
        id: pokemon.id,
        image: `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`
      }
    : {};

  return (
    <Formik
      initialValues={{search: ""}}
      validationSchema={searchValidaitonSchema}
      onSubmit={values => fetchPokemons(values.search)}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View>
          <TextInput
            placeholder="Search for pokemon"
            onChangeText={handleChange("search")}
            onBlur={handleBlur("search")}
            value={values.search}
          />
          <View
            style={{
              alignItems: "center"
            }}>
            {errors.search && touched.search && (
              <Text style={errorStyles.errorText}>
                <Icon name="times" />
                {errors.search}
              </Text>
            )}
            <TouchableOpacity onPress={handleSubmit}>
              <Text style={btnStyles.btn}>Search</Text>
              {/* <Button title="Search" /> */}
            </TouchableOpacity>
          </View>
          {!loading && result ? <PokemonCard pokemon={result} /> : null}
        </View>
      )}
    </Formik>
  );
};
export default SearchPokemon;
