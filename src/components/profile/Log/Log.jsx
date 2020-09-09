import React, { useEffect, useState } from "react";
import { Header, Input, InputWrap, IconWrap } from "./styled";
import SearchIconSvg from "../../SvgComponents/SearchIconSvg";
import { getBattingLog } from "../../../actions/battingActions";
import {
  TableWrap,
  TableTitle,
  TableHeader,
  TableHeaderItem,
  TableCountWrap,
  TableCount,
  SpaceRow,
  NowInfo,
} from "../../../commonStyles/styled";
import {
  getBattingLogState,
  getBattingTotalCountState,
} from "../../../selectors/selectors";
import DropDownBtn from "../../ui/DropDownBtn";
import { connect } from "react-redux";
import Paginator from "../../commons/Paginator";

const Log = ({ userId, getBattingLog, battingLog, totalCount }) => {
  const [pitcherType, setPitcherType] = useState("");
  const [searchName, setSearchName] = useState("");
  const count = 10;
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    getBattingLog({ userId, count, offset, pitcherType, searchName });
  }, [getBattingLog, userId, count, offset, pitcherType, searchName]);

  const searchPlayer = (e) => {
    setSearchName(e.target.value);
    setOffset(0);
  };

  const typeOptions = [
    "None",
    "Four Seam Fastball",
    "Two Seam Fastball",
    "Curveball",
    "Changeup",
    "Slider",
  ];

  const renderLogs = ({ battingLog }) => {
    if (battingLog && battingLog.length !== 0) {
      return battingLog.map((log) => (
        <>
          <TableCountWrap>
            <TableCount>{log.date ? log.date : "-"}</TableCount>
            <TableCount>{log.pitcher_name ? log.pitcher_name : "-"}</TableCount>
            <TableCount>
              {log.pitcher_handedness ? log.pitcher_handedness : "-"}
            </TableCount>
            <TableCount>{log.pitch_type ? log.pitch_type : "-"}</TableCount>
            <TableCount>{log.pitch_call ? log.pitch_call : "-"}</TableCount>
          </TableCountWrap>
          <SpaceRow />
        </>
      ));
    }
  };

  return (
    <>
      <Header>
        <InputWrap>
          <IconWrap>
            <SearchIconSvg />
          </IconWrap>
          <Input placeholder="Search" onChange={searchPlayer} />
        </InputWrap>
        <DropDownBtn
          options={typeOptions}
          isShowValue={true}
          title="Pitch Type"
          onChange={setPitcherType}
        />
      </Header>
      <TableWrap>
        <TableTitle>Batting Log</TableTitle>
        <TableHeader>
          <TableHeaderItem>Date</TableHeaderItem>
          <TableHeaderItem>Pitcher Name</TableHeaderItem>
          <TableHeaderItem>Pitcher Handedness</TableHeaderItem>
          <TableHeaderItem>Pitch Type</TableHeaderItem>
          <TableHeaderItem>Pitch Call</TableHeaderItem>
        </TableHeader>
        <tbody>{renderLogs({ battingLog })}</tbody>
      </TableWrap>
      {totalCount > count ? (
        <Paginator
          setOffset={setOffset}
          totalCount={totalCount}
          count={count}
        />
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    battingLog: getBattingLogState(state),
    totalCount: getBattingTotalCountState(state),
  };
};

const mapDispatchToProps = {
  getBattingLog,
};

export default connect(mapStateToProps, mapDispatchToProps)(Log);
