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
        <View style={[styles.container, { flex: 6 }]}>
          <Text style={styles.textTitle}>
            Let's have some fun on the wheels!
          </Text>
          <Button onPress={() => this.props.navigation.navigate("Main")}>
            Proceed!
          </Button>
        </View>
        <View style={[styles.container, { justifyContent: "flex-end" }]}>
          <Text style={styles.text}>GrabWheels-Mood</Text>
          <Text style={styles.text}>Ver. 0.3.Beta</Text>
        </View>
      </View>
    );
  }
}
