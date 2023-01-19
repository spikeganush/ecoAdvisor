import React, { useEffect, useState } from 'react';
import { styles } from './RestaurantTypeDropdown.styles';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
export function RestaurantTypeDropdown(props) {
  const { formik } = props;

  const data = [
    { label: 'Restaurant', value: 'restaurant' },
    { label: 'Cofee/Bakery', value: 'cofee/Bakery' },
  ];

  const [value, setValue] = useState(''); // Initialize useState with the type is gonna receive (string put '', array put [], object put {}, number put 0)

  console.log('valor restaurante value ', value);
  console.log('valor restype formikonchange', formik.values.restaurantType);

  // useEffect(() => {
  //   console.count('useEffect');
  //   formik.setFieldValue('RestaurantType', data[0].value);
  // }, []);

  // Have created this function to have better readability for the code
  const handleChange = (e) => {
    // console.log('valor restype ', e);
    setValue(e.value);
    formik.setFieldValue('RestaurantType', e.value); // I don't pass useState value here, because with useState I will have the previous value, useState is async
  };

  return (
    <>
      {/* <Input
        placeholder="Business name"
        onChangeText={(text) => formik.setFieldValue("restaurantType", text)}
        errorMessage={formik.errors.restaurantType}
      /> */}
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Restaurant type"
        searchPlaceholder="Search..."
        value={value}
        onChange={handleChange}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color="black"
            name="Safety"
            size={20}
          />
        )}
      />
    </>
  );
}
