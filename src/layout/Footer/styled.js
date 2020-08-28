import styled from "styled-components";
import Link from "../../components/ui/Link";

export const FooterWrapper = styled.footer`
  grid-area: ft;
  background: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  height: 40px;
  font-size: 1.4rem;
  @media (max-width: 40em) {
    flex-flow: column;
    height: 116px;
    flex-direction: column-reverse;
  }
`;

export const LegalLink = styled(Link)`
  padding: 8px;
`;

export const LegalCopy = styled.span`
  padding-right: 10px;
`;

export const SocialLink = styled.a`
  padding: 8px;
`;
