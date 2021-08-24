/** @format */

import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { prefix, BASE_URL, API_KEY } from "../utils/helpers";
import axios from "axios";

const { width } = Dimensions.get("window");

const initialState = {
  place: "",
  predictions: [],
  loading: false,
};

const PlaceInput = ({ latitude, longitude }) => {
  const [state, setState] = useState(initialState);
  const { place, loading } = state;
  const { container, icon, input, inputContainer } = styles;

  const search = async (url) => {
    try {
      const {
        data: { predictions },
      } = await axios.get(url);
      setState((prevState) => ({
        ...prevState,
        predictions,
        loading: false,
      }));
    } catch (error) {
      console.error("error search: ", error);
    }
  };

  const handleChangeText = (value) => {
    setState((prevState) => ({
      ...prevState,
      place: value,
      loading: true,
    }));
    const url = `${BASE_URL}/place/autocomplete/json?input=${value}&key=${API_KEY}&origin=${latitude},${longitude}&radius=2000&language=fr`;
    //console.log("URL:", url);
    search(url);
  };

  return (
    <View style={container}>
      <View style={inputContainer}>
        <TextInput
          style={input}
          value={place}
          onChangeText={handleChangeText}
        />
        {!loading && <Ionicons style={icon} name={`${prefix}-search`} />}
        {loading && <ActivityIndicator size={25} color='#d6d6d6' />}
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
