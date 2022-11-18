import styled from 'styled-components';
import portfolioData from './portfolioData';

function App() {
  const {title, subtitle, links, projects, image} = portfolioData;

  return (
    <PageContainer>
      <BackgroundSection image={image}>
        <Title>{title}</Title>
        <Links>
          {links.map(({icon, link, title}) => {
            <Link>
              
            </Link>
          })}
        </Links>
      </BackgroundSection>
    </PageContainer>
  );
}

const PageContainer = styled.div``;

const BackgroundSection = styled.div`
  width: 100vw;
  height: 473px;
  background: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: start;
  align-items: flex-end;
`;

const Title = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 77px;

  color: #fff;
  padding-left: 48px;
  padding-bottom: 48px;
`;

const Links = styled.div`

`;

export default App;
