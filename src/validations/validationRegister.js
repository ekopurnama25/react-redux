import * as Yup from "yup";

const registrasiSchame = Yup.object().shape({
    username: Yup.string()
        .required("Username is required")
        .min(8, "Username must be 8 characters at minimum"),
    email: Yup.string()
        .email("Invalid email address format")
        .required("Email is required"),
    password: Yup.string()
        .required("Username is required")
        .min(8, "Username must be 8 characters at minimum"),
});

export default registrasiSchame;