import React from "react";
import { Container, Title, Description } from "./styled";
import PinterIconSvg from "../../SvgComponents/PointerIconSvg";
const YourAccountMessage = () => {
  return (
    <Container>
      <PinterIconSvg />
      <Title>Your Account</Title>
      <Description>
        Changing your profile options lets you control how others see you and
        your profile. These settings include things like your name, personal
        info and school.
      </Description>
    </Container>
  );
};

export default YourAccountMessage;
