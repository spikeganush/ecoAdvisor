import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils";
import { RestaurantsScreen } from "../screens/Restaurants/RestaurantsScreen/RestaurantsScreen";
import { AddRestaurantScreen } from "../screens/Restaurants/AddRestaurantScreen/AddRestaurantScreen";
import { EcoFormScreen } from "../screens/Restaurants/EcoFormScreen/EcoFormScreen";
const Stack = createNativeStackNavigator();

export function RestaurantStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.restaurant.restaurants}
        component={RestaurantsScreen}
        options={{ title: "Restaurants" }}
      />
      <Stack.Screen
        name={screen.restaurant.addRestaurant}
        component={AddRestaurantScreen}
        options={{ title: "New Business" }}
      />
      <Stack.Screen
        name={screen.restaurant.restaurantForm}
        component={EcoFormScreen}
        options={{ title: "Restaurant form" }}
      />
    </Stack.Navigator>
  );
}
