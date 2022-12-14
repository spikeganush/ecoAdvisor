import { ScrollView } from "react-native";
import { Text, Button, Image } from "react-native-elements";
import React from "react";
import { styles } from "./UserGuestScreen.styles";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";

export function UserGuestScreen() {
  const navigation = useNavigation();
  const goToLogin = () => {
    navigation.navigate(screen.account.login);
  };
  return (
    <ScrollView centerContent={true} style={styles.content}>
      <Image
        source={require("../../../../assets/img/user-guest.png")}
        style={styles.image}
      />
      <Text style={styles.text}>Check your Ecoadvisor profile </Text>
      <Text style={styles.description}>Check your Ecoadvisor profile </Text>
      <Button
        title="View your profile"
        onPress={goToLogin}
        buttonStyle={styles.button}
      />
    </ScrollView>
  );
}
