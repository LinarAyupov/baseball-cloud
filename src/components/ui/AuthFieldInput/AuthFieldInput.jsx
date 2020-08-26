import React from "react";
import { InputWrapper, IconWrapper, Input, ErrorMassage } from "./styled";
const AuthFieldInput = ({ input, meta, placeholder, icon = "user" }) => {
  return (
    <InputWrapper>
      <IconWrapper>
        <i className={`fa fa-${icon}`} aria-hidden="true"></i>
      </IconWrapper>
      <Input {...input} placeholder={placeholder} />
      {input.type === "password" && meta.error && meta.touched && (
        <ErrorMassage>{meta.error}</ErrorMassage>
      )}
    </InputWrapper>
  );
};

export default AuthFieldInput;
