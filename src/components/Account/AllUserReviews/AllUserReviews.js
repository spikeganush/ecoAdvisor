import { View, ScrollView } from "react-native";
import {
  Text,
  AirbnbRating,
  ListItem,
  Avatar,
  Button,
  TouchableOpacity,
  Chip,
  Rating,
} from "react-native-elements";

import React, { useState, useEffect } from "react";
import { styles } from "./AllUserReviews.styles";
import {
  doc,
  onSnapshot,
  collection,
  query,
  where,
  orderBy,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../../utils";
import { map, size } from "lodash";
import { Loading } from "../../../components/Shared";

export function AllUserReviews(props) {
  const { userId, haslogged } = props;
  const [reviews, setReviews] = useState([]);
  const [newa, setNewa] = useState();

  const [filterReviews, setFilterReviews] = useState();
  console.log("REVIEWS CHECK", size(reviews));
  const [disabled, setDisabled] = useState(false);
  //create array of  1 to 5 stars with icon to filter reviews by rating and stars in the future (not implemented yet)
  const stars = [
    { id: 1, icon: "star", rating: 1, disabled: false },
    { id: 2, icon: "star", rating: 2, disabled: false },
    { id: 3, icon: "star", rating: 3, disabled: false },
    { id: 4, icon: "star", rating: 4, disabled: false },
    { id: 5, icon: "star", rating: 5, disabled: false },
  ];
  const [selected, setSelected] = useState(stars);
  const [rating, setRating] = useState(0);
  //create function to update value of disabled in stars array when a star is pressed to filter reviews by rating and stars in the future (not implemented yet)
  const updateSelected = (id) => {
    try {
      const newSelected = stars.map((star) => {
        if (star.id === id) {
          star.disabled = !star.disabled;
        }
        return star;
      });
      setSelected(newSelected);
      setRating(id);
      console.log("STAR", newSelected, id);
    } catch (error) {
      console.log("Error removing document: ", error);
    }
  };
  const selectAll = () => {
    try {
      const newSelected = stars.map((star) => {
        star.disabled = false;
        return star;
      });
      setSelected(newSelected);
      setRating(0);
      console.log("STAR", newSelected, 0);
    } catch (error) {
      console.log("Error removing document: ", error);
    }
  };

  useEffect(() => {
    console.log("RATINGLOGCHANGED", rating);
    console.log("SELECTEDGLOGCHANGED", selected);
    console.log("REVIEWSLOGCHANGED", size(reviews));
    console.log("FILTERREVIEWSLOGCHANGED", size(filterReviews));
  }, [reviews]);

  useEffect(() => {
    try {
      const q = query(
        collection(db, "reviews"),
        where("idUser", "==", userId),
        orderBy("createdAt", "desc")
      );

      onSnapshot(q, (snapshot) => {
        setReviews(snapshot.docs);
      });
      if (size(reviews) === 0) {
        setRating(0);
        setSelected(stars);
      }
    } catch (error) {
      console.log("Error removing document: ", error);
    }
  }, [rating, newa]);
  useEffect(() => {
    try {
      const q = query(
        collection(db, "reviews"),
        where("idUser", "==", userId),
        rating === 0
          ? orderBy("createdAt", "desc")
          : where("rating", "==", rating)
        //   where("rating", "==", 1)
        //   orderBy("rating", "desc")
      );

      onSnapshot(q, (snapshot) => {
        setFilterReviews(snapshot.docs);
      });
    } catch (error) {
      console.log("Error removing document: ", error);
    }

    console.log("FILTEREDREVIEWS HITTED", size(filterReviews));
  }, [rating, selected, newa]);

  // create delete function to delete a review from firestore and update the state of reviews depending on the rating selected if the rating is 0 then update the state of reviews with all the reviews of the user if the rating is not 0 then update the state of filterReviews with the reviews of the user filtered by rating and update the state of reviews with the reviews of the user filtered by rating and update the state of selected with the stars array and update the state of rating with 0 to show all the reviews of the user when the user press the delete button in the review card (not implemented yet)
  //   const deleteReview = async (id) => {
  //     try {
  //       await deleteDoc(doc(db, "reviews", id));
  //       if (rating === 0) {
  //         setReviews(filterReviews);
  //       } else {
  //         setReviews(filterReviews);
  //         setFilterReviews(filterReviews);
  //         setSelected(stars);
  //         setRating(0);
  //       }
  //     } catch (error) {
  //       console.log("Error removing document: ", error);
  //     }
  //   };
  // create a function check to check if the filterreviews state is empty and if it is empty then update the state of reviews with an empty array to show a message to the user that he dont have reviews and update the state of selected with the stars array and update the state of rating with 0 to show all the reviews of the user when the user press the delete button in the review card (not implemented yet)
  const check = () => {
    // console.log("CHECK", rating, size(filterReviews));
    // if (rating === 0 && size(filterReviews) === 1) {
    //   setSelected(stars);
    //   setReviews([]);
    //   console.log("CHECK", rating, selected, reviews);
    // }
    if (size(filterReviews) === 0 && rating !== 0) {
      setFilterReviews([]);
      setReviews([]);
      setSelected(stars);
      setRating(0);
      console.log("CHECK2", rating);
    }
    // setRating(0);
    // setSelected(stars);
    // console.log("CHECK2", rating);

    // console.log("CHECK", rating, size(filterReviews));
  };

  const Delete = async (id) => {
    try {
      await deleteDoc(doc(db, "reviews", id));
      setNewa(!newa);
      //   const newReviews = filterReviews.filter((review) => review.id !== id);
      //   setFilterReviews(newReviews);

      //   setSelected(stars);
      //   setRating(rating);
      //   if (rating === 0) {
      //     setSelected(stars);
      //     if (size(filterReviews) === 0) {
      //       setReviews([]);
      //     }
      //   }
      console.log("Document successfully deleted!", rating, filterReviews);
    } catch (error) {
      console.log("Error removing document: ", error);
    }
  };

  if (!reviews) return <Loading show text="Cargando" />;
  if (size(reviews) === 0)
    return <Text style={styles.noReviewsText}>You dont have reviews</Text>;
  return (
    <View style={styles.content}>
      {/* <ScrollView
        horizontal
        containerStyle={styles.chipsContainer}
        showsHorizontalScrollIndicator={false}
        style={styles.chips}
      > */}

      <View style={styles.chipsContainer}>
        {selected.map((star) => (
          <Chip
            key={star.id}
            onPress={
              () => updateSelected(star.id)
              //   console.log("STAR", star.disabled);
              //   setDisabled(!disabled);
            }
            // onPressOut={() => {
            //   UpdateUnselected(star.id);
            //   console.log("PRESSOUT", star.disabled);
            // }}
            // onPress={() => setDisabled(!disabled)}
            // disabled={disabled}
            // setDisabled={setDisabled}
            // disabledStyle={{ backgroundColor: "#95b53b", border: 10 }}
            // disabledTitleStyle={{ color: "white" }}
            style={styles.chip}
            type="solid"
            icon={{
              name: star.icon,
              color: star.disabled ? "white" : "#95b53b",
            }}
            buttonStyle={{
              backgroundColor: star.disabled ? "#95b53b" : "white",
              border: 1,
              borderColor: "#95b53b",
            }}
            titleStyle={{ color: star.disabled ? "white" : "#95b53b" }}
            title={star.rating}
            // containerStyle={styles.chip}
            // onClick={() => console.log("Pressed")}
          />
        ))}
      </View>
      <View style={styles.all}>
        <Text
          style={styles.all}
          //   onPress={() => {
          //     setSelected(stars);
          //     // setRating(0);
          //   }}
          onPress={() => {
            updateSelected(0);
          }}
        >
          See all
        </Text>
      </View>
      {/* </ScrollView> */}
      <>
        {size(filterReviews) === 0 ? (
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text style={styles.noReviewsText}>Sorry no results found</Text>
          </View>
        ) : (
          map(filterReviews, (review) => {
            const data = review.data();
            const createReview = new Date(data.createdAt.seconds * 1000);
            //filter reviews size is 0 then show no reviews

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
                    // onPress={() => console.log("Delete", data.id)}
                    // onPress={() => Delete(data.id)}
                    // onpress delete review and check function (not implemented yet)
                    onPress={() => {
                      Delete(data.id);
                      //   check();
                    }}
                  />
                }
                // rightWidth="100%"
                rightStyle={{
                  backgroundColor: "red",
                  paddingVertical: 20,
                  marginTop: 5,
                  borderRadius: 10,
                  //   width: "100%",
                }}
                key={data.id}
                bottomDivider
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
                  <ListItem.Title style={styles.title}>
                    {data.restaurantName}
                  </ListItem.Title>
                  <ListItem.Subtitle style={styles.subtitle}>
                    <Text style={styles.subtitleText}>{data.title}</Text>
                  </ListItem.Subtitle>
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
                <ListItem.Chevron />
              </ListItem.Swipeable>
            );
          })
        )}
      </>
    </View>
  );
}
