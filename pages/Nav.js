import { KeyboardAvoidingView, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "./Profile";
import Statistics from "./Statistics";
import Home from "./Home";
import Search from "./Search";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function Nav() {
  return (
    <NavigationContainer style={styles.container} behavior="padding">
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Statistics" component={Statistics} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
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
