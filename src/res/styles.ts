import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Sanomat-Regular",
    fontSize: 12,
  },
  textTitle: {
    color: colors.GREEN,
    fontSize: 28,
    fontWeight: "bold",
    fontFamily: "Sanomat-Bold",
    textAlign: "center",
    marginHorizontal: 32,
  },
  faceSquare: {
    // borderColor: "green",
    // borderWidth: 2,
    position: "absolute", 
  },
  meterBarContainer: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  meterBarText: {
    position: "absolute",
    bottom: 62,
    left: 16,
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Sanomat-Bold",
    color: "white",
  },
  meterBar: {
    position: "absolute",
    bottom: 38,
    height: 26,
    width: "92%",
    backgroundColor: colors.WHITE,
    borderRadius: 20,
  },
  absoluteFill: {
    borderRadius: 20,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  meterBarIconContainer: {
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
  },
  meterBarIcon: {
    width: 24,
    height: 24,
    backgroundColor: "transparent",
  },
  button: {
    backgroundColor: colors.GREEN_DARK,
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 6,
    marginVertical: 20,
    borderRadius: 6,
  },
  bannerContainer: {
    backgroundColor: colors.GREEN,
    flexDirection: "row",
    position: "absolute",
    right: 14,
    top: 34,
    minWidth: 84,
    paddingHorizontal: 10,
    paddingVertical: 2,
    paddingTop: 8,
    borderRadius: 4,
  },
  bannerText: {
    flex: 1,
    color: colors.WHITE,
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Sanomat-Bold",
  },
  bannerTextXp: {
    textAlign: "right",
    fontWeight: "normal",
    fontFamily: "Sanomat-Regular",
  },
});
