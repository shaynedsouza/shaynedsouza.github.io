import styled from 'styled-components';
import Links, { Links as DLinks } from '../components/Links/Links';
import { Subtitle } from '../components/common/StyledComponents';
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
      {!lodash.isEmpty(title) && <Title>{title}</Title>}
        {!lodash.isEmpty(links) &&
          <Links links={links} color='white' />
      }
      {!lodash.isEmpty(time)&&
        <Subtitle>Published on: {time}</Subtitle>
      }
      {!lodash.isEmpty(blogsections)&&
        <BlogSections blogsections ={blogsections}></BlogSections>
      }
      </ProjectInnerContainer>
    </ProjectContainer>
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

const BlogDescription = styled.div`
  font-size: 1.2rem;
`

const Text = styled.p`
`;


const BlogSections=({blogsections})=>{
return(
  blogsections.map((blogsection, i) => (
    <div>
    <div className='divider'><span></span><span>{blogsection.blogsectiontitle}</span><span></span></div>
    <BlogDescription>{blogsection.blogsectiontext}</BlogDescription>
    <br></br>
    <MyStaggeredGrid sections = {blogsection.bloggridsections}></MyStaggeredGrid>
   </div>
 ))
 
)
}

export default Blog;