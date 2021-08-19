/** @format */

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";

import Block from "../components/Block";
import Title from "../components/Title";
import { prefix } from "../utils/helpers";

const LoginScreen = (props) => {
  const { container, icon } = styles;
  return (
    <View style={container}>
      <Block>
        <Ionicons style={icon} name={`${prefix}-car`} />
        <Title content='TAXI APP' />
      </Block>
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
});

export default LoginScreen;
