import { motion } from 'framer-motion';
import styled from 'styled-components';
import Icon from '../Icon/Icon';

const Links = ({links, color='white', className,style}) => {
  return (
    <LinksContainer>
      {links.map(({icon, link, title}, i) => (
        <Link key={link} whileHover={{scale: 1.2}} color={color} href={link} target='_blank'>
          <Icon label={title} color={color} title={title} icon={icon} />
        </Link>
      ))}
    </LinksContainer>
  )
}

const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 8px;
  padding-right: 16px;
  padding-top: 16px;
`;

const Link = styled(motion.a)`
  text-decoration: none;
  color: ${props => props.color};
`;

export default Links;