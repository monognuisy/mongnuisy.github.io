import React from 'react';

import {
  Container,
  Header,
  TitleBox,
  Title,
  Dot,
  Subtitle,
  SubtitleMono,
  SubtitleHighlited,
  Footer,
  FooterItems,
  Resume,
  Header1,
  ResumeWrapper,
  ContainerWrapper,
} from './Components/AppStyle';
import GlobalStyle from './Components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import About from './Components/About';

const App = () => {
  return (
    <div>
    <GlobalStyle />
    <ContainerWrapper>
      <Container>
        {/* <ThemeProvider> */}
        <Header></Header>
        <TitleBox>
          <Title>
            hello<Dot>.</Dot>
          </Title>
          <Subtitle>
            this is <SubtitleMono>&lt;b&gt;</SubtitleMono>
            <SubtitleHighlited>Sungmin Yoo</SubtitleHighlited>
            <SubtitleMono>&lt;/b&gt;</SubtitleMono>
          </Subtitle>
        </TitleBox>
        <Footer>
          <FooterItems href="https://monognuisy.github.io/blog">blog</FooterItems>
          <FooterItems href="https://github.com/monognuisy">github</FooterItems>
          <FooterItems href="https://www.instagram.com/monognuisy/">
            instagram
          </FooterItems>
        </Footer>
        {/* </ThemeProvider> */}
      </Container>
    </ContainerWrapper>
    <About />
    </div>
  );
};

export default App;
