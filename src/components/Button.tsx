import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../res/styles";

interface Props {
  children: string;
  onPress?: any;
  activeOpacity?: number;
}

interface State {}

class Button extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  static defaultProps = {
    activeOpacity: 0.2,
  };

  render() {
    const { onPress, children, activeOpacity } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={activeOpacity}
        style={styles.button}
        onPress={onPress}
      >
        <Text style={{ color: "white", fontFamily: "Sanomat-Regular" }}>
          {children}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
