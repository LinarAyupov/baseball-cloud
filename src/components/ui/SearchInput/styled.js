import styled from "styled-components";

export const InputWrap = styled.div`
  position: relative;
`;
export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 5px 5px 5px 24px;
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  color: #788b99;
  border: none;
  outline: none;
  border-bottom: 1px solid #48bbff;
`;
