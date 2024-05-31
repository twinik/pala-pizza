import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  I18nManager,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Platform,
} from "react-native";
import commonStyles from "../../utility/CommonStyles";
import Spacing from "../spacing";
import { Colors, Fonts, Icons } from "../../assets";
import { FontSize } from "../../utility/FontSize";

const WhiteTextBox = React.forwardRef(
  (
    {
      action,
      actionStyles,
      leading,
      textInputStyle,
      containerStyle,
      secureTextEntry,
      placeholderCustText,
      prefix,
      name,
      value,
      onChangeText,
      loader = false,
      actionButtonClick,
      hasError,
      /* 
      Border red show when some space in the errormessage keys and have some message
      like this 
      => 1. " "
      => 2. "This is message"
      Error message show when key have messgae like this
      => 1. "This is message"
      For below key
      */
      errorMessage = "",
      errorName,
      actionTintColor,
      borderColor = Colors.WHITE,
      innerContainerStyle,
      ...inputProps
    },
    ref
  ) => {
    console.log("errorMe", errorMessage);
    const [secureText, setSecureText] = useState(secureTextEntry || false);

    const toggleSecureText = () => setSecureText(!secureText);

    const renderCustAction = (actionText) => {
      switch (actionText) {
        case "password": {
          return (
            <TouchableWithoutFeedback onPress={toggleSecureText}>
              {secureText ? (
                <Image
                  style={[styles.actionStyles, actionStyles]}
                  source={Icons.HIDEPASSWORD}
                  resizeMode="contain"
                  tintColor={actionTintColor ?? Colors.BLACK}
                />
              ) : (
                <Image
                  style={[styles.actionStyles, actionStyles]}
                  source={Icons.SHOWPASSWORD}
                  resizeMode="contain"
                  tintColor={actionTintColor ?? Colors.BLACK}
                />
              )}
            </TouchableWithoutFeedback>
          );
        }
        default: {
          return (
            <TouchableWithoutFeedback
              onPress={() => {
                if (typeof actionButtonClick === "function") {
                  actionButtonClick();
                }
              }}
            >
              <Image
                source={action}
                style={[styles.actionStyles, actionStyles]}
              />
            </TouchableWithoutFeedback>
          );
        }
      }
    };

    /* 
      Border red Color shown when some space in the errormessage keys and have some message
      like this 
      => 1. " "
      => 2. "This is message"
      Error message show when key have messgae like this
      => 1. "This is message"
    */

    return (
      <View style={[containerStyle]}>
        <View
          style={[
            commonStyles.rowBetween,
            styles.container,
            containerStyle,
            Platform.OS === "ios" ? { paddingVertical: 15 } : { paddingVertical: 15 },
            {
              borderWidth: 2,
              borderColor: errorMessage ? Colors.RED : borderColor,
              backgroundColor: "#E5E5E5",
            },
            innerContainerStyle,
          ]}
        >
          {!!prefix && prefix}
          <TextInput
            ref={ref}
            style={[styles.textInput, textInputStyle]}
            secureTextEntry={secureText}
            value={value}
            onChangeText={(text) => onChangeText(name, text, errorName)}
            placeholderTextColor={"#B6B6B6"}
            {...inputProps}
          />
          {placeholderCustText && value.length == 0 && (
            <View style={styles.placeholderWrapper} pointerEvents="none">
              <Text style={[styles.placeholderText]}>
                {placeholderCustText}
              </Text>
            </View>
          )}
          {!!action && (
            <>
              <View style={[commonStyles.row]}>
                {renderCustAction(action)}
                <Spacing size={8} />
              </View>
            </>
          )}
          {loader && (
            <>
              <Spacing size={3} />
              <ActivityIndicator color={Colors.brownColor} />
              <Spacing size={3} />
            </>
          )}
        </View>
        {!!hasError && (
          <View>
            <Spacing size={3} />
            <View
              style={[commonStyles.rowAlignCenter, { alignItems: "center" }]}
            >
              {/* <ErrorInfo /> */}
              <Spacing size={3} />
              <Text style={[styles.errorMessage]}>{errorMessage}</Text>
            </View>
          </View>
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  errorMessage: {
    fontFamily: Fonts.REGULAR,
    fontSize: 12,
    color: Colors.RED,
  },
  placeholderWrapper: {
    position: "absolute",
    left: 10,
  },
  placeholderText: {
    ...commonStyles.montserratMediumHead3,
    color: "#B6B6B6",
  },
  actionStyles: {
    width: 24,
    height: 24,
    tintColor: Colors.RED,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    fontSize: FontSize(14),
    color: Colors.BLACK,
    fontFamily: Fonts.SIGNIKA_LIGHT
  },
  container: {
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 10,
  },
});

export default React.memo(WhiteTextBox);
