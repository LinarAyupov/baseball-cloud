import React from "react";
import { Wrapper, Title, Description } from "./styled";

const AuthUserType = ({ title, description }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default AuthUserType;
