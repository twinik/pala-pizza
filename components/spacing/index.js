import { StyleSheet, View } from "react-native";
import React from "react";

function Spacing({ size = 10 }) {
  return <View style={{ padding: size }} />;
}

export default React.memo(Spacing);
