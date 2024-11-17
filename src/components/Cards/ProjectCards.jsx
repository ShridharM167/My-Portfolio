import React from 'react'
import styled from 'styled-components'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';

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
    text-align: center;
    padding: 0px 0px 16px 16px;
    cursor: pointer ;
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
    <Card sx={{ maxWidth: 345 }} style={ {borderRadius:"12px",backgroundImage: "linear-gradient(to right bottom, rgb(178, 212, 255), rgb(234, 230, 255))"}}>
      <CardActionArea onClick={() => setOpenModal({state: true, project: project})}>
        <CardMedia
        component="img"
        image={project.image}
        alt="projectImage"
        style={{ 
          width: "100%", 
          height: "auto", 
          objectFit: "cover" 
        }}
        />
        <CardContent>
            <Details>
                <Title>{project.title}</Title>
                <Description>{project.description}</Description>
                <Date>{project.date}</Date>
            </Details>
        </CardContent>
      </CardActionArea>
      <CardActions >
      <More onClick={() => setOpenModal({state: true, project: project})}> <span>Load more ...</span></More> 
      </CardActions>
    </Card>
    )
}

export default ProjectCards