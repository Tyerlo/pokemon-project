import React from "react";
import NavigationHome from "./components/NavigationHome";
import * as RNLocalize from "react-native-localize";
const App = () => {
console.log(RNLocalize.getLocales())

  return <NavigationHome />;
};

export default App;
