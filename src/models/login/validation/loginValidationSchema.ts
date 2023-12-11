import * as Yup from "yup";

const loginValidationSchema = Yup.object({
  email: Yup.string().required("Email is a required field").min(1),
  password: Yup.string().required("Password is a required field").min(1),
});

export default loginValidationSchema;
