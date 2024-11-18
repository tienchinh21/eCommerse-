import InputCommon from "@components/InputCommon/InputCommon";
import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import Button from "@components/Button/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { register, login } from "@/apis/authService";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const Login = () => {
  const { container, title, checkBox, losePw } = style;
  const [isRegister, setIsRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      ConfirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid Email").required("email is Required"),
      password: Yup.string()
        .min(6, "Password must be at 6 characters")
        .required("Password is Required"),
      ConfirmPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Password must match"
      ),
    }),
    onSubmit: async (values) => {
      if (isLoading) return;
      const { email: username, password } = values;
      setIsLoading(true);

      if (isRegister) {
        await register({ username, password })
          .then((res) => {
            toast.success(res.data.message);
            setIsLoading(false);
          })
          .catch((err) => {
            toast.error(err.response.data.message);
            setIsLoading(false);
          });
      }

      if (!isRegister) {
        setIsLoading(true);
        await login({ username, password })
          .then((res) => {
            const { id, token, refreshToken } = res.data;
            // Cookies.set("id", id);
            Cookies.set("token", token);
            Cookies.set("refreshToken", refreshToken);
            setIsLoading(false);
          })
          .catch((err) => {
            console.error(err);
            setIsLoading(false);
          });
      }
    },
  });

  const handleRegister = () => {
    setIsRegister(!isRegister);
    formik.resetForm();
  };

  return (
    <div className={container}>
      <div className={title}>{isRegister ? "Register" : "Login"}</div>
      <form onSubmit={formik.handleSubmit}>
        <InputCommon
          id="email"
          label="Username or email"
          type="text"
          isRequired
          formik={formik}
        />
        <InputCommon
          id="password"
          label="Password"
          type="password"
          isRequired
          formik={formik}
        />
        {isRegister && (
          <InputCommon
            id="ConfirmPassword"
            label="ConfirmPassword"
            type="password"
            isRequired
            formik={formik}
          />
        )}
        {!isRegister && (
          <div className={checkBox}>
            <input type="checkbox" />
            <span>Remember Me</span>
          </div>
        )}
        <Button
          isW100={true}
          type="submit"
          content={isLoading ? "Loading..." : isRegister ? "Register" : "Login"}
        />
      </form>
      <Button
        onClick={handleRegister}
        isPrimary={false}
        style={{ marginTop: "10px" }}
        isW100={true}
        type="button"
        content={
          isRegister ? "Ready to have an account" : "Don't have an account"
        }
      />
      <div className={losePw}>Lose Your Password?</div>
    </div>
  );
};

export default Login;
