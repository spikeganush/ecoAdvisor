import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import {
  doc,
  collection,
  getDocs,
  query,
  where,
  getDoc,
  onSnapshot,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../utils";
import { size, map } from "lodash";

export function RankingScreen() {
  const [restaurants, setRestaurants] = useState(null);
  console.log("business", size(restaurants));

  console.log("restaurants", restaurants);
  useEffect(() => {
    const q = query(
      collection(db, "restaurants"),
      orderBy("averageRating", "desc"),
      limit(5)
    );
    onSnapshot(q, (snapshot) => {
      setRestaurants(snapshot.docs);
    });
  }, []);
  return (
    <View>
      <Text>RankingScreen</Text>
    </View>
  );
}
