import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import Navigation from "./src/Navigation";


export default function App() {
  // @ts-ignore
  return (
      <NavigationContainer>
        <Navigation/>
      </NavigationContainer>
  );
}


