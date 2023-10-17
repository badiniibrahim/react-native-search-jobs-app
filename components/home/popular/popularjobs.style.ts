import { StyleSheet, TextStyle, ViewStyle } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

type Style = {
  container: ViewStyle;
  header: any;
  headerTitle: TextStyle;
  headerBtn: ViewStyle;
  cardsContainer: ViewStyle;
};

const styles = StyleSheet.create<Style>({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
  },
});

export default styles;
