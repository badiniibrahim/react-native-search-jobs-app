import React, { FC } from "react";
import { View, Text } from "react-native";

import styles from "./specifics.style";

type SpecificsProps = {
  title: string;
  points: any;
};

const Specifics: FC<SpecificsProps> = ({ title, points }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>

      <View style={styles.pointsContainer}>
        {points.map(
          (
            item:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal,
            index: any
          ) => (
            <View style={styles.pointWrapper} key={item + index}>
              <View style={styles.pointDot} />
              <Text style={styles.pointText}>{item}</Text>
            </View>
          )
        )}
      </View>
    </View>
  );
};

export default Specifics;
