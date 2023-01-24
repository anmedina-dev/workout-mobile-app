import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import React from "react";

export default function Profile({ navigation }) {
  navigation.setOptions({ headerShown: false });

  const handleLogout = async () => {
    await signOut(auth)
      .then(() => {
        console.log("logged out");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text>Profile</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogout}
          style={[styles.button, styles]}
        >
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D7CDCC",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#59656F",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
});
