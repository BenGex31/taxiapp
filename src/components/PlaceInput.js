/** @format */

import React, { useState } from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { prefix, BASE_URL, API_KEY } from "../utils/helpers";

const { width } = Dimensions.get("window");

const initialState = {
  place: "",
};

const PlaceInput = (props) => {
  const [state, setState] = useState(initialState);
  const { place } = state;
  const { container, icon, input, inputContainer } = styles;

  const handleChangeText = (value) => {
    setState((prevState) => ({
      ...prevState,
      place: value,
    }));
    const url = `${BASE_URL}/place/autocomplete/json?input=${value}&key=${API_KEY}`
    console.log("URL:", url);
  };
  
  return (
    <View style={container}>
      <View style={inputContainer}>
        <TextInput
          style={input}
          value={place}
          onChangeText={handleChangeText}
        />
        <Ionicons style={icon} name={`${prefix}-search`} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 7,
    left: 5,
    borderRadius: 8,
    paddingHorizontal: 10,
    width: width - 60,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    fontSize: 25,
    color: "#d6d6d6",
  },
  input: {
    fontSize: 16,
    color: "#303030",
    maxWidth: "70%",
    minWidth: "30%",
    fontFamily: "Poppins",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
});

export default PlaceInput;
