import { useEffect } from "react";
import { screen } from "../utils";
import { CommonActions, useNavigation } from "@react-navigation/native";

export const useResetStackNavigation = (stack) => {
  const navigation = useNavigation();
  useEffect(() => {
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
                  name: stack,
                },
              ],
            },
          },
        ],
      })
    );
  }, []);
};
