import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import GitHubIcon from '@mui/icons-material/GitHub';
import ResumeIcon from '@mui/icons-material/PersonPin';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Bio } from "../../data/constants";
import myPhoto from "../../images/shridhar.jpeg";
import { useState } from "react";
import { motion } from "motion/react"

const HeroContainer = styled.div`
  background-color: #F0F7FF;  
  display: flex;
  justify-content: center;
  position: relative;
  padding: 60px 20px;
  margin-bottom: 40px;
  z-index: 1;
  @media (max-width: 768px) {
    margin-bottom: 0px;
  }
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
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
  background: linear-gradient(88.28deg, #0094FF 16.83%, #9B8FFE 44.77%, #FF33DE 71.88%, #FF60E6 98.01%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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


const MotionButtonContainer = motion(styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 14px;

  @media (max-width: 768px) {
    display: inline-grid;
    gap: 4px;
  }
`);

const MotionButton = motion(styled.a`
  position: relative;
  background-color: #0d8ae5;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 10px;
  font-family: "Google Sans", Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 10px;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
  max-width: 380px;
  min-width: 100px;
  min-height: 40px;
  margin: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #185abc;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100px;
    height: 100%;
    background-image: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0) 70%
    );
    top: 0;
    left: -100px;
    animation: shine 2s infinite linear;
  }

  @media (max-width: 640px) {
    font-size: 14px;
    max-width: 380px;
    min-width: 50px;
    min-height: 20px;
  }

  @keyframes shine {
    0% {
      left: -100px;
    }
    100% {
      left: 100%;
    }
  }
`);

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.2, duration: 0.5 },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};


const hiddenMask = `repeating-linear-gradient(to left, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to left, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
      <HeroContainer id="about">
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
            <MotionButtonContainer
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <MotionButton variants={childVariants} href={Bio.resume} target="display">
      <ResumeIcon style={{ marginRight: "8px" }} /> Resume
    </MotionButton>
    <MotionButton variants={childVariants} href={Bio.linkedin} target="display">
      <LinkedInIcon style={{ marginRight: "8px" }} /> LinkedIn
    </MotionButton>
    <MotionButton variants={childVariants} href={Bio.github} target="display">
      <GitHubIcon style={{ marginRight: "8px" }} /> GitHub
    </MotionButton>
  </MotionButtonContainer>

          </HeroLeftContainer>
          <HeroRightContainer id="Right">
            <motion.div
                initial={false}
                animate={
                  isLoaded && isInView
                    ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                    : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                }
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
                onViewportEnter={() => setIsInView(true)}
              >
                <Img src={myPhoto} alt="hero-image" onLoad={() => setIsLoaded(true)}/>
              </motion.div>
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
  );
};

export default Hero;
