import React from 'react';
import profileImage from '../image/profile.webp';
import { 
  Resume,
  Header1,
  ImageRound,
  Header2,
  textHighlight,
} from './AppStyle';

const About = () => {
  return (
    <Resume>
      <Header1>About me</Header1>
      <figure style={{margin: 0}}>
        <ImageRound src={profileImage} alt='profile' />
        <figcaption style={{
          margin: `0 auto`,
          textAlign: `center`,
          color: 'GrayText',
          fontSize: `0.8rem`,
        }}>Taking photo of Mt. Fuji at Motosu-lake</figcaption>
      </figure>
      <p>Hello, I'm <b>Sungmin Yoo</b>. Or, you can call me as <code>monognuisy</code> which is an anagram of my name.</p> 
      <p>Now an undergraduate student at Hanyang University, Seoul, Korea.</p>

      <br />
      <Header2>Languages for communication</Header2>
      <p><b>Korean</b>: Native. Mostly used including blog post, toy projects, etc.</p>
      <p><b>English</b>: Fluent. Trying to use English for reports and researches.</p>
      <p><b>Japanese</b>: Moderate. Basic talks and chats are okay.</p>

      <br />
      <Header2>Skills</Header2>
      <ul>
        <li>
          <b>C</b>
          <br />
          <p>
            Implemented naïve thread (light-weight process), MLFQ (Multi-level Feedback Queue) scheduler, 
            multiple time indirect file system to handle massive file into linux in C. 
          </p>
        </li>
        <li>
          <b>Javascript & Typescript</b>
          <br />
          <p>
            Migrating Javascript projects into Typescript.
          </p>
        </li>
        <li>
          <b>Functional Programming</b>
          <br />
          <p>
            Having deep interests in functional programming paradigm. Standard ML and Haskell.
          </p>
        </li>
        <li>
          <b>React, Gatsby</b>
          <br />
          <p>
            Learning, and now making this site and <a href='https://monognuisy.github.io/blog/'
               style={{
                color: textHighlight,
               }}>
                blog
            </a>.
          </p>
        </li>
        <li>
          <b>Baysian Approach for Machine Learning</b>
          <br />
          <p>
            Deriving and developing machine learning algorithms with baysian approach.
          </p>
        </li>
      </ul>
    </Resume>
  );
}

export default About;