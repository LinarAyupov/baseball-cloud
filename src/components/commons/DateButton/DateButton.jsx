import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  InputButton,
  CalenderIcon,
  ArrowIcon,
  CustomDatePicker,
} from "./styled";
import CalenderSvg from "../../SvgComponents/CalenderSvg";
import CalenderArrowSvg from "../../SvgComponents/CalenderArrowSvg";

const DateButton = () => {
  const [date, setDate] = useState(new Date());

  const CustomInput = ({ value, onClick }) => (
    <InputButton onClick={onClick}>
      <CalenderIcon>
        <CalenderSvg />
      </CalenderIcon>
      Date
      <ArrowIcon>
        <CalenderArrowSvg />
      </ArrowIcon>
    </InputButton>
  );

  // const customHeader = ({
  //   date,
  //   decreaseMonth,
  //   increaseMonth,
  //   prevMonthButtonDisabled,
  //   nextMonthButtonDisabled,
  // }) => {
  //   return ;
  // };

  return (
    <DatePicker
      selected={date}
      dateFormat="MMM YYY"
      onChange={(date) => setDate(date)}
      customInput={<CustomInput />}
    />
  );
};

export default DateButton;
