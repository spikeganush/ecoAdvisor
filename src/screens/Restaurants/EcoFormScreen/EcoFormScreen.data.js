import * as Yup from "yup";
import "yup-phone-lite";

export function initialValues() {
  return {
    businessType: "",
    restauranType: "",
    eco: "false",
  };
}
export function validationSchema() {
  return Yup.object().shape({
    businessType: Yup.string().required("Business type is required"),
    restauranType: Yup.string().required("Restaurant type is required"),
    eco: Yup.string().required("Eco is required"),
  });
}
