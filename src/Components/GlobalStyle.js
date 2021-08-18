import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --point-yellow: #ffd000;
}

body {
  margin: 0;
  display: flex;
  background-color: var(--point-yellow);
  overflow: hidden;
}
`;

export default GlobalStyle;
