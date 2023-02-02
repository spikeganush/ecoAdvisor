import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-elements";
import { styles } from "./EcoFormScreen.styles";
import { EcoForm } from "../../../components/Restaurants/AddRestaurant";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./EcoFormScreen.data";
export function EcoFormScreen(props) {
  const formValues = props.route.params.formValue;
  // console.log("formValuesinit", initialValues());
  // console.log("formValues de ecoscreen", formik.values);

  // console.log(formValues);

  // console.log(props);
  const goToEcoForm = () => {
    console.log("pasando valores fromik", formik.values);
  };

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      // const formikvalores = formik.values;
      // console.log("form Values de ecoscreen", formikvalores);
      console.log("AVERQ de ecoscreen", formValue);
      // goToEcoForm();
    },
  });
  // console.log("AQUI Values de ecoscreen", formik.values);

  return (
    <View>
      <EcoForm formik={formik} />
      <Button
        title="Add business"
        buttonStyle={styles.addRestaurant}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}
