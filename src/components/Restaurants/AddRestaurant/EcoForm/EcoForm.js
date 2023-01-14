import { View } from "react-native";
import { Text, CheckBox } from "react-native-elements";
import React, { useState } from "react";
import { styles } from "./EcoForm.styles";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";

export function EcoForm(props) {
  const { formik } = props;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    formik.setFieldValue("eco", isEnabled);
  };
  const dataBusinessType = [
    { label: "Restaurant", value: "restaurant" },
    { label: "Shop", value: "shop" },
    { label: "Acomodation", value: "acomodation" },
  ];
  const dataRestaurantType = [
    { label: "Restaurant", value: "restaurantType" },
    { label: "Cofee/Bakery", value: "cofee/Bakery" },
    { label: "Pub/Bar", value: "pub/Bar" },
  ];

  const [value, setValue] = useState(null);
  const [valueRestaurantType, setValueRestaurantType] = useState(null);

  // console.log(isEnabled);
  return (
    <View style={styles.content}>
      <Text style={styles.text}>Is the business Ecofriendly?</Text>

      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={dataBusinessType}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select business type"
        searchPlaceholder="Search..."
        value={value}
        onChange={(item) => {
          setValue(item.value);
          formik.setFieldValue("businessType", value);
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
      {value === "restaurant" ? (
        <>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={dataRestaurantType}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select restaurant type"
            searchPlaceholder="Search..."
            value={valueRestaurantType}
            onChange={(item) => {
              setValueRestaurantType(item.valueRestaurantType);
              formik.setFieldValue("restauranType", valueRestaurantType);
              console.log("a ver ", valueRestaurantType);
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
          <CheckBox
            title="Eco friendly"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
          <CheckBox
            title="Vegan"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
        </>
      ) : value === "shop" ? (
        <>
          <CheckBox
            title="Eco friendly"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
          <CheckBox
            title="Vegan"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
        </>
      ) : value === "acomodation" ? (
        <>
          <CheckBox
            title="Eco friendly"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
          <CheckBox
            title="Vegan"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
        </>
      ) : null}
    </View>
  );
}
