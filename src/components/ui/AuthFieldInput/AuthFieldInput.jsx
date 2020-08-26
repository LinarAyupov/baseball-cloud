import React from "react";
import { Input, ErrorMassage } from "./styled";
const AuthFieldInput = ({ input, meta, placeholder }) => {
  return (
    <>
      <Input {...input} placeholder={placeholder} />
      {input.type === "password" && meta.error && meta.touched && (
        <ErrorMassage>{meta.error}</ErrorMassage>
      )}
    </>
  );
};

export default AuthFieldInput;
