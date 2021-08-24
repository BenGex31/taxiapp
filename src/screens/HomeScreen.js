/** @format */

import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import * as Location from "expo-location";

import Block from "../components/Block";
import Title from "../components/Title";
import { prefix } from "../utils/helpers";
import RoundBtn from "../components/RoundBtn";

const { width } = Dimensions.get("window");
const initialState = { latitude: null, longitude: null };

const HomeScreen = (props) => {
  const [state, setState] = useState(initialState);
  const { container, icon, container_2, titleContainer, roundBtnContainer } =
    styles;

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

  const goTo = (route) => {
    props.navigation.push(route);
  };

  useEffect(() => {
    getUserLocation();
  }, []);
  return (
    <View style={container}>
      <Block>
        <Ionicons style={icon} name={`${prefix}-car`} />
        <Title content='TAXI APP' size='big' />
      </Block>
      <View style={container_2}>
        <View style={titleContainer}>
          <Title content='Bienvenue' size='small' />
          <Title content='Vous recherchez un' size='medium' />
        </View>
        <View style={roundBtnContainer}>
          <RoundBtn
            IconName={`${prefix}-car`}
            onPress={() => goTo("Passenger")}
          />
          <RoundBtn IconName={`${prefix}-person`} />
        </View>
      </View>
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
  icon: {
    fontSize: 80,
    color: "#fff",
  },
  container_2: {
    flexGrow: 1,
    width: width,
    alignItems: "center",
    justifyContent: "space-around",
  },
  titleContainer: {
    width: width - 80,
    height: 50,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  roundBtnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: width - 80,
  },
});

export default HomeScreen;
