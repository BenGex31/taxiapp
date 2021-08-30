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
import MapView, { Polyline } from "react-native-maps";
import PlaceInput from "../components/PlaceInput";
import { BASE_URL, API_KEY, getRoute, decodePoint } from "../utils/helpers";

const initialState = {
  latitude: null,
  longitude: null,
  coordinates: [],
  destinationCoords: null,
};
const { width, height } = Dimensions.get("window");

const PassengerScreen = () => {
  const [state, setState] = useState(initialState);
  const { latitude, longitude, coordinates, destinationCoords } = state;
  const { container, mapStyle } = styles;

  const handlePredictionPress = async (place_id) => {
    try {
      const url = `${BASE_URL}/directions/json?key=${API_KEY}&destination=place_id:${place_id}&origin=${latitude},${longitude}`;
      const points = await getRoute(url);
      const coordinates = decodePoint(points);
      setState((prevState) => ({
        ...prevState,
        coordinates,
        destinationCoords: coordinates[coordinates.length - 1],
      }));
      console.log("url: ", url);
    } catch (error) {
      console.error("error prediction press", error);
    }
  };

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
          }}>
          {coordinates.length > 0 && (
            <Polyline
              coordinates={coordinates}
              strokeWidth={4}
              strokeColor='#2dbb54'
            />
          )}
        </MapView>
        <PlaceInput
          latitude={latitude}
          longitude={longitude}
          onPredictionPress={handlePredictionPress}
        />
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
