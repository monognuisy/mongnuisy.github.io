import { createGlobalStyle } from 'styled-components';
import '../Fonts/FontStyle.css';

const GlobalStyle = createGlobalStyle`

:root {
  --point-yellow: #ffd000;
  --dimmed-black: #272727;
}

html{
  color: var(---dimmed-black);
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 1rem;
}

body {
  margin: 0;
  display: flex;
  background-color: var(--point-yellow);
  overflow: hidden;
}

a {
  text-decoration: none;
  color: var(---dimmed-black);
}
`;

export default GlobalStyle;
