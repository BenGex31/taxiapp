/** @format */

import React, { useState, useEffect } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Constants from "expo-constants";
import * as Location from "expo-location";
import MapView from "react-native-maps";
import PlaceInput from "../components/PlaceInput";

const initialState = { latitude: null, longitude: null };
const { width, height } = Dimensions.get("window");

const PassengerScreen = () => {
  const [state, setState] = useState(initialState);
  const { latitude, longitude } = state;
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
      console.log("User located");
    } catch (error) {
      console.error("error getUserLocation");
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  if (!latitude || !longitude) {
    return (
      <View>
        <ActivityIndicator size='large' />
      </View>
    );
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={container}>
        <MapView
          style={mapStyle}
          showsUserLocation
          followsUserLocation
          region={{
            latitude,
            longitude,
            longitudeDelta: 0.121,
            latitudeDelta: 0.0015,
          }}
        />
        <PlaceInput latitude={latitude} longitude={longitude} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  mapStyle: {
    width: width,
    height: height,
  },
});

export default PassengerScreen;
