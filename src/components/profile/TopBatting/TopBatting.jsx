import React from "react";
import {
  ValuesWrap,
  Value,
  ValueHeader,
  ValueTitle,
  ValueCount,
} from "./styled";
import { ContentContainer, ContentTitle } from "../../../commonStyles/styled";
import ProgressBarSvg from "../../SvgComponents/ProgressBarSvg";

const TopBatting = ({ topValues, userId }) => {
  let values = {};
  const exitVelocityMaxValue = 142.31;
  const carryDistanceMaxValue = 500;
  const launchAngelMaxValue = 50;
  if (topValues && topValues.length !== 0) {
    values = topValues[0];
  }
  const getPercent = (currentValue, maxValue) => {
    return (currentValue / maxValue) * 100;
  };

  return (
    <ContentContainer>
      <ContentTitle>Top Batting Values</ContentTitle>
      <ValuesWrap>
        <Value>
          <ValueHeader>
            <ValueTitle>Exit Velocity</ValueTitle>
            <ValueCount>{values.exit_velocity || "N/A"}</ValueCount>
          </ValueHeader>
          <ProgressBarSvg
            height={4}
            width={"100%"}
            percent={getPercent(
              values.exit_velocity || 0,
              exitVelocityMaxValue
            )}
          />
        </Value>

        <Value>
          <ValueHeader>
            <ValueTitle>Carry Distance</ValueTitle>
            <ValueCount>{values.distance || "N/A"}</ValueCount>
          </ValueHeader>
          <ProgressBarSvg
            height={4}
            width={"100%"}
            percent={getPercent(values.distance || 0, carryDistanceMaxValue)}
          />
        </Value>

        <Value>
          <ValueHeader>
            <ValueTitle>Launch Angle</ValueTitle>
            <ValueCount>{values.launch_angle || "N/A"}</ValueCount>
          </ValueHeader>
          <ProgressBarSvg
            height={4}
            width={"100%"}
            percent={getPercent(values.launch_angle || 0, launchAngelMaxValue)}
          />
        </Value>
      </ValuesWrap>
    </ContentContainer>
  );
};

export default TopBatting;
