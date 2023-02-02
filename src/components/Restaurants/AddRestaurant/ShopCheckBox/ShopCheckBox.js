import { View } from "react-native";
import { Text, CheckBox, Input, Icon, ListItem } from "react-native-elements";
import React, { useState } from "react";
import { styles } from "./ShopCheckBox.styles";
import Data from "./ShopCheckBoxData.json";

// import Data from './RestaurantCheckboxesData.json';

export function ShopCheckBox(props) {
  const { formik } = props;

  const handleCheckboxes = (type, value) => {
    formik.setFieldValue(`${type}.${value}`, !formik.values[type][value]);
  };

  console.log("Formik values", formik.values);

  const [showProducts, setShowProducts] = useState(false);
  const [showWaste, setShowWaste] = useState(false);
  const [showSupplier, setShowSupplier] = useState(false);

  return (
    <View style={styles.content}>
      <ListItem
        bottomDivider
        onPress={() => {
          showProducts ? setShowProducts(false) : setShowProducts(true);
        }}
      >
        <Icon
          type={"material-community"}
          name={"food-variant"}
          color={"#00a680"}
        />
        <ListItem.Content>
          <ListItem.Title>{"Food/Products"}</ListItem.Title>
        </ListItem.Content>
        <Icon
          type={"material-community"}
          name={"arrow-down-drop-circle-outline"}
          color={"#00a680"}
          onPress={() => {
            showProducts ? setShowProducts(false) : setShowProducts(true);
          }}
        />
      </ListItem>
      {showProducts ? (
        <>
          {Data.FoodProducts.map((item) => {
            return (
              <CheckBox
                title={item.title}
                checked={formik.values.FoodProducts[item.value]}
                checkedColor={"#00a680"}
                onPress={() => handleCheckboxes("FoodProducts", item.value)}
                key={`FoodProducts-${item.id}`}
              />
            );
          })}
        </>
      ) : null}
      <ListItem
        bottomDivider
        onPress={() => {
          showSupplier ? setShowSupplier(false) : setShowSupplier(true);
        }}
      >
        <Icon
          type={"material-community"}
          name={"lightbulb-on-outline"}
          color={"#00a680"}
        />
        <ListItem.Content>
          <ListItem.Title>{"Supplier and energy"}</ListItem.Title>
        </ListItem.Content>
        <Icon
          type={"material-community"}
          name={"arrow-down-drop-circle-outline"}
          color={"#00a680"}
          onPress={() => {
            showSupplier ? setShowSupplier(false) : setShowSupplier(true);
          }}
        />
      </ListItem>
      {showSupplier ? (
        <>
          {Data.SupplierEnergy.map((item) => {
            return (
              <CheckBox
                title={item.title}
                checked={formik.values.SupplierEnergy[item.value]}
                checkedColor={"#00a680"}
                onPress={() => handleCheckboxes("SupplierEnergy", item.value)}
                key={`SupplierEnergy-${item.id}`}
              />
            );
          })}
        </>
      ) : null}
      <ListItem
        bottomDivider
        onPress={() => {
          showWaste ? setShowWaste(false) : setShowWaste(true);
        }}
      >
        <Icon
          type={"material-community"}
          name={"delete-empty-outline"}
          color={"#00a680"}
        />
        <ListItem.Content>
          <ListItem.Title>{"Waste"}</ListItem.Title>
        </ListItem.Content>
        <Icon
          type={"material-community"}
          name={"arrow-down-drop-circle-outline"}
          color={"#00a680"}
          onPress={() => {
            showWaste ? setShowWaste(false) : setShowWaste(true);
          }}
        />
      </ListItem>
      {showWaste ? (
        <>
          {Data.waste.map((item) => {
            return (
              <CheckBox
                title={item.title}
                checked={formik.values.waste[item.value]}
                checkedColor={"#00a680"}
                onPress={() => handleCheckboxes("waste", item.value)}
                key={`waste-${item.id}`}
              />
            );
          })}
        </>
      ) : null}
      {/* <View style={styles.container}>
        <Text
          style={styles.text}
          onPress={() => {
            setShowWaste(!showWaste);
          }}
        >
          Food/Products
        </Text>
        <Icon
          name="arrow-down-drop-circle-outline"
          type="material-community"
          color="#00a680"
          onPress={() => {
            showProducts ? setShowProducts(false) : setShowProducts(true);
          }}
        />
      </View>

      {showProducts ? (
        <>
          {Data.FoodProducts.map((item) => {
            return (
              <CheckBox
                title={item.title}
                checked={formik.values.FoodProducts[item.value]}
                onPress={() => handleCheckboxes("FoodProducts", item.value)}
                key={`FoodProducts-${item.id}`}
              />
            );
          })}
        </>
      ) : null}
      <View style={styles.container}>
        <Text
          style={styles.text}
          onPress={() => {
            setShowMenu(!showMenu);
          }}
        >
          Menu
        </Text>
        <Icon
          name="arrow-down-drop-circle-outline"
          type="material-community"
          color="#00a680"
          onPress={() => {
            setShowMenu(!showMenu);
          }}
        />
      </View>
      {showMenu ? (
        <>
          {Data.menu.map((item) => {
            return (
              <CheckBox
                title={item.title}
                checked={formik.values.menu[item.value]}
                onPress={() => handleCheckboxes("menu", item.value)}
                key={`menu-${item.id}`}
              />
            );
          })}
        </>
      ) : null}
      <View style={styles.container}>
        <Text
          style={styles.text}
          onPress={() => {
            showWaste ? setShowWaste(false) : setShowWaste(true);
          }}
        >
          Waste
        </Text>
        <Icon
          name="arrow-down-drop-circle-outline"
          type="material-community"
          color="#00a680"
          onPress={() => {
            showWaste ? setShowWaste(false) : setShowWaste(true);
          }}
        />
      </View>
      {showWaste ? (
        <>
          {Data.waste.map((item) => {
            return (
              <CheckBox
                title={item.title}
                checked={formik.values.waste[item.value]}
                onPress={() => handleCheckboxes("waste", item.value)}
                key={`waste-${item.id}`}
              />
            );
          })}
        </>
      ) : null}
      <View style={styles.container}>
        <Text
          style={styles.text}
          onPress={() => {
            showSupplier ? setShowSupplier(false) : setShowSupplier(true);
          }}
        >
          Supplier and energy
        </Text>
        <Icon
          name="arrow-down-drop-circle-outline"
          type="material-community"
          color="#00a680"
          onPress={() => {
            showSupplier ? setShowSupplier(false) : setShowSupplier(true);
          }}
        />
      </View>
      {showSupplier ? (
        <>
          {Data.supplier.map((item) => {
            return (
              <CheckBox
                title={item.title}
                checked={formik.values.supplier[item.value]}
                onPress={() => handleCheckboxes("supplier", item.value)}
                key={`supplier-${item.id}`}
              />
            );
          })}
        </>
      ) : null}
      <View style={styles.container}>
        <Text
          style={styles.text}
          onPress={() => {
            showCommunity ? setShowCommunity(false) : setShowCommunity(true);
          }}
        >
          Community
        </Text>
        <Icon
          name="arrow-down-drop-circle-outline"
          type="material-community"
          color="#00a680"
          onPress={() => {
            showCommunity ? setShowCommunity(false) : setShowCommunity(true);
          }}
        />
      </View>
      {showCommunity ? (
        <>
          {Data.community.map((item) => {
            return (
              <CheckBox
                title={item.title}
                checked={formik.values.community[item.value]}
                onPress={() => handleCheckboxes("community", item.value)}
                key={`community-${item.id}`}
              />
            );
          })}
        </>
      ) : null} */}
    </View>
  );
}
