import styled from 'styled-components';
import {Links as DLinks} from '../components/Links/Links';
import ProjectsGrid from '../components/sections/ProjectsGrid';
import ReactTooltip from 'react-tooltip';
import "aos/dist/aos.css";
import { motion } from 'framer-motion';
import profilepic from '../profile.jpg'
import portfolioData from '../portfolioData';
import {useLocation} from "react-router-dom";

const Project=({props}) => {


  const name = window.location.pathname
  
    return (<div>
      SDASDASDFASFASFDASDF
         <p>{name}</p>
    </div>

  )
}


export default Project;