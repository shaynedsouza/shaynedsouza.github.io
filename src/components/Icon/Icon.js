import { AiFillGithub, AiFillLinkedin, AiOutlineLink,AiOutlineFileText, AiOutlineArrowRight } from 'react-icons/ai'
import styled from 'styled-components'
import { FaItchIo} from "react-icons/fa";


const iconNameToComponent = {
  linkedin: AiFillLinkedin,
  github: AiFillGithub,
  resume: AiOutlineFileText,
  itch:FaItchIo,
  default: AiOutlineLink,
  arrowRight: AiOutlineArrowRight
}

const Icon = ({icon = 'default', color, size = 36, label}) => {
console.log('🚀 ~ file: Icon.js ~ line 10 ~ Icon ~ icon', icon)
  const IconComponent = iconNameToComponent[icon] || iconNameToComponent.default

  const StyledIconComponent = styled(IconComponent)`
    font-size: ${props => props.size};
    color: ${props => props.color};
  `;

  return (
    <>
      <StyledIconComponent data-tip={label} size={size} color={color} />
    </>
  )
}


export default Icon;

