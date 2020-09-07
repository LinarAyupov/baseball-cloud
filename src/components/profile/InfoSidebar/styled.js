import styled from "styled-components";
export const HeaderWrap = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EditButton = styled.div`
  position: absolute;
  top: 12px;
  right: 13px;
  cursor: pointer;
`;

export const AvatarWrap = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 6px;
  border-radius: 50%;
  background-image: url(${({ avatarUrl }) =>
    avatarUrl
      ? avatarUrl
      : "https://baseballcloud-front.herokuapp.com/4625203570ef5f6721fc145b05f790a9.png"});
  background-size: cover;
  background-position: 50% 50%;
`;

export const Name = styled.div`
  color: #414f5a;
  font-size: 20px;
  line-height: 24px;
  word-break: break-all;
`;
export const FirstPosition = styled.div`
  border-bottom: 1px solid #cdcccd;
`;

export const MainCount = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items; center;
  padding: 16px 0;
`;

export const MainCountLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const MainCountIcon = styled.span`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainCountTitle = styled.span`
  margin-left: 16px;
  color: #333;
  padding-bottom: 4px;
`;

export const Count = styled.span`
  color: #333;
`;

export const Heading = styled.div`
  font-size: 14px;
  line-height: 17px;
  font-weight: 300;
  color: #667784;
  margin-bottom: 4px;
  text-align: left;
`;

export const TextBox = styled.div`
  font-size: 16px;
  color: #667784;
  margin-bottom: 13px;
`;
