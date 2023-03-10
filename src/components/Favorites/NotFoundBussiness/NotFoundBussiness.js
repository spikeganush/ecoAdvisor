import { View } from "react-native";
import { Text, Icon } from "react-native-elements";
import React from "react";
import { styles } from "./NotFoundBussiness.styles";

export function NotFoundBussiness() {
  return (
    <View style={styles.content}>
      <Icon type="material-community" name="alert-outline" size={80} />
      <Text style={styles.text}>You don't have favorites yet</Text>
    </View>
  );
}
