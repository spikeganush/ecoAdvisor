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
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
        "Password must contain at least one uppercase, one lowercase, one number and one special case character"
      ),
  });
}
