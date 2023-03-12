import { View } from "react-native";
import React, { useState } from "react";
import { styles } from "./EcoInfo.styles";
import { Text, ListItem, Icon, Image, Avatar } from "react-native-elements";
import { map } from "lodash";
export function EcoInfo(props) {
  const { restaurant } = props;
  const [showListInfo, setShowListInfo] = useState(false);
  console.log("fullyVegan", restaurant.menu.VeganOptions);

  const listInfo = [
    !restaurant.coffee.DiscountForUsingOwncupe && {
      text: "Discount for using own cup",
      leftIconName: "coffee",
      iconType: "material-community",
      img: require("../../../../assets/img/discount-cup.png"),
      action: null,
    },
    !restaurant.menu.FullyVegan && {
      text: "Fully Vegan",
      leftIconName: "food",
      iconType: "material-community",
      img: require("../../../../assets/img/fully-vegan.png"),
      action: null,
    },
    !restaurant.menu.FullyVegetarian && {
      text: "Fully Vegetarian",
      leftIconName: "food",
      iconType: "material-community",
      img: require("../../../../assets/img/fully-vegetarian.png"),
      action: null,
    },
    !restaurant.menu.LocalFood && {
      text: "Local Food",
      leftIconName: "food",
      iconType: "material-community",
      img: require("../../../../assets/img/local-food.png"),
      action: null,
    },
    !restaurant.waste.FullyPlasticFree && {
      text: "Fully Plastic Free",
      leftIconName: "food",
      iconType: "material-community",
      img: require("../../../../assets/img/no-plastic.png"),
      action: null,
    },
    !restaurant.supplier.ReusableEnergy && {
      text: "Reusable Energy",
      leftIconName: "food",
      iconType: "material-community",
      img: require("../../../../assets/img/renewable-energy.png"),
      action: null,
    },
  ];
  return (
    <View style={styles.content}>
      {/* <View style={styles.titleContainer}> */}
      <View>
        {!restaurant.menu.FullyVegan ||
        !restaurant.FullyVegetarian ||
        !restaurant.waste.FullyPlasticFree ||
        !restaurant.supplier.ReusableEnergy ||
        !restaurant.coffee.DiscountForUsingOwncupe ||
        !restaurant.menu.LocalFood ? (
          <ListItem
            // style={styles.listItem}
            bottomDivider
            onPress={() => {
              showListInfo ? setShowListInfo(false) : setShowListInfo(true);
            }}
          >
            <ListItem.Content>
              <ListItem.Title style={styles.title}>
                {"Highlights"}
              </ListItem.Title>
            </ListItem.Content>
            <Icon
              type={"material-community"}
              name={"arrow-down-drop-circle-outline"}
              color={"#00a680"}
              style={styles.icon}
              onPress={() => {
                showListInfo ? setShowListInfo(false) : setShowListInfo(true);
              }}
            />
          </ListItem>
        ) : null}

        {/* <Text
          style={styles.title}
          onPress={() => {
            showListInfo ? setShowListInfo(false) : setShowListInfo(true);
          }}
        >
          Highlights
        </Text> */}
        {/* <Image
          source={require("../../../../assets//img/13526-Health_Star_Rating_Logo.jpg")}
          style={styles.image}
        /> */}
      </View>
      {map(
        listInfo,
        (item, index) =>
          //if item.text is not empty then render the ListItem component else return null (nothing)
          // item.text && (
          showListInfo && (
            <ListItem key={index} style={styles.listItem}>
              <ListItem.Content>
                <ListItem.Title style={{ fontSize: 15 }}>
                  {item.text}
                </ListItem.Title>
              </ListItem.Content>
              <Image source={item.img} style={styles.img} />
              {/* <Icon
              name={item.leftIconName}
              type={item.iconType}
              color="#c2c2c2"
              size={15}
            /> */}
            </ListItem>
          )
      )}
    </View>
  );
}
