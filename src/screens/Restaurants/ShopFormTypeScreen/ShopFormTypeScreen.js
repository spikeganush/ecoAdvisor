import { ScrollView } from "react-native";
import React from "react";
import { styles } from "./ShopFormTypeScreen.styles";
import { ShopTypeDropdown } from "../../../components/Restaurants/AddRestaurant";
import { Button } from "react-native-elements";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./ShopFormTypeScreen.data";
import { screen } from "../../../utils";

export function ShopFormTypeScreen(props) {
  const { navigation } = props;
  //   const goToRestaurantScreen = () => {
  //     navigation.navigate(screen.restaurant.restaurant, {
  //       // console: console.log("pasando valores fromik", formik.values),
  //     });
  //   };
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      //   goToRestaurantScreen();
      // console.log("formik handlesubmit", formValue);
    },
  });

  // navigation.navigate(screen.ecoForm, { formValue: formik.values });

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ShopTypeDropdown formik={formik} />

      <Button
        title="Next"
        buttonStyle={styles.addRestaurant}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </ScrollView>
  );
}
