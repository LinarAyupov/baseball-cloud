import React from "react";
import { TextAreaWrap, TextArea, Label } from "./styled";

const FormTextArea = ({ input, placeholder }) => {
  return (
    <TextAreaWrap>
      <TextArea {...input} placeholder={placeholder} />
      <Label id="inputLabel">{placeholder}</Label>
    </TextAreaWrap>
  );
};

export default FormTextArea;
