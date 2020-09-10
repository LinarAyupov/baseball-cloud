import React, { useEffect } from "react";
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
import { connect } from "react-redux";
import { getBattingSummary } from "../../../actions/battingActions";
import {
  getTopBattingsState,
  getAverageBattingsState,
} from "../../../selectors/selectors";

const Batting = ({ topValues, averageValues, getBattingSummary, userId }) => {
  useEffect(() => {
    if (userId) {
      getBattingSummary({ userId: 415 });
    }
  }, [getBattingSummary, userId]);

  const renderTopValues = (battings) => {
    return battings.map((bat) => (
      <tbody key={bat.distance}>
        <TableCountWrap>
          <TableCount>{bat.pitch_type}</TableCount>
          <TableCount>{bat.distance}</TableCount>
          <TableCount>{bat.launch_angle}</TableCount>
          <TableCount>{bat.exit_velocity}</TableCount>
        </TableCountWrap>
        <SpaceRow></SpaceRow>
      </tbody>
    ));
  };
  if (averageValues.length === 0 && topValues.length === 0) {
    return <NowInfo>There's no info yet!</NowInfo>;
  }
  return (
    <>
      <TableWrap>
        <TableTitle>Top Batting Values</TableTitle>
        <tbody>
          <TableHeader>
            <TableHeaderItem>Pitch Type</TableHeaderItem>
            <TableHeaderItem>Distance</TableHeaderItem>
            <TableHeaderItem>Launch Angle</TableHeaderItem>
            <TableHeaderItem>Exit Velocity</TableHeaderItem>
          </TableHeader>
        </tbody>
        {topValues && renderTopValues(topValues)}
      </TableWrap>
      <TableWrap>
        <TableTitle>Average Batting Values</TableTitle>
        <tbody>
          <TableHeader>
            <TableHeaderItem>Pitch Type</TableHeaderItem>
            <TableHeaderItem>Distance</TableHeaderItem>
            <TableHeaderItem>Launch Angle</TableHeaderItem>
            <TableHeaderItem>Exit Velocity</TableHeaderItem>
          </TableHeader>
        </tbody>

        {averageValues && renderTopValues(averageValues)}
      </TableWrap>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    topValues: getTopBattingsState(state),
    averageValues: getAverageBattingsState(state),
  };
};

const mapDispatchToProps = {
  getBattingSummary,
};

export default connect(mapStateToProps, mapDispatchToProps)(Batting);
