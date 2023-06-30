import React from 'react';
import styled from 'styled-components';
import '../Fonts/FontStyle.css';

const dimmedBlack = '#272727';
const white = '#cccccc';
const pointRed = 'crimson';
const gray = '#797979';
const highlighter = '#8db1d6';
export const textHighlight = '#6aa1d9';
const backBlue = '#d5e4ed';
const defaultPadding = '0 1.5rem';

export const ContainerWrapper = styled.div`
  margin: 0;
  height: 100vh;  
  width: 100vw;
  background-color: ${backBlue};
`;

export const Container = styled.div`
  margin: auto;
  padding: ${defaultPadding};
  height: 100vh;  
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Header = styled.header`
  margin: 0;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Title = styled.p`
  font-size: 8rem;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  letter-spacing: -0.5vmin;
  color: ${dimmedBlack};
  margin-top: 5%;
  margin-bottom: 0;
`;

export const Dot = styled.span`
  color: ${pointRed};
  font-size: inherit;
  &:hover {
    color: ${dimmedBlack};
  }
`;

export const Subtitle = styled(Title)`
  font-size: 2.5rem;
  letter-spacing: -0.3vmin;
  margin-top: 0;
`;

export const SubtitleMono = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: inherit;
  color: ${gray};
`;

export const SubtitleHighlited = styled.span`
  display: inline;
  font-size: inherit;
  box-shadow: inset 0 -3vmin 0 ${highlighter};
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const FooterItems = styled.a`
  margin-bottom: 5%;
  &:hover {
    box-shadow: inset 0px -10px 0 ${white};
  }
`;

// for resume page

export const Resume = styled.div`
  margin: 0 auto;
  padding: ${defaultPadding};
  padding-bottom: 5rem;
  max-width: 800px;
  line-height: 1.6;
`;

export const Header1 = styled.h1`
  font-size: 2.5rem;
  letter-spacing: -0.3vmin;
`;

export const Header2 = styled.h2`
  font-size: 2rem;
  color: ${textHighlight};
  letter-spacing: -0.1rem;
`;

export const Header3 = styled.h3`
  font-size: 1.5rem;
  letter-spacing: -0.08rem;
`;

export const ImageRound = styled.img`
  max-width: min(800px, calc(100vw - 3rem));
  border-radius: 1.5rem;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
`;

export const Link = styled.a`
  color: ${textHighlight};
`;

export const Fig = ({ 
  profileImage, 
  captionContent 
}) => {
  return (
    <figure style={{margin: 0}}>
      <ImageRound src={profileImage} alt='profile' />
      <figcaption style={{
        margin: `0 auto`,
        textAlign: `center`,
        color: 'GrayText',
        fontSize: `0.8rem`,
      }}>{captionContent}</figcaption>
    </figure>
  );
}