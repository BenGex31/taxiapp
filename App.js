/** @format */

import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";

import LoginScreen from "./src/screens/LoginScreen";

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  const loadRessources = async () => {
    try {
      
    } catch (error) {
      console.error("error loading ressources", error);
    }
  };
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name='Login' component={LoginScreen} />
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
