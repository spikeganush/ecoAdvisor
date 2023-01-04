import * as Yup from "yup";
import "yup-phone-lite";

export function initialValues() {
  return {
    name: "",
    address: "",
    phone: "",
    email: "",
    description: "",
  };
}
export function validationSchema() {
  return Yup.object().shape({
    name: Yup.string().required("Restaurant name is required"),
    address: Yup.string().required("Restaurant address is required"),
    phone: Yup.string()
      .phone("AU", true, "Invalid phone")
      .required("Restaurant phone is required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Restaurant email is required"),
    description: Yup.string().required("Restaurant description is required"),
  });
}
