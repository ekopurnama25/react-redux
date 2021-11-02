import * as Yup from "yup";

const loginSchame = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address format")
        .required("Email is required"),
    password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be 8 characters at minimum"),
});

export default loginSchame;