import React from 'react';
import styled, { keyframes } from 'styled-components';

import HeroImg from './images/HeroImg.svg';
import GitHubLogo from './images/githublogo.svg';
import LinkedInLogo from './images/linkedin.png';
import { mindevice, maxdevice } from './theme/mediaQueries';

export default function Hero() {
  return (
    <>
      <HeroWrapper>
        <HeroImage />

        <HeroText>Hi, I'm Furkan.</HeroText>
        <HeroText2>A Web Developer.</HeroText2>
        <HeroText3>
          <span style={{ color: '#5b56f4' }}>{'<>'} </span>I create Websites.
        </HeroText3>
        <HeroText4>
          <span style={{ color: '#2C9487' }}>{'<>'} </span> Unique.
          Unparalleled.
        </HeroText4>
      </HeroWrapper>
      <HeroWrapper2>
        <Links>
          <GitHub target="_blank" href="https://github.com/furkandmrblk" />
          <LinkedIn
            target="_blank"
            href="https://www.linkedin.com/in/ibrahim-furkan-demirbilek-a6a0421b6/"
          />
        </Links>
      </HeroWrapper2>
    </>
  );
}

const HeroWrapper = styled.div`
  padding: 4rem 3.375rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  overflow-x: hidden;

  @media ${mindevice.tablet} {
    padding: 11rem 3.375rem 4rem;
    flex-direction: row;
  }
`;

const HeroWrapper2 = styled.div`
  padding: 0 3.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  overflow-x: hidden;
`;

const herotextmobile = keyframes`
    0% {opacity: 0}
    75% {opacity: 0}
    80% {opacity: 0.3}
    90% {opacity: 0.7}
    95% {opacity: 0.9}
    100% {opacity: 1}
`;

const HeroText = styled.div`
  display: block;
  position: absolute;
  font-size: 20px;
  margin-bottom: 240px;
  margin-right: 120px;

  @media ${maxdevice.tablet} {
    animation-name: ${herotextmobile};
    animation-duration: 2s;
    animation-iteration-count: 1;
    opacity: 1;
  }

  @media ${mindevice.tablet} {
    margin-right: 0;
    margin-left: 302px;
    margin-top: 20px;
    animation: typing 2s steps(15, end) forwards, blink 1s 2;
    overflow: hidden;
    white-space: nowrap;
    width: 15ch;

    @keyframes typing {
      0% {
        width: 0ch;
      }
      100% {
        width: 15ch;
      }
    }
    @keyframes blink {
      100% {
        border-right: 2px solid transparent;
      }
      50% {
        border-right: 2px solid #fff;
      }
    }
  }
`;
const HeroText2 = styled.div`
  display: block;
  position: absolute;
  font-size: 20px;
  margin-bottom: 170px;
  margin-right: 78px;

  @media ${maxdevice.tablet} {
    animation-name: ${herotextmobile};
    animation-duration: 2s;
    animation-iteration-count: 1;
    opacity: 1;
  }

  @media ${mindevice.tablet} {
    opacity: 0;
    margin-right: 0;
    margin-left: 302px;
    margin-top: 20px;
    animation: typing 2s steps(15, end) forwards, blink 1s 4;
    animation-delay: 2s;
    overflow: hidden;
    white-space: nowrap;
    width: 15ch;

    @keyframes typing {
      0% {
        opacity: 1;
        width: 0ch;
      }
      100% {
        width: 15ch;
        opacity: 1;
      }
    }
    @keyframes blink {
      100% {
        border-right: 2px solid transparent;
      }
      50% {
        border-right: 2px solid #fff;
      }
    }
  }
`;

const HeroText3 = styled.div`
  display: block;
  position: absolute;
  font-size: 20px;

  @media ${maxdevice.tablet} {
    animation-name: ${herotextmobile};
    animation-duration: 2s;
    animation-iteration-count: 1;
    opacity: 1;
  }

  @media ${mindevice.tablet} {
    margin-right: 0;
    margin-left: 360px;
    margin-top: 20px;
  }
`;

const HeroText4 = styled.div`
  display: block;
  position: absolute;
  font-size: 20px;
  margin-top: 70px;
  margin-left: 35px;

  @media ${maxdevice.tablet} {
    animation-name: ${herotextmobile};
    animation-duration: 2s;
    animation-iteration-count: 1;
    opacity: 1;
  }

  @media ${mindevice.tablet} {
    margin-right: 0;
    margin-left: 394px;
    margin-top: 90px;
  }
`;

const heroimagemobile = keyframes`
    0% {opacity: 1}
    100% {opacity: 0}
`;

const HeroImage = styled.div`
  background-image: url(${HeroImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 400px;
  width: 600px;
  margin-left: 280px;
  margin-top: 30px;

  @media ${maxdevice.tablet} {
    animation-name: ${heroimagemobile};
    animation-duration: 2s;
    animation-iteration-count: 1;
    opacity: 0;
  }

  @media ${mindevice.tablet} {
    margin-left: 0;
    margin-right: 30px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GitHub = styled.a`
  background-image: url(${GitHubLogo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 2.6125rem;
  width: 2.3075rem;
  margin-right: 1.74125rem;
  cursor: pointer;
`;

const LinkedIn = styled.a`
  background-image: url(${LinkedInLogo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 2.36375rem;
  width: 2.36375rem;
  cursor: pointer;
`;
