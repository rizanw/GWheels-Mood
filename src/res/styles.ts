import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex:1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
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
    bottom: 62,
    left: 14,
    fontSize: 16,
    fontWeight: "bold",
    color: "white", 
  },
  meterBar: {
    position: "absolute",
    bottom: 36, 
    height: 26,
    width: "92%", 
    backgroundColor: 'white',  
    borderRadius: 12,
  }, 
  absoluteFill: {
    borderRadius: 12,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  meterBarIconContainer: {
    position: "absolute",
    bottom: 10,  
    flexDirection: "row"
  },
  meterBarIcon: { 
    width: 24,
    height: 24,
    backgroundColor: "transparent"
  },
  button: {
    backgroundColor: "#009F35",
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginVertical: 20,
    borderRadius: 10
  },
  bannerContainer: {
    backgroundColor: "#009F35",
    position: "absolute",
    right: 14,
    top: 34,
    width: 84,
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 4
  },
  bannerText: {
    color: "white",  
    fontSize: 16,
    fontWeight: "bold",
  }
});
