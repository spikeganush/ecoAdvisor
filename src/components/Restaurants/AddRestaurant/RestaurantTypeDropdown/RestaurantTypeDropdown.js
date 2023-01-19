import { View } from "react-native";
import { Text, CheckBox, Input } from "react-native-elements";
import React, { useState } from "react";
import { styles } from "./RestaurantTypeDropdown.styles";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
export function RestaurantTypeDropdown(props) {
  const { formik } = props;

  const data = [
    { label: "Restaurant", value: "restaurant" },
    { label: "Cofee/Bakery", value: "cofee/Bakery" },
  ];

  const [value, setValue] = useState();

  console.log("valor restaurante value ", value);
  console.log("valor restype formikonchange", formik.values.restaurantType);

  return (
    <>
      {/* <Input
        placeholder="Business name"
        onChangeText={(text) => formik.setFieldValue("restaurantType", text)}
        errorMessage={formik.errors.restaurantType}
      /> */}
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Restaurant type"
        searchPlaceholder="Search..."
        value={value}
        onChange={(text) => {
          setValue(text.value);
          formik.setFieldValue("RestaurantType", value);
          // console.log("valor restype ", value);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color="black"
            name="Safety"
            size={20}
          />
        )}
      />
    </>
  );
}
