import { View } from "react-native";
import { Text, AirbnbRating, ListItem, Avatar } from "react-native-elements";
import { DateTime } from "luxon";

import React, { useState, useEffect } from "react";
import { styles } from "./Reviews.styles";
import {
  doc,
  onSnapshot,
  collection,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { db } from "../../../utils";
import { map } from "lodash";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
import { Loading } from "../../../components/Shared";

export function Reviews(props) {
  const { idRestaurant } = props;
  const navigation = useNavigation();
  const goToDetails = (restaurant) => {
    navigation.navigate(screen.restaurant.reviewsRestaurant, {
      id: idRestaurant,
    });
  };
  const [reviews, setReviews] = useState([]);
  // const [avatar, setAvatar] = useState();
  useEffect(() => {
    const q = query(
      collection(db, "reviews"),
      where("idRestaurant", "==", idRestaurant),
      orderBy("createdAt", "desc")
    );

    onSnapshot(q, (snapshot) => {
      setReviews(snapshot.docs);
      console.log("idRestaurantReviews", idRestaurant);
    });
  }, []);

  if (!reviews) return <Loading show text="Cargando" />;

  return (
    <View style={styles.content}>
      {map(reviews.slice(0, 3), (review) => {
        const data = review.data();
        const createReview = new Date(data.createdAt.seconds * 1000);

        return (
          <ListItem key={data.id} bottomDivider containerStyle={styles.review}>
            <View>
              <Avatar
                size={50}
                rounded
                icon={{ type: "material", name: "person" }}
                containerStyle={styles.avatar}
                source={{ uri: data.avatar }}
              />
              <Text style={styles.avatarName}>{data.userName}</Text>
            </View>

            <ListItem.Content>
              <ListItem.Title style={styles.title}>{data.title}</ListItem.Title>
              <View style={styles.subtitle}>
                <Text style={styles.comment}>{data.comment}</Text>

                <View style={styles.contentRatingDate}>
                  <AirbnbRating
                    defaultRating={data.rating}
                    showRating={false}
                    size={15}
                    isDisabled
                    starContainerStyle={styles.starContainer}
                  />

                  <Text style={styles.date}>
                    {/* {DateTime.fromISO(createReview.toISOString()).toFormat(
                      "yyyy/LL/dd - hh:mm"
                    )} */}
                    {/* {
                      createReview.getDate() +
                        "/" +
                        createReview.getMonth({ month: "long" }) +
                        "/" +
                        createReview.getFullYear()
                      // " - " +
                      // createReview.getHours() +
                      // ":" +
                      // createReview.getMinutes()}
                    } */}

                    {createReview.toLocaleDateString()}
                    {/* {createReview.toLocaleString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    })} */}
                    {/* {createReview.toDateString()} */}
                  </Text>
                  {/* <Text style={styles.date}>"yyyy/LL/dd - hh:mm"</Text> */}
                </View>
              </View>
            </ListItem.Content>
          </ListItem>
        );
      })}
      {reviews.length > 0 && (
        <View style={styles.seeAll}>
          <Text
            style={styles.text}
            onPress={() => {
              goToDetails(idRestaurant);
            }}
          >
            See all
          </Text>
        </View>
      )}
    </View>
  );
}
