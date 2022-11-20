import styled from 'styled-components';
import Links from '../components/Links/Links';
import ProjectsGrid from '../components/sections/ProjectsGrid';
import ReactTooltip from 'react-tooltip';
import "aos/dist/aos.css";
import { motion } from 'framer-motion';
import profilepic from '../profile.jpg'
import portfolioData from '../portfolioData';

const Home=(props) => {
    const {title, subtitle, links, projects, image} = portfolioData;
    return (<PageContainer >
        <BackgroundSection 
          >
        
          <ProfilePicComponent 
           src ={profilepic}
        
          />
         
          <Title>{title}</Title>
          <StyledLinks links={links} color='white' />
         
          
        </BackgroundSection>
        <Title>Projects</Title>
        <ProjectsGrid projects={projects} />
        <ReactTooltip />
      </PageContainer>

  )
}

const PageContainer = styled.div`margin:auto; width:100%;`;

const BackgroundSection = styled(motion.div)`
  // background: linear-gradient( rgba(0,0,0,0),rgba(1,1,1,1)), url(${props => props.image});
  background-color:black;
  // background-size: cover;
  // background-repeat: no-repeat;
  display: flex;
  flex-direction:column;
  margin:auto;
  padding:10%; 
  position: relative;
  width:fit-content;
 
`;
const ProfilePicComponent =styled(motion.img)`

max-width: 50%;
height: auto;
border-radius: 50%;
align-self: center;
`
;
const Title = styled(motion.h1)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 3em;
  line-height: 77px;
  color: #fff;
  text-align: center;
  position: relative;
  bottom: 0;
  left: 0;
  align-self: center;
`;

const StyledLinks = styled(Links)`
  position: relative;
  top: 0;
  right: 0;
  align-self: center;
`;



export default Home;