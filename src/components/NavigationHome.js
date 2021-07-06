import React from "react";

import {NavigationContainer} from "@react-navigation/native";

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/FontAwesome";
import SearchPokemon from "./SearchPokemon";
import HomeScreen from "./HomeScreen";
import ListPokemon from "./ListPokemon";
const Tab = createBottomTabNavigator();

const NavigationHome = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Pokemon") {
              iconName = "optin-monster";
            } else if (route.name === "ListPokemon") {
              iconName = "list-ul";
            }
            return <Icon name={iconName} size={size} color={color} />;
          }
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen
          name="Pokemon"
          component={SearchPokemon}
          options={{title: "Overview"}}
          initialParams={{items: 150}}
        />
        <Tab.Screen
          name="ListPokemon"
          component={ListPokemon}
          options={{title: "List"}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default NavigationHome;
