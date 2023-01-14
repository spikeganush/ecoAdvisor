import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-elements";
import { styles } from "./EcoFormScreen.styles";
import { EcoForm } from "../../../components/Restaurants/AddRestaurant";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./EcoFormScreen.data";
export function EcoFormScreen(props) {
  const formValue = props.route.params.formValue;
  console.log(formValue);
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.log(formValue);
    },
  });
  return (
    <View>
      <EcoForm formik={formik} />
      <Button
        title="Add bussiness"
        buttonStyle={styles.addRestaurant}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}
