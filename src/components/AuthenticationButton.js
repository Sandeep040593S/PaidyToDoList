import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import AndroidOpenSettings from "react-native-android-open-settings";

const AuthenticationButton = ({ onPress }) => {
  const [isAuthenticationSupported, setisAuthenticationSupported] =
    useState(false);

    //Check if device hardware support FaceId/FingerPrin/Pin/TouchID
  useEffect(() => {
    (async () => {
      const isSupported = await LocalAuthentication.hasHardwareAsync();
      setisAuthenticationSupported(isSupported);
    })();
  }, []);

  //If hardware supported then ask for the default authorisation if not present then asking to setup local authorisation
  const authenticate = async () => {
    if (isAuthenticationSupported) {
      const auth = await LocalAuthentication.authenticateAsync({
        promptMessage: "Authenticate",
        fallbackLabel: "Enter Pin",
      });
      if (!auth.success) {
        Platform.OS === "ios"
          ? Linking.openURL("app-settings:")
          : AndroidOpenSettings.securitySettings();
      } else {
        onPress();
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Set Authentication to Proceed</Text>
      <TouchableOpacity style={styles.button} onPress={authenticate}>
        <Text style={styles.buttonText}>Go to Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end", 
    padding: 20,
  },
  text: {
    marginBottom: 30,
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 0,
  },
  button: {
    backgroundColor: "#0046a6", 
    borderRadius: 20, 
    paddingVertical: 10,
    marginHorizontal: 50,
    alignItems: "center",
  },
  buttonText: {
    color: "white", 
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AuthenticationButton;
