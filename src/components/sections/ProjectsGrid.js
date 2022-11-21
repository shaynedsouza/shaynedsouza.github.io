import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../Icon/Icon';
import {Links as Dlink} from '../Links/Links';

const ProjectsGrid = ({projects, type}) => {

  const grid = {
    hidden: {
      opacity: 0,
      y: 0,
      borderWidth: 0
    },
    initial: {
      opacity: 1,
      y: 0,
    },
    hover: {
      borderWidth: 4
    }
  }

  const image = {
    initial: {
      scale: 1
    },
    hover: {
      scale: 1.1
    }
  }

  const details = {
    initial: {
      y: "70%"
    },
    hover: {
      y: 0
    }
  }

  return (
    <ProjectsGridContainer>
      {projects.map((project, i) => (
        <Link
          key={project.id}
          to={`${type}/${project.id}`}
        >
        <ProjectGridContainer
          initial='hidden'
          whileInView={'initial'}
          whileHover='hover'
          variants={grid}
          index={i}>
          <ProjectImage variants={image} image={project?.images[0]?.link} />
          <ProjectDetails  variants={details}>
          
            <Title>{project.title}</Title>
            <Subtitle>{project.subtitle}</Subtitle>
          </ProjectDetails>
          
        </ProjectGridContainer>
        </Link>
      ))}
    </ProjectsGridContainer>
  )
}

const ProjectsGridContainer = styled.div`
  margin: 0 auto;
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  flex-direction: column;
  row-gap: 48px;
`;
const AComponent = styled.a `
color:inherit;
    text-decoration:none;
`
const ProjectGridContainer = styled(motion.div)`
  width: 100%;
  height: 50vh;
  margin: 0 auto;
  max-width: 400px;
  max-height: 400px;
  overflow: hidden;
  position: relative;
  border-radius: 20px;
  border: 8px solid #fdaf3f;
`

const ProjectImage = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: black; /* fallback color */
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
  transition: all 0.2s ease-in;
`;

const ProjectDetails = styled(motion.div)`
  width: 100%;
  height: 90%;
  
  backdrop-filter: blur(5px);
  background-color: rgba(0,0,0,0.6);
  border-top: 4px solid #fdaf3f;

  padding: 20px;
  color: white;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Title = styled.h2`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 44px;
`;

export const Subtitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  // margin-top: 24px;
`;

const Button = styled(motion.button)`
  background: #fdaf3f;
  width: fit-content;
  justify-self: end;
  border-radius: 16px;
  padding: 16px 24px;
  border: none;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  column-gap: 8px;
`;




export default ProjectsGrid;
