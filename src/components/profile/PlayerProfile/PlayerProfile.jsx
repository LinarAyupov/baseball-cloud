import React, { useEffect } from "react";
import { ContentWrapper } from "./styled";
import { ProfileContainer } from "../../../commonStyles/styled";
import SidebarContainer from "../../../containers/SidebarContainer";
import TopBatting from "../TopBatting";
import RecentReports from "../RecentReports";
import Statistics from "../Statistics";
import { connect } from "react-redux";
import {
  getProfileCurrents,
  getPlayerProfile,
} from "../../../actions/profileActions";
import { updateFavoriteProfile } from "../../../actions/playersActions";
import { getProfileState, getPlayersState } from "../../../selectors/selectors";
import { withRouter } from "react-router-dom";
const PlayerProfile = ({
  getProfileCurrents,
  profileCurrents,
  getPlayerProfile,
  updateFavoriteProfile,
  match,
  players,
}) => {
  const { userId } = match.params;
  useEffect(() => {
    if (userId) {
      getPlayerProfile({ id: userId });
    }
    if (!userId) {
      getProfileCurrents();
    }
  }, [getProfileCurrents, getPlayerProfile, userId, match, players]);
  const {
    id,
    first_name,
    last_name,
    age,
    weight,
    feet,
    inches,
    batter_summary,
    batting_top_values,
    position,
    avatar,
  } = profileCurrents;
  return (
    <ProfileContainer>
      <SidebarContainer
        profileCurrents={profileCurrents}
        showLikeBtn={userId ? true : false}
        updateFavoriteProfile={updateFavoriteProfile}
      />
      <ContentWrapper>
        <TopBatting userId={id} topValues={batter_summary} />
        <RecentReports />
        <Statistics
          userId={id}
          profilePlayer={{
            first_name,
            last_name,
            age,
            weight,
            feet,
            inches,
            avatar,
            batting_top_values,
            position,
          }}
        />
      </ContentWrapper>
    </ProfileContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    profileCurrents: getProfileState(state),
    players: getPlayersState(state),
  };
};

const mapDispatchToProps = {
  getProfileCurrents,
  getPlayerProfile,
  updateFavoriteProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PlayerProfile));
