import styled from "styled-components";
import Link from "../../ui/Link";

export const InputsWrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

export const Forgotten = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
`;
export const FormFooter = styled.footer`
  width: 100%;
  text-align: center;
  color: #667784;
`;

export const FooterLink = styled(Link)`
  color: #48bbff;
  text-decoration: underline;
  &:hover {
    color: #48bbff;
  }
`;
