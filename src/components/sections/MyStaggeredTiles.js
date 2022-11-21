import {
  StaggeredGridItem,
} from "react-staggered-grid";
import { useRef, useEffect, useState } from 'react';
import lodash from 'lodash-es';
import styled from 'styled-components';

const MyStaggeredTiles = ({ section, iter }) => {
  const { title, description, image, list, video, span = 1 } = section;
  let [height, setHeight] = useState("px");
  const ref = useRef(null)
  useEffect(() => {
    setHeight(ref.current.clientHeight + "px")
  }, [])
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

          {description}
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
            <Image src={image.link}></Image>
          </div>
        )}
      </SectionContainer>

    </StaggeredGridItem >

  )
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

const SectionContainer  = styled.div`
  border: 2px solid white;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 4px 7px 32px 0px rgba(232,232,232,0.75);
`;
export default MyStaggeredTiles;