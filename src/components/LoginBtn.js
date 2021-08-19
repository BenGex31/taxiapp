/** @format */

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import Logo from "../../assets/images/google.png";

const LoginBtn = (props) => {
  return (
    <TouchableOpacity>
      <View>
        <Text>Google Connexion</Text>
        <Image source={Logo} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default LoginBtn;
