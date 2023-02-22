import { View } from "react-native";
import { Text, Rating } from "react-native-elements";
import React from "react";
import { styles } from "./Header.styles";

export function Header(props) {
  const { restaurant } = props;
  return (
    <View style={styles.content}>
      <View style={styles.titleView}>
        <Text style={styles.name}>{restaurant.name}</Text>
        <Rating
          imageSize={20}
          startingValue={restaurant.averageRating | 0}
          readonly
        />
      </View>
      <Text style={styles.description}>{restaurant.description}</Text>
    </View>
  );
}
