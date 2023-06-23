import { createGlobalStyle } from 'styled-components';
import '../Fonts/FontStyle.css';

const GlobalStyle = createGlobalStyle`

:root {
  --point-yellow: #ffd000;
  --point-blue: #a3f3ff;
  --dimmed-black: #272727;
  --back-blue: #d5e4ed;
}

html{
  color: var(---dimmed-black);
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
}

body {
  margin: 0;
  overflow-x: hidden;
}

a {
  text-decoration: none;
  color: var(---dimmed-black);
  &:hover {
    box-shadow: inset 0px -10px 0 #cccccc;
  }
}

p, span {
  // font-size: 1.2rem;
  letter-spacing: -0.05rem;
}

code {
  padding: 0.3rem;
  background-color: var(--back-blue);
  border-radius: 5px;
}
`;

export default GlobalStyle;
