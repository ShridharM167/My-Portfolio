import React from 'react'
import Marquee from "react-fast-marquee";
import styled from 'styled-components'
import { skills } from '../../data/constants'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
padding: 60px 20px;
margin-bottom: 40px;
@media (max-width: 768px) {
    margin-bottom: 0px;
  }
`

const Wrapper = styled.div`

position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1200px;
gap: 12px;
-webkit-box-pack: justify;
-webkit-box-align: center;
background-color: #fff;
border-radius: 4px;
box-shadow: 0 0 60px 0 rgba(0,0,0,.1);

`

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: #5f6368;
    margin-top: 12px;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: center;
  height: 250px;
  @media (max-width: 768px) {
    height: 200px;
  }
`

const SkillItem = styled.div`
  font-size: 16px;
  letter-spacing: -0.5px;
  font-weight: 400;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin: 0px 10px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 4px 4px;
    margin: 0px 6px;
    gap: 3px;
  }
`

const SkillImage = styled.img`
  width: 40px;
  height: 40px;
  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
  }

`

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Explore the skill set that empowers my work. These competencies reflect my commitment to delivering top-tier results in every endeavor.
        </Desc>
        <SkillsContainer>
          {skills.map((skill) => (
            <Marquee autoFill={true} direction={skill.direction}  pauseOnHover={true} gradient={true} gradientWidth={100} >
               {skill.skills.map((item) => (
                   <SkillItem>
                     <SkillImage src={item.image}/>
                     {item.name}
                   </SkillItem>
                 ))}
             </Marquee>
          ))}

        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills