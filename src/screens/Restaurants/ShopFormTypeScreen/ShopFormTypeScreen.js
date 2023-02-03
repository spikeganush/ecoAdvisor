import { ScrollView } from "react-native";
import React from "react";
import { styles } from "./ShopFormTypeScreen.styles";
import {
  ShopTypeDropdown,
  ShopCheckBox,
} from "../../../components/Restaurants/AddRestaurant";
import { Button, Text } from "react-native-elements";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./ShopFormTypeScreen.data";
import { screen } from "../../../utils";
export function ShopFormTypeScreen(props) {
  const { navigation } = props;
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
        //add newData to firebase firestore collection "shops"

        await setDoc(doc(db, "shops", newData.id), newData);

        goToRestaurantScreen();
      } catch (error) {
        console.log("Error", error);
      }
    },
  });

  // navigation.navigate(screen.ecoForm, { formValue: formik.values });

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ShopTypeDropdown formik={formik} />
      <ShopCheckBox formik={formik} />

      <Button
        title="Next"
        buttonStyle={styles.addRestaurant}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
        disabled={formik.values.ShopType === ""}
      />
    </ScrollView>
  );
}
