import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header"></div>
      <div className="title-box">
        <p className="title">
          hello<span className="title-text-dot">.</span>
        </p>
        <p className="subtitle subtitle-text">
          this is <span className="subtitle-mono">&lt;br&gt;</span>
          <span className="subtitle-name">Sungmin Yoo</span>
          <span className="subtitle-mono">&lt;/br&gt;</span>
        </p>
      </div>
      <div className="footer">
        <a
          href="https://chemicals1234.tistory.com/"
          className="footer-items text"
        >
          blog
        </a>
        <a href="https://github.com/monognuisy" className="footer-items text">
          github
        </a>
        <a
          href="https://www.instagram.com/chemicals1234/"
          className="footer-items text"
        >
          instagram
        </a>
      </div>
    </div>
  );
}

export default App;
