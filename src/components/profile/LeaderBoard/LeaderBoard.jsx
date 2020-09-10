import React, { useState } from "react";
import {
  Container,
  Header,
  Title,
  Filters,
  Tabs,
  TabBtn,
  UsersContainer,
  NameBtn,
} from "./styled";
import DropDownBtn from "../../ui/DropDownBtn";
import SearchInput from "../../ui/SearchInput";
import { connect } from "react-redux";
import {
  TableWrap,
  TableHeader,
  TableHeaderItem,
  TableCountWrap,
  TableCount,
  SpaceRow,
  NowInfo,
} from "../../../commonStyles/styled";

const LeaderBoard = () => {
  const [positionId, setPositionId] = useState("");
  const [battingType, setBattingType] = useState("exit_velocity");
  const [pitchingType, setPitchingType] = useState("pitch_velocity");
  const [dateRange, setDateRange] = useState("");
  const [school, setSchool] = useState("");
  const [team, setTeam] = useState("");
  const [age, setAge] = useState("");
  const [favorite, setFavorite] = useState(0);
  const [tab, setTab] = useState("batting");
  let testArr = [
    {
      age: 19,
      batter_datraks_id: 412,
      batter_name: "Alex Horne",
      distance: 68.073,
      exit_velocity: 89.855,
      favorite: false,
      launch_angle: null,
      school: { id: "2", name: "FSU" },
      teams: [{ id: "6", name: "Scorps" }],
    },
    {
      age: 19,
      batter_datraks_id: 412,
      batter_name: "Alex Horne",
      distance: 68.073,
      exit_velocity: 89.855,
      favorite: false,
      launch_angle: null,
      school: { id: "2", name: "FSU" },
      teams: [{ id: "6", name: "Scorps" }],
    },
    {
      age: 19,
      batter_datraks_id: 412,
      batter_name: "Alex Horne",
      distance: 68.073,
      exit_velocity: 89.855,
      favorite: true,
      launch_angle: null,
      school: { id: "2", name: "FSU" },
      teams: [{ id: "6", name: "Scorps" }],
    },
  ];
  const dateOptions = [
    { id: "", title: "All" },
    { id: "last_week", title: "Last Week" },
    { id: "last_month", title: "Last Month" },
  ];

  const positionOptions = [
    { id: "", title: "All" },
    { id: "catcher", title: "Catcher" },
    { id: "first_base", title: "Firs Base" },
    { id: "second_base", title: "Second Base" },
    { id: "third_base", title: "Third Base" },
    { id: "outfield", title: "Outfield" },
    { id: "pitcher", title: "Pitcher" },
  ];

  const favoriteOptions = [
    { id: "", title: "All" },
    { id: 1, title: "Favorite" },
  ];

  const battingTypes = [
    { id: "exit_velocity", title: "Exit Velocity" },
    { id: "carry_distance", title: "Carry Distance" },
  ];

  const pitcherTypes = [
    { id: "pitch_velocity", title: "Pitch Velocity" },
    { id: "spin_rate", title: "Spin Rate" },
  ];

  const generateTitle = (id, options, defaultTitle) => {
    let title = defaultTitle;
    options.find((opt) => {
      if (id !== "" && id === opt.id) {
        title = opt.title;
      }
    });
    return title;
  };

  const renderBattingUsers = (users) => {
    return users.map((user, index) => {
      return (
        <>
          <TableCountWrap>
            <TableCount>{index + 1}</TableCount>
            <TableCount>
              <NameBtn>{user.batter_name}</NameBtn>
            </TableCount>
            <TableCount>{user.age}</TableCount>
            <TableCount>{user.school.id}</TableCount>
            <TableCount>{user.age}</TableCount>
            <TableCount>{user.exit_velocity}</TableCount>
            <TableCount>{user.launch_angle}</TableCount>
            <TableCount>{user.distance}</TableCount>
            <TableCount>{user.age}</TableCount>
          </TableCountWrap>
          <SpaceRow />
        </>
      );
    });
  };

  return (
    <Container>
      <Header>
        <Title>Leaderboard</Title>
        <Filters>
          <DropDownBtn
            width="57px"
            title={generateTitle(dateRange, dateOptions, "Date")}
            options={dateOptions}
            getId={setDateRange}
          />
          <SearchInput placeholder="School" getValue={setSchool} />
          <SearchInput placeholder="Team" getValue={setTeam} />
          <DropDownBtn
            title={generateTitle(positionId, positionOptions, "Position")}
            options={positionOptions}
            getId={setPositionId}
          />
          <SearchInput width="47px" placeholder="Age" getValue={setAge} />
          <DropDownBtn
            title={generateTitle(favorite, favoriteOptions, "All")}
            options={favoriteOptions}
            getId={setFavorite}
          />
        </Filters>
      </Header>
      <Tabs>
        <span>
          <TabBtn
            isActive={tab === "batting" ? true : false}
            onClick={() => setTab("batting")}
          >
            Batting
          </TabBtn>
          <TabBtn
            isActive={tab === "pitching" ? true : false}
            onClick={() => setTab("pitching")}
          >
            Pitching
          </TabBtn>
        </span>
        <span>
          {tab === "batting" && (
            <DropDownBtn
              title={generateTitle(battingType, battingTypes, "Exit Velocity")}
              options={battingTypes}
              getId={setBattingType}
            />
          )}
          {tab === "pitching" && (
            <DropDownBtn
              title={generateTitle(pitchingType, pitcherTypes, "Exit Velocity")}
              options={pitcherTypes}
              getId={setPitchingType}
            />
          )}
        </span>
      </Tabs>
      <UsersContainer>
        {tab === "batting" && (
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
            <tbody>{renderBattingUsers(testArr)}</tbody>
          </TableWrap>
        )}
        {tab === "pitching" && (
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
          </TableWrap>
        )}
      </UsersContainer>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps)(LeaderBoard);
