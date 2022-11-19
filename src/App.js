import styled from 'styled-components';
import Links from './components/Links/Links';
import ProjectsGrid from './components/Projects/ProjectsGrid';
import portfolioData from './portfolioData';
import ReactTooltip from 'react-tooltip';
import "aos/dist/aos.css";
import { motion } from 'framer-motion';


function App() {



  const {title, subtitle, links, projects, image} = portfolioData;

  return (
    <PageContainer>
      <BackgroundSection 
        initial={{opacity: 0, y: 500}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: .5}}
        image={image}>
        <Title>{title}</Title>
        <StyledLinks links={links} color='black' />
      </BackgroundSection>

      <ProjectsGrid projects={projects} />
      <ReactTooltip />
    </PageContainer>
  );
}

const PageContainer = styled.div``;

const BackgroundSection = styled(motion.div)`
  width: 100%;
  height: 90vh;
  background: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;

const Title = styled(motion.h1)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 77px;

  color: #fff;
  padding-left: 48px;
  padding-bottom: 48px;

  position: absolute;
  bottom: 0;
  left: 0;
`;

const StyledLinks = styled(Links)`
  position: absolute;
  top: 0;
  right: 0;
`;

export default App;
