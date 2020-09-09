import styled from "styled-components";

export const InputWrap = styled.div`
  position: relative;
  display: flex;
`;
export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  transform: rotate(0);
  transition: transform 0.5s;
`;

export const Input = styled.input`
  display: block;
  width: ${({ width }) => (width ? width : "66px")};
  padding: 5px 24px 5px 5px;
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  color: #788b99;
  border: none;
  outline: none;
  border-bottom: 1px solid #48bbff;
  transition: width 0.5s;
  &::placeholder {
    color: #48bbff;
  }
  &:focus {
    width: 100%;
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
