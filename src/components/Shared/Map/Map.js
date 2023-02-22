import { View, Text } from "react-native";
import React from "react";
import { styles } from "./Map.styles";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import openMap from "react-native-open-maps";

export function Map(props) {
  const { location, name } = props;
  const openAppMap = () => {
    openMap({
      latitude: location.latitude,
      longitude: location.longitude,
      zoom: 19,
    });
  };
  return (
    <MapView
      style={styles.map}
      initialRegion={location}
      //   showsUserLocation={false}
      //   showsMyLocationButton={false}
      //   showsCompass={false}
      //   zoomEnabled={false}
      //   scrollEnabled={false}
      onPress={openAppMap}
    >
      <Marker coordinate={location} title={name} />
    </MapView>
  );
}
