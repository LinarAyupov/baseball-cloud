import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  TableFilter,
  TableTitle,
  InputWrap,
  IconWrap,
  Input,
  UsersContainer,
} from "./styled";
import {
  BoardContainer,
  BoardHeader,
  BoardTitle,
  PlayersFilters,
  HeartIconSmall,
  BoardUserLink,
  TableWrap,
  TableHeader,
  TableHeaderItem,
  TableCountWrap,
  TableCount,
  SpaceRow,
} from "../../../commonStyles/styled";
import {
  updateFavoriteProfile,
  getPlayersProfiles,
} from "../../../actions/playersActions";
import {
  getPlayersState,
  getIsFetchingState,
} from "../../../selectors/selectors";
import SearchInput from "../../ui/SearchInput";
import DropDownBtn from "../../ui/DropDownBtn";
import SearchIconSvg from "../../SvgComponents/SearchIconSvg";
import Preloader from "../../ui/Preloader";
import Paginator from "../../commons/Paginator";
import { getOptionName, generateTitle } from "../../../utils/boardHelper";

const Network = ({
  players,
  isFetching,
  updateFavoriteProfile,
  getPlayersProfiles,
  positionOptions,
  favoriteOptions,
  profileCountsOptions,
  totalCount,
}) => {
  const [playerName, setPlayerName] = useState(null);
  const [position, setPosition] = useState(null);
  const [school, setSchool] = useState(null);
  const [team, setTeam] = useState(null);
  const [age, setAge] = useState(null);
  const [favorite, setFavorite] = useState(null);
  const [profilesCount, setProfilesCount] = useState(10);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    getPlayersProfiles({
      profiles_count: parseInt(profilesCount),
      offset,
      school,
      position,
      team,
      age: parseInt(age),
      favorite,
      player_name: playerName,
    });
  }, [
    getPlayersProfiles,
    profilesCount,
    offset,
    school,
    position,
    team,
    age,
    favorite,
    playerName,
  ]);

  const renderPlayers = (players) => {
    if (players && players.length !== 0) {
      return players.map((player, index) => {
        return (
          <tbody key={player.id || index}>
            <TableCountWrap>
              <TableCount>
                <BoardUserLink to={`/profile/${player.id}`}>
                  {player.first_name} {player.last_name}
                </BoardUserLink>
              </TableCount>
              <TableCount>
                {players.events && player.events.length !== 0
                  ? player.events
                  : "-"}
              </TableCount>
              <TableCount>
                {player.school ? player.school.name : "-"}
              </TableCount>
              <TableCount>
                {" "}
                {getOptionName(player.teams).join(", ") || ""}
              </TableCount>
              <TableCount>{player.age}</TableCount>
              <TableCount>
                <HeartIconSmall
                  className="blue-icon fa fa-heart-o"
                  isActive={player.favorite}
                  onClick={() =>
                    updateFavoriteProfile({
                      id: player.id,
                      favorite: !player.favorite,
                    })
                  }
                />
              </TableCount>
            </TableCountWrap>
            <SpaceRow />
          </tbody>
        );
      });
    }
  };

  return (
    <BoardContainer>
      <BoardHeader>
        <BoardTitle>Network</BoardTitle>
        <PlayersFilters>
          <SearchInput placeholder="School" getValue={setSchool} />
          <SearchInput placeholder="Team" getValue={setTeam} />
          <DropDownBtn
            title={generateTitle(position, positionOptions, "Position")}
            options={positionOptions}
            getId={setPosition}
          />
          <SearchInput
            width="47px"
            placeholder="Age"
            getValue={setAge}
            type="number"
          />
          <DropDownBtn
            title={generateTitle(favorite, favoriteOptions, "All")}
            options={favoriteOptions}
            getId={setFavorite}
          />
          <DropDownBtn
            options={profileCountsOptions}
            title={`Show: ${profilesCount}`}
            onChange={setProfilesCount}
          />
        </PlayersFilters>
      </BoardHeader>
      <TableFilter>
        <TableTitle>Available Players</TableTitle>
        <InputWrap>
          <IconWrap>
            <SearchIconSvg />
          </IconWrap>
          <Input
            placeholder="Player Name"
            onChange={(e) => setPlayerName(e.target.value)}
          />
        </InputWrap>
      </TableFilter>

      {isFetching ? (
        <Preloader />
      ) : (
        <UsersContainer>
          <TableWrap>
            <tbody>
              <TableHeader>
                <TableHeaderItem>Player Name</TableHeaderItem>
                <TableHeaderItem>Session</TableHeaderItem>
                <TableHeaderItem>School</TableHeaderItem>
                <TableHeaderItem>Teams</TableHeaderItem>
                <TableHeaderItem>Age</TableHeaderItem>
                <TableHeaderItem>Favorite</TableHeaderItem>
              </TableHeader>
            </tbody>
            {renderPlayers(players)}
          </TableWrap>
        </UsersContainer>
      )}
      {totalCount > 0 ? (
        <Paginator
          setOffset={setOffset}
          totalCount={totalCount}
          count={profilesCount}
        />
      ) : null}
    </BoardContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    players: getPlayersState(state),
    isFetching: getIsFetchingState(state),
    positionOptions: state.playersData.positionOptions,
    favoriteOptions: state.playersData.favoriteOptions,
    profileCountsOptions: state.playersData.profileCountsOptions,
    totalCount: state.playersData.totalCount,
  };
};
const mapDispatchToProps = {
  updateFavoriteProfile,
  getPlayersProfiles,
};
export default connect(mapStateToProps, mapDispatchToProps)(Network);
