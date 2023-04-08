import { View, Text } from "react-native";
import React from "react";
import { styles } from "./RegisterScreen.styles";
import { Image } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RegisterForm } from "../../../components/Auth";

export function RegisterScreen() {
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <Image
        source={require("../../../../assets/img/matti-ecoadvisor26.png")}
        style={styles.image}
      />
      <View style={styles.content}>
        <RegisterForm />
      </View>
    </KeyboardAwareScrollView>
  );
}
