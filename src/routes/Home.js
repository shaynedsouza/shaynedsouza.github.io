import styled from 'styled-components';
import Links from '../components/Links/Links';
import ProjectsGrid from '../components/sections/ProjectsGrid';
import { motion } from 'framer-motion';
import profilepic from '../profile.jpg'
import portfolioData from '../portfolioData';
import MyStaggeredGrid from '../components/sections/MyStaggeredGrid';
const Home=(props) => {
    const {title, subtitle, links, projects, image, blogs} = portfolioData;
    return (
      <PageContainer>
        <BackgroundSection>
          <ProfilePicComponent src ={profilepic} />
          <Title style={{

textAlign: "center",
alignItems: "center",
justifyContent: "center",

}}>{title}</Title>
          <Links links={links} color='white' />
        </BackgroundSection>
        <div className='divider'><span></span><span>Projects</span><span></span></div>
        <MyStaggeredGrid sections={projects} width={"500"} />
        <div className='divider'><span></span><span>Blogs</span><span></span></div>
        <MyStaggeredGrid width={"500"}  sections={blogs} />
        
      </PageContainer>

  )
}

const PageContainer = styled.div`
  color: white;
  padding-left: 5rem;
  padding-right: 5rem;
`;

const BackgroundSection = styled(motion.div)`
  display: flex;
  flex-direction:column;
  margin:auto;
  width:100%;
  justify-content: center;
  align-items: center;
`;
const ProfilePicComponent = styled(motion.img)`
  width: 30rem;
  height: 30rem;
  border-radius: 50%;
  margin-top: 10rem;
`
;

export const Title = styled(motion.h1)`
   
  font-style: normal;
  font-weight: 700;
  font-size: 4em;
`;

export const SectionTitle = styled.div`
  font-weight: 700;
  font-size: 1rem;
`;



export default Home;