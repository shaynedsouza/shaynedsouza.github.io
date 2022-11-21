import styled from 'styled-components';
import Links, {Links as DLinks} from '../components/Links/Links';
import ProjectsGrid, { Subtitle } from '../components/sections/ProjectsGrid';
import ReactTooltip from 'react-tooltip';
import "aos/dist/aos.css";
import { motion } from 'framer-motion';
import profilepic from '../profile.jpg'
import portfolioData from '../portfolioData';
import {useLocation, useParams} from "react-router-dom";
import lodash from 'lodash-es';
import { SectionTitle, Title } from './Home';
import Masonry from 'react-masonry-css';

const Project=() => {
  const {id} = useParams();

  const project = portfolioData.projects.find(p => {
    return p.id === id
  })

  const {title, subtitle, links, images, videos, sections, date} = project
  console.log('🚀 ~ file: Project.js ~ line 17 ~ Project ~ project', project)

  return (
    <ProjectContainer>
      <ProjectInnerContainer>
        <Title>{title}</Title>
        <Text>{date}</Text>
        <Subtitle>{subtitle}</Subtitle>
        <Links links={links} color='white' />
        {/* {!lodash.isEmpty(images) && (
          <SectionContainer>
            <SectionTitle>Gallery</SectionTitle>
            <ImagesContainer>
              {images.map(image => (
                <ImageContainer key={image.title}>
                  <Image src={image.link} alt={image.title} />
                  <Text>{image.title}</Text>
                </ImageContainer>
              ))}
            </ImagesContainer>
          </SectionContainer>
        )} */}

        {/* {!lodash.isEmpty(videos) && (
          <SectionContainer>
            <SectionTitle>Videos</SectionTitle>
            <ImagesContainer>
              {videos.map(video => (
                <ImageContainer key={video.title}>
                  <Video title={video.title} allowfullscreen="allowfullscreen" src={`https://www.youtube.com/embed/${video.id}`} />
                  <Text>{video.title}</Text>
                </ImageContainer>
              ))}
            </ImagesContainer>
          </SectionContainer>
        )} */}
        
        <StyledMasonry
          breakpointCols={{
            default: 3,
            1100: 3,
            700: 2,
            500: 1
          }}
          columnClassName='masonry-grid-column'
        >
          {sections.map((section, i) => (
            <Section key={i} section={section} iter={i} />
          ))}
        </StyledMasonry>
        
      </ProjectInnerContainer>
      
    </ProjectContainer>

  )
}


const Section = ({section, iter}) => {
  const {title, description, image, list, video, span=1, height } = section;

  return (
      <SectionContainer className='masonry-grid-column' span={span}>
        <SectionTitle height={height}>{title}</SectionTitle>
        <Subtitle >{description}</Subtitle>
        {!lodash.isEmpty(list) && (
          <ul>
            {list.map(listitem => (
              <li>{listitem.label}</li>
            ))}
          </ul>
        )}

        {!lodash.isEmpty(image) && (
          <>
            <Image big src={image.link} />
            <Text>{image.title}</Text>
          </>
        )}

        {!lodash.isEmpty(video) && (
          <>
            <Video big title={video.title} allowfullscreen="allowfullscreen" src={`https://www.youtube.com/embed/${video.id}`} />
            <Text>{video.title}</Text>
          </>
        )}
      </SectionContainer>
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

const Image = styled.img`
  width: 100%;
  height: ${props => props.big ? '80vh': '30vh'};
  object-fit: cover;
`;

const Video = styled.iframe.attrs({
  allowFullScreen: true
})`
  width: 100%;
  height: ${props => props.big ? '80vh': '30vh'};
  border: none;
`;

const ImageContainer = styled.div`
  width: 100%;
`;

const ImagesContainer = styled.div`
  display: grid;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
`;

const Text = styled.p`
`;

const SectionGrid = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: masonary;
  grid-gap: 2rem;
`;

const GridItem = styled.div``;

const SectionContainer  = styled.div`
  border: 2px solid white;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 4px 7px 32px 0px rgba(232,232,232,0.75);
`;

const StyledMasonry = styled(Masonry)`
  display: -webkit-box; /* Not needed if autoprefixing */
  display: -ms-flexbox; /* Not needed if autoprefixing */
  display: flex;
  margin-left: -30px; /* gutter size offset */
  width: auto;

  .masonry-grid-column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
    margin-bottom: 30px;
  }
`;

export default Project;