import React from 'react';
import styled from 'styled-components';

import { mindevice } from './theme/mediaQueries';
import MakiMaki from './images/MakiMaki.PNG';

export default function Projects() {
  return (
    <>
      <ProjectTitleWrapper id="project">
        <ProjectTitle>Projects</ProjectTitle>
      </ProjectTitleWrapper>
      <ProjectsWrapper>
        <ProjectFlexBox>
          <ProjectFrameParent>
            <ProjectFrameChild>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://makimaki.netlify.app/"
              >
                <ProjectImage1 src={MakiMaki} alt="makimaki" />
              </a>
            </ProjectFrameChild>
            <ProjectFrameChild2 />
          </ProjectFrameParent>
          <ProjectTextFlexBox>
            <ProjectFrameTitle>MakiMaki</ProjectFrameTitle>
            <ProjectFrameDescription>
              MakiMaki is a template for an asian restaurant.
            </ProjectFrameDescription>
            <ProjectFrameRepo
              rel="noreferrer"
              target="_blank"
              href="https://github.com/furkandmrblk/makimaki"
            >
              ➩ GitHub Repository
            </ProjectFrameRepo>
          </ProjectTextFlexBox>
        </ProjectFlexBox>
        <ProjectFlexBox>
          <ProjectFrameParent>
            <ProjectFrameChild></ProjectFrameChild>
            <ProjectFrameChild2 />
          </ProjectFrameParent>
          <ProjectTextFlexBox>
            <ProjectFrameTitle2>Title</ProjectFrameTitle2>
            <ProjectFrameDescription>
              Lorem ipsum dolor sit amet, consetetur.
            </ProjectFrameDescription>
            <ProjectFrameRepo>➩ GitHub Repository</ProjectFrameRepo>
          </ProjectTextFlexBox>
        </ProjectFlexBox>
        <ProjectFlexBox>
          <ProjectFrameParent>
            <ProjectFrameChild></ProjectFrameChild>
            <ProjectFrameChild2 />
          </ProjectFrameParent>
          <ProjectTextFlexBox>
            <ProjectFrameTitle>Title</ProjectFrameTitle>
            <ProjectFrameDescription>
              Lorem ipsum dolor sit amet, consetetur.
            </ProjectFrameDescription>
            <ProjectFrameRepo>➩ GitHub Repository</ProjectFrameRepo>
          </ProjectTextFlexBox>
        </ProjectFlexBox>
      </ProjectsWrapper>
    </>
  );
}

const ProjectTitleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 13.75rem;
  margin-right: 200px;

  @media ${mindevice.tablet} {
    margin-right: 600px;
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

const ProjectsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 3.0625rem;

  @media ${mindevice.laptop} {
    padding: 0rem 12rem;
    justify-content: center;
    align-items: center;
  }
`;

const ProjectFlexBox = styled.div`
  @media ${mindevice.tablet} {
    position: relative;
    display: flex;
    flex-direction: row;

    @media ${mindevice.laptop} {
      justify-content: center;
      flex: 2;
    }
  }
`;

const ProjectTextFlexBox = styled.div`
  margin-bottom: 3.75rem;

  @media ${mindevice.tablet} {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-bottom: 0;
  }

  @media ${mindevice.laptop} {
    justify-content: center;
    flex: 1;
    max-height: 22rem;
  }
`;

const ProjectTitle = styled.h1`
  text-transform: uppercase;
  font-size: 1.25rem;
  font-weight: 300;
  margin-bottom: 6.5625rem;

  @media ${mindevice.tablet} {
    font-size: 1.5rem;
  }
`;

const ProjectFrameTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 300;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.bluegreen};

  @media ${mindevice.tablet} {
    margin-left: 10px;
    font-size: 1.75rem;
  }
`;

const ProjectFrameTitle2 = styled.h1`
  font-size: 1.25rem;
  font-weight: 300;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.purple};

  @media ${mindevice.tablet} {
    margin-left: 10px;
    font-size: 1.75rem;
  }
`;

const ProjectFrameDescription = styled.h1`
  font-size: 0.875rem;
  font-weight: 300;
  max-width: 14.375rem;
  margin-left: 0.7rem;
  margin-bottom: 2.1875rem;

  @media ${mindevice.tablet} {
    font-size: 1rem;
  }

  @media ${mindevice.laptop} {
    max-width: 16rem;
  }
`;

const ProjectFrameRepo = styled.a`
  font-size: 0.875rem;
  font-weight: 300;
  max-width: 14.375rem;
  margin-left: 0.7rem;
  margin-bottom: 3.75rem;
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};
  transition: all 0.15s ease-in-out;

  &:visited {
    color: #fff;
  }

  &:hover {
    color: ${(props) => props.theme.colors.bluegreen};
  }

  @media ${mindevice.tablet} {
    font-size: 1rem;
    margin-bottom: 0rem;
  }
`;

const ProjectFrameParent = styled.div`
  position: relative;
  height: 10.8125rem;
  width: 16.5625rem;
  margin-bottom: 1.3125rem;

  @media ${mindevice.tablet} {
    height: 16.21875rem;
    width: 24.84375rem;
    margin-bottom: 4rem;
  }

  @media ${mindevice.laptop} {
    height: 22.70625rem;
    width: 34.78125rem;
    margin-bottom: 8rem;
  }

  @media ${mindevice.desktopS} {
    height: 34.06rem;
    width: 52.17rem;
  }
`;

const ProjectFrameChild = styled.div`
  z-index: 1;
  position: absolute;
  height: 10.21rem;
  width: 16.0625rem;
  background-color: #0d0d0d;
  border: 1px solid #fff;
  box-sizing: border-box;

  @media ${mindevice.tablet} {
    height: 15.315rem;
    width: 24.09375rem;
  }

  @media ${mindevice.laptop} {
    height: 21.441rem;
    width: 33.73125rem;
  }

  @media ${mindevice.desktopS} {
    height: 32.1615rem;
    width: 50.596975rem;
  }
`;

const ProjectFrameChild2 = styled.div`
  z-index: 0;
  position: absolute;
  height: 10.375rem;
  width: 15.5625rem;
  margin-top: 0.4375rem;
  margin-left: 1rem;
  background-color: #0d0d0d;
  border: 1px solid #fff;
  box-sizing: border-box;

  @media ${mindevice.tablet} {
    height: 15.315rem;
    width: 24.09375rem;
  }

  @media ${mindevice.laptop} {
    height: 21.441rem;
    width: 33.73125rem;
  }

  @media ${mindevice.desktopS} {
    height: 32.1615rem;
    width: 50.596975rem;
  }
`;

const ProjectImage1 = styled.img`
  height: 161px;
  width: 255px;

  @media ${mindevice.tablet} {
    height: 241.5px;
    width: 382.5px;
  }

  @media ${mindevice.laptop} {
    height: 21.341rem;
    width: 33.57125rem;
  }

  @media ${mindevice.desktopS} {
    height: 31.9915rem;
    width: 50.496975rem;
  }
`;
