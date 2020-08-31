import styled from "styled-components";

export const SubtitleWrap = styled.div`
  display: flex;
  position: relative;
  margin: 10px 0 15px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background-color: #e7ebef;
    z-index: 0;
  }
`;

export const Subtitle = styled.div`
  text-align: left;
  display: inline-block;
  position: relative;
  z-index: 1;
  background-color: #ffffff;
  padding-right: 12px;
  font-size: 18px;
  font-weight: 900;
  color: #414f5a;
`;
