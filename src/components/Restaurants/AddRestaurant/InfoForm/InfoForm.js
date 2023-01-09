import { View } from "react-native";
import React, { useState } from "react";
import { styles } from "./InfoForm.styles";
import { Input } from "react-native-elements";
import { MapForm } from "../MapForm";

export function InfoForm(props) {
  const { formik } = props;
  const [showMap, setShowMap] = useState(false);
  const onOpenCloseMap = () => {
    setShowMap((prevState) => !prevState);
  };
  const getColorIconMap = (formik) => {
    if (formik.errors.location) return "#ff0000";

    if (formik.values.location) return "#00a680";

    return "#c2c2c2";
  };
  return (
    <>
      <View style={styles.content}>
        <Input
          placeholder="Business name"
          onChangeText={(text) => formik.setFieldValue("name", text)}
          errorMessage={formik.errors.name}
        />
        <Input
          placeholder="Restaurant address"
          onChangeText={(text) => formik.setFieldValue("address", text)}
          errorMessage={formik.errors.address}
          rightIcon={{
            type: "material-community",
            name: "map-marker-radius",
            color: getColorIconMap(formik),
            onPress: onOpenCloseMap,
          }}
        />
        <Input
          placeholder="Business phone, (optional)"
          onChangeText={(text) => formik.setFieldValue("phone", text)}
          errorMessage={formik.errors.phone}
        />
        <Input
          placeholder="Business email (optional)"
          onChangeText={(text) => formik.setFieldValue("email", text)}
          errorMessage={formik.errors.email}
        />
        <Input
          placeholder="Business description"
          multiline={true}
          inputContainerStyle={styles.textArea}
          onChangeText={(text) => formik.setFieldValue("description", text)}
          errorMessage={formik.errors.description}
        />
      </View>
      <MapForm show={showMap} close={onOpenCloseMap} formik={formik} />
    </>
  );
}
