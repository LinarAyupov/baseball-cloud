import React from "react";
import { Header, Input, InputWrap, IconWrap } from "./styled";
import SearchIconSvg from "../../SvgComponents/SearchIconSvg";

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
import DropDownBtn from "../../ui/DropDownBtn";

const Log = () => {
  const typeOptions = [
    "None",
    "Four Seam Fastball",
    "Two Seam Fastball",
    "Curveball",
    "Changeup",
    "Slider",
  ];

  const battingLogs = [
    {
      date: "4/15/18",
      direction: null,
      distance: null,
      exit_velocity: null,
      hang_time: null,
      hit_spin_rate: null,
      launch_angle: null,
      pitch_call: null,
      pitch_type: "Curveball",
      pitcher_datraks_id: null,
      pitcher_handedness: "L",
      pitcher_name: "Tony Adams",
    },
    {
      date: "4/15/18",
      direction: null,
      distance: null,
      exit_velocity: null,
      hang_time: null,
      hit_spin_rate: null,
      launch_angle: null,
      pitch_call: null,
      pitch_type: "Four Seam Fastball",
      pitcher_datraks_id: null,
      pitcher_handedness: "L",
      pitcher_name: "Tony Adams",
    },
    {
      date: "4/15/18",
      direction: null,
      distance: null,
      exit_velocity: null,
      hang_time: null,
      hit_spin_rate: null,
      launch_angle: null,
      pitch_call: null,
      pitch_type: "Four Seam Fastball",
      pitcher_datraks_id: null,
      pitcher_handedness: "L",
      pitcher_name: "Tony Adams",
    },
  ];

  const renderLogs = ({ battingLogs }) => {
    return battingLogs.map((log) => (
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
  };

  return (
    <>
      <Header>
        <InputWrap>
          <IconWrap>
            <SearchIconSvg />
          </IconWrap>
          <Input placeholder="Search" />
        </InputWrap>
        <DropDownBtn
          options={typeOptions}
          isShowValue={true}
          title="Pitch Type"
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
        {renderLogs({ battingLogs })}
      </TableWrap>
    </>
  );
};

export default Log;
