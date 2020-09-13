import styled from "styled-components";

export const TableFilter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  @media (max-width: 40em) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TableTitle = styled.div`
  line-height: 1.25;
  font-size: 18px;
  font-weight: 400;
`;

export const InputWrap = styled.div`
  position: relative;
  max-width: 130px;
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
  &::placeholder {
    color: #b6c1c8;
  }
`;

export const UsersContainer = styled.div`
  padding: 16px;
`;
