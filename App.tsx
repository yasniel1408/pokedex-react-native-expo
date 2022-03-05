import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigation } from "./src/navigations";

export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigation />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
