import styled from 'styled-components';
import '../Fonts/FontStyle.css';

const dimmedBlack = '#272727';
const white = '#cccccc';
const pointRed = 'crimson';
const gray = '#797979';
const highlighter = '#2de689';

export const Container = styled.div`
  margin: auto;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Header = styled.header`
  margin: 0;
`;

export const TitleBox = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Title = styled.p`
  font-size: 9rem;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  letter-spacing: -0.5vmin;
  color: ${dimmedBlack};
  margin-top: 5%;
  margin-bottom: 0;
`;

export const Dot = styled.span`
  color: ${pointRed};

  &:hover {
    color: ${dimmedBlack};
  }
`;

export const Subtitle = styled(Title)`
  font-size: 3rem;
  letter-spacing: -0.3vmin;
  margin-top: 0;
`;

export const SubtitleMono = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  color: ${gray};
`;

export const SubtitleHighlited = styled.span`
  display: inline;
  box-shadow: inset 0 -3vmin 0 ${highlighter};
`;

export const Footer = styled.footer`
  width: 50vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const FooterItems = styled.a`
  margin-bottom: 5%;
  &:hover {
    box-shadow: inset 0px -10px 0 ${white};
  }
`;
