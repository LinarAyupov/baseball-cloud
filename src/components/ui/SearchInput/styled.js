import styled from "styled-components";

export const InputWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin-left: 15px;
`;
export const IconWrap = styled.div`
  display: flex;
  padding: 14px 0;
  margin-left: -13px;
  cursor: pointer;
  transform: rotate(0);
  transition: transform 0.5s;
`;

export const Input = styled.input`
  display: block;
  width: ${({ width }) => (width ? width : "66px")};
  padding: 5px 5px 7px 0;
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  color: #788b99;
  border: none;
  outline: none;
  border-bottom: ${({ border }) => (border ? "1px solid #48bbff" : "none")};
  transition: width 0.5s;
  &::placeholder {
    color: #48bbff;
  }
  &:focus {
    width: 166px;
    &::placeholder {
      color: #788b99;
    }
    & ~ #icon {
      transform: ${({ iconType, rotatable }) => {
        if (iconType === "arrow" && rotatable) {
          return "rotate(180deg)";
        } else {
          return "rotate(0)";
        }
      }};
    }
  }
`;
export const DropDownItem = styled.div`
  width: 100%;
  padding: 8px 16px;
  color: #788b99;
  text-align: left;
  line-height: 1;
  &:hover {
    background-color: #ecf8ff;
  }
`;
