import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const UsersContainer = styled.div`
  display: flex;
  width: 100%;
`;
export const UserInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const AvatarWrap = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  background-image: url(${({ avatarUrl }) =>
    avatarUrl
      ? avatarUrl
      : "https://baseballcloud-front.herokuapp.com/4625203570ef5f6721fc145b05f790a9.png"});
  background-size: cover;
  background-position: 50% 50%;
`;

export const CountWrap = styled.div`
  width: 100%
  text-align: left;
  padding-bottom: 30px;
`;

export const UserInfoHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
