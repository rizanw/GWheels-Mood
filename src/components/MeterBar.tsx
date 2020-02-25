import React from "react";
import { View, Animated, Text, Image, Dimensions } from "react-native";
import { styles } from "../res/styles";
import { colors } from "../res/colors";

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
    if(res>100) res = 100;
    return res + "%";
  }

  meterFill(meters:number, width: string){
    if(meters < 0.25){
      return <Animated.View style={[ styles.absoluteFill, { backgroundColor: colors.RED, width: width }]}/>
    }else if(0.25 < meters && meters < 0.5){
      return <Animated.View style={[ styles.absoluteFill, { backgroundColor: colors.ORANGE, width: width }]}/>
    }else if(0.5 < meters && meters < 0.75){
      return <Animated.View style={[ styles.absoluteFill, { backgroundColor: colors.YELLOW, width: width }]}/>
    }else{
      return <Animated.View style={[ styles.absoluteFill, { backgroundColor: colors.GREEN, width: width }]}/>
    }
  }

  render() {
    const { meters } = this.props;
    const width = this.toWidthPercentage(meters);
    console.log(meters + ": meter");
    return (
      <View style={styles.meterBarContainer}>
        <Text style={styles.meterBarText}>LIVELINESS METER</Text>
        <View style={styles.meterBar}>
          {this.meterFill(meters, width)}
        </View>
        <View style={styles.meterBarIconContainer}>
          <Image style={[styles.meterBarIcon, {left: 0}]} source={require('../../assets/icons/tired.png')} />
          <Image style={[styles.meterBarIcon, {marginHorizontal: Dimensions.get("window").width/3+10}]} source={require('../../assets/icons/flat.png')} />
          <Image style={[styles.meterBarIcon, {left: 0}]} source={require('../../assets/icons/smile.png')} />
        </View>
      </View>
    );
  }
}

export default MeterBar;
