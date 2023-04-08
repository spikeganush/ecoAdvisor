import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-elements";
import { styles } from "./BtnReviewForm.styles";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
import { query, collection, where, onSnapshot } from "firebase/firestore";
import { db } from "../../../utils";
import { size } from "lodash";

export function BtnReviewForm(props) {
  const { idRestaurant, restaurantName } = props;
  const [haslogged, setHasLogged] = useState(false);
  const [hasReview, setHasReview] = useState(false);
  const navigation = useNavigation();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setHasLogged(user ? true : false);
    });
  }, []);

  useEffect(() => {
    if (haslogged) {
      const q = query(
        collection(db, "reviews"),
        where("idRestaurant", "==", idRestaurant),
        where("idUser", "==", auth.currentUser.uid)
      );
      onSnapshot(q, (snapShot) => {
        const reviews = snapShot.docs;
        if (size(reviews) > 0) {
          setHasReview(true);
        }
      });
    }
  }, [haslogged]);

  const goToLogin = () => {
    navigation.navigate(screen.account.tab, { screen: screen.account.login });
  };
  const goToAddReview = () => {
    navigation.navigate(screen.restaurant.addReviewRestaurant, {
      idRestaurant,
      restaurantName,
    });
  };

  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      setHasLogged(user ? true : false);
    });
  }, []);

  if (hasReview && haslogged) {
    return (
      <View style={styles.content}>
        <Text style={styles.textSendReview}>
          You have already written a review for this restaurant
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.content}>
      {haslogged ? (
        <Button
          title="Write a review"
          icon={{
            type: "material-community",
            name: "square-edit-outline",
            color: "#00a680",
          }}
          buttonStyle={styles.button}
          titleStyle={styles.btnText}
          onPress={goToAddReview}
        />
      ) : (
        <Text style={styles.text} onPress={goToLogin}>
          To write a review you need to be logged{" "}
          <Text style={styles.textClick}>press HERE to login or register</Text>
        </Text>
      )}
    </View>
  );
}
