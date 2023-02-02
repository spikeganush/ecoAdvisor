import React, { useState, useEffect } from "react";
import { View, Dimensions } from "react-native";
import { Icon, Text } from "react-native-elements";
import { styles } from "./RestaurantsScreen.styles";
import { screen, db } from "../../../utils";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { LoadingModal } from "../../../components/Shared";
import { ListRestaurants } from "../../../components/Restaurants/ListRestaurants";
import { Explore } from "../../../components/Restaurants/Explore/Explore";
const ratio = 228 / 250;
export const MARGIN = 5;
export const { width } = Dimensions.get("window");
export const CARD_WIDTH = width * 0.6;
export const CARD_HEIGHT = CARD_WIDTH * ratio;
export const HEIGHT = CARD_HEIGHT + MARGIN * 2;
export const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

export function RestaurantsScreen(props) {
  const { navigation } = props;
  const [currentUser, setCurrentUser] = useState(null);
  const [restaurants, setRestaurants] = useState(null);
  // const { width } = Dimensions.get("window");

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);
  useEffect(() => {
    const q = query(
      collection(db, "restaurants"),
      orderBy("createdAt", "desc")
    );
    onSnapshot(q, (snapshot) => {
      setRestaurants(snapshot.docs);
      console.log(
        "restaurants",
        snapshot.docs.map((doc) => doc.data())
      );
    });
  }, []);

  const goToAddRestaurant = () => {
    navigation.navigate(screen.restaurant.addRestaurant);
  };

  return (
    // check if currentUser is not null and if it is not null then show the icon
    <View style={styles.content}>
      {!restaurants ? (
        <LoadingModal show text="Loading restaurants..." />
      ) : (
        // <ListRestaurants restaurants={restaurants} />
        <Explore restaurants={restaurants} />

        // <Text>hola</Text>
      )}
      {currentUser && (
        <Icon
          reverse
          type="material-community"
          name="plus"
          color="#00a680"
          containerStyle={styles.btnContainer}
          onPress={goToAddRestaurant}
        />
      )}
    </View>
  );
}
