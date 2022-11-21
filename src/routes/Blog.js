import styled from 'styled-components';
import Links, { Links as DLinks } from '../components/Links/Links';
import ProjectsGrid, { Subtitle } from '../components/sections/ProjectsGrid';
import "aos/dist/aos.css";
import portfolioData from "../portfolioData"
import { useLocation, useParams } from "react-router-dom";
import lodash from 'lodash-es';
import { SectionTitle, Title } from './Home';

import MyStaggeredGrid from '../components/sections/MyStaggeredGrid';
// import Masonry from 'react-masonry-css';

const Blog = () => {
  const { id } = useParams();
  const blogs= portfolioData['blogs']
  const blog = blogs.find(p => {
    return p.id === id
  })

  const { title, time,image,blogsections,links } = blog

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
        }}>Published on: {time}</Text>

        <br></br>
        
        <BlogSections blogsections ={blogsections}></BlogSections>
        
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

const BlogTextContainer = styled.div`
  inline-size: 60%;
  overflow-wrap: break-word;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

const Text = styled.p`
`;


const BlogSections=({blogsections})=>{
return(
  blogsections.map((blogsection, i) => (
    <div>
    <div className='divider'><span></span><span>{blogsection.blogsectiontitle}</span><span></span></div>
 
    <BlogTextContainer>{blogsection.blogsectiontext}</BlogTextContainer>
    <br></br>
    <MyStaggeredGrid width="500" sections = {blogsection.bloggridsections}></MyStaggeredGrid>
   </div>
 ))
 
)
}

export default Blog;