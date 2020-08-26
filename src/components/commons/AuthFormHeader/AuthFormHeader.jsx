import React from "react";
import { FormHeader, FormTitle, FormSubtitle } from "./styled";

const AuthFormHeader = ({ title, subtitle }) => {
  return (
    <FormHeader>
      <FormTitle>{title}</FormTitle>
      <FormSubtitle>{subtitle}</FormSubtitle>
    </FormHeader>
  );
};

export default AuthFormHeader;
