import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigation } from "./src/navigations";
import { Provider } from "react-redux";
import configureStore from "./src/redux/store";

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStackNavigation />
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}
