import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  storeCard: {
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    marginVertical: MARGIN,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    position: "relative",
    borderRadius: 10,
  },
  image: {
    width: 190,
    height: 120,
    borderRadius: 10,
  },
  name: {
    fontSize: 20,
    color: "black",
    textAlign: "center",
  },
});
