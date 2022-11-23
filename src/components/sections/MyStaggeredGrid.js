import MyStaggeredTiles from "./MyStaggeredTiles";
import {
  StaggeredAlignment,
  StaggeredGrid,
} from "react-staggered-grid";
import { useRef, useEffect, useState } from 'react';

const MyStaggeredGrid = ({ sections, width="300"}) => {
  console.log("sections ", sections)

  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return(
  <StaggeredGrid
    columnWidth={width} // width of each column , don't pass if you want it to be gridWidth / columns
    columns={0}
    alignment={StaggeredAlignment.Center}
    useElementWidth={true} // this would force css styled width (100%) , when false gridWidth = columnWidth * columnWidth
    fitHorizontalGap={true}
    calculateHeight={true}
    horizontalGap={24}
    verticalGap={24}
    repositionOnResize={true}

  >
    {sections.map((section, i) => (
      <MyStaggeredTiles key={i} section={section} iter={i} />
    ))}

  </StaggeredGrid>
  )
}

export default MyStaggeredGrid;