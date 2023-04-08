import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
export const styles = StyleSheet.create({
  container: {
    // height: height,
    backgroundColor: "#95b53b",
  },

  image: {
    resizeMode: "contain",
    width: "90%",
    height: 150,
    marginTop: 20,
  },
  content: {
    marginHorizontal: 40,
    // backgroundColor: "#95b53b",
  },

  textRegister: {
    color: "#fff",
    marginTop: 15,
    marginHorizontal: 10,
  },
  btnRegister: {
    color: "#f9dc9b",
    fontWeight: "bold",
  },
});
