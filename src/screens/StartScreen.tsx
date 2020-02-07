import React from "react";
import { View, Text } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { styles } from "../res/styles";
import Button from "../components/Button";

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
        <Button onPress={() => this.props.navigation.navigate("Main")}>
          Proceed!
        </Button>
      </View>
    );
  }
}
