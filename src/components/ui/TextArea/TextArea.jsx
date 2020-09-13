import React from "react";
import { TextAreaWrap, TextAreaInput, Label } from "./styled";

const TextArea = ({ input, placeholder }) => {
  return (
    <TextAreaWrap>
      <TextAreaInput {...input} placeholder={placeholder} />
      <Label id="inputLabel">{placeholder}</Label>
    </TextAreaWrap>
  );
};

export default TextArea;
