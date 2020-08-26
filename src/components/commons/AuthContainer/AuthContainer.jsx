import React from "react";
import { AuthView, FormContainer } from "./styled";

const AuthContainer = ({ children }) => {
  return (
    <AuthView>
      <FormContainer>{children}</FormContainer>
    </AuthView>
  );
};

export default AuthContainer;
