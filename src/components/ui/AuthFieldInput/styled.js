import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 13px;
  left: 17px;
  color: #667784;
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 15px;
  display: block;
  height: 50px;
  border-radius: 4px;
  background-color: #eff1f3;
  padding: 6px 12px 10px 37px;
  font-size: 16px;
  line-height: 1.13;
  font-weight: 400;
  color: #667784;
  border: 1px solid transparent;

  &::placeholder {
    transition: color 0.3s ease;
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

export const ErrorMassage = styled.span`
  color: #f05f62;
`;
