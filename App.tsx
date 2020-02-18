import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./src/screens/MainScreen";
import Start from "./src/screens/StartScreen";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const Stack = createStackNavigator();

let customFonts = {
  "Sanomat-Bold": require("./assets/fonts/SanomatSansBold.otf"),
  "Sanomat-Regular": require("./assets/fonts/SanomatSansRegular.otf"),
};

interface State {
  fontsLoaded: boolean;
}

export default class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Start" component={Start} />
            <Stack.Screen name="Main" component={Main} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    } else {
      return <AppLoading />;
    }
  }
}
