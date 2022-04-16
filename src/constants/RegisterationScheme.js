import * as yup from "yup";

export const RegisterationScheme = yup.object().shape({
  email: yup
    .string()
    .required("This field cannot be empty.")
    .email("Please enter a valid e-mail address."),
  username: yup.string().required("This field cannot be empty."),
  password: yup
    .string()
    .required("This field cannot be empty.")
    .min(8, "Password should be min 8 characters."),
  confirmPassword: yup
    .string()
    .required("Password confirmation is required.")
    .oneOf([yup.ref("password"), null], "Password must match."),
  privacyPolicy: yup.boolean().oneOf([true], "Required."),
});
