import React from "react";
import {View, Button, Text} from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text style={{fontSize: 30}}>This is the home screen!</Text>
    </View>
  );
};

export default HomeScreen;
