import React from "react";
import { Input, Label, InputWrap, ErrorMassage } from "./styled";

const FormTextInput = ({ input, placeholder, typeEdit = "", meta }) => {
  return (
    <InputWrap typeEdit={typeEdit}>
      <Input
        {...input}
        placeholder={placeholder}
        id="name-input"
        autocomplete="off"
      />
      <Label htmlFor="name-input" id="nameInput">
        {placeholder}
      </Label>
      {meta.error && meta.submitFailed && (
        <ErrorMassage>{meta.error}</ErrorMassage>
      )}
    </InputWrap>
  );
};

export default FormTextInput;
