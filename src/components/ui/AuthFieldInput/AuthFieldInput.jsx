import React from "react";
import { InputWrapper, IconWrapper, Input, ErrorMassage } from "./styled";
const AuthFieldInput = ({
  input,
  meta,
  placeholder,
  autoComplete = "off",
  icon = "user",
  isShowError = false,
  unauthorized = false,
}) => {
  return (
    <InputWrapper>
      <IconWrapper>
        <i className={`fa fa-${icon}`} aria-hidden="true"></i>
      </IconWrapper>
      <Input {...input} placeholder={placeholder} autoComplete={autoComplete} />
      {isShowError && meta.error && meta.submitFailed && (
        <ErrorMassage>{meta.error}</ErrorMassage>
      )}
      {unauthorized && input.type === "email" && (
        <ErrorMassage>
          Invalid login credentials. Please try again.
        </ErrorMassage>
      )}
      {unauthorized && input.type === "email" && (
        <ErrorMassage>Email has already been taken.</ErrorMassage>
      )}
    </InputWrapper>
  );
};

export default AuthFieldInput;
