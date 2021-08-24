/** @format */

import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { prefix } from "../utils/helpers";

const PlaceInput = () => {
  return (
    <View>
      <View>
        <TextInput />
        <Ionicons name={`${prefix}-search`} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PlaceInput;
