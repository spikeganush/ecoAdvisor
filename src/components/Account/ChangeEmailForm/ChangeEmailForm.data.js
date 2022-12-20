import * as Yup from "yup";
export function initialValues() {
  return {
    email: "",
    password: "",
  };
}
export function validationSchema() {
  return Yup.object({
    email: Yup.string()
      .email("Wrong email")
      .required("Please a right email is required"),
    password: Yup.string().required("Password is required"),
  });
}
