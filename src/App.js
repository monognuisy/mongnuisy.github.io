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
import FontStyles from './Fonts/FontStyle';

const App = () => {
  return (
    <Container>
      <FontStyles />
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
        <FooterItems href="https://chemicals1234.tistory.com/">
          blog
        </FooterItems>
        <FooterItems href="https://github.com/monognuisy">github</FooterItems>
        <FooterItems href="https://www.instagram.com/chemicals1234/">
          instagram
        </FooterItems>
      </Footer>
    </Container>
  );
};

export default App;
