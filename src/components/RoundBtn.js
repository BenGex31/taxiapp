/** @format */

import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const RoundBtn = ({ IconName }) => {
  return (
    <TouchableOpacity>
      <View>
        <Ionicons name={IconName} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default RoundBtn;
