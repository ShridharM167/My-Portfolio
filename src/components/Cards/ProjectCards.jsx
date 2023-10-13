import React from 'react'
import styled from 'styled-components'


const Button = styled.button`
    display: none;
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.text_black};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
`
const Card = styled.div`
    width: 330px;
    height: auto;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border: 1px solid #dadce0;
    border-radius: 28px;
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 14px;
    transition: border .25s;
    justify-content: space-between;
    position: relative;
    z-index: 1;
    align-items: center;
    &:hover {
        -webkit-box-shadow: 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15);
        box-shadow: 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15);
    }
    &:hover ${Button} {
        display: block;
    }
    @media (max-width: 960px) {
        -webkit-box-shadow: 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15);
        box-shadow: 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15);
    }
`

const Image = styled.img`
    width: 100%;
    height: 180px;
    border-radius: 10px;
`

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: #5f6368;
    background-color: ${({ theme }) => theme.primary + 15};
    padding: 2px 8px;
    border-radius: 10px;
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`
const Title = styled.div`
    padding: 10px 0px;
    font-size: 20px;
    font-weight: 800;
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    @media only screen and (max-width: 768px){
        font-size: 16px;
    }
`

const Date = styled.div`
    font-size: 12px;
    margin-top: 8px;
    margin-left: 2px;
    font-weight: 400;
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`


const Description = styled.div`
    font-weight: 400;
    color: #5f6368;
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`
const More = styled.div`
    color: #1a73e8;
    margin: 17px 0px 3px;
    text-align: center;

    @media (min-width: 1024px){
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: initial;
    line-height: 24px;
  }
`
const ProjectCards = ({project,setOpenModal}) => {
    return (
        <Card onClick={() => setOpenModal({state: true, project: project})}>
            <Image src={project.image}/>
            <Details>
                <Title>{project.title}</Title>
                <Description>{project.description}</Description>
                <Date>{project.date}</Date>
            </Details>
            <Tags>
                {project.tags?.map((tag, index) => (
                <Tag>{tag}</Tag>
                ))}
            </Tags>
            <More> <span>Load more ...</span></More>            
        </Card>
    )
}

export default ProjectCards