import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import React, { useCallback } from "react";
import styles from "./styles";
export const CustomBottomSheet = ({
  sheetRef,
  sheetIndex,
  onClose,
  children,
  sheetSnapPoints,
  enablePanDownToCloseSheet,
  sheetStyle,
  handleStyle,
  handleIndicatorStyle,
  containerStyle,
  backdropComponent,
  mainContainerStyle,
  ...props
}) => {
  const { dismiss, dismissAll } = useBottomSheetModal();
  // console.log("sheetIndex", sheetIndex);
  const handleSheetChanges = (index) => {
    if (index == 1 || index == 0 || index == -1) setPickerVisible(true);
  };
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        pressBehavior={"close"}
        onPress={() => {
          sheetRef?.current?.dismiss();
        }}
      />
    ),
    []
  );

  return (
    <>
      <BottomSheetModal
        ref={sheetRef}
        index={1}
        containerStyle={mainContainerStyle}
        backdropComponent={
          backdropComponent ? backdropComponent : renderBackdrop
        }
        onDismiss={onClose}
        onClose={onClose}
        enablePanDownToClose={
          enablePanDownToCloseSheet ? enablePanDownToCloseSheet : true
        }
        snapPoints={
          sheetSnapPoints ? sheetSnapPoints : ["25%", "30%", "75%", "100%"]
        }
        style={sheetStyle ? sheetStyle : styles.sheetStyle}
        backgroundStyle={
          containerStyle ? containerStyle : styles.sheetContainerStyle
        }
        handleStyle={handleStyle ? handleStyle : styles.sheetHandleStyle}
        handleIndicatorStyle={
          handleIndicatorStyle
            ? handleIndicatorStyle
            : styles.sheetHandleIndicatorStyle
        }
        {...props}
      >
        {children}
      </BottomSheetModal>
    </>
  );
};
