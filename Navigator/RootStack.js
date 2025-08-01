import React from "react";

import { colors } from "./../componants/styles";
// Colors
const { brand, darklight, primary, tertiary } = colors;

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screen
import Login from "./../screens/Login";
import Signup from "./../screens/Signup";
import Welcome from "./../screens/Welcome";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTintColor: tertiary,
          headerTransparent: true,
          headerTitle: "",
          headerLeftcontainerstyled: {
            padding: 20,
          },
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen
          options={{ headerTintColor: primary }}
          name="Welcome"
          component={Welcome}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
