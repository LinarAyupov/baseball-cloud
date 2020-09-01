import styled from "styled-components";
import Select from "react-select";
export const SingleSelect = styled(Select)`
  .Select__control {
    min-height: 40px;
    box-shadow: none;
    border-color: transparent;
    background-color: #eff1f3;
    padding: 0 4px;

    &:hover {
      border-color: #48caff;
      background-color: #fff;
    }
    &.Select__control--menu-is-open {
      background-color: #fff;
      border-color: #48caff;
      ~ #input-label {
        color: red;
      }
      .Select__dropdown-indicator {
        transform: rotate(180deg);
      }
    }
  }
  .Select__single-value {
    color: #788b99;
  }
  .Select__indicator-separator {
    visibility: hidden;
  }
  .Select__option {
    color: #788b99;
    &.Select__option--is-selected,
    &.Select__option--is-disabled,
    &.Select__option--is-focused {
      background-color: #ecf8ff;
      color: #788b99;
    }
    &:hover {
      background-color: #ecf8ff;
    }
  }
  .Select__multi-value {
    display: flex;
    flex-direction: row-reverse;
    background-color: #dce8f4;
    border: 1px solid #48caff;
    
    .Select__multi-value__label {
      color: #48caff ;
    }
    .Select__multi-value__remove {
      border-right: 1px solid #48caff;
      cursor: pointer;
      &:hover {
        background-color: rgba(0,0,0,.1);
      }
      svg {
        fill: #48caff;
      }
      &:hover  svg {
          fill: #48caff;
        }
      }
    }
  }
  .Select__clear-indicator {
    display: none;
  }
  .Select__menu {
    z-index: 200;
  }
`;
export const SelectWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${({ selectType }) => (selectType === "short" ? "48%" : "100%")};
  margin-bottom: 10px;
`;
export const Label = styled.label`
  position: absolute;
  top: 0;
  font-size: 14px;
  line-height: 1;
  font-weight: 400;
  color: #788b99;
  max-width: 70%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transform-origin: left bottom;
  transform: ${({ isActive }) =>
    isActive
      ? "translate(0, 0) scale(0.85)"
      : "translate(17px, 15px) scale(1.15)"};
  visibility: ${({ isActive }) => (isActive ? "visible" : "hidden")};
  transition: all 0.2s;
  touch-action: manipulation;
  border: 1px solid transparent;
  cursor: pointer;
  z-index: 100;
  &:hover {
    color: #48caff;
    text-decoration: underline;
  }
`;
export const ErrorMassage = styled.span`
  color: #f05f62;
`;
