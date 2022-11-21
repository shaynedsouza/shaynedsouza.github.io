import MyStaggeredTiles from "./MyStaggeredTiles";
import {
  StaggeredAlignment,
  StaggeredGrid,
} from "react-staggered-grid";


const MyStaggeredGrid = ({ sections }) => {

  return(
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
      <MyStaggeredTiles key={i} section={section} iter={i} />
    ))}

  </StaggeredGrid>
  )
}

export default MyStaggeredGrid;