/** @format */

import React, { useState, useEffect } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import Constants from "expo-constants";
import * as Location from "expo-location";
import MapView from "react-native-maps";

const initialState = { latitude: null, longitude: null };
const { width, height } = Dimensions.get("window");

const PassengerScreen = () => {
  const [state, setState] = useState(initialState);

  const { container, mapStyle } = styles;

  const getUserLocation = async () => {
    try {
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      setState((prevState) => ({
        ...prevState,
        latitude,
        longitude,
      }));
    } catch (error) {
      console.error("error getUserLocation");
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <View style={container}>
      <MapView style={mapStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  mapStyle: {
    width: width,
    height: height,
  },
});

export default PassengerScreen;
