import React, { useState, useEffect } from "react";
import {
  Container,
  UsersContainer,
  UserInfo,
  UserInfoHeader,
  AvatarWrap,
  CountWrap,
} from "./styled";
import { connect } from "react-redux";
import SearchInput from "../../ui/SearchInput";
import {
  filterPlayersName,
  getComparisonPlayer,
} from "../../../actions/comparisonActions";
import {
  getFilteredPlayersState,
  getComparisonPlayerState,
} from "../../../selectors/selectors";
const Comparison = ({
  AuthUser,
  comparisonPlayer,
  filterPlayersName,
  filteredPlayers,
  getComparisonPlayer,
}) => {
  const [playerName, setPlayerName] = useState("");
  const [choosedPlayer, setChoosedPlayer] = useState(null);
  let filteredValues = [];

  useEffect(() => {
    if (choosedPlayer) {
      const id = choosedPlayer;
      getComparisonPlayer({ id });
    }
  }, [getComparisonPlayer, choosedPlayer]);

  useEffect(() => {
    if (playerName !== "") {
      filterPlayersName({ playerName });
    }
  }, [playerName, filterPlayersName]);

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
            <AvatarWrap avatarUrl={AuthUser.avatar} /> {AuthUser.first_name}{" "}
            {AuthUser.last_name}
          </UserInfoHeader>
          <CountWrap>Age: {AuthUser.age}</CountWrap>
          <CountWrap>
            Height: {AuthUser.feet} ft {AuthUser.inches} in
          </CountWrap>
          <CountWrap>Weight: {AuthUser.wight} lbs</CountWrap>
        </UserInfo>
        <UserInfo>
          <UserInfoHeader>
            <AvatarWrap
              avatarUrl={comparisonPlayer ? comparisonPlayer.avatar : null}
            />{" "}
            <SearchInput
              iconType="arrow"
              width="160px"
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
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    filteredPlayers: getFilteredPlayersState(state),
    comparisonPlayer: getComparisonPlayerState(state),
  };
};

const mapDispatchToPros = {
  filterPlayersName,
  getComparisonPlayer,
};

export default connect(mapStateToProps, mapDispatchToPros)(Comparison);
