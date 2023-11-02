import React, { useState, useEffect } from 'react'
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';
import Logo from '../../images/Logo.svg'
import {Drawer} from '@mui/material'

const Nav = styled.div`
    backface-visibility: hidden;
    background-color: #fff;
    height: 56px;
    transform: translate3d(0,0,0);
    transition: box-shadow .25s;
    width: 100%;
    position: relative;
    z-index: 91;

    @media (max-width: 960px) {
        trastion: 0.8s all ease;
    }
    @media (max-width: 640px) {
      padding: 0 0px;
    }
    &.scrolled {
      box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);
      position: fixed;
      top: 0;
      left: 0;
    }
`;
const NavbarContainer = styled.div`
  z-index: 1;
  // max-width: 1200px;
  max-width: 1440px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #fff;
  border-bottom: 1px solid transparent;
  height: 56px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
`;

const NavLogo = styled(LinkR)`
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
    align-items: center;
    justify-content:center;
    gap: 32px;
    margin-left: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

const NavLink = styled.a`
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    color: #3c4043;
    line-height: 20px;
    font-size: 14px;
    font-weight: 400;
    position: relative;

    :hover {
      color: #EA4335;
    }

    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;


const ContactMeButton = styled.a`
  border: 1.8px solid rgb(30, 94, 219);
  -webkit-box-pack: center;
  justify-content: center;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 50%;
  border-radius: 10px;
  color: rgb(30, 94, 219);
  cursor: pointer;
  padding: 0px 10px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  margin-right: 20px;
  transition: all 0.6s ease-in-out 0s;
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
    display: flex;
    -webkit-box-pack: start;
    justify-content: start;
    -webkit-box-align: center;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.text_primary};

    justify-content: center;
    -webkit-box-align: center;
    position: relative;
    width: 50px;
  }
`
const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    top: 55px;
    right: 0;
    width: 100%;
    padding: 20px;
    background: #FFFFFF;
    transition: all 0.6s ease-in-out;
    z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};
`
 const MobileLink = styled.a`
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: #3c4043;
  line-height: 20px;
  font-size: 16px;
  font-weight: 400;
  position: relative;

  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const theme = useTheme()
    const scrollToTop = () => {
      scroll.scrollToTop({
        duration: 50, 
        smooth: 'easeInOutQuart', 
      });
    };

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <Nav className={isScrolled ? 'scrolled' : ''} >
        <NavbarContainer>
        
            <NavLogo to='/'>
                <a style={{ display: "flex", alignItems: "center", marginBottom: '20;', cursor: 'pointer', color: '#4285F4', }} onClick={scrollToTop} className="logo-button" href="/" >
                <img src={Logo} alt="logo"  style={{ width: '30px', height: '30px' }} />
                </a>
            </NavLogo>
            <MobileIcon>
                {!isOpen && <FaBars onClick={() => {
                    setIsOpen(!isOpen)
                }} />}
            </MobileIcon>
            <NavItems>
                <NavLink href='#about'>About</NavLink>
                <NavLink href='#experience'>Experience</NavLink>
                <NavLink href='#skills'>Skills</NavLink>
                <NavLink href='#projects'>Projects</NavLink>
                <NavLink href='#education'>Education</NavLink>
            </NavItems>
            <ButtonContainer>
                <ContactMeButton href='#contact'>Contact Me</ContactMeButton>
            </ButtonContainer>
            {
          isOpen &&
            <Drawer anchor="left" open={isOpen} onClose={() => {
              setIsOpen(!isOpen)
            }} style={{width: "calc(100% - 80px)"}}>
              <div style={{height: '56px',alignItems: 'center', display: 'flex',paddingLeft: '20px',borderBottom: "1px solid #dadce0"}}>
                <NavLogo to='/'>
                  <a style={{ display: "flex", alignItems: "center", marginBottom: '20;', cursor: 'pointer', color: '#4285F4', }} onClick={scrollToTop} className="logo-button" href="/" >
                  <img src={Logo} alt="logo"  style={{ width: '30px', height: '30px' }} />
                  </a>
                </NavLogo>
              </div>
              <div style={{paddingTop: "20px"}}>
              <MobileMenu>
                <MobileLink href="#about" onClick={() => {
                  setIsOpen(!isOpen)
                }}>About</MobileLink>
                <MobileLink href='#experience' onClick={() => {
                  setIsOpen(!isOpen)
                }}>Experience</MobileLink>            
                <MobileLink href='#skills' onClick={() => {
                  setIsOpen(!isOpen)
                }}>Skills</MobileLink>
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
            </div>
            </Drawer>
        }
        </NavbarContainer>
    </Nav>
  )
}

export default Navbar;