import React, { useState, useEffect } from "react";
import {
  Container,
  UsersContainer,
  UserInfo,
  UserInfoHeader,
  AvatarWrap,
  CountWrap,
} from "./styled";
import {
  TableWrap,
  TableCountWrap,
  TableCount,
  SpaceRow,
} from "../../../commonStyles/styled";
import DropDownBtn from "../../ui/DropDownBtn";
import { connect } from "react-redux";
import SearchInput from "../../ui/SearchInput";
import {
  filterPlayersName,
  getComparisonPlayer,
} from "../../../actions/comparisonActions";
import {
  getFilteredPlayersState,
  getComparisonPlayerState,
  getIsFetchingState,
} from "../../../selectors/selectors";
import Preloader from "../../ui/Preloader";

const Comparison = ({
  profilePlayer,
  comparisonPlayer,
  filterPlayersName,
  filteredPlayers,
  getComparisonPlayer,
  isFetching,
}) => {
  const btnOptions = ["Distance", "Launch Angel", "Exit Velocity"];
  const [playerName, setPlayerName] = useState("");
  const [choosedPlayer, setChoosedPlayer] = useState(null);
  const [typeValues, setTypeValues] = useState("Distance");
  let comparisonTopValues = [];
  let profileTopValues = [];
  let filteredValues = [];

  if (comparisonPlayer) {
    comparisonTopValues = comparisonPlayer.batting_top_values;
  }

  if (profilePlayer) {
    profileTopValues = profilePlayer.batting_top_values;
  }
  const renderCount = (values, typeValues, pitchType) => {
    if (values && values.length !== 0) {
      return values.map((value) => {
        if (typeValues === "Distance" && value.distance && value.pitch_type) {
          return pitchType === value.pitch_type && value.distance;
        } else if (
          typeValues === "Launch Angel" &&
          value.launch_angle &&
          value.pitch_type
        ) {
          return pitchType === value.pitch_type && value.launch_angle;
        } else if (
          typeValues === "Exit Velocity" &&
          value.exit_velocity &&
          value.pitch_type
        ) {
          return pitchType === value.pitch_type && value.exit_velocity;
        } else {
          return "-";
        }
      });
    } else {
      return "-";
    }
  };

  useEffect(() => {
    if (choosedPlayer) {
      const id = choosedPlayer;
      getComparisonPlayer({ id });
    }
  }, [getComparisonPlayer, choosedPlayer]);

  useEffect(() => {
    const { position } = profilePlayer;
    if (playerName !== "") {
      filterPlayersName({ playerName, position });
    }
  }, [playerName, filterPlayersName, profilePlayer]);

  if (filteredPlayers && filteredPlayers.length !== 0) {
    filteredValues = filteredPlayers.map((player) => ({
      id: player.id,
      title: `${player.first_name} ${player.last_name}`,
    }));
  }

  return (
    <Container>
      <UsersContainer>
        <UserInfo>
          <UserInfoHeader>
            <AvatarWrap avatarUrl={profilePlayer.avatar} />{" "}
            {profilePlayer.first_name} {profilePlayer.last_name}
          </UserInfoHeader>
          <CountWrap>Age: {profilePlayer.age}</CountWrap>
          <CountWrap>
            Height: {profilePlayer.feet} ft {profilePlayer.inches} in
          </CountWrap>
          <CountWrap>Weight: {profilePlayer.wight} lbs</CountWrap>
        </UserInfo>
        <UserInfo>
          <UserInfoHeader>
            <AvatarWrap
              avatarUrl={comparisonPlayer ? comparisonPlayer.avatar : null}
            />{" "}
            <SearchInput
              iconType="search"
              width="135px"
              rotatable={true}
              getValue={setPlayerName}
              getId={setChoosedPlayer}
              options={filteredValues}
              placeholder={
                comparisonPlayer.first_name
                  ? `${comparisonPlayer.first_name} ${comparisonPlayer.last_name}`
                  : "Enter player name"
              }
            />
          </UserInfoHeader>
          <CountWrap>
            Age: {comparisonPlayer ? comparisonPlayer.age : "-"}
          </CountWrap>
          <CountWrap>
            Height: {comparisonPlayer ? comparisonPlayer.feet : "-"} ft{" "}
            {comparisonPlayer ? comparisonPlayer.inches : "-"} in
          </CountWrap>
          <CountWrap>
            Weight: {comparisonPlayer ? comparisonPlayer.weight : "-"} lbs
          </CountWrap>
        </UserInfo>
      </UsersContainer>
      <DropDownBtn
        title={`Top Batting Values - ${typeValues}`}
        options={btnOptions}
        onChange={setTypeValues}
        right="0"
      />
      <TableWrap>
        <tbody>
          <TableCountWrap>
            <TableCount>Fastball</TableCount>
            <TableCount>
              {renderCount(profileTopValues, typeValues, "Fastball")}
            </TableCount>
            <TableCount>
              {renderCount(comparisonTopValues, typeValues, "Fastball")}
            </TableCount>{" "}
          </TableCountWrap>
          <SpaceRow />
          <TableCountWrap>
            <TableCount>Curveball</TableCount>
            <TableCount>
              {renderCount(profileTopValues, typeValues, "Curveball")}
            </TableCount>
            <TableCount>
              {renderCount(comparisonTopValues, typeValues, "Curveball")}
            </TableCount>
          </TableCountWrap>
          <SpaceRow />
          <TableCountWrap>
            <TableCount>Changeup</TableCount>
            <TableCount>
              {renderCount(profileTopValues, typeValues, "Changeup")}
            </TableCount>
            <TableCount>
              {renderCount(comparisonTopValues, typeValues, "Changeup")}
            </TableCount>
          </TableCountWrap>
          <SpaceRow />
          <TableCountWrap>
            <TableCount>Slider</TableCount>
            <TableCount>
              {renderCount(profileTopValues, typeValues, "Slider")}
            </TableCount>
            <TableCount>
              {renderCount(comparisonTopValues, typeValues, "Slider")}
            </TableCount>
          </TableCountWrap>
        </tbody>
      </TableWrap>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    filteredPlayers: getFilteredPlayersState(state),
    comparisonPlayer: getComparisonPlayerState(state),
    isFetching: getIsFetchingState(state),
  };
};

const mapDispatchToPros = {
  filterPlayersName,
  getComparisonPlayer,
};

export default connect(mapStateToProps, mapDispatchToPros)(Comparison);
