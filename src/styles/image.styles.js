import {StyleSheet} from "react-native";

export const imageStyle = StyleSheet.create({
  textInput: {fontSize: 20, textTransform: "uppercase"},
  container: {
    marginHorizontal: 18,
    marginVertical: 10,

    justifyContent: "center"
  },
  pokemonImage: {
    alignItems: "center",
    marginBottom: 30,
    borderRadius: 6,
    backgroundColor: "#F3F5F7",
    shadowOffset: {width: 1, height: 1},
    shadowColor: "#0000",
    shadowOpacity: 0.5,

    width: 400,
    height: 400
  }
});
