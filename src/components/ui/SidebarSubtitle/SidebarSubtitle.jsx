import React from "react";
import { SubtitleWrap, Subtitle } from "./styled";

const SidebarSubtitle = ({ children }) => {
  return (
    <SubtitleWrap>
      <Subtitle>{children}</Subtitle>
    </SubtitleWrap>
  );
};

export default SidebarSubtitle;
