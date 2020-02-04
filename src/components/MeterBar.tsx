import React, { useRef, useState, useEffect } from "react";
import { View, Animated, Text } from "react-native";
import { styles } from "../res/styles";

interface Props {
  meters: number;
}

interface State {}

class MeterBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  toWidthPercentage(meters: number) {
    let res = 0;
    res = (meters / 1) * 100;
    return res + "%";
  }

  render() {
    const { meters } = this.props;
    const width = this.toWidthPercentage(meters);

    return (
      <View style={styles.meterBarContainer}>
        <Text style={styles.meterBarText}>LIVELINESS METER</Text>
        <View style={styles.meterBar}>
          <Animated.View
            style={[
              styles.absoluteFill,
              { backgroundColor: "#8BED4F", width: width },
            ]}
          />
        </View>
        <View>
        </View>
      </View>
    );
  }
}

export default MeterBar;
