import styled from 'styled-components';
import Links, { Links as DLinks } from '../components/Links/Links';
import { Subtitle } from '../components/common/StyledComponents';
import ReactTooltip from 'react-tooltip';
import "aos/dist/aos.css";
import { motion } from 'framer-motion';
import profilepic from '../profile.jpg'
import portfolioData from '../portfolioData';
import { useLocation, useParams } from "react-router-dom";
import lodash from 'lodash-es';
import { SectionTitle, Title } from './Home';

import MyStaggeredGrid from '../components/sections/MyStaggeredGrid';
// import Masonry from 'react-masonry-css';

const Project = () => {
  const { id } = useParams();

  const project = portfolioData.projects.find(p => {
    return p.id === id
  })

  const { title, description, links, images, videos, sections, time, team } = project


  return (
    <ProjectContainer>
      <ProjectInnerContainer>

        <Title style={{

          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",

        }}>{title}</Title>


        <Links style={{

          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          width: "100%"
        }} links={links} color='white' />

        <Text style={{

          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          width: "100%"
        }}>Time taken: {time}</Text>

        <Text style={{

          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          width: "100%"
        }}>Team: {team}</Text>
        <br></br>
        <Subtitle style={{

          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          width: "100%"
        }} > <b>{description}</b></Subtitle>


     
        <div className='divider'><span></span><span>Gallery</span><span></span></div>
        <MyStaggeredGrid sections = {sections}></MyStaggeredGrid>
      </ProjectInnerContainer>

    </ProjectContainer >

  )
}

const ProjectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

const ProjectInnerContainer = styled.div`
  padding-left: 4rem;
  padding-right: 4rem;
  margin-top: 6rem;
  @media screen and (max-width: 500px){
    padding-left: 2rem;
    padding-right: 2rem;
    margin-top: 3rem;
  }
`;



const Text = styled.p`
`;




export default Project;