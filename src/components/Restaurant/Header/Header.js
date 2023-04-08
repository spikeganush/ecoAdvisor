import { View } from "react-native";
import { Text, Rating, Image } from "react-native-elements";
import React from "react";
import { styles } from "./Header.styles";

export function Header(props) {
  const { restaurant } = props;
  const listInfo = [
    !restaurant.coffee.DiscountForUsingOwncupe && {
      img: require("../../../../assets/img/discount-cup.png"),
      action: null,
    },
    // !restaurant.menu.FullyVegan && {
    //   img: require("../../../../assets/img/fully-vegan.png"),
    //   action: null,
    // },
    !restaurant.menu.FullyVegetarian && {
      img: require("../../../../assets/img/fully-vegetarian.png"),
      action: null,
    },
    !restaurant.menu.LocalFood && {
      img: require("../../../../assets/img/local-food.png"),
      action: null,
    },
    !restaurant.waste.FullyPlasticFree && {
      img: require("../../../../assets/img/no-plastic.png"),
      action: null,
    },
    !restaurant.supplier.ReusableEnergy && {
      img: require("../../../../assets/img/renewable-energy.png"),
      action: null,
    },
    !restaurant.menu.FullyVegan && {
      img: require("../../../../assets/img/fully-vegan.png"),
      action: null,
    },
  ];
  return (
    <View style={styles.content}>
      <View style={styles.titleView}>
        <Text style={styles.name}>{restaurant.name}</Text>
        <Rating
          imageSize={20}
          startingValue={restaurant.averageRating | 0}
          readonly
        />
      </View>
      {!restaurant.coffee.DiscountForUsingOwncupe ||
      !restaurant.menu.FullyVegan ||
      !restaurant.menu.FullyVegetarian ||
      !restaurant.menu.LocalFood ||
      !restaurant.waste.FullyPlasticFree ||
      !restaurant.supplier.ReusableEnergy ? (
        <View style={styles.imgContainer}>
          {listInfo.map((item, index) => (
            <Image
              key={index}
              style={styles.img}
              source={item.img}
              resizeMode="contain"
            />
          ))}
        </View>
      ) : null}
      <Text style={styles.description}>{restaurant.description}</Text>
    </View>
  );
}
