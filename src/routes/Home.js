import styled from 'styled-components';
import Links from '../components/Links/Links';
import { motion } from 'framer-motion';
import profilepic from '../profile.jpg'
import portfolioData from '../portfolioData';
import MyStaggeredGrid from '../components/sections/MyStaggeredGrid';
import { Subtitle } from '../components/common/StyledComponents';
import { Icon as BXIcon, Link } from '@mui/material';
import { FaBriefcaseMedical, FaEnvelope, FaEnvelopeOpen, FaMapMarker, FaMapMarkerAlt } from 'react-icons/fa';
const Home = (props) => {

  const { title, subtitle, links, projects,visastatus, location, email, image, blogs, jobs } = portfolioData;

  console.log(portfolioData)

  return (
    <PageContainer>
      <BackgroundSection>
        <ProfilePicComponent src={profilepic} />
        <Title>{title}</Title>
        <ProfileInformationContainer>
          <Row>
            <Icon component={FaMapMarkerAlt} />
            <Subtitle>
              {location}
            </Subtitle>
          </Row>

          <Row>
            <Subtitle bold>Visa status</Subtitle>
            <Subtitle>{visastatus}</Subtitle>
          </Row>
          
          <Row>
            <Icon component={FaEnvelope} />
            <Link color='#fff' href={`mailto:${email}`}><Subtitle>{email}</Subtitle></Link>
          </Row>
          
          
        </ProfileInformationContainer>
        <Links links={links} color='white' />
        <Subtitle style={{marginTop: 20}}>{subtitle}</Subtitle>
      </BackgroundSection>
      <Divider>Jobs</Divider>
      <MyStaggeredGrid width='500' sections={jobs} />
      <Divider>Personal Projects</Divider>
      <MyStaggeredGrid width='500' sections={projects} />
      <Divider>Dev Posts</Divider>
      <MyStaggeredGrid width='500' sections={blogs} />

    </PageContainer>

  )
}

const Divider = ({children}) => (
  <DividerContainer>
    <span />
    <span>
      {children}
    </span>
    <span />
  </DividerContainer>
)

const DividerContainer = styled.div.attrs({className: 'divider'})`
  display: table; 
  font-size: 24px; 
  text-align: center; 
  width: 75%;
  margin: 40px auto;
`;


const PageContainer = styled.div`
  color: white;
  padding-left: 5rem;
  padding-right: 5rem;
  height: 100vh;

  @media screen and (max-width: 500px) {
    padding-left: 10px;
    padding-right: 10px;
  }
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

  @media screen and (max-width: 500px) {
    width: 20rem;
    height: 20rem;
  }
`;

export const Title = styled(motion.h1)`
  font-style: normal;
  font-weight: 700;
  font-size: 4em;

  @media screen and (max-width: 500px) {
    font-size: 2.5rem;
  }
`;

export const SectionTitle = styled.div`
  font-weight: 700;
  font-size: 1rem;
`;

const Icon = styled(BXIcon)`
  justify-self: center;
  align-self: center;
  margin-right: 20px;
`;

const ProfileInformationContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  border: 3px solid white;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  border-radius: 10px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;


export default Home;