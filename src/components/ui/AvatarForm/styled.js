import styled from "styled-components";

export const AvatarFormWrap = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 18px;
`;

export const AvatarWrap = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 16px;
  border-radius: 50%;
  background-image: url(${({ avatarUrl }) =>
    avatarUrl
      ? avatarUrl
      : "https://baseballcloud-front.herokuapp.com/4625203570ef5f6721fc145b05f790a9.png"});
  background-size: cover;
  background-position: 50% 50%;
`;

export const ChosePhoto = styled.label`
  font-size: 14px;
  line-height: 1;
  font-weight: 400;
  color: #788b99;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    color: #48bbff;
    text-decoration: underline;
  }
`;

export const UploadButtonsWrap = styled.div`
  display: flex;
`;

export const UploadPhoto = styled.div`
  font-size: 16px;
  line-height: 1.13;
  color: #48bbff;
  cursor: pointer;
  margin-right: 20px;
  &:hover {
    text-decoration: underline;
  }
`;

export const Cancel = styled.div`
  font-size: 16px;
  line-height: 1.13;
  font-weight: 400;
  color: #788b99;
  cursor: pointer;
  &:hover {
    color: #5b6871;
    text-decoration: underline;
  }
`;

export const UploadInput = styled.input`
  width: 0.1px;
  position: absolute;
  z-index: -1;
  opacity: 0;
`;
