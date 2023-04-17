import * as yup from "yup"

const validations = yup.object().shape({
    email : yup
        .string()
        .email("Geçerli bir adres giriniz...")
        .required("Zorunlu alan."),
    password: yup.string().min(5, "Your password must be min 5 character"),
    passwordConfirm: yup.string().oneOf([yup.ref("password")], "Your password should match." ).required(),
})

export default validations;