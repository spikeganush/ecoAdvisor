import { View, Text, ScrollView, Dimensions } from "react-native";
import React from "react";

import { AllReviews } from "../../../components/Restaurants";
import { styles } from "./ReviewsScreen.styles";
export function ReviewsScreen(props) {
  const { route } = props;
  const idRestaurant = route.params.id;

  return (
    <ScrollView style={styles.content}>
      <AllReviews idRestaurant={idRestaurant} />
    </ScrollView>
  );
}
