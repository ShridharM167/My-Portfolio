import { useState} from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import './App.css';
import { lightTheme } from './utils/Themes.js'
import Navbar from "./components/NavBar/navBar.js";
import HeroSection from "./components/About/about.js";
import Skills from "./components/Skills/skills.js";
import Projects from "./components/Projects/projects.js";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer.js";
import Experience from "./components/Experience/experience.js";
import Education from "./components/Education/education.js";
import ProjectDetails from "./components/ProjectDetails/projectDetails.jsx";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  width: 100%;
  // background: linear-gradient(to bottom, white, #e8f0fe);
  // background: #f6f9fc;
`
function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme={lightTheme}>
      <Router >
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
          <Experience />
          <Skills /> 
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Education />
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;