import { View } from "react-native";
import { Text, CheckBox, Input } from "react-native-elements";
import React, { useState } from "react";
import { styles } from "./EcoForm.styles";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import { RestaurantTypeDropdown } from "../RestaurantTypeDropdown/RestaurantTypeDropdown";
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
  ];

  const [value, setValue] = useState();
  // console.log("valor value ", value);
  // console.log("valor formikonchange", formik.values.businessType);
  // console.log("formValues de ecoscreen", formik.values);

  // console.log(isEnabled);
  return (
    <View style={styles.content}>
      <Text style={styles.text}>Is the business Ecofriendly?</Text>
      {/* <Input
        placeholder="Business name"
        onChangeText={(text) => formik.setFieldValue("businessType", text)}
        errorMessage={formik.errors.businessType}
      /> */}
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
        onChange={(text) => {
          setValue(text.value);
          formik.setFieldValue("businessType", value);
          // console.log("a ver ", value);
          // console.log("a ver formik ", formik.values.businessType);
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
          <RestaurantTypeDropdown formik={formik} />

          {/* <Dropdown
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
          /> */}

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
            title="Eco friendly Shop"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
          <CheckBox
            title="Vegan Shop"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
        </>
      ) : null}
    </View>
  );
}
