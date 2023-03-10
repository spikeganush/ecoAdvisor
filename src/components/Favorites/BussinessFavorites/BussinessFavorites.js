import { View, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { styles } from "./BussinessFavorites.styles";
import { Image, Icon, Text, Rating } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { db, screen } from "../../../utils";
import { doc, deleteDoc } from "firebase/firestore";

export function BussinessFavorites(props) {
  const { bussiness } = props;
  const navigation = useNavigation();
  const { width } = Dimensions.get("window");
  const { height } = Dimensions.get("window");

  const goToBussiness = () => {
    navigation.navigate(screen.restaurant.tab, {
      screen: screen.restaurant.restaurant,
      params: { id: bussiness.id },
    });
  };
  const onRemoveFavorite = async () => {
    try {
      await deleteDoc(doc(db, "favorites", bussiness.idFavorite));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TouchableOpacity onPress={goToBussiness}>
      <View style={styles.content}>
        <Image
          source={{ uri: bussiness.images[0] }}
          style={{
            width: width - 30,
            height: height / 3,
            borderRadius: 25,
          }}
        />
        <View
          style={{
            position: "absolute",
            bottom: -60,
            left: 15,
            right: 15,
            justifyContent: "space-between",
            // alignItems: "center",
            backgroundColor: "#fff",
            width: width - 60,
            height: height / 5,
            borderRadius: 25,
            borderWidth: 1,
            borderColor: "#ccc",
            padding: 15,
          }}
        >
          <View style={styles.info}>
            <Rating
              imageSize={15}
              startingValue={bussiness.rating}
              style={{
                justifyContent: "flex-start",
                alignItems: "flex-start",
                paddingBottom: 10,
              }}
            />

            <Text style={styles.name}>{bussiness.name}</Text>
            <Text style={styles.address}>{bussiness.address}</Text>
            <Icon
              type="material-community"
              name="heart"
              color="#f00"
              containerStyle={styles.favorite}
              onPress={onRemoveFavorite}
              underlayColor="transparent"
            />
            <Icon
              type="material-community"
              name="map-outline"
              color="#ccc"
              containerStyle={styles.map}
              // onPress={}
              underlayColor="transparent"
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
