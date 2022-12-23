import { View, Text } from "react-native";
import React from "react";
import { styles } from "./ForgotPassword.styles";
import { Input, Button } from "react-native-elements";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./ForgotPassword.data";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import Toast from "react-native-toast-message";

export function ForgotPassword(props) {
  console.log(props);
  const { close } = props;
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: (formValue) => {
      try {
        const auth = getAuth();
        const Email = formValue.email;

        sendPasswordResetEmail(auth, Email, null);

        close();
        Toast.show({
          type: "success",
          position: "bottom",
          text1: "Success",
          text2: "Please check your email to reset your password",
        });
      } catch (error) {
        console.log(error);
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Error",
          text2: "Looks like something went wrong",
        });
      }
    },
  });
  return (
    <View style={styles.comtent}>
      <Input
        placeholder="Email"
        containerStyle={styles.input}
        rightIcon={{
          type: "material-community",
          name: "at",
          color: "#c2c2c2",
        }}
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      <Button
        title="Reset password"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}
