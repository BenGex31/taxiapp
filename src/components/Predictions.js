/** @format */

import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Predictions = ({ main_text, secondary_text, key }) => {
  const { secondary, main, container } = styles;
  return (
    <View style={container} key={key}>
      <Text numberOfLines={1} style={secondary}>
        {secondary_text}
      </Text>
      <Text style={main}>{main_text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#F6F6F6",
    padding: 5,
  },
  secondary: {
    color: "#D6D6D6",
    fontSize: 12,
    fontWeight: "300",
    fontFamily: "Poppins",
  },
  main: {
    color: "#303030",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Poppins",
  },
});

export default Predictions;
