import { KeyboardAvoidingView, StyleSheet } from "react-native";
import React from "react";
import { Ionicons, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
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
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              return focused ? (
                <MaterialCommunityIcons
                  name="arm-flex"
                  size={24}
                  color={color}
                />
              ) : (
                <MaterialCommunityIcons
                  name="arm-flex-outline"
                  size={24}
                  color="gray"
                />
              );
            } else if (route.name === "Search") {
              iconName = focused ? "search-outline" : "search";
            } else if (route.name === "Statistics") {
              return focused ? (
                <Entypo name="circular-graph" size={24} color={color} />
              ) : (
                <Entypo name="circular-graph" size={24} color="gray" />
              );
            } else if (route.name === "Profile") {
              iconName = focused
                ? "person-circle-sharp"
                : "person-circle-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarShowLabel: false,
        })}
      >
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
