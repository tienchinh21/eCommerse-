import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import { GoEyeClosed } from "react-icons/go";
import style from "./style.module.scss";

const InputCommon = ({ label, type, isRequired = false, ...props }) => {
  const { container, labelInput, boxInput, boxIcon, errMsg } = style;
  const [isShowPassword, setIsShowPassword] = useState(false);
  const isPassword = type === "password";
  const { formik, id } = props;

  const isShowTextPassword =
    type === "password" && isShowPassword ? "text" : type;

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const isError = formik.errors[id] && formik.touched[id];
  const errorMsg = formik.errors[id];

  return (
    <div className={container}>
      <div className={labelInput}>
        {label}
        {isRequired && <span>*</span>}
      </div>
      <div className={boxInput}>
        <input
          type={isShowTextPassword}
          {...props}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values[id]}
        />
        <div>
          {isPassword && (
            <div className={boxIcon} onClick={handleShowPassword}>
              {isShowPassword ? <FiEye /> : <GoEyeClosed />}
            </div>
          )}
          {isError && <div className={errMsg}>{errorMsg}</div>}
        </div>
      </div>
    </div>
  );
};

export default InputCommon;
