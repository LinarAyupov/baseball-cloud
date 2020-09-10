import React from "react";
import { Container, DotsWrap, DotWrap, Dot } from "./styled";
const Preloader = () => {
  return (
    <Container>
      <DotsWrap>
        <DotWrap>
          <Dot delay="-0.32s" />
        </DotWrap>
        <DotWrap>
          <Dot delay="-0.16s" />
        </DotWrap>
        <DotWrap>
          <Dot />
        </DotWrap>
      </DotsWrap>
    </Container>
  );
};

export default Preloader;
