import React from "react";
import { Text, View } from "react-native";
import { styles } from "../res/styles";

interface Props {
  children: string;
  xp?: number
}

interface State {}

class Banner extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  static defaultProps = {
    activeOpacity: 0.2,
  };

  render() {
    const { children } = this.props;
    return (
      <View style={styles.bannerContainer}>
        <Text style={styles.bannerText}>{children}</Text>
        <Text style={[styles.bannerText, {textAlign: "right"}]}>{this.props.xp}</Text>
      </View>
    );
  }
}

export default Banner;
