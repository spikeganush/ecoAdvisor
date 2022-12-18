import { View, ScrollView } from "react-native";
import { Text, Image } from "react-native-elements";
import React from "react";
import { styles } from "./LoginScreen.styles";
import { screen } from "../../../utils";
import { useNavigation } from "@react-navigation/native";
import { LoginForm } from "../../../components/Auth";
export function LoginScreen() {
  const navigation = useNavigation();
  const goToRegister = () => {
    navigation.navigate(screen.account.register);
  };
  return (
    <ScrollView>
      <Image
        source={require("../../../../assets/img/logo.webp")}
        style={styles.image}
      />
      <View style={styles.content}>
        <LoginForm />
        <Text style={styles.textRegister}>
          Still dont have an account?{" "}
          <Text style={styles.btnRegister} onPress={goToRegister}>
            Register
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}
