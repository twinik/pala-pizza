import { Platform, StatusBar, Dimensions } from "react-native";
import UtilityMethods from "./UtilityMethods";


const { height, width } = Dimensions.get("window");
const standardLength = width > height ? width : height;
const offset =
  width > height ? 0 : Platform.OS === "ios" ? 78 : StatusBar.currentHeight; // iPhone X style SafeAreaView size in portrait

const deviceHeight =
  UtilityMethods.isIphoneX() || Platform.OS === "android"
    ? standardLength - offset
    : standardLength;


export function RFPercentage(percent) {
  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(heightPercent);
}

// guideline height for standard 5" device screen is 680
export function RFValue(fontSize, standardScreenHeight = 680) {
  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
}