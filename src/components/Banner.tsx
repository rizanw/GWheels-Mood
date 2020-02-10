import React from "react";
import { Text, View } from "react-native";
import { styles } from "../res/styles";

interface Props {
  children: string;
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
      </View>
    );
  }
}

export default Banner;
