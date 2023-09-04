import React from 'react'
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';
import { CloseRounded } from '@mui/icons-material';

const Nav = styled.div`
    background: #fff;
    border-bottom: 1px solid #dadce0;
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 999;
    padding: 15px 85.333px;
    box-shadow: 0px 5.333px 80px 0 rgba(0, 0, 0, 0.1);
    height: 80px;
    align-items: center;
    font-size: 1rem;
    @media (max-width: 960px) {
        trastion: 0.8s all ease;
    }
    @media (max-width: 640px) {
      padding: 0 0px;
  }
`;
const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
      padding: 0 0px;
  }
  
`;

const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
      color: #EA4335;
    }

    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;


const ContactMeButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
    :hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`;
const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 11px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`
const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: #FFFFFF;
    transition: all 0.6s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};
`

 const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const theme = useTheme()
    const scrollToTop = () => {
      scroll.scrollToTop({
        duration: 50, // Duration of the scroll animation in milliseconds
        smooth: 'easeInOutQuart', // Easing function for smooth animation
      });
    };

  return (
    <Nav>
        <NavbarContainer>
            <NavLogo to='/'>
                <a style={{ display: "flex", alignItems: "center", marginBottom: '20;', cursor: 'pointer', color: '#4285F4', }} onClick={scrollToTop} className="logo-button" href="/" >
                    <DiCssdeck size="3rem" /> 
                    {/* <Span>Portfolio</Span> */}
                </a>
            </NavLogo>
            <MobileIcon>
                {!isOpen && <FaBars onClick={() => {
                    setIsOpen(!isOpen)
                }} />}

                {isOpen && <CloseRounded 
                  onClick={() => {
                    setIsOpen(!isOpen)
                  }}/>
                }
            </MobileIcon>
            <NavItems>
                <NavLink href='#about'>About</NavLink>
                <NavLink href='#skills'>Skills</NavLink>
                <NavLink href='#experience'>Experience</NavLink>
                <NavLink href='#projects'>Projects</NavLink>
                <NavLink href='#education'>Education</NavLink>
            </NavItems>
            <ButtonContainer>
                <ContactMeButton href='#contact'>Contact Me</ContactMeButton>
            </ButtonContainer>
            {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <ContactMeButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href='#contact' onClick={() => {
              setIsOpen(!isOpen)
            }} >Contact Me</ContactMeButton>
          </MobileMenu>
        }
        </NavbarContainer>
    </Nav>
  )
}

export default Navbar;