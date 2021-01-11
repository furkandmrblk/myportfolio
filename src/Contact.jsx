import React from 'react';
import styled from 'styled-components';
import { mindevice } from './theme/mediaQueries';

export default function Contact() {
  return (
    <>
      <ContactTitleWrapper>
        <ContactTitle id="contactme">Contact Me</ContactTitle>
      </ContactTitleWrapper>
      <ContactWrapper>
        <ContactFrame>
          <ContactFrameChild>
            <ContactFrameWrapper name="contact" action="/contact" method="post">
              <input type="hidden" name="form-name" value="contact" />
              <EmailTitle>e-mail</EmailTitle>
              <EmailInput required name="email" type="email" />
              <SubjectTitle>subject</SubjectTitle>
              <SubjectInput required name="subject" type="text" />
              <MessageTitle>message</MessageTitle>
              <MessageInput required name="message" type="text" />
              <SubmitButton type="submit">Send</SubmitButton>
            </ContactFrameWrapper>
          </ContactFrameChild>
          <ContactFrameChild2 />
        </ContactFrame>
      </ContactWrapper>
    </>
  );
}

const ContactTitleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 13.75rem;
  margin-right: 200px;

  @media ${mindevice.tablet} {
    margin-right: 565px;
  }

  @media ${mindevice.laptop} {
    padding-top: 13.75rem;
    margin-right: 800px;
  }

  @media ${mindevice.laptopL} {
    padding-top: 13.75rem;
    margin-right: 1000px;
  }
`;

const ContactWrapper = styled.div`
  position: relative;
  padding: 0 3.0625rem;

  @media ${mindevice.laptop} {
    padding: 0rem 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ContactTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 300;
  text-transform: uppercase;
  margin-top: 1.875rem;
  margin-bottom: 6.5625rem;

  @media ${mindevice.tablet} {
    font-size: 1.5rem;
  }
`;

const ContactFrame = styled.div`
  position: relative;
  height: 30.375rem;
  width: 16.6875rem;

  @media ${mindevice.tablet} {
    height: 32.375rem;
    width: 37.6875rem;
  }

  @media ${mindevice.laptop} {
    margin-right: 200px;
  }

  @media ${mindevice.desktop} {
    margin-right: 400px;
  }
`;

const ContactFrameChild = styled.div`
  z-index: 1;
  display: flex;
  justify-content: column;
  position: absolute;
  height: 28.8125rem;
  width: 16.1875rem;
  background-color: #0d0d0d;
  border: 1px solid #fff;
  box-sizing: border-box;

  @media ${mindevice.tablet} {
    height: 30.8125rem;
    width: 37.1875rem;
  }

  @media ${mindevice.laptop} {
    width: 47.3125rem;
  }
`;

const ContactFrameChild2 = styled.div`
  z-index: 0;
  position: absolute;
  height: 28.8125rem;
  width: 16.1875rem;
  background-color: #0d0d0d;
  border: 1px solid #fff;
  box-sizing: border-box;
  margin-top: 1.5625rem;
  margin-left: 0.6rem;

  @media ${mindevice.tablet} {
    height: 30.8125rem;
    width: 37.1875rem;
  }

  @media ${mindevice.laptop} {
    width: 47.3125rem;
  }
`;

const ContactFrameWrapper = styled.form`
  padding: 1.8125rem 0.5rem;

  @media ${mindevice.tablet} {
    padding: 1.8125rem 14rem 1.8125rem 1.5rem;
  }
  @media ${mindevice.laptop} {
    padding: 1.8125rem 19rem 1.8125rem 1.5rem;
  }
`;

const EmailTitle = styled.h1`
  font-size: 0.875rem;
  font-weight: 300;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.bluegreen};

  @media ${mindevice.tablet} {
    font-size: 1.1rem;
  }
`;

const EmailInput = styled.input`
  height: 1.8125rem;
  width: 10.1875rem;
  border: 1px solid #fff;
  border-radius: 1px;
  box-sizing: border-box;
  color: #fff;
  background-color: #0d0d0d;
  margin-bottom: 2.0625rem;

  @media ${mindevice.tablet} {
    height: 2.3rem;
    width: 15rem;
    margin-bottom: 0.2rem;
  }
`;

const SubjectTitle = styled.h1`
  font-size: 0.875rem;
  font-weight: 300;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.purple};

  @media ${mindevice.tablet} {
    font-size: 1.1rem;
  }
`;

const SubjectInput = styled.input`
  height: 1.8125rem;
  width: 10.1875rem;
  border: 1px solid #fff;
  border-radius: 1px;
  box-sizing: border-box;
  color: #fff;
  background-color: #0d0d0d;
  margin-bottom: 2.0625rem;

  @media ${mindevice.tablet} {
    height: 2.3rem;
    width: 15rem;
    margin-bottom: 0.2rem;
  }
`;

const MessageTitle = styled.h1`
  font-size: 0.875rem;
  font-weight: 300;
  text-transform: uppercase;
  color: #fff;

  @media ${mindevice.tablet} {
    font-size: 1.1rem;
  }
`;

const MessageInput = styled.textarea`
  resize: none;
  height: 8rem;
  width: 13rem;
  border: 1px solid #fff;
  border-radius: 1px;
  box-sizing: border-box;
  color: #fff;
  background-color: #0d0d0d;

  @media ${mindevice.tablet} {
    height: 8.9rem;
    width: 25rem;
    margin-bottom: 1rem;
  }
`;

const SubmitButton = styled.button`
  padding: 0.15rem 0.5rem;

  border: solid 1px #fff;
  border-radius: 1px;

  color: #fff;
  background-color: #0d0d0d;

  font-size: 0.6rem;
  font-weight: 300;
  text-transform: uppercase;

  @media ${mindevice.tablet} {
    padding: 0.4rem 2rem;
  }

  &:hover {
    background-color: #fff;
    color: #0d0d0d;
    border: solid 1px #0d0d0d;
  }
`;
