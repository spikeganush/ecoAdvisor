import { View } from "react-native";
import React, { useState } from "react";
import { InfoUser, AccountOptions } from "../../../components/Account";
import { styles } from "./UserLoggedScreen.styles";
import { Button } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";
import { LoadingModal } from "../../../components";
import {
  CommonActions,
  StackActions,
  useNavigation,
} from "@react-navigation/native";
import { screen } from "../../../utils";
import { useResetStackNavigation } from "../../../hooks/useResetStackNavigation";

export function UserLoggedScreen(props) {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("false");
  const [_, setReload] = useState(false);
  const onReload = () => setReload((prevState) => !prevState);
  const navigation = useNavigation();

  const resetRestaurantStackNavigation = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            // name: screen.restaurant.tab,
            name: screen.account.tab,
            state: {
              routes: [
                {
                  name: screen.restaurant.restaurants,
                },
              ],
            },
          },
        ],
      })
    );
  };

  const logout = async () => {
    const auth = getAuth();
    await signOut(auth);
    resetRestaurantStackNavigation();
    // useResetStackNavigation(screen.restaurant.restaurants);
  };
  return (
    <View>
      <InfoUser setLoading={setLoading} setLoadingText={setLoadingText} />
      <AccountOptions onReload={onReload} />
      <Button
        title="Log out"
        buttonStyle={styles.btnStyles}
        titleStyle={styles.btnTextStyle}
        onPress={logout}
      />
      <LoadingModal show={loading} text={loadingText} />
    </View>
  );
}
