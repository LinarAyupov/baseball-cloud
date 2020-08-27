import React from "react";
import { FormFooter, FooterLink } from "./styled";

const AuthFormFooter = ({ description, to, linkDescription }) => {
  return (
    <FormFooter>
      {description} <FooterLink to={to}>{linkDescription}</FooterLink>
    </FormFooter>
  );
};

export default AuthFormFooter;
