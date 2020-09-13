import React from "react";
import {
  InputWrapper,
  IconWrapper,
  Label,
  Input,
  ErrorMassage,
} from "./styled";
const TextInput = ({
  input,
  meta,
  placeholder,
  autoComplete = "off",
  icon = "user",
  isShowError = false,
  unauthorized = false,
  typeEdit = "",
  formType,
}) => {
  return (
    <>
      {formType === "auth" ? (
        <InputWrapper>
          <IconWrapper>
            <i className={`fa fa-${icon}`} aria-hidden="true"></i>
          </IconWrapper>
          <Input
            {...input}
            placeholder={placeholder}
            autoComplete={autoComplete}
          />
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
      ) : (
        <InputWrapper typeEdit={typeEdit}>
          <Input
            {...input}
            placeholder={placeholder}
            id="name-input"
            autocomplete="off"
            formType={formType}
          />
          <Label htmlFor="name-input" id="nameInput">
            {placeholder}
          </Label>
          {meta.error && meta.submitFailed && (
            <ErrorMassage>{meta.error}</ErrorMassage>
          )}
        </InputWrapper>
      )}
    </>
  );
};

export default TextInput;
