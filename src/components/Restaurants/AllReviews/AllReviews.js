import { View } from "react-native";
import {
  Text,
  AirbnbRating,
  ListItem,
  Avatar,
  Button,
} from "react-native-elements";

import React, { useState, useEffect } from "react";
import { styles } from "./AllReviews.styles";
import {
  doc,
  onSnapshot,
  collection,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { db } from "../../../utils";
import { map, size } from "lodash";
import { Loading } from "../../../components/Shared";

export function AllReviews(props) {
  const { idRestaurant } = props;

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const q = query(
      collection(db, "reviews"),
      where("idRestaurant", "==", idRestaurant),
      orderBy("rating", "desc")
    );

    onSnapshot(q, (snapshot) => {
      setReviews(snapshot.docs);
    });
  }, []);

  if (!reviews) return <Loading show text="Cargando" />;
  if (size(reviews) === 0) return <Text>No hay comentarios</Text>;
  return (
    <View style={styles.content}>
      {map(reviews, (review) => {
        const data = review.data();
        const createReview = new Date(data.createdAt.seconds * 1000);

        return (
          <ListItem.Swipeable
            rightContent={
              <Button
                title="Delete"
                icon={{ type: "material-community", name: "trash-can" }}
                buttonStyle={{
                  minHeight: "100%",
                  backgroundColor: "red",
                }}
                onPress={() => console.log("Delete")}
              />
            }
            rightStyle={{
              backgroundColor: "red",
              paddingVertical: 20,
              marginTop: 5,
              borderRadius: 10,
            }}
            key={data.id}
            bottomDivider
            containerStyle={styles.review}
          >
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
                    {createReview.toLocaleDateString()}
                  </Text>
                </View>
              </View>
            </ListItem.Content>
          </ListItem.Swipeable>
        );
      })}
    </View>
  );
}
