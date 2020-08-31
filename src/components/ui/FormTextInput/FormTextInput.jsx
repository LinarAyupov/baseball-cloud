import React from "react";
import { Input, Label, InputWrap } from "./styled";

const FormTextInput = ({ input, placeholder, typeEdit = "" }) => {
  return (
    <InputWrap typeEdit={typeEdit}>
      <Input {...input} placeholder={placeholder} id="name-input" />
      <Label htmlFor="name-input" id="nameInput">
        {placeholder}
      </Label>
    </InputWrap>
  );
};

export default FormTextInput;
