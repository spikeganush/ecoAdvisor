import { View, ScrollView } from "react-native";
import { Text, Image } from "react-native-elements";
import React, { useState } from "react";
import { styles } from "./LoginScreen.styles";
import { screen } from "../../../utils";
import { useNavigation } from "@react-navigation/native";
import { LoginForm } from "../../../components/Auth";
import { ForgotPassword } from "../../../components/Auth/ForgotPassword/ForgotPassword";
import { Modal } from "../../../components/Shared";

export function LoginScreen() {
  const navigation = useNavigation();
  const goToRegister = () => {
    navigation.navigate(screen.account.register);
  };
  const [showModal, setShowModal] = useState(false);
  const onCloseOpenModal = () => setShowModal((prevState) => !prevState);

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
        <Text style={styles.textRegister}>
          Forgot your password?{" "}
          <Text style={styles.btnRegister} onPress={onCloseOpenModal}>
            Reset password
          </Text>
        </Text>
      </View>
      <Modal show={showModal} close={onCloseOpenModal}>
        {<ForgotPassword show={showModal} close={onCloseOpenModal} />}
      </Modal>
    </ScrollView>
  );
}
