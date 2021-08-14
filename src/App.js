import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="title-box">
        {/* <p className="title-imoji">😀Hi.</p> */}
        <p className="title-text">
          Sungmin Yoo<span className="title-text-dot">.</span>
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
