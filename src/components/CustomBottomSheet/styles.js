import { Colors } from "../../assets";
import UtilityMethods from "../../utility/UtilityMethods";
const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
  sheetHandleStyle: {
    height: UtilityMethods.hp(0),
    position: "absolute",
  },
  sheetHandleIndicatorStyle: {
    backgroundColor: null,
  },
  sheetContainerStyle: {
    backgroundColor: null,
  },
  sheetStyle: {
    padding: 0,
    margin: 0,
  },
});
export default styles;
