import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./src/screens/MainScreen";

const Stack = createStackNavigator();

export default class App extends React.Component<{}> {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
