import { View, Text } from "react-native";
import React from "react";
import { styles } from "./Carousel.styles";
import CarouselSnap from "react-native-snap-carousel";
import { Image } from "react-native-elements";
import { Loading } from "../../../components/Shared";

export function Carousel(props) {
  const { arrayImages, width, height } = props;
  console.log("COSITAS", arrayImages, width, height);

  const renderItem = ({ item }) => (
    <Image style={{ height, width }} source={{ uri: item }} />
  );
  if (!arrayImages) return <Loading show text="Loading..." />;

  return (
    <View styles={styles.content}>
      <CarouselSnap
        layout="default"
        data={arrayImages}
        sliderWidth={width}
        itemWidth={width}
        renderItem={renderItem}
      />
    </View>
  );
}
