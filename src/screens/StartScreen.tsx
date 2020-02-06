import React from "react";
import { View, Button, Text } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "../res/styles";

interface Props {
  navigation: NavigationProp<any, any>;
}

export default class Start extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            color: "#009F35",
            fontSize: 28,
            fontWeight: "bold",
            textAlign: "center",
            marginHorizontal: 32,
          }}
        >
          Let's have some fun on the wheels!
        </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Main")}
        >
          <Text>Proceed!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
