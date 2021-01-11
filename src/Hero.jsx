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
        <HeroTextWrapper>
          <HeroText>Hi, I'm Furkan.</HeroText>
          <HeroText2>A Web Developer.</HeroText2>
          <HeroText3>
            <span style={{ color: '#5b56f4' }}>{'<>'} </span>I create Websites.
          </HeroText3>
          <HeroText4>
            <span style={{ color: '#2C9487' }}>{'<>'} </span> Unique.
            Unparalleled.
          </HeroText4>
        </HeroTextWrapper>
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

const HeroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  margin-top: -12vh;

  @media ${mindevice.tablet} {
    margin-top: -5.5vh;
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
  margin-right: 8rem;
  font-size: 20px;

  @media ${maxdevice.tablet} {
    animation-name: ${herotextmobile};
    animation-duration: 2s;
    animation-iteration-count: 1;
    opacity: 1;
  }

  @media ${mindevice.tablet} {
    margin-top: -0.7rem;
    margin-left: 26.8rem;
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
  margin-right: 5.5rem;
  font-size: 20px;

  @media ${maxdevice.tablet} {
    animation-name: ${herotextmobile};
    animation-duration: 2s;
    animation-iteration-count: 1;
    opacity: 1;
  }

  @media ${mindevice.tablet} {
    margin-left: 24.3rem;
    margin-top: 0.3rem;
    opacity: 0;
    animation: typing 2s steps(16, end) forwards, blink 1s 4;
    animation-delay: 2s;
    overflow: hidden;
    white-space: nowrap;
    width: 16ch;

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
  margin-top: 4rem;
  margin-left: 2rem;
  font-size: 20px;

  @media ${maxdevice.tablet} {
    animation-name: ${herotextmobile};
    animation-duration: 2s;
    animation-iteration-count: 1;
    opacity: 1;
  }

  @media ${mindevice.tablet} {
    margin-top: 3.5rem;
    margin-left: 22.5rem;
    transition: all 200ms ease-in-out;

    &:hover {
      color: ${(props) => props.theme.colors.purple};
    }
  }
`;

const HeroText4 = styled.div`
  font-size: 20px;
  margin-left: 4.1rem;

  @media ${maxdevice.tablet} {
    animation-name: ${herotextmobile};
    animation-duration: 2s;
    animation-iteration-count: 1;
    opacity: 1;
  }

  @media ${mindevice.tablet} {
    margin-left: 24.7rem;
    margin-top: 0.31rem;
    transition: all 200ms ease-in-out;

    &:hover {
      color: ${(props) => props.theme.colors.bluegreen};
    }
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
  transition: all 200ms ease-in-out;

  &:hover {
    transform: scale(0.95);
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
  transition: all 200ms ease-in-out;

  &:hover {
    transform: scale(0.95);
  }
`;
