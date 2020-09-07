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

const TopBatting = ({ distance = 0, exit_velocity = 0, launch_angle = 0 }) => {
  const exitVelocityMaxValue = 142.31;
  const carryDistanceMaxValue = 500;
  const launchAngelMaxValue = 50;
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
            <ValueCount>{exit_velocity || "N/A"}</ValueCount>
          </ValueHeader>
          <ProgressBarSvg
            height={4}
            width={"100%"}
            percent={getPercent(exit_velocity, exitVelocityMaxValue)}
          />
        </Value>

        <Value>
          <ValueHeader>
            <ValueTitle>Carry Distance</ValueTitle>
            <ValueCount>{distance || "N/A"}</ValueCount>
          </ValueHeader>
          <ProgressBarSvg
            height={4}
            width={"100%"}
            percent={getPercent(distance, carryDistanceMaxValue)}
          />
        </Value>

        <Value>
          <ValueHeader>
            <ValueTitle>Launch Angle</ValueTitle>
            <ValueCount>{launch_angle || "N/A"}</ValueCount>
          </ValueHeader>
          <ProgressBarSvg
            height={4}
            width={"100%"}
            percent={getPercent(launch_angle, launchAngelMaxValue)}
          />
        </Value>
      </ValuesWrap>
    </ContentContainer>
  );
};

export default TopBatting;
