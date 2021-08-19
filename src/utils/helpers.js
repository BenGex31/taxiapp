/** @format */

import { Platform } from "react-native";
import * as Google from "expo-google-app-auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const prefix = Platform.OS === "ios" ? "ios" : "md";

const config = {
  iosClientId: `510368521089-kc7vrucutpr56ptu27pc2a90juqotu1i.apps.googleusercontent.com`,
  androidClientId: `510368521089-c5mu6uv9niqnlb2dnvogph7m9781p324.apps.googleusercontent.com`,
  iosStandaloneAppClientId: `<YOUR_IOS_CLIENT_ID>`,
  androidStandaloneAppClientId: `<YOUR_ANDROID_CLIENT_ID>`,
};

export const auth = async () => {
  try {
    const { user, type } = await Google.logInAsync(config);
    //console.log("result", result);
    if (type === "success") {
      // stocker user dans la BDD
      // stocker user dans mémoire interne
      const { name, photoUrl, email } = user;
      await AsyncStorage.setItem(
        "user",
        JSON.stringify({
          name,
          photoUrl,
          email,
        })
      );
      // naviger vers l'écran Home
      console.log("naviguer vers Home");
    }
  } catch (error) {
    console.error("error auth", error);
  }
};

export const renderInitialScreen = async () => {
  try {
    const user = await AsyncStorage.getItem("user");
    JSON.parse(user);
    return user ? "Home" : "Login";
  } catch (error) {
    console.error("error render initial screen", error);
  }
};
