/** @format */

import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import * as Location from "expo-location";

import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import { renderInitialScreen } from "./src/utils/helpers";
import PassengerScreen from "./src/screens/PassengerScreen";

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [initialScreen, setInitialScreen] = useState("Login");

  const loadRessources = async () => {
    try {
      const result = await new Promise.all([
        Font.loadAsync({
          Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
          LeckerliOne: require("./assets/fonts/LeckerliOne-Regular.ttf"),
        }),
        renderInitialScreen(),
        Location.requestForegroundPermissionsAsync(),
      ]);
      const route = result[1];
      const status = result[2].status;
      if (route && status === "granted") {
        setInitialScreen(route);
        setLoading(false);
      }
    } catch (error) {
      console.error("error loading ressources", error);
    }
  };

  useEffect(() => {
    loadRessources();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={initialScreen}
        screenOptions={{ headerShown: false }}>
        <Screen name='Login' component={LoginScreen} />
        <Screen name='Home' component={HomeScreen} />
        <Screen name='Passenger' component={PassengerScreen} />
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
