import * as Yup from "yup";
export function initialValues() {
  return {
    password: "",
    newPassword: "",
    confirmNewPassword: "",
  };
}
export function validationSchema() {
  return Yup.object({
    password: Yup.string().required("Password is required"),
    newPassword: Yup.string()
      .required("New password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
        "Password must contain at least one uppercase, one lowercase, one number and one special case character"
      ),
    confirmNewPassword: Yup.string()
      .required("Confirm new password is required")
      .oneOf([Yup.ref("newPassword")], "new passwords must match"),
  });
}
