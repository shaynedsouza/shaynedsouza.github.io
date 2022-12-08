import { motion } from 'framer-motion';
import styled from "styled-components";
export const Subtitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: ${props => props.bold ? 600 : 400};
  font-size: 1em;
  // margin-top: 24px;
`;

export const SectionContainer = ({children, whileHover}) => (
  <SectionOuterContainer whileHover={whileHover}>
    <SectionInnerContainer>
      {children}
    </SectionInnerContainer>
  </SectionOuterContainer>
)

const SectionOuterContainer = styled(motion.div)`
  padding: 1rem;
  position: relative;
  /* background: linear-gradient(to bottom, black, purple);
  padding: 5px; */
  padding: 3px;
  background: white;

  border-radius: 1rem;
  
`;

const SectionInnerContainer = styled.div`
  background: #000;
  color: white;
  padding: 2rem;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;