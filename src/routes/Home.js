import styled from 'styled-components';
import Links from '../components/Links/Links';
import { motion } from 'framer-motion';
import profilepic from '../profile.jpg'
import portfolioData from '../portfolioData';
import MyStaggeredGrid from '../components/sections/MyStaggeredGrid';
import { Subtitle } from '../components/common/StyledComponents';
const Home = (props) => {
 
  const { title, subtitle, links,projects,  image, blogs } = portfolioData;

  console.log(portfolioData)

  return (
    <PageContainer>
      <BackgroundSection>
        <ProfilePicComponent src={profilepic} />
        <Title style={{

          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",

        }}>{title}</Title>
        <Subtitle style={{

          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",

        }}>{subtitle}</Subtitle>
        <Links links={links} color='white' />
      </BackgroundSection>
      <div className='divider'><span></span><span>Projects</span><span></span></div>
      <br></br>
      <MyStaggeredGrid sections={projects} width={"500"} />
      <div className='divider'><span></span><span>Dev Posts</span><span></span></div>
      <br></br>
      <MyStaggeredGrid width={"500"} sections={blogs} />

    </PageContainer>

  )
}

const PageContainer = styled.div`
  color: white;
  padding-left: 5rem;
  padding-right: 5rem;
  height: 100vh;
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