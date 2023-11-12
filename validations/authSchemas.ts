import * as yup from "yup"

// Signup

export const registerSchema = yup
  .object({
    name: yup.string().required().min(3).max(50),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(15).required(),
    password_confirmation: yup
        .string()
        .required()
        .oneOf([yup.ref("password")], "confirm password not matched"),
  })
  .required()

  export type RegisterType = yup.InferType<typeof registerSchema>;

// Login

  export const LoginSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(15).required(),

  })
  .required()

  export type LoginType = yup.InferType<typeof LoginSchema>;