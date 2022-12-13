import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

export function RestaurantsScreen(props) {
  const goToAddRestaurant = () => {
    props.navigation.navigate("AddRestaurant");
  };
  {
    return (
      <View>
        <Text>RestaurantsScreen</Text>
        <Button title="Add Restaurant" onPress={goToAddRestaurant} />
      </View>
    );
  }
}
