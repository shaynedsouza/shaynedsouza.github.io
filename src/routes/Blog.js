import styled from 'styled-components';
import {Links as DLinks} from '../components/Links/Links'
import ReactTooltip from 'react-tooltip';
import "aos/dist/aos.css";
import { motion } from 'framer-motion';


const Blog=(props) => {
    return (<div>
        {props.location.state}
    </div>

  )
}


export default Blog;