import React, { useState, useEffect } from "react";
import { Tabs, TabBtn, UsersContainer } from "./styled";
import DropDownBtn from "../../ui/DropDownBtn";
import SearchInput from "../../ui/SearchInput";
import { connect } from "react-redux";
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
import { withRouter } from "react-router-dom";
import {
  getLeaderboardPlayers,
  updateFavoriteProfile,
} from "../../../actions/playersActions";
import {
  getPlayersState,
  getIsFetchingState,
} from "../../../selectors/selectors";
import Preloader from "../../ui/Preloader";

import { getOptionName, generateTitle } from "../../../utils/BoardUtils";

const LeaderBoard = ({
  getLeaderboardPlayers,
  leaderboardPlayers,
  updateFavoriteProfile,
  isFetching,
  dateOptions,
  positionOptions,
  favoriteOptions,
  battingTypes,
  pitcherTypes,
}) => {
  const [position, setPosition] = useState(null);
  const [type, setType] = useState("exit_velocity");
  const [date, setDate] = useState(null);
  const [school, setSchool] = useState(null);
  const [team, setTeam] = useState(null);
  const [age, setAge] = useState(null);
  const [favorite, setFavorite] = useState(null);
  const [tab, setTab] = useState("batting");

  useEffect(() => {
    getLeaderboardPlayers({
      type,
      position,
      school,
      date,
      team,
      age,
      favorite,
      tab,
    });
  }, [
    type,
    position,
    school,
    date,
    team,
    age,
    favorite,
    tab,
    getLeaderboardPlayers,
  ]);

  const renderBattingUsers = (users) => {
    if (users && users.length !== 0) {
      return users.map((user, index) => {
        return (
          <tbody key={index}>
            <TableCountWrap key={user.batter_datraks_id}>
              <TableCount>{index + 1}</TableCount>
              <TableCount>
                <BoardUserLink
                  to={`/profile/${
                    user.batter_datraks_id
                      ? user.batter_datraks_id
                      : user.pitcher_datraks_id
                  }`}
                >
                  {user.batter_name || user.pitcher_name}
                </BoardUserLink>
              </TableCount>
              <TableCount>{user.age}</TableCount>
              <TableCount>{user.school ? user.school.name : "-"}</TableCount>
              <TableCount>
                {getOptionName(user.teams).join(", ") || ""}
              </TableCount>
              <TableCount>{user.exit_velocity || user.pitch_type}</TableCount>
              <TableCount>{user.launch_angle || user.velocity}</TableCount>
              <TableCount>{user.distance || user.spin_rate}</TableCount>
              <TableCount>
                <HeartIconSmall
                  className="blue-icon fa fa-heart-o"
                  isActive={user.favorite}
                  onClick={() =>
                    updateFavoriteProfile({
                      id: user.batter_datraks_id
                        ? user.batter_datraks_id
                        : user.pitcher_datraks_id,
                      favorite: !user.favorite,
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
        <BoardTitle>Leaderboard</BoardTitle>
        <PlayersFilters>
          <DropDownBtn
            width="57px"
            title={generateTitle(date, dateOptions, "Date")}
            options={dateOptions}
            getId={setDate}
          />
          <SearchInput placeholder="School" getValue={setSchool} />
          <SearchInput placeholder="Team" getValue={setTeam} />
          <DropDownBtn
            title={generateTitle(position, positionOptions, "Position")}
            options={positionOptions}
            getId={setPosition}
          />
          <SearchInput width="47px" placeholder="Age" getValue={setAge} />
          <DropDownBtn
            title={generateTitle(favorite, favoriteOptions, "All")}
            options={favoriteOptions}
            getId={setFavorite}
          />
        </PlayersFilters>
      </BoardHeader>
      <Tabs>
        <span>
          <TabBtn
            isActive={tab === "batting" ? true : false}
            onClick={() => {
              setType("exit_velocity");
              setTab("batting");
            }}
          >
            Batting
          </TabBtn>
          <TabBtn
            isActive={tab === "pitching" ? true : false}
            onClick={() => {
              setTab("pitching");
              setType("pitch_velocity");
            }}
          >
            Pitching
          </TabBtn>
        </span>
        <span>
          {tab === "batting" && (
            <DropDownBtn
              title={generateTitle(type, battingTypes, "Exit Velocity")}
              options={battingTypes}
              getId={setType}
            />
          )}
          {tab === "pitching" && (
            <DropDownBtn
              title={generateTitle(type, pitcherTypes, "Pitch Velocity")}
              options={pitcherTypes}
              getId={setType}
            />
          )}
        </span>
      </Tabs>

      {isFetching ? (
        <Preloader />
      ) : (
        <UsersContainer>
          {tab === "batting" ? (
            <TableWrap>
              <tbody>
                <TableHeader>
                  <TableHeaderItem>Rank</TableHeaderItem>
                  <TableHeaderItem>Batter Name</TableHeaderItem>
                  <TableHeaderItem>Age</TableHeaderItem>
                  <TableHeaderItem>School</TableHeaderItem>
                  <TableHeaderItem>Teams</TableHeaderItem>
                  <TableHeaderItem>Exit Velocity</TableHeaderItem>
                  <TableHeaderItem>Launch Angle</TableHeaderItem>
                  <TableHeaderItem>Distance</TableHeaderItem>
                  <TableHeaderItem>Favorite</TableHeaderItem>
                </TableHeader>
              </tbody>
              {renderBattingUsers(leaderboardPlayers)}
            </TableWrap>
          ) : (
            <TableWrap>
              <tbody>
                <TableHeader>
                  <TableHeaderItem>Rank</TableHeaderItem>
                  <TableHeaderItem>Pitcher Name</TableHeaderItem>
                  <TableHeaderItem>Age</TableHeaderItem>
                  <TableHeaderItem>School</TableHeaderItem>
                  <TableHeaderItem>Teams</TableHeaderItem>
                  <TableHeaderItem>Pitch Type</TableHeaderItem>
                  <TableHeaderItem>Velocity</TableHeaderItem>
                  <TableHeaderItem>Spin Rate</TableHeaderItem>
                  <TableHeaderItem>Favorite</TableHeaderItem>
                </TableHeader>
              </tbody>
              {renderBattingUsers(leaderboardPlayers)}
            </TableWrap>
          )}
        </UsersContainer>
      )}
    </BoardContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    leaderboardPlayers: getPlayersState(state),
    isFetching: getIsFetchingState(state),
    dateOptions: state.playersData.dateOptions,
    positionOptions: state.playersData.positionOptions,
    favoriteOptions: state.playersData.favoriteOptions,
    battingTypes: state.playersData.battingTypes,
    pitcherTypes: state.playersData.pitcherTypes,
  };
};

const mapDispatchToProps = {
  getLeaderboardPlayers,
  updateFavoriteProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LeaderBoard));
