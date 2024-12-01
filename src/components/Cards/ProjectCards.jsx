import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 0 2px;
`;

const Title = styled.div`
  padding: 10px 0;
  font-size: 20px;
  font-weight: 800;
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  margin-top: 8px;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  font-weight: 400;
  color: #5f6368;
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const LoadMoreButton = styled(animated.div)`
  color: #fff;
  background-color: rgb(13, 138, 229);
  text-align: center;
  padding: 12px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 10px;
  font-weight: 500;
  margin-top: 16px;
  transition: all 0.3s ease;
  display: inline-block;
  width: 90%;
  text-transform: uppercase;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background-color: #185abc;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #003c8f;
    transform: translateY(0);
  }
`;

const StyledCard = styled(animated(Card))`
  background-color: #fff; 
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); 
  overflow: hidden;
  transition: all 0.3s ease;
  width: 100%;
  border-radius: 25px;
    border-radius: 12px;
  background-image: linear-gradient(to right bottom, rgb(178, 212, 255), rgb(234, 230, 255));
  
  &:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2); 
    transform: translateY(-5px); 
  }
`;


const ProjectCards = ({ project, setOpenModal }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false); 
  const cardRef = useRef(null);

  const animation = useSpring({
    transform: isVisible ? 'scale(1)' : 'scale(0.9)',
    opacity: isVisible ? 1 : 0,
    config: { tension: 200, friction: 20 },
  });

  const loadMoreAnimation = useSpring({
    opacity: isHovered ? 0.8 : 1,
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    config: { tension: 180, friction: 15 },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 } 
    );

    const currentRef = cardRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); 
      }
    };
  }, []);

  return (
    <StyledCard
      ref={cardRef}
      style={animation}
      sx={{ maxWidth: 345 }}
      onClick={() => setOpenModal({ state: true, project })}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={project.image}
          alt={project.title}
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
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
      <CardActions style={{justifyContent:"center"}}>
        <LoadMoreButton
          style={loadMoreAnimation}
          onClick={() => setOpenModal({ state: true, project })}
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)} 
        >
          Load more ... 
        </LoadMoreButton>
      </CardActions>
    </StyledCard>
  );
};

export default ProjectCards;
