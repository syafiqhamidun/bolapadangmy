import { bytestoMb } from "@/lib/utils";
import * as yup from "yup";

export const homeSchema = yup 
    .object({
        title: yup.string().min(5).max(50).required(),
        state: yup.string().min(5).max(50).required(),
        city: yup.string().min(5).max(50).required(),
        contact_number: yup.number().typeError("Numbers..."),
        decription: yup.string().min(5).max(20000).required(),
        image: yup.mixed().test("image", "only JPEG, PNG, WEPB image are allowed", (file:any)=> {
            const isValid = file ?. type === "image/jpeg" || file?.type === "image/png" || file ?.type === "image/webp"
            return isValid
        })
        .test("imageSize", "Image must be less than 30 MB" , (file:any) => {
            const isValid = bytestoMb(file?.size) <= 2;
            return isValid;
        })
    })
    .required()


    export type AddHomeType = yup.InferType<typeof homeSchema>;