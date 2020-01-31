import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Camera } from "expo-camera";
import * as FaceDetector from "expo-face-detector";
import { styles } from "./src/res/styles";

interface State {
  faceDetecting: boolean;
  faces: any;
  x: number;
  y: number;
  height: number;
  width: number;
  smilingProbability: number;
  leftEyeOpenProbability: number;
  rightEyeOpenProbability: number;
}

export default class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      faceDetecting: false,
      faces: [],
      x: 0,
      y: 0,
      height: 0,
      width: 0,
      smilingProbability: 0,
      leftEyeOpenProbability: 0,
      rightEyeOpenProbability: 0,
    };
  }

  componentDidMount() {
    this.statusCheck();
  }

  async statusCheck() {
    const { status } = await Camera.requestPermissionsAsync();
    console.log(status);
  }

  handleFacesDetected = ({faces}:any) => {
    if (faces.length > 0) {
      this.setState({ faces });
    }
    if (typeof faces[0] === "undefined") {
      this.setState({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
      });
    } else {
      console.log(faces[0]);
      this.setState({
        y: faces[0].bounds.origin.y,
        x: faces[0].bounds.origin.x,
        width: faces[0].bounds.size.width,
        height: faces[0].bounds.size.height,
      });
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Camera
          style={{ flex: 1 }}
          type={Camera.Constants.Type.front}
          onFacesDetected={this.handleFacesDetected}
          faceDetectorSettings={{
            mode: FaceDetector.Constants.Mode.fast,
            detectLandmarks: FaceDetector.Constants.Landmarks.none,
            runClassifications: FaceDetector.Constants.Classifications.all,
            minDetectionInterval: 100,
            tracking: true,
          }}
        />
        <View
          style={[
            styles.faceSquare,
            {
              top: this.state.y,
              left: this.state.x,
              width: this.state.width,
              height: this.state.height,
            },
          ]}
        ></View>
        <View>
          
        </View>
      </View>
    );
  }
}
