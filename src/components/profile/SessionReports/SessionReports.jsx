import React, { useState, useEffect } from "react";
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
import DateButton from "../../ui/DateButton";
import DropDownBtn from "../../ui/DropDownBtn";
import { connect } from "react-redux";
import { getProfileEvents } from "../../../actions/eventsActions";
import {
  getEventsTotalCountState,
  getProfileEventsState,
} from "../../../selectors/selectors";
import Paginator from "../../commons/Paginator";

const SessionReports = ({ events, totalCount, userId, getProfileEvents }) => {
  const count = 10;
  const [offset, setOffset] = useState(0);
  const typeOptions = ["None", "Game", "Practice"];
  const [eventType, setEventType] = useState("");
  const [date, setDate] = useState("");
  useEffect(() => {
    getProfileEvents({ userId, count, offset, eventType, date });
  }, [getProfileEvents, userId, count, offset, eventType, date]);

  const clearFilter = () => {
    setEventType("");
    setDate("");
  };

  const renderEvents = ({ events }) => {
    return events.map((e, index) => (
      <tbody key={index}>
        <TableCountWrap>
          <TableCount>{e.date}</TableCount>
          <TableCount>{e.event_type}</TableCount>
          <TableCount>{e.event_name}</TableCount>
          <TableCount>{e.purchased ? e.purchased : ""}</TableCount>
        </TableCountWrap>
        <SpaceRow></SpaceRow>
      </tbody>
    ));
  };

  return (
    <>
      <Header>
        <HeaderTitle>Sessions</HeaderTitle>
        <HeaderButtonsWrap>
          <ClearBtn onClick={clearFilter}>Clear Filters</ClearBtn>
          <DateButton getDate={setDate} />
          <DropDownBtn
            options={typeOptions}
            isShowValue={true}
            title="Type"
            onChange={setEventType}
          />
        </HeaderButtonsWrap>
      </Header>
      <TableWrap>
        <tbody>
          <TableHeader>
            <TableHeaderItem>Date</TableHeaderItem>
            <TableHeaderItem>Type</TableHeaderItem>
            <TableHeaderItem>Name</TableHeaderItem>
            <TableHeaderItem>Purchased</TableHeaderItem>
          </TableHeader>
        </tbody>

        {events ? renderEvents({ events }) : ""}
      </TableWrap>

      {totalCount > count ? (
        <Paginator
          count={count}
          setOffset={setOffset}
          totalCount={totalCount}
        />
      ) : null}

      {!events || events.length === 0 ? (
        <NowInfo>The player haven't had any sessions yet!</NowInfo>
      ) : (
        ""
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    events: getProfileEventsState(state),
    totalCount: getEventsTotalCountState(state),
  };
};
const mapDispatchToProps = {
  getProfileEvents,
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionReports);
