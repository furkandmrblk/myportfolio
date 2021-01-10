import React from 'react';
import styled from 'styled-components';

import { mindevice } from './theme/mediaQueries';
import LogoImg from './images/Logo.png';
import LinkedInLogo from './images/linkedin.png';
import GitHubLogo from './images/githublogo.svg';

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterGrid>
        <Links>
          <FooterLinks href="#home">Home</FooterLinks>
          <FooterLinks href="#project">Projects</FooterLinks>
          <FooterLinks href="/">About</FooterLinks>
        </Links>
        <Logo href="#home">
          <LogoLogo src={LogoImg} alt="logoimg" />
        </Logo>
        <LogoLinks>
          <GitHub target="_blank" href="https://github.com/furkandmrblk" />
          <LinkedIn
            target="_blank"
            href="https://www.linkedin.com/in/ibrahim-furkan-demirbilek-a6a0421b6/"
          />
        </LogoLinks>
      </FooterGrid>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  position: relative;
  padding: 13.75rem 3.0625rem 0 3.0625rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 33.3% 33.4% 33.3%;
  grid-template-rows: 4.875rem 4.875rem;
  grid-template-areas:
    'Links Links Links'
    'Logo Socials Socials';

  @media ${mindevice.tablet} {
    grid-template-columns: 25% 50% 25%;
    grid-template-rows: 4.875rem;
    grid-template-areas: 'Logo Links Socials';
  }
`;

const LogoLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  grid-area: Socials;
`;

const GitHub = styled.a`
  background-image: url(${GitHubLogo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 2.6125rem;
  width: 2.3075rem;

  cursor: pointer;

  @media ${mindevice.tablet} {
    margin-left: 1.7rem;
  }

  @media ${mindevice.laptopL} {
    margin-left: 6rem;
  }
`;

const LinkedIn = styled.a`
  background-image: url(${LinkedInLogo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 2.36375rem;
  width: 2.36375rem;

  cursor: pointer;

  @media ${mindevice.tablet} {
    margin-right: 1.7rem;
  }
  @media ${mindevice.laptopL} {
    margin-right: 6rem;
  }
`;

const Logo = styled.a`
  grid-area: Logo;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

const LogoLogo = styled.img`
  height: 31px;
  width: 39px;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  grid-area: Links;
`;

const FooterLinks = styled.a`
  font-size: 0.875rem;
  font-weight: 300;
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};

  &:visited {
    color: #fff;
  }

  &:hover {
    color: ${(props) => props.theme.colors.purple};
  }
`;
