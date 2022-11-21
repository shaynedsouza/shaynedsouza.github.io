import {
  StaggeredGridItem,
} from "react-staggered-grid";
import { useRef, useEffect, useState } from 'react';
import lodash from 'lodash-es';
import styled from 'styled-components';
import ModalImage from "react-modal-image";
import { Link } from "react-router-dom";
const MyStaggeredTiles = ({ section, iter }) => {
  const { title, description, image, list, video, span,externallink } = section;
  let [height, setHeight] = useState("px");
  const ref = useRef(null)
  const gridpart = <StaggeredGridItem
  index={iter}
  spans={span}
  style={{ transition: "left 0.3s ease,top 0.3s ease" }}
  ref={ref}
>
  <SectionContainer>

    <div
      style={{
        width: "100%",
        height: height,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

      }}
      onLoad={
        (e) => {

        }
      }
    >
      {title}
    </div>


    {!lodash.isEmpty(list) && (
      <div
        style={{
          width: "100%",
          height: height,
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
          height: height,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Video title={video.title} allowfullscreen="allowfullscreen" src={`https://www.youtube.com/embed/${video.id}`} />
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
        <ModalImage
        style={{ width: "200px",
          objectFit: "cover"}}
          small={image.link}
          large={image.link}
          alt="Hello World!"
        />
      </div>
    )}
  </SectionContainer>

</StaggeredGridItem >

    
  useEffect(() => {
    setHeight(ref.current.clientHeight + "px")
  }, [])


 
   if(lodash.isEmpty(externallink))
      return gridpart
      
  return <Link
      key={section.id}
      to={externallink}
      style={{textDecoration: 'none', color: "white"}}
    >
      {gridpart}
      </Link>
    

}

const Image = styled.img`
  width: 100%;
  height: ${props => props.big ? '80vh' : '30vh'};
  object-fit: cover;
`;

const Video = styled.iframe.attrs({
  allowFullScreen: true
})`
  width: 100%;
  height: ${props => props.big ? '80vh' : '30vh'};
  border: none;
`;

const SectionContainer = styled.div`
  border: 2px solid white;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 4px 7px 32px 0px rgba(232,232,232,0.75);
`;

export default MyStaggeredTiles;