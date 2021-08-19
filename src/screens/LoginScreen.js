/** @format */

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";

const LoginScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff"
  },
});

export default LoginScreen;
