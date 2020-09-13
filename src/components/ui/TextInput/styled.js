import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  width: ${({ typeEdit }) => (typeEdit === "short" ? "48%" : "100%")};
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 13px;
  left: 17px;
  color: #667784;
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
  display: block;
  border-radius: 4px;
  background-color: #eff1f3;
  font-size: 16px;
  line-height: 1.13;
  font-weight: 400;
  outline: none;
  width: 100%;

  ${({ formType }) => {
    if (formType === "editProfile") {
      return `
  height: 40px;
  padding: 0 17px;
  margin-bottom: 10px;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  touch-action: manipulation;
  color: #667784;
  border: 1px solid transparent;
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
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;
    } else {
      return `
  margin-bottom: 15px;
  height: 50px;
  padding: 6px 12px 10px 37px;

  color: #667784;
  border: 1px solid transparent;

  &::placeholder {
    transition: color 0.3s ease;
  }

  &:focus::placeholder {
    color: transparent;
  }`;
    }
  }}
`;

export const ErrorMassage = styled.span`
  color: #f05f62;
`;
