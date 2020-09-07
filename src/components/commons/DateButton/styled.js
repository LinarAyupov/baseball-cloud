import styled from "styled-components";
import DatePicker from "react-datepicker";

export const CustomDatePicker = styled(DatePicker)`
  & ~ &.react-datepicker-wrapper {
    border: 1px solid red;
  }
`;

export const InputButton = styled.button`
  display: flex;
  padding: 0;
  font-size: 16px;
  line-height: 1.19;
  color: #48bbff;
  align-items: flex-start;
  border-radius: 4px;
  box-shadow: none;
  font-weight: 400;
  border: none;
  outline: none;
  background-color: #fff;
`;
export const CalenderIcon = styled.div`
  display: flex;
  margin-right: 6px;
  margin-top: 2px;
`;

export const ArrowIcon = styled(CalenderIcon)`
  margin-left: 6px;
  margin-right: 0;
  margin-top: 7px;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : null)};
`;

export const Container = styled.div`
  top: -13px;
  margin-top: 13px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.15);
  border: solid 1px #ebebeb;
  z-index: 2;
  .react-datepicker {
    background-color: #fff;
    border: none;
    font-size: 14px;
    border-radius: 4px;
    &__month-container {
      float: none;
      font-size: 14px;
    }
    &__current-month {
      font-size: 14px;
      color: #414f5a;
      font-weight: normal;
    }
    &__header {
      text-align: center;
      border-bottom: 1px solid #aeaeae;
      border-top-left-radius: 0.3rem;
      border-top-right-radius: 0.3rem;
      padding-top: 8px;
      position: relative;
      background-color: #fff;
      border-color: #ebebeb;
    }
    &__day-name {
      display: inline-flex;
      color: #000;
      width: 32px;
      height: 32px;
      color: #414f5a;
      align-items: center;
      line-height: 1;
      text-align: center;
      margin: 2px;
      justify-content: center;
    }
    &__day {
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-flexbox;
      display: inline-flex;
      width: 32px;
      height: 32px;
      color: #414f5a;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      line-height: 1;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-text-align: center;
      text-align: center;
      margin: 2px;
      &--selected {
        background-color: #48bbff;
        color: #fff;
      }
    }
  }
`;

export const DateHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 274x;
  font-size: 14px;
  color: #414f5a;
  font-weight: normal;
  background-color: #fff;
`;

export const DateNavArrow = styled.div`
  line-height: 1.7rem;
  text-align: center;
  cursor: pointer;
  position: absolute;
  top: 10px;
  width: 0;
  border: 0.45rem solid transparent;
  z-index: 1;
  left: 10px;
  border-right-color: #ccc;
`;
