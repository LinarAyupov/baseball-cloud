import React from "react";
import { FooterWrapper, LegalCopy, LegalLink, SocialLink } from "./styled";

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <LegalCopy>© 2018 BaseballCloud</LegalCopy>
        <LegalLink to="/legal/terms">Terms of Service</LegalLink>
        <LegalLink to="/legal/privacy">Privacy Policy</LegalLink>
      </div>
      <div>
        <SocialLink
          href="https://baseballcloud.blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </SocialLink>
        <SocialLink
          href="http://twitter.com/baseballcloudus"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </SocialLink>
        <SocialLink
          href="http://www.instagram.com/baseballcloudus/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </SocialLink>
        <SocialLink
          href="http://www.facebook.com/BaseballCloudUS/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </SocialLink>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
