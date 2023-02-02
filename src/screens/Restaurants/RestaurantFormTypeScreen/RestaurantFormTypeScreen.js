import { ScrollView } from "react-native";
import React from "react";
import { styles } from "./RestaurantFormTypeScreen.styles";
import {
  RestaurantTypeDropdown,
  RestaurantCheckBox,
} from "../../../components/Restaurants/AddRestaurant";
import { Button } from "react-native-elements";
import { useFormik } from "formik";
import {
  initialValues,
  validationSchema,
} from "./RestaurantFormTypeScreen.data";
import { screen } from "../../../utils";
import { v4 as uuidv4 } from "uuid";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../utils";

export function RestaurantFormTypeScreen(props) {
  const { navigation } = props;
  const ownerFormValue = props.route.params.ownerFormValue;

  console.log("restaurantFormTypeScreen", ownerFormValue);

  const goToRestaurantScreen = () => {
    navigation.navigate(screen.restaurant.restaurants, {
      console: console.log("pasando valores fromik", formik.values),
    });
  };
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const newData = { ...formValue, ...ownerFormValue };
        newData.id = uuidv4();
        newData.createdAt = new Date();
        console.log("newData", newData);
        //add newData to firebase firestore collection "restaurants"

        await setDoc(doc(db, "restaurants", newData.id), newData);

        goToRestaurantScreen();
      } catch (error) {
        console.log("Error", error);
      }
      // goToRestaurantScreen();
      // goToEcoForm();
      // console.log("formik handlesubmit", formValue);
    },
  });

  // navigation.navigate(screen.ecoForm, { formValue: formik.values });

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <RestaurantTypeDropdown formik={formik} />
      <RestaurantCheckBox formik={formik} />

      <Button
        title="Next"
        buttonStyle={styles.addRestaurant}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
        disabled={formik.values.RestaurantType === ""}
      />
    </ScrollView>
  );
}
