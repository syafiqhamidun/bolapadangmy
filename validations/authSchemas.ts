import * as yup from "yup"

export const registerSchema = yup
  .object({
    name: yup.string().required().min(3).max(50),
    email: yup.string().email(),
    password: yup.string().min(6).max(15),
    password_confirmation: yup
        .string()
        .required()
        .oneOf([yup.ref("password")], "onfirm password not matched"),
  })
  .required()

  export type RegisterType = yup.InferType<typeof registerSchema>;