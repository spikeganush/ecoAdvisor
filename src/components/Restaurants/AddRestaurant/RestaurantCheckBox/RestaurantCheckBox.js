import { View } from 'react-native';
import { Text, CheckBox, Icon } from 'react-native-elements';
import React, { useState } from 'react';
import { styles } from './RestaurantCheckBox.styles';
import Data from './RestaurantCheckboxesData.json';

export function RestaurantCheckBox(props) {
  const { formik } = props;

  const handleCheckboxes = (type, value) => {
    formik.setFieldValue(`${type}.${value}`, !formik.values[type][value]);
  };

  console.log('Formik values', formik.values);

  const [showCoffee, setShowCoffee] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showWaste, setShowWaste] = useState(false);
  const [showSupplier, setShowSupplier] = useState(false);
  const [showCommunity, setShowCommunity] = useState(false);

  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <Text
          style={styles.text}
          onPress={() => {
            setShowCoffee(!showCoffee);
          }}
        >
          Coffee
        </Text>
        <Icon
          name="arrow-down-drop-circle-outline"
          type="material-community"
          color="#00a680"
          onPress={() => {
            showCoffee ? setShowCoffee(false) : setShowCoffee(true);
          }}
        />
      </View>

      {showCoffee ? (
        <>
          {Data.coffee.map((item) => {
            return (
              <CheckBox
                title={item.title}
                checked={formik.values.coffee[item.value]}
                onPress={() => handleCheckboxes('coffee', item.value)}
                key={`coffee-${item.id}`}
              />
            );
          })}
        </>
      ) : null}
      <View style={styles.container}>
        <Text
          style={styles.text}
          onPress={() => {
            setShowMenu(!showMenu);
          }}
        >
          Menu
        </Text>
        <Icon
          name="arrow-down-drop-circle-outline"
          type="material-community"
          color="#00a680"
          onPress={() => {
            setShowMenu(!showMenu);
          }}
        />
      </View>
      {showMenu ? (
        <>
          {Data.menu.map((item) => {
            return (
              <CheckBox
                title={item.title}
                checked={formik.values.menu[item.value]}
                onPress={() => handleCheckboxes('menu', item.value)}
                key={`menu-${item.id}`}
              />
            );
          })}
        </>
      ) : null}
      <View style={styles.container}>
        <Text
          style={styles.text}
          onPress={() => {
            showWaste ? setShowWaste(false) : setShowWaste(true);
          }}
        >
          Waste
        </Text>
        <Icon
          name="arrow-down-drop-circle-outline"
          type="material-community"
          color="#00a680"
          onPress={() => {
            showWaste ? setShowWaste(false) : setShowWaste(true);
          }}
        />
      </View>
      {showWaste ? (
        <>
          {Data.waste.map((item) => {
            return (
              <CheckBox
                title={item.title}
                checked={formik.values.waste[item.value]}
                onPress={() => handleCheckboxes('waste', item.value)}
                key={`waste-${item.id}`}
              />
            );
          })}
        </>
      ) : null}
      <View style={styles.container}>
        <Text
          style={styles.text}
          onPress={() => {
            showSupplier ? setShowSupplier(false) : setShowSupplier(true);
          }}
        >
          Supplier and energy
        </Text>
        <Icon
          name="arrow-down-drop-circle-outline"
          type="material-community"
          color="#00a680"
          onPress={() => {
            showSupplier ? setShowSupplier(false) : setShowSupplier(true);
          }}
        />
      </View>
      {showSupplier ? (
        <>
          {Data.supplier.map((item) => {
            return (
              <CheckBox
                title={item.title}
                checked={formik.values.supplier[item.value]}
                onPress={() => handleCheckboxes('supplier', item.value)}
                key={`supplier-${item.id}`}
              />
            );
          })}
        </>
      ) : null}
      <View style={styles.container}>
        <Text
          style={styles.text}
          onPress={() => {
            showCommunity ? setShowCommunity(false) : setShowCommunity(true);
          }}
        >
          Community
        </Text>
        <Icon
          name="arrow-down-drop-circle-outline"
          type="material-community"
          color="#00a680"
          onPress={() => {
            showCommunity ? setShowCommunity(false) : setShowCommunity(true);
          }}
        />
      </View>
      {showCommunity ? (
        <>
          {Data.community.map((item) => {
            return (
              <CheckBox
                title={item.title}
                checked={formik.values.community[item.value]}
                onPress={() => handleCheckboxes('community', item.value)}
                key={`community-${item.id}`}
              />
            );
          })}
        </>
      ) : null}
    </View>
  );
}
