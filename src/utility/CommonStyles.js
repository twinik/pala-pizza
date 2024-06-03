import { Colors, Fonts } from "../assets";
import { FontSize } from "./FontSize";
import UtilityMethods from "./UtilityMethods";

const { StyleSheet, Platform } = require("react-native");

const CommonStyles = StyleSheet.create({
    CONTAINER: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    CONTAINER_WITH_TRANSPARENT_BACKGROUND: {
        flex: 1,
        backgroundColor: Colors.TransParentBackground,
    },
    BODY: {
        flex: 1,
        paddingHorizontal: UtilityMethods.wp(5),
    },
    SEMI_BOLD: {
        fontWeight: Platform.OS == "ios" ? "600" : null,
        fontFamily: Fonts.SIGNIKA_SEMI_BOLD,
    },
    BOLD: {
        fontWeight: Platform.OS == "ios" ? "800" : null,
        fontFamily: Fonts.SIGNIKA_BOLD,
    },
    MEDIUM: {
        fontWeight: Platform.OS == "ios" ? "500" : null,
        fontFamily: Fonts.SIGNIKA_MEDIUM,
    },
    REGULAR: {
        fontWeight: Platform.OS == "ios" ? "400" : null,
        fontFamily: Fonts.SIGNIKA_REGULAR,
    },
    REGULAR_TEXT: {
        fontWeight: Platform.OS == "ios" ? "400" : null,
        fontFamily: Fonts.SIGNIKA_REGULAR,
        fontSize: FontSize(16),
        color: Colors.BLACK,
    },
    BOLD_TEXT: {
        fontWeight: Platform.OS == "ios" ? "800" : null,
        fontFamily: Fonts.SIGNIKA_BOLD,
        fontSize: FontSize(18),
        color: Colors.BLACK,
    },
    MEDIUM_TEXT: {
        fontWeight: Platform.OS == "ios" ? "500" : null,
        fontFamily: Fonts.SIGNIKA_MEDIUM,
        fontSize: FontSize(14),
        color: Colors.BLACK,
    },
    MARGIN_FROM_BOTTOM: {
        marginTop: "auto",
        marginBottom: UtilityMethods.hp(2),
    },
    MARGIN_FROM_BOTTOM_WITH_NOSH: {
        marginTop: "auto",
        marginBottom: UtilityMethods.hasNotch()
            ? UtilityMethods.hp(5)
            : UtilityMethods.hp(3),
    },
    ROW_VIEW: {
        flexDirection: "row",
    },
    BOX_CONT: {
        width: UtilityMethods.wp(10),
        height: UtilityMethods.wp(10),
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    HEADER: {
        height: UtilityMethods?.hasNotch()
            ? UtilityMethods.hp(14)
            : UtilityMethods.hp(5),
        marginTop: UtilityMethods?.hasNotch()
            ? UtilityMethods.hp(5)
            : UtilityMethods.hp(4),
        // backgroundColor: 'red',
        marginBottom: UtilityMethods.hp(2),
        justifyContent: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#DEDFE0",
        width: UtilityMethods.wp(92),
        alignSelf: "center",
    },
    rowJustifyBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    flexOne: {
        flex: 1,
    },
    alightRight: {
        alignItems: "flex-end",
    },
    alignCenter: {
        alignItems: "center",
    },
    center: {
        alignItems: "center",
        justifyContent: "center",
    },
    rowAlignCenter: {
        flexDirection: "row",
        alignItems: "center",
    },
    rowAlignEnd: {
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    rowEnd: {
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    rowCenter: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    rowBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    alignRight: {
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    row: {
        flexDirection: "row",
    },
    p10: {
        padding: 10,
    },
    p15: {
        padding: 15,
    },
    p20: {
        padding: 20,
    },
    container: {
        flex: 1,
    },
});

export default CommonStyles;
