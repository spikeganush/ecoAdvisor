import * as Yup from "yup";
import "yup-phone-lite";

export function initialValues() {
  return {
    RestaurantType: "",
  };
}
export function validationSchema() {
  return Yup.object().shape({
    RestaurantType: Yup.string().required("Restaurant type is required"),
  });
}
