import { ScrollView } from "react-native";
import React from "react";
import { styles } from "./AddRestaurantScreen.styles";
import {
  InfoForm,
  UploadImagesForm,
} from "../../../components/Restaurants/AddRestaurant";
import { Button } from "react-native-elements";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./AddRestaurantScreen.data";

export function AddRestaurantScreen() {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.log(formValue);
    },
  });
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <InfoForm formik={formik} />
      <UploadImagesForm formik={formik} />
      <Button
        title="Add bussiness"
        buttonStyle={styles.addRestaurant}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </ScrollView>
  );
}
