import React from 'react';
import profileImage from '../image/profile.webp';
import blogPic from '../image/blog.png';
import threePic from '../image/three.gif'
import bayesPic from '../image/bayes.png'
import { 
  Resume,
  Header1,
  Header2,
  textHighlight,
  Header3,
  Fig,
  Link,
} from './AppStyle';

const About = () => {
  return (
    <Resume>
      <Header1>About me</Header1>
      <Fig 
        profileImage={profileImage} 
        captionContent={`Taking photo of Mt. Fuji at Motosu-lake`} 
      />

      <p>Hello, I'm <b>Sungmin Yoo</b>. Or, you can call me as <code>monognuisy</code> which is an anagram of my name.</p> 
      <p>Now an undergraduate student at Hanyang University, Seoul, Korea.</p>

      <p><Link href='https://github.com/monognuisy'>Github</Link></p>
      <p><Link href='https://www.linkedin.com/in/monognuisy/'>LinkedIn</Link></p>
      <p><Link href='https://www.instagram.com/monognuisy/'>Instagram</Link></p>

      <Header2>🎓 Education</Header2>
      <p><b>Hanyang University</b>: Undergraduate, Computer Software Engineering</p>
      <p><b>Hana Academy Seoul</b>: (Mar 2018 - Feb 2021) High School Diploma</p>
  
      <br />
      <Header2>💬 Languages for communication</Header2>
      <p><b>Korean</b>: Native. Mostly used including blog post, toy projects, etc.</p>
      <p><b>English</b>: Fluent. Trying to use English for reports and researches.</p>
      <p><b>Japanese</b>: Moderate. Basic talks and chats are okay.</p>

      <br />
      <Header2>📒 Skills</Header2>
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
      <Header2>🔧 Tools</Header2>
      <ul>
        <li>
          <b>Visual Studio Code</b>
          <br />
          <p>
            Mainly using vscode for developing web.   
          </p>
        </li>
        <li>
          <b>Vim</b>
          <br />
          <p>
            Sub editor. Getting used to vim, I can write down or edit some code in the environment without GUI. 
          </p>
        </li>
        <li>
          <b>Git, Github</b>
          <br />
          <p>
            Knowing well about git and github for collaboration.
          </p>
        </li>
      </ul>
      <Header2>💻 Projects</Header2>
      
      <Header3>
        blog <Link href='https://monognuisy.github.io/blog/'>↗</Link>
      </Header3> 
      <Fig 
        profileImage={blogPic} 
        captionContent={`Sample page of blog`} 
      />
      <ul>
        <li>
          Summary of what I've learned. Mostly about Computer Science and web frontend study.
        </li>
        <br />
        <li>
          Made with <b>React</b> and <b>Gatsby</b>. Now porting into Typescript.
        </li>
        <br />
        <li>
          The post can be easilly written in MDX(markdown + JSX), also KaTeX available
        </li>
        <br />
        <li>
          Implemented notion-like sidenote with graphQL. I think sidenotes are better for blogs rather than footnotes :D
        </li>
        <br />
        <li>
          source: <Link href='https://github.com/monognuisy/blog'>https://github.com/monognuisy/blog</Link>
        </li>
        <br />
      </ul>

      <Header3>
        3-dimensional driven oscillator simulation <Link href='https://monognuisy.github.io/hasgomul/physics/oscillation.html'>↗</Link>
      </Header3> 
      <Fig 
        profileImage={threePic} 
        captionContent={`Ball moving along Lissajous curve`} 
      />
      <ul>
        <li>
          Simulation of 3-dimensional driven oscillator which includes drag and exterior force with <b>three.js</b>.
        </li>
        <br />
        <li>
          Users can change parameters of each axis interactively.
        </li>
        <br />
        <li>
          To visuallize the motion with differential equations, 4th Runge-Kutta method was used.
        </li>
        <br />
        <li>
          source: <Link href='https://github.com/monognuisy/hasgomul'>https://github.com/monognuisy/hasgomul</Link>
        </li>
      </ul>

      <Header3>
        Bayesian approach for Fisher Discriminant Analysis <Link href='https://github.com/monognuisy/bayesian-FDA'>↗</Link>
      </Header3> 
      <Fig 
        profileImage={bayesPic} 
        captionContent={`Bayesian approach of FDA and kernelization`} 
      />
      <ul>
        <li>
          Extended FDA, one of the classification algorithms with <b>Bayesian approach</b>. <br />
          Key point of this research is that the FDA can be treated as linear regression and gaussian process when it is kernelized.
        </li>
        <br />
        <li>
          There are some advantaged compare to the old FDA; <br />
          It is <b>robust</b> for the low-number of data, and the explicit uncertainty term exists.
        </li>
        <br />
        <li>
          With kernelization, it can classify complex data just as gaussian process does. 
        </li>
      </ul>

    </Resume>
  );
}

export default About;
