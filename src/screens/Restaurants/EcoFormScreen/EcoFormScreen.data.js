import * as Yup from "yup";

export function initialValues() {
  return {
    businessType: "NULL",
    restaurantType: "NULL",
    eco: "false",
  };
}
export function validationSchema() {
  return Yup.object().shape({
    businessType: Yup.string().required("Business type is required"),
    restaurantType: Yup.string().required("Restaurant type is required"),
    eco: Yup.string().required("Eco is required"),
  });
}
