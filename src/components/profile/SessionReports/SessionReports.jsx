import React from "react";
import { Header, HeaderTitle, HeaderButtonsWrap, ClearBtn } from "./styled";
import DateButton from "../../commons/DateButton";

const SessionReports = () => {
  const arr = [
    {
      date: "17/10/2018",
      event_name: "Scorps vs. Scorps",
      event_type: "Game",
      id: "89",
    },
  ];
  return (
    <>
      <Header>
        <HeaderTitle>Sessions</HeaderTitle>
        <HeaderButtonsWrap>
          <ClearBtn>Clear Filters</ClearBtn>
          <DateButton />
        </HeaderButtonsWrap>
      </Header>
    </>
  );
};

export default SessionReports;
