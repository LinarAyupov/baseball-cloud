import React from "react";
import { Header, HeaderTitle, HeaderButtonsWrap, ClearBtn } from "./styled";
import {
  TableWrap,
  TableHeader,
  TableHeaderItem,
  TableCountWrap,
  TableCount,
  SpaceRow,
  NowInfo,
} from "../../../commonStyles/styled";
import DateButton from "../../commons/DateButton";
import DropDownBtn from "../../ui/DropDownBtn";
const SessionReports = ({ events }) => {
  const typeOptions = ["None", "Game", "Practice"];
  const renderEvents = ({ events }) => {
    return events.map((e) => (
      <>
        <TableCountWrap>
          <TableCount>{e.date}</TableCount>
          <TableCount>{e.event_type}</TableCount>
          <TableCount>{e.event_name}</TableCount>
          <TableCount>{e.purchased ? e.purchased : ""}</TableCount>
        </TableCountWrap>
        <SpaceRow></SpaceRow>
      </>
    ));
  };
  return (
    <>
      <Header>
        <HeaderTitle>Sessions</HeaderTitle>
        <HeaderButtonsWrap>
          <ClearBtn>Clear Filters</ClearBtn>
          <DateButton />
          <DropDownBtn options={typeOptions} isShowValue={true} title="Type" />
        </HeaderButtonsWrap>
      </Header>
      <TableWrap>
        <TableHeader>
          <TableHeaderItem>Date</TableHeaderItem>
          <TableHeaderItem>Type</TableHeaderItem>
          <TableHeaderItem>Name</TableHeaderItem>
          <TableHeaderItem>Purchased</TableHeaderItem>
        </TableHeader>
        {events ? renderEvents({ events }) : ""}
      </TableWrap>
      {!events ? (
        <NowInfo>The player haven't had any sessions yet!</NowInfo>
      ) : (
        ""
      )}
    </>
  );
};

export default SessionReports;
