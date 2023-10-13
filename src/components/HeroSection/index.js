import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import GitHubIcon from '@mui/icons-material/GitHub';
import ResumeIcon from '@mui/icons-material/PersonPin';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Bio } from "../../data/constants";
import myPhoto from "../../images/shridhar.jpeg";

const HeroContainer = styled.div`
  background-color: #f5fcff;    
  display: flex;
  justify-content: center;
  position: relative;
  padding: 56px 20px 0px 20px;
  z-index: 1;
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border: 1px solid #dadce0;
  border-radius: 8px;

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 200px;
    max-height: 200px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.span`
  color: ${({ theme }) => theme.primary};
`;

const SubTitle = styled.div`
  text-align: justify;
  color: #5f6368;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0;
  font-family: "Google Sans",Roboto,Arial,Helvetica,sans-serif;
  margin-bottom: 42px;
  @media (max-width: 960px) {
    text-align: justify;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 28px;
    font-weight : 400;
  }
`;

const ButtonContainer= styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    display: inline-grid;
  }
`
const Button = styled.a`
background-color: #1a73e8;
color: #fff;
-webkit-font-smoothing: antialiased;
text-rendering: optimizeLegibility;
-webkit-box-align: center;
align-items: center;
border: 1px solid transparent;
border-radius: 4px;
display: inline-flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
flex-flow: row nowrap;
font-family: "Google Sans",Arial,Helvetica,sans-serif;
font-size: 16px;
font-weight: 500;
justify-content: space-around;
letter-spacing: .5px;
line-height: 24px;
margin: 10px;
max-width: 380px;
min-height: 48px;
min-width: 96px;
overflow: hidden;
padding: 12px 24px 12px 24px;
text-align: center;
text-decoration: none;
vertical-align: middle;

&:hover {
  box-shadow: 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15);
  background-color: #185abc;
}

@media (max-width: 640px) {
    font-size: 14px;
} 

`;

const Hero = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
              {Bio.name}
            </Title>
            <TextLoop>
            Hey, I am
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ButtonContainer>
            <Button href={Bio.resume} target="display">
              <ResumeIcon style={{ marginRight: '8px' }} /> Resume
            </Button>
            <Button href={Bio.linkedin} target="display"> 
              <LinkedInIcon style={{ marginRight: '8px' }} /> LinkedIn
            </Button>
            <Button href={Bio.github} target="display"> 
              <GitHubIcon style={{ marginRight: '8px' }} /> Github
            </Button>
            </ButtonContainer>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img src={myPhoto} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default Hero;
