import React from 'react';
import styled from 'styled-components';
import { maxdevice } from './theme/mediaQueries';

import Navbar from './Navbar';
import Footer from './Footer';

export default function AboutMe() {
  return (
    <div>
      <Navbar />
      <AboutMeFlexBox>
        <AboutMeTitle>
          <span style={{ color: '#5b56f4' }}>{'<'} </span>About Me
          <span style={{ color: '#2C9487' }}> {'>'} </span>
        </AboutMeTitle>
        <AboutMeText>
          My name is{' '}
          <span style={{ color: '#5b56f4' }}>
            {'Ibrahim-Furkan Demirbilek'}
          </span>
          .<br /> I’m{' '}
          <span style={{ color: '#2C9487' }}>{'20 years old'} </span> & located
          in Berlin, Germany. <br /> I am majoring in business administration &
          I am specializing in innovation management.
        </AboutMeText>
        <AboutMeText>
          At the end of 2020 I quickly realized that I have a passion for web
          development & web design. I am a self-taught web developer & I like to
          create my own designs.
        </AboutMeText>
      </AboutMeFlexBox>
      <Footer />
    </div>
  );
}

const AboutMeFlexBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: justify;

  padding-top: 13.75rem;

  @media ${maxdevice.mobileL} {
  }
`;

const AboutMeTitle = styled.h1`
  margin: 0;
  font-size: 2rem;
  font-weight: 400;

  margin-bottom: 5.625rem;

  @media ${maxdevice.tablet} {
    font-size: 1.25rem;
  }

  @media ${maxdevice.mobileL} {
    font-size: 1rem;
  }
`;

const AboutMeText = styled.h1`
  margin: 0 1.5rem 2.5rem 1.5rem;
  font-size: 1.25rem;
  font-weight: 300;
  max-width: 28rem;

  @media ${maxdevice.tablet} {
    font-size: 1rem;
    max-width: 22.2rem;
  }

  @media ${maxdevice.mobileL} {
    font-size: 0.75rem;
    max-width: 17rem;
  }
`;
