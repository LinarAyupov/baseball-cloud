import styled from "styled-components";

export const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
  align-item: center;
`;

export const ShortInputsWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonsWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const Button = styled.button`
  display: block;
  box-shadow: 0 2px 25px 0 rgba(0, 0, 0, 0);
  width: 100%;
  outline: none;
  padding: 7px 19px 10px 18px;
  border-radius: 4px;
  box-shadow: none;
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  &:hover {
    border: solid 1px #48caff;
    box-shadow: 0 0 2px 0 #48caff;
  }
  &[disabled] {
    background-color: #75a4bf;
  }
`;

export const CancelBtn = styled(Button)`
  border: solid 1px #d1d7db;
  margin-right: 12px;
  background-color: #fff;
  &:hover {
    color: #48caff;
  }
`;

export const SaveBtn = styled(Button)`
  background-color: #48caff;
  color: #fff;
  border: solid 1px #48caff;
  &:hover {
    box-shadow: 0 0 2px 0 #48caff;
  }
`;
