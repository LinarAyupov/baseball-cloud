import React from "react";
import {
  TableWrap,
  TableTitle,
  TableHeader,
  TableHeaderItem,
  TableCountWrap,
  TableCount,
  SpaceRow,
} from "./styled";
import { NowInfo } from "../../../commonStyles/styled";

const Batting = ({ topValues, averageValues }) => {
  const renderTopValues = (battings) => {
    return battings.map((bat) => (
      <>
        <TableCountWrap>
          <TableCount>{bat.pitch_type}</TableCount>
          <TableCount>{bat.distance}</TableCount>
          <TableCount>{bat.launch_angle}</TableCount>
          <TableCount>{bat.exit_velocity}</TableCount>
        </TableCountWrap>
        <SpaceRow></SpaceRow>
      </>
    ));
  };
  if (!averageValues || !topValues) {
    return <NowInfo>There's no info yet!</NowInfo>;
  }
  return (
    <>
      <TableWrap>
        <TableTitle>Top Batting Values</TableTitle>
        <TableHeader>
          <TableHeaderItem>Pitch Type</TableHeaderItem>
          <TableHeaderItem>Distance</TableHeaderItem>
          <TableHeaderItem>Launch Angle</TableHeaderItem>
          <TableHeaderItem>Exit Velocity</TableHeaderItem>
        </TableHeader>
        {topValues && renderTopValues(topValues)}
      </TableWrap>
      <TableWrap>
        <TableTitle>Average Batting Values</TableTitle>
        <TableHeader>
          <TableHeaderItem>Pitch Type</TableHeaderItem>
          <TableHeaderItem>Distance</TableHeaderItem>
          <TableHeaderItem>Launch Angle</TableHeaderItem>
          <TableHeaderItem>Exit Velocity</TableHeaderItem>
        </TableHeader>
        {averageValues && renderTopValues(averageValues)}
      </TableWrap>
    </>
  );
};

export default Batting;
