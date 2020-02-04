import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  faceSquare: {
    borderColor: "green",
    borderWidth: 2,
    position: "absolute",
    width: 10,
    height: 10,             
  },
  meterBarContainer: { 
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  }, 
  meterBarText: {
    position: "absolute",
    bottom: 40,
    left: 14,
    fontSize: 16,
    fontWeight: "bold",
    color: "white", 
  },
  meterBar: {
    height: 26,
    width: "92%",
    // marginHorizontal: 12,
    backgroundColor: 'white',  
    position: "absolute",
    bottom: 12, 
  }, 
  absoluteFill: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }
});
