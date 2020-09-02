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

export const AvatarUpload = styled.label`
  font-size: 14px;
  line-height: 1;
  font-weight: 400;
  color: #788b99;
  cursor: pointer;
  white-space: nowrap;
`;

export const UploadInput = styled.input`
  width: 0.1px;
  position: absolute;
  z-index: -1;
  opacity: 0;
`;

export const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
  align-item: center;
`;

export const ShortInputsWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonsWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const Button = styled.button`
  display: block;
  box-shadow: 0 2px 25px 0 rgba(0, 0, 0, 0);
  width: 100%;
  outline: none;
  padding: 7px 19px 10px 18px;
  border-radius: 4px;
  box-shadow: none;
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  &:hover {
    border: solid 1px #48caff;
    box-shadow: 0 0 2px 0 #48caff;
  }
`;

export const CancelBtn = styled(Button)`
  border: solid 1px #d1d7db;
  margin-right: 12px;
  background-color: #fff;
  &:hover {
    color: #48caff;
  }
`;

export const SaveBtn = styled(Button)`
  background-color: #48caff;
  color: #fff;
  border: solid 1px #48caff;
  &:hover {
    box-shadow: 0 0 2px 0 #48caff;
  }
`;
