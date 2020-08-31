import styled from "styled-components";
export const InputWrap = styled.div`
  position: relative;
  width: ${({ typeEdit }) => (typeEdit === "short" ? "48%" : "100%")};
`;
export const Label = styled.label`
  position: absolute;
  top: 0;
  visibility: hidden;
  font-size: 14px;
  line-height: 1;
  font-weight: 400;
  color: #788b99;
  cursor: text;
  max-width: 70%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transform-origin: left bottom;
  transform: translate(17px, 15px) scale(1.15);
  transition: all 0.2s;
  touch-action: manipulation;
  border: 1px solid transparent;
`;

export const Input = styled.input`
  height: 40px;
  padding: 0 17px;
  margin-bottom: 10px;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  touch-action: manipulation;
  display: block;
  width: 100%;
  border-radius: 4px;
  background-color: #eff1f3;
  font-size: 16px;
  line-height: 1.13;
  font-weight: 400;
  color: #667784;
  border: none;
  outline: none;
  &:focus ~ #nameInput {
    visibility: visible;
    transform: translate(0, 0) scale(0.85);
    font-size: 5px;
    cursor: pointer;
    padding-left: 10px;
    &:hover {
      color: #48caff;
      text-decoration: underline;
    }
  }
  &:focus {
    background-color: #fff;
    border: 1px solid #48caff;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;
