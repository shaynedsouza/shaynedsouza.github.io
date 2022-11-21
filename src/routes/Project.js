import styled from 'styled-components';
import Links, { Links as DLinks } from '../components/Links/Links';
import ProjectsGrid, { Subtitle } from '../components/sections/ProjectsGrid';
import ReactTooltip from 'react-tooltip';
import "aos/dist/aos.css";
import { motion } from 'framer-motion';
import profilepic from '../profile.jpg'
import portfolioData from '../portfolioData';
import { useLocation, useParams } from "react-router-dom";
import lodash from 'lodash-es';
import { SectionTitle, Title } from './Home';
import  { useRef,useEffect,useState } from 'react';
// import Masonry from 'react-masonry-css';
import {
  StaggeredAlignment,
  StaggeredGrid,
  StaggeredGridItem,
  StaggeredGridItemFunctional,
  StaggeredItemSpan
} from "react-staggered-grid";
const Project = () => {
  const { id } = useParams();

  const project = portfolioData.projects.find(p => {
    return p.id === id
  })

  const { title, subtitle, links, images, videos, sections, date } = project
  // let sections1=[{title:"asd",span:"1"},
  // {title:"asd",span:"1"},
  // {title:"asd",span:"1"},
  // {title:"asd",span:"1"},
  // {title:"asd",span:"1"},
  // {title:"asd",span:"1"},
  // {title:"asd",span:"2"},
  // {title:"asd",span:"2"},
  // {title:"asd",height:"315",span:"1"},
  // {title:"asd",height:"315",span:"1"},
  // {title:"asd",height:"315",span:"1"},
  // {title:"asd",height:"315",span:"1"},
  // {title:"asd",height:"315",span:"1"},
  // {title:"asd",height:"315",span:"1"},
  // {title:"asd",height:"315",span:"1"},
  // {title:"asd",height:"315",span:"1"},
  // {title:"asd",height:"315",span:"1"},
  // {title:"asd",height:"315",span:"1"},
  // {title:"asd",height:"315",span:"1"},
  // {title:"asd",height:"315",span:"1"},
  //]
  console.log('🚀 ~ file: Project.js ~ line 17 ~ Project ~ project', project)

  return (
    <ProjectContainer>
      <ProjectInnerContainer>
        <Title>{title}</Title>
        <Text>{date}</Text>
        <Subtitle>{subtitle}</Subtitle>
        <Links links={links} color='white' />

        <StaggeredGrid

          columnWidth={"300"} // width of each column , don't pass if you want it to be gridWidth / columns
          columns={0}
          alignment={StaggeredAlignment.Center}
          useElementWidth={true} // this would force css styled width (100%) , when false gridWidth = columnWidth * columnWidth
          fitHorizontalGap={true}
          calculateHeight={true}
          horizontalGap={10}
          verticalGap={10}
          repositionOnResize={true}
      
        >

          {sections.map((section, i) => (
            <Section key={i} section={section} iter={i} />
          ))}

        </StaggeredGrid>

      </ProjectInnerContainer>

    </ProjectContainer >

  )
}


const Section = ({ section, iter }) => {
  const { title, description, image, list, video, span = 1 } = section;
  let [height, setHeight] = useState("px");
  const ref = useRef(null)
  useEffect(() => {
    setHeight(ref.current.clientHeight+"px")
  },[])
  return (

    <StaggeredGridItem
      index={iter}
      spans={span}
      style={{ transition: "left 0.3s ease,top 0.3s ease" }}
      ref={ref}
    >
      <SectionContainer>

        <div
          style={{
            width: "100%",
            height: height ,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
         
          }}
          onLoad={
           (e)=>{

           }   
          }
        >
          {title}
        </div>
        <div
          style={{
            width: "100%",
            height: height ,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >

          {description}
        </div>

 
        {!lodash.isEmpty(list) && (
             <div
             style={{
               width: "100%",
               height: height ,
               textAlign: "center",
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
               justifyContent: "center"
             }}
           >
             <ul>
               {list.map(listitem => (
                 <li>{listitem.label}</li>
               ))}
             </ul>
           </div>
        )}



        {!lodash.isEmpty(video) && (
       
       <div
       style={{
         width: "100%",
         height: height ,
         textAlign: "center",
         display: "flex",
         flexDirection: "column",
         alignItems: "center",
         justifyContent: "center"
       }}
     >
     <Video title={video.title}  allowfullscreen="allowfullscreen" src={`https://www.youtube.com/embed/${video.id}`} />
     </div>
        )}

        {!lodash.isEmpty(image) && (
                <div
                style={{
                  width: "100%",
                  height: height + "px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image  src={image.link}></Image>
              </div>
        )}
      </SectionContainer>

    </StaggeredGridItem >

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

const StaggeredSection = styled.div`
width: "100%",
height: ${props => props.height + "px"},
textAlign: "center",
display: "flex",
flexDirection: "column",
alignItems: "center",
justifyContent: "center"
`
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

const SectionContainer = styled.div`
  border: 2px solid white;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 4px 7px 32px 0px rgba(232,232,232,0.75);
`;


export default Project;