import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { InputButton, CalenderIcon, ArrowIcon, Container } from "./styled";
import CalenderSvg from "../../SvgComponents/CalenderSvg";
import BlueArrowSvg from "../../SvgComponents/BlueArrowSvg";

const DateButton = ({ getDate }) => {
  const [date, setDate] = useState(new Date());
  const [isOpen, setIsOpened] = useState(false);

  const CustomInput = React.forwardRef((props, ref) => (
    <InputButton onClick={props.onClick} ref={ref}>
      <CalenderIcon>
        <CalenderSvg />
      </CalenderIcon>
      Date
      <ArrowIcon isOpen={isOpen}>
        <BlueArrowSvg />
      </ArrowIcon>
    </InputButton>
  ));

  const CustomContainer = ({ className, children }) => {
    useEffect(() => {
      setIsOpened(true);
      return () => {
        setIsOpened(false);
      };
    }, []);
    return <Container className={className}>{children}</Container>;
  };
  return (
    <DatePicker
      selected={date}
      dateFormat="MMM YYY"
      onChange={(date) => {
        setDate(date);
        getDate(moment(date).format("DD-MM-YYYY"));
      }}
      customInput={<CustomInput />}
      calendarContainer={CustomContainer}
      popperPlacement="bottom-end"
    />
  );
};

export default DateButton;
