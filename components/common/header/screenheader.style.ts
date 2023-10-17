import { StyleSheet, ViewStyle } from "react-native";
import { SIZES } from "../../../constants";

type Style = {
  btnContainer: ViewStyle;
  btnImg: any;
};

const styles = StyleSheet.create<Style>({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension: any) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
});

export default styles;
