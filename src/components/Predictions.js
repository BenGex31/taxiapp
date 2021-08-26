/** @format */

import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Predictions = ({ main_text, secondary_text, key }) => {
  return (
    <View key={key}>
      <Text>{secondary_text}</Text>
      <Text>{main_text}</Text>
    </View>
  );
};

const syles = StyleSheet.create({});

export default Predictions;
