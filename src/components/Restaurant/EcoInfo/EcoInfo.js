import { View } from "react-native";
import React from "react";
import { styles } from "./EcoInfo.styles";
import { Text, ListItem, Icon, Image, Avatar } from "react-native-elements";
import { map } from "lodash";
export function EcoInfo(props) {
  const { restaurant } = props;
  console.log("fullyVegan", restaurant.menu.VeganOptions);

  const listInfo = [
    !restaurant.coffee.DiscountForUsingOwncupe && {
      text: "Discount for using own cup",
      leftIconName: "coffee",
      iconType: "material-community",
      action: null,
    },
    !restaurant.menu.FullyVegan && {
      text: "Fully Vegan",
      leftIconName: "food",
      iconType: "material-community",
      action: null,
    },
    !restaurant.menu.FullyVegetarian && {
      text: "Fully Vegetarian",
      leftIconName: "food",
      iconType: "material-community",
      action: null,
    },
    !restaurant.menu.LocalFood && {
      text: "Local Food",
      leftIconName: "food",
      iconType: "material-community",
      action: null,
    },
    !restaurant.waste.FullyPlasticFree && {
      text: "Fully Plastic Free",
      leftIconName: "food",
      iconType: "material-community",
      action: null,
    },
    !restaurant.supplier.ReusableEnergy && {
      text: "Reusable Energy",
      leftIconName: "food",
      iconType: "material-community",
      action: null,
    },
  ];

  return (
    <View style={styles.content}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Bussiness Eco Information</Text>
        <Image
          source={require("../../../../assets//img/13526-Health_Star_Rating_Logo.jpg")}
          style={styles.image}
        />
      </View>
      {map(
        listInfo,
        (item, index) => (
          //if item.text is not empty then render the ListItem component else return null (nothing)
          // item.text && (
          <ListItem key={index} style={styles.listItem}>
            <ListItem.Content>
              <ListItem.Title style={{ fontSize: 15 }}>
                {item.text}
              </ListItem.Title>
            </ListItem.Content>
            <Icon
              name={item.leftIconName}
              type={item.iconType}
              color="#c2c2c2"
              size={15}
            />
          </ListItem>
        )
        // )
      )}
    </View>
  );
}
