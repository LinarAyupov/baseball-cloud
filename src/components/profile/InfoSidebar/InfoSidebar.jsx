import React from "react";
import {
  HeaderWrap,
  EditButton,
  AvatarWrap,
  Name,
  FirstPosition,
  MainCount,
  MainCountLeft,
  MainCountTitle,
  MainCountIcon,
  Count,
  Heading,
  TextBox,
} from "./styled";
import { SidebarContainer } from "../../../commonStyles/styled";
import AgeIconSvg from "../../SvgComponents/AgeIconSvg";
import HeightIconSvg from "../../SvgComponents/HeightIconSvg";
import WeightIconSvg from "../../SvgComponents/WeightIconSvg";
import ThrowsIconSvg from "../../SvgComponents/ThrowsIconSvg";
import BatsIconSvg from "../../SvgComponents/BatsIconSvg";
import SidebarSubtitle from "../../ui/SidebarSubtitle";
import EditIconSvg from "../../SvgComponents/EditIconSvg";
import LikeIconSvg from "../../SvgComponents/LikeIconSvg";

const InfoSidebar = ({
  profileCurrents,
  firstPositions,
  secondPositions,
  handsSides,
  schoolYears,
  setIsEdit,
  showLikeBtn,
  updateFavoriteProfile,
}) => {
  const {
    avatar,
    first_name,
    last_name,
    position,
    position2,
    age,
    feet,
    inches,
    weight,
    throws_hand,
    bats_hand,
    school,
    school_year,
    teams,
    facilities,
    biography,
  } = profileCurrents;

  const editInfo = () => {
    setIsEdit(true);
  };

  const likeProfile = () => {
    updateFavoriteProfile({
      id:
        profileCurrents.batter_datraks_id ||
        profileCurrents.pitcher_datraks_id ||
        profileCurrents.id,
      favorite: !profileCurrents.favorite,
    });
  };

  const getOptionName = (optionList, value) => {
    let name = [];
    if (value) {
      optionList.find((opt) => {
        if (opt.id === value) {
          name.push(opt.name);
        }
      });
    } else if (!value && Array.isArray(optionList) === true) {
      optionList.filter((opt) =>
        opt.name ? name.push(opt.name) : name.push(opt.u_name)
      );
    } else if (!optionList) {
      name = [""];
    } else {
      name = optionList.name;
    }
    return name;
  };

  return (
    <SidebarContainer style={{ lineHeight: "19px" }}>
      <HeaderWrap>
        {showLikeBtn ? (
          <EditButton onClick={likeProfile}>
            <LikeIconSvg
              fill={profileCurrents.favorite ? "#48BBFF" : "#99acba"}
            />
          </EditButton>
        ) : (
          <EditButton onClick={editInfo}>
            <EditIconSvg />
          </EditButton>
        )}
        <AvatarWrap avatarUrl={avatar} />
        <Name>
          {first_name} {last_name}
        </Name>
        <FirstPosition>{getOptionName(firstPositions, position)}</FirstPosition>
        <div>{getOptionName(secondPositions, position2)}</div>
      </HeaderWrap>
      <MainCount>
        <MainCountLeft>
          <MainCountIcon>
            <AgeIconSvg />
          </MainCountIcon>
          <MainCountTitle>Age</MainCountTitle>
        </MainCountLeft>
        <Count>{age}</Count>
      </MainCount>
      <MainCount>
        <MainCountLeft>
          <MainCountIcon>
            <HeightIconSvg />
          </MainCountIcon>
          <MainCountTitle>Height</MainCountTitle>
        </MainCountLeft>
        <Count>
          {feet} ft {inches} in
        </Count>
      </MainCount>
      <MainCount>
        <MainCountLeft>
          <MainCountIcon>
            <WeightIconSvg />
          </MainCountIcon>
          <MainCountTitle>Weight</MainCountTitle>
        </MainCountLeft>
        <Count>{weight} lbs</Count>
      </MainCount>
      <MainCount>
        <MainCountLeft>
          <MainCountIcon>
            <ThrowsIconSvg />
          </MainCountIcon>
          <MainCountTitle>Throws</MainCountTitle>
        </MainCountLeft>
        <Count>{getOptionName(handsSides, throws_hand)}</Count>
      </MainCount>
      <MainCount>
        <MainCountLeft>
          <MainCountIcon>
            <BatsIconSvg />
          </MainCountIcon>
          <MainCountTitle>Bats</MainCountTitle>
        </MainCountLeft>
        <Count>{getOptionName(handsSides, bats_hand)}</Count>
      </MainCount>
      <Heading>School</Heading>
      <TextBox>{getOptionName(school)}</TextBox>

      <Heading>School Year</Heading>
      <TextBox>{getOptionName(schoolYears, school_year)}</TextBox>

      <Heading>Team</Heading>
      <TextBox>{getOptionName(teams).join(", ") || ""}</TextBox>

      <Heading>Facility</Heading>
      <TextBox>{getOptionName(facilities).join(", ") || ""}</TextBox>

      <SidebarSubtitle>About</SidebarSubtitle>

      <TextBox>{biography}</TextBox>
    </SidebarContainer>
  );
};

export default InfoSidebar;
