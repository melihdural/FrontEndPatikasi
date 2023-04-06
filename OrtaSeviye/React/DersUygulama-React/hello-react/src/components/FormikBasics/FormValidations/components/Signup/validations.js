import * as yup from "yup";

const validations = yup.object().shape({
    email: yup.string().email("Geçerli bir email girin").required("Zorunlu alan."),
    password: yup.string().min(8, "Parolanız 8-16 karakter olmalıdır.").max(16, "Parolanız 16 karakterden uzun olamaz").required("Zorunlu alan."),
    passwordConfirm: yup.string().oneOf([yup.ref('password')], "Password ile uyuşmuyor.").required("Zorunlu alan.")
});

export default validations