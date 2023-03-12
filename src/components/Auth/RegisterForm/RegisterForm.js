import { View, Text } from "react-native";
import React, { useState } from "react";
import { Input, Icon, Button } from "react-native-elements";
import { styles } from "./RegisterForm.styles";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./RegisterForm.data";
import { screen } from "../../../utils";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const auth = getAuth();
        await createUserWithEmailAndPassword(
          auth,
          formValue.email,
          formValue.password
        );
        navigation.navigate(screen.account.account);
      } catch (error) {
        console.log(error);
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Error",
          text2: "Something went wrong, please try again later",
        });
      }
    },
  });
  const showHiddenPassword = () => setShowPassword((prevState) => !prevState);
  const showHiddenRepeatPassword = () =>
    setShowRepeatPassword((prevState) => !prevState);

  return (
    <View style={styles.content}>
      <Input
        placeholder="Email"
        placeholderTextColor={"#fff"}
        containerStyle={styles.input}
        inputContainerStyle={styles.inputContainer}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder="Password"
        placeholderTextColor={"#fff"}
        containerStyle={styles.input}
        inputContainerStyle={styles.inputContainer}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.icon}
            onPress={showHiddenPassword}
          />
        }
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />
      <Input
        placeholder="Confirm Password"
        placeholderTextColor={"#fff"}
        containerStyle={styles.input}
        inputContainerStyle={styles.inputContainer}
        secureTextEntry={showRepeatPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showRepeatPassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.icon}
            onPress={showHiddenRepeatPassword}
          />
        }
        onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
        errorMessage={formik.errors.repeatPassword}
      />
      <Button
        title="Register"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}
