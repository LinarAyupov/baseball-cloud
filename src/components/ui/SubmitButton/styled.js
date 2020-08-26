import styled from "styled-components";

export const Button = styled.button`
  padding-top: 15px;
  padding-bottom: 17px;
  width: 100%;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  margin-bottom: 15px;
  color: #ffffff;
  font-weight: 400;
  border: solid 1px transparent;
  box-shadow: 0 0 4px 0 rgba(72, 187, 255, 0);
  background-color: #48bbff;
  outline: none;
  &:hover {
    box-shadow: 0 0 4px 0 rgba(72, 187, 255, 0.8);
    border: solid 1px transparent;
    background-color: #48bbff;
  }
`;
