import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Search({ navigation }) {
  navigation.setOptions({ headerShown: false });
  return (
    <View style={styles.container}>
      <Text>Search</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D7CDCC",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
