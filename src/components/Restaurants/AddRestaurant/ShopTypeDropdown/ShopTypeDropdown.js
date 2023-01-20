import { View } from "react-native";
import { Text, CheckBox, Input } from "react-native-elements";
import React, { useState } from "react";
import { styles } from "./ShopTypeDropdown.styles";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
export function ShopTypeDropdown(props) {
  const { formik } = props;

  const data = [
    { label: "Grocery/Supermarket", value: "Grocery/Supermarket" },
    { label: "Pet", value: "Pet" },
    { label: "Clothing/Shoe", value: "Clothing/Shoe" },
    { label: "Beauty/body care", value: "Beauty/body care" },
    { label: "Cosmetic/make up", value: "Cosmetic/make up" },
    { label: "Craft store", value: "Craft store" },
    { label: "Homeware", value: "Homeware" },
    { label: "op Shop", value: "op Shop" },
  ];

  const [value, setValue] = useState();
  const handleChange = (e) => {
    // console.log('valor restype ', e);
    setValue(e.value);
    formik.setFieldValue("ShopType", e.value); // I don't pass useState value here, because with useState I will have the previous value, useState is async
  };

  return (
    <>
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
        placeholder="Shop  type"
        searchPlaceholder="Search..."
        value={value}
        onChange={handleChange}
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
