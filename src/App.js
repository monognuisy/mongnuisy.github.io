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
} from './Components/AppStyle';
import GlobalStyle from './Components/GlobalStyle';
import { ThemeProvider } from 'styled-components';

const App = () => {
  return (
    <Container>
      {/* <ThemeProvider> */}
      <GlobalStyle />
      <Header></Header>
      <TitleBox>
        <Title>
          hello<Dot>.</Dot>
        </Title>
        <Subtitle>
          this is <SubtitleMono>&lt;br&gt;</SubtitleMono>
          <SubtitleHighlited>Sungmin Yoo</SubtitleHighlited>
          <SubtitleMono>&lt;/br&gt;</SubtitleMono>
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
  );
};

export default App;
