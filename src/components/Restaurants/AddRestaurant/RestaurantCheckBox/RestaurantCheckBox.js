import { View } from "react-native";
import { Text, CheckBox, Input, Icon } from "react-native-elements";
import React, { useState } from "react";
import { styles } from "./RestaurantCheckBox.styles";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
export function RestaurantCheckBox(props) {
  const { formik } = props;
  const [isEnabled, setIsEnabled] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);
  const [check7, setCheck7] = useState(false);
  const [check8, setCheck8] = useState(false);
  const [check9, setCheck9] = useState(false);
  const [check10, setCheck10] = useState(false);
  const [check11, setCheck11] = useState(false);
  const [check12, setCheck12] = useState(false);
  const [check13, setCheck13] = useState(false);
  const [check14, setCheck14] = useState(false);
  const [check15, setCheck15] = useState(false);
  const [check16, setCheck16] = useState(false);
  const [check17, setCheck17] = useState(false);
  const [check18, setCheck18] = useState(false);
  const [check19, setCheck19] = useState(false);
  const [check20, setCheck20] = useState(false);
  console.log("valor check1 value ", check1);
  console.log("valor check1 formikonchange", formik.values.restaurantType);
  console.log(
    "valor DiscountForUsingOwncup",
    formik.values.DiscountForUsingOwncup
  );
  console.log(
    "valor check1 ExtracargheForSingleUseCup",
    formik.values.ExtracargheForSingleUseCup
  );

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  const checkBox1 = () => {
    setCheck1((previousState) => !previousState);
    formik.setFieldValue("DiscountForUsingOwncup", !check1);
  };
  const checkBox2 = () => {
    setCheck2((previousState) => !previousState);
    formik.setFieldValue("ExtracargheForSingleUseCup", !check2);
  };
  const checkBox3 = () => {
    setCheck3((previousState) => !previousState);
    formik.setFieldValue("MugCupLibrary", !check3);
  };
  const checkBox4 = () => {
    setCheck4((previousState) => !previousState);
    formik.setFieldValue("BiodegradableCups", !check4);
  };
  const checkBox5 = () => {
    setCheck5((previousState) => !previousState);
    formik.setFieldValue("BiodegradableLids", !check5);
  };
  const checkBox6 = () => {
    setCheck6((previousState) => !previousState);
    formik.setFieldValue("optionNotgetiingTheLids", !check6);
  };
  const checkBox7 = () => {
    setCheck7((previousState) => !previousState);
    formik.setFieldValue("plantBasedMilkOption", !check7);
  };

  const [showCoffee, setShowCoffee] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showWaste, setShowWaste] = useState(false);
  const [showSuplier, setShowSuplier] = useState(false);
  const [showComunity, setShowComunity] = useState(false);

  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <Text
          style={styles.text}
          onPress={() => {
            showCoffee ? setShowCoffee(false) : setShowCoffee(true);
          }}
        >
          Coffee
        </Text>
        <Icon
          name="arrow-down-drop-circle-outline"
          type="material-community"
          color="#00a680"
          onPress={() => {
            showCoffee ? setShowCoffee(false) : setShowCoffee(true);
          }}
        />
      </View>

      {showCoffee ? (
        <>
          <CheckBox
            title="Discount for using own cup ?"
            checked={check1}
            onPress={() => checkBox1()}
          />
          <CheckBox
            title="Extracarghe for single use cup?"
            checked={check2}
            onPress={() => checkBox2()}
          />
          <CheckBox
            title="Mug/cup library"
            checked={check3}
            onPress={() => checkBox3()}
          />
          <CheckBox
            title="Biodegradable Cups?"
            checked={check4}
            onPress={() => checkBox4()}
          />
          <CheckBox
            title="Biodegradable Lids?"
            checked={check5}
            onPress={() => checkBox5()}
          />
          <CheckBox
            title="option not getting the lids"
            checked={check6}
            onPress={() => checkBox6()}
          />
          <CheckBox
            title="plant based milk option"
            checked={check7}
            onPress={() => checkBox7()}
          />
        </>
      ) : null}
      <View style={styles.container}>
        <Text
          style={styles.text}
          onPress={() => {
            showMenu ? setShowMenu(false) : setShowMenu(true);
          }}
        >
          Menu
        </Text>
        <Icon
          name="arrow-down-drop-circle-outline"
          type="material-community"
          color="#00a680"
          onPress={() => {
            showMenu ? setShowMenu(false) : setShowMenu(true);
          }}
        />
      </View>
      {showMenu ? (
        <>
          <CheckBox
            title="Vegetarian option"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
          <CheckBox
            title="Vegan option"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
          <CheckBox
            title="Organic food option"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
          <CheckBox
            title="Use of free range meat?"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
          <CheckBox
            title="Use of free range eggs"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
          <CheckBox
            title="Local  Food"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
          <CheckBox
            title="Seasonal Food"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
          <CheckBox
            title="plant based milk option"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
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
          <CheckBox
            title="Plasti cups free"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
          <CheckBox
            title="Plastic bag free"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
          <CheckBox
            title="Plastic straw free"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
          <CheckBox
            title="Plastic cutlery free"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
          <CheckBox
            title="Plastic container free"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
          <CheckBox
            title="Selling reusable bags"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
          <CheckBox
            title="Selling reusable cups"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
          <CheckBox
            title="Welcome reusable container "
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
          <CheckBox
            title="Discount on reusable container"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
          <CheckBox
            title="Free water refill"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
          <CheckBox
            title="Dedicates  recycling Bins"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
        </>
      ) : null}
      <View style={styles.container}>
        <Text
          style={styles.text}
          onPress={() => {
            showSuplier ? setShowSuplier(false) : setShowSuplier(true);
          }}
        >
          Suplier and energy
        </Text>
        <Icon
          name="arrow-down-drop-circle-outline"
          type="material-community"
          color="#00a680"
          onPress={() => {
            showSuplier ? setShowSuplier(false) : setShowSuplier(true);
          }}
        />
      </View>
      {showSuplier ? (
        <>
          <CheckBox
            title="Non toxic cleaning product"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
          <CheckBox
            title="Managing water waste"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
          <CheckBox
            title="Plastic straw free"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
          <CheckBox
            title="Managing electricity waste"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
          <CheckBox
            title="Reusable energy"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
        </>
      ) : null}
      <View style={styles.container}>
        <Text
          style={styles.text}
          onPress={() => {
            showComunity ? setShowComunity(false) : setShowComunity(true);
          }}
        >
          Comunity
        </Text>
        <Icon
          name="arrow-down-drop-circle-outline"
          type="material-community"
          color="#00a680"
          onPress={() => {
            showComunity ? setShowComunity(false) : setShowComunity(true);
          }}
        />
      </View>
      {showComunity ? (
        <>
          <CheckBox
            title="talky table"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
          <CheckBox
            title="pet friendly"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
          <CheckBox
            title="Free wifi"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
          <CheckBox
            title="organizing coumity events"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
          <CheckBox
            title="friendly staff"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
          <CheckBox
            title="Book library "
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
          <CheckBox
            title="outdoor sitting"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
          <CheckBox
            title="outdoor sitting"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
          <CheckBox
            title="non smoking place"
            checked={isEnabled}
            onPress={() => toggleSwitch()}
          />
        </>
      ) : null}
    </View>
  );
}
