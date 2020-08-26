import styled from "styled-components";
import Link from "../ui/Link";

export const LoginView = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  padding: 16px;
`;

export const FormContainer = styled.div`
  background: hsla(0, 0%, 100%, 0.8);
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(10px);
  width: 100%;
  max-width: 450px;
`;

export const FormHeader = styled.div`
  flex-direction: column;
  margin-bottom: 48px;
`;

export const FormTitle = styled.h1`
  font-size: 24px;
  line-height: 1.25;
  font-weight: 400;
  -webkit-text-align: center;
  text-align: center;
  color: #667784;
  margin: 0 0 8px 0;
  padding: 0;
`;

export const FormSubtitle = styled.h2`
  font-size: 24px;
  line-height: 1.25;
  font-weight: 400;
  -webkit-text-align: center;
  text-align: center;
  color: #667784;
  font-size: 16px;
  margin: 0;
`;

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
