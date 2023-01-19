import { ScrollView } from 'react-native';
import React from 'react';
import { styles } from './RestaurantFormTypeScreen.styles';
import {
  RestaurantTypeDropdown,
  RestaurantCheckBox,
} from '../../../components/Restaurants/AddRestaurant';
import { Button } from 'react-native-elements';
import { useFormik } from 'formik';
import {
  initialValues,
  validationSchema,
} from './RestaurantFormTypeScreen.data';
import { screen } from '../../../utils';

export function RestaurantFormTypeScreen(props) {
  const { navigation } = props;
  const goToRestaurantScreen = () => {
    navigation.navigate(screen.restaurant.restaurants, {
      console: console.log('pasando valores fromik', formik.values),
    });
  };
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      goToRestaurantScreen();
      // goToEcoForm();
      // console.log("formik handlesubmit", formValue);
    },
  });

  // navigation.navigate(screen.ecoForm, { formValue: formik.values });

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <RestaurantTypeDropdown formik={formik} />
      <RestaurantCheckBox formik={formik} />

      <Button
        title="Next"
        buttonStyle={styles.addRestaurant}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </ScrollView>
  );
}
