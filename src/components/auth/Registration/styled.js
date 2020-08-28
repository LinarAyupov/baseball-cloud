import styled from "styled-components";
import Link from "../../ui/Link";
import UserTypeCheck from "../../SvgComponents/UserTypeCheck";

export const CheckedIcon = styled(UserTypeCheck)`
  margin-right: 6px;
`;

export const TypeButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 20px;
`;
const Button = styled.button`
  width: 50%;
  padding: 15px 5px 17px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  align-items: center;
  color: ${(props) => (!props.isActive ? " #35c32a" : "#fff")};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.13;
  border-radius: 0;
  border: solid 1px #35c32a;
  background-color: ${(props) => (props.isActive ? " #35c32a" : "#fff")};
  outline: none;
  &:hover {
    background-color: #35c32a;
    color: #fff;
  }
`;

export const TypeBtnLeft = styled(Button)`
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const TypeBtnRight = styled(Button)`
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const InputsWrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

export const LegalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0 8px;
`;
export const LegalLink = styled(Link)`
  color: #48bbff;
  text-decoration: underline;
  &:hover {
    color: #48bbff;
  }
`;
