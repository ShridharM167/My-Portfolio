import React from "react";
import styled from "styled-components";
import Chip from "@mui/material/Chip";

const Document = styled.img`
  display: none;
  height: 70px;
  width: fit-content;
  background-color: #000;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  color: #5f6368;
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Span = styled.span`
  white-space: pre-wrap;
  text-align: justify;
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const More = styled.div`
  color: #1a73e8;
  margin: 17px 0px 3px;
  text-align: center;
  display: none;
  @media (min-width: 1024px) {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: initial;
    line-height: 24px;
  }
`;

const Card = styled.div`
  width: 800px;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
  @media only screen and (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 300px;
  }

  &:hover ${Document} {
    display: flex;
  }

  &:hover ${Span} {
    overflow: visible;
    -webkit-line-clamp: unset;
  }
  &:hover ${More} {
    display: none;
  }
  @media (hover: none) {
    ${More} {
      display: flex;
    }
  }

  border: 0.1px solid #306ee8;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

const Image = styled.img`
  height: 50px;
  width: 50px;
  background-color: white;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Role = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #4285f4;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const Company = styled.div`
  font-size: 16px;
  font-weight: 800;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    gap: 8px;
    margin-bottom: 6px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  @media only screen and (max-width: 768px) {
    gap: 4px;
  }
`;

const ExperienceCard = ({ experience }) => {
  return (
    <Card>
      <Top>
        <Image src={experience.img} />
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Date>{experience.date}</Date>
        </Body>
      </Top>
      <Description>
        {experience?.skills && (
          <>
            <Skills>
              <b>Skills: </b>
              <ItemWrapper>
                {experience?.skills?.map((skill, index) => (
                  <Chip label={skill} style={{ height: "max-content" }} />
                ))}
              </ItemWrapper>
            </Skills>
          </>
        )}
        {experience?.desc && <Span>{experience?.desc}</Span>}
        <More>Read more ...</More>
      </Description>
    </Card>
  );
};

export default ExperienceCard;
