import React from "react";
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Platform,
  Image,
} from "react-native";
import { Colors, Fonts } from "../../assets";
import UtilityMethods from "../../utility/UtilityMethods";
import { FontSize } from "../../utility/FontSize";

const PrimaryButton = ({
  title,
  onPress,
  style,
  titleStyle,
  loading = false,
  disabled,
  image,
}) => {
  const buttonStyles = [styles.forwardIconCont, style];

  // Function to render button content
  const renderContent = () => (
    <View style={buttonStyles}>
      {loading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={[styles.buttonText, titleStyle]}>{title}</Text>
          {image && (
            <Image
              source={image}
              style={{ width: 20, height: 20, marginLeft: 10 }}
              resizeMode="contain"
            />
          )}
        </View>
      )}
    </View>
  );

  // Conditional rendering based on platform
  if (Platform.OS === "android") {
    return (
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple("rgba(0,0,0,0.2)", false)}
        disabled={disabled}
        accessibilityLabel={title}
        useForeground
      >
        {renderContent()}
      </TouchableNativeFeedback>
    );
  } else {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={buttonStyles}
        disabled={disabled}
        accessibilityLabel={title}
      >
        {renderContent()}
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  forwardIconCont: {
    width: "100%",
    height: UtilityMethods.hp(6),
    borderRadius: UtilityMethods.wp(2),
    backgroundColor: Colors.RED,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
    overflow: "hidden", // Ensures that ripple effect is contained within the borders
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  buttonText: {
    color: "white",
    fontSize: FontSize(18),
    fontFamily: Fonts.HERMAN,
    paddingTop: 5
  },
});

export default React.memo(PrimaryButton);
