import { View } from "react-native";
import React, { useState, useEffect } from "react";
import { Avatar, Text } from "react-native-elements";
import { getAuth, updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { styles } from "./InfoUser.styles";
import * as ImagePicker from "expo-image-picker";
import {
  doc,
  setDoc,
  query,
  collection,
  where,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db, screen } from "../../../utils";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { async } from "@firebase/util";
export function InfoUser(props) {
  const { setLoading, setLoadingText } = props;
  const { uid, photoURL, displayName, email } = getAuth().currentUser;
  const [avatar, setAvatar] = useState(photoURL);
  const [name, setName] = useState(displayName);
  const navigation = useNavigation();

  const resetRestaurantStackNavigation = () => {
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
                  name: screen.restaurant.restaurants,
                },
              ],
            },
          },
        ],
      })
    );
  };

  //useeffetc everytime the user changes the avatar it will update the avatar in the reviews collection
  // useEffect(() => {
  //   const q = query(
  //     collection(db, "reviews"),
  //     where("idUser", "==", uid)
  //     // orderBy("createdAt", "desc")
  //   );

  //   if (q == !undefined) {
  //     onSnapshot(q, async (snapshot) => {
  //       snapshot.docs.forEach(async (docs) => {
  //         const reviews = snapshot.docs;
  //         const reviewRef = doc(db, "reviews", reviews.id);
  //         await updateDoc(reviewRef, { avatar: avatar });
  //       });

  //       //reload RestaurantScreen reviews to update the avatar in the reviews list of the restaurant screen when the user changes the avatar in the account screen and goes back to the restaurant screen without reloading the restaurant screen manually (this is to avoid the user to reload the restaurant screen manually)

  //       // props.reloadRestaurantScreen();
  //     });
  //   } else {
  //     console.log("No hay reviews");
  //   }
  // }, [avatar]);
  // // }
  // // }, []);

  const changeReviewAvatar = () => {
    const q = query(
      collection(db, "reviews"),
      where("idUser", "==", uid)
      // orderBy("createdAt", "desc")
    );
    if (q == !undefined) {
      onSnapshot(q, async (snapshot) => {
        snapshot.docs.forEach(async (docs) => {
          const reviews = snapshot.docs;
          const reviewRef = doc(db, "reviews", reviews.id);
          await updateDoc(reviewRef, { avatar: avatar });
        });
      });
    } else {
      console.log("No hay reviews");
    }
  };

  // console.log("REVIEW", review);

  // setName(data);
  // name.forEach((element) => {
  //   console.log("ELEMENT", element);
  // });
  // });
  //   console.log("NAME", name);
  // };

  //Cogiendo el avatar de la galeria
  const changeAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!result.canceled) uploadImage(result.uri);
  };

  //Subiendo el avatar a firebase
  const uploadImage = async (uri) => {
    setLoadingText("Updating avatar");
    setLoading(true);
    const response = await fetch(uri);
    const blob = await response.blob();

    const storage = getStorage();
    const storageRef = ref(storage, `avatar/${uid}`);
    uploadBytes(storageRef, blob).then((snapshot) => {
      updatePhotoUrl(snapshot.metadata.fullPath);
      //   console.log("Uploaded a blob or file!");
      //   console.log(snapshot.metadata);
    });
  };

  //Actualizando el avatar del usuario en firebase
  const updatePhotoUrl = async (imagePath) => {
    const storage = getStorage();
    const imageRef = ref(storage, imagePath);
    const imageUrl = await getDownloadURL(imageRef);
    // console.log(imageUrl);
    const auth = getAuth();
    updateProfile(auth.currentUser, { photoURL: imageUrl });
    // console.log(auth.currentUser);
    setAvatar(imageUrl);
    resetRestaurantStackNavigation();
    setLoading(false);
  };

  return (
    <View style={styles.content}>
      <Avatar
        size="large"
        rounded
        icon={{ type: "material", name: "person" }}
        containerStyle={styles.avatar}
        source={{ uri: avatar }}
      >
        <Avatar.Accessory size={24} onPress={changeAvatar} />
      </Avatar>
      <View style={styles.displayName}>
        <Text>{displayName || "Anonimo"}</Text>
        <Text>{email}</Text>
      </View>
    </View>
  );
}
