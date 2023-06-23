import React from 'react';
import profileImage from '../image/profile.webp';
import { 
  Resume,
  Header1,
  ImageRound,
} from './AppStyle';

const About = () => {
  return (
    <Resume>
      <Header1>About me</Header1>
        <ImageRound src={profileImage} alt='profile' />
      <p>Hello, I'm <b>Sungmin Yoo</b>. Or, you can call me as <code>monognuisy</code> which is an anagram of my name.</p> 
      <p>Now an undergraduate student at Hanyang University, Seoul, Korea.</p>
    </Resume>
  );
}

export default About;