import { View, Text } from "react-native";
import React, { useState } from "react";
import { styles } from "./LoginForm.styles";
import { Input, Icon, Button } from "react-native-elements";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./LoginForm.data";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";

export function LoginForm() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const showHiddenPassword = () => setShowPassword((prevState) => !prevState);
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const auth = getAuth();
        await signInWithEmailAndPassword(
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
  return (
    <View style={styles.content}>
      <Input
        containerStyle={styles.input}
        placeholder="Email"
        placeholderTextColor={"#fff"}
        inputContainerStyle={styles.inputContainer}
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
      />
      <Input
        containerStyle={styles.input}
        placeholder="Password"
        placeholderTextColor={"#fff"}
        inputContainerStyle={styles.inputContainer}
        secureTextEntry={showPassword ? false : true}
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.icon}
            onPress={showHiddenPassword}
          />
        }
      />
      <Button
        title="Login"
        titleStyle={styles.btnTitle}
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}
