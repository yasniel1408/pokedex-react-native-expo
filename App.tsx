import React from "react";
import { StatusBar } from "expo-status-bar";
import MainStackNavigation from "./src/navigations/MainStackNavigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigation />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
