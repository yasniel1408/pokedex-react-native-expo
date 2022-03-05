import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const PokedexScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
};

export default PokedexScreen;

const styles = StyleSheet.create({});
