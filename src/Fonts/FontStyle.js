import { createGlobalStyle } from 'styled-components';

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Inter';
  font-weight: 400;
  src: url('inter-v3-latin-regular.woff2') format('woff2'),
       url('inter-v3-latin-regular.woff') format('woff');
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  font-weight: 500;
  src: url('inter-v3-latin-500.woff2') format('woff2'),
       url('inter-v3-latin-500.woff') format('woff');
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  font-weight: 700;
  src: url('inter-v3-latin-700.woff2') format('woff2'),
       url('inter-v3-latin-700.woff') format('woff');
  font-display: swap;
}

@font-face {
  font-family: 'JetBrains Mono';
  font-weight: 400;
  font-style: normal;
  src: url('jetbrains-mono-v6-latin-regular.woff2') format('woff2'),
       url('jetbrains-mono-v6-latin-regular.woff') format('woff');
  font-display: swap;
}

@font-face {
  font-family: 'JetBrains Mono';
  font-weight: 400;
  font-style: italic;
  src: url('jetbrains-mono-v6-latin-italic.woff2') format('woff2'),
       url('jetbrains-mono-v6-latin-italic.woff') format('woff');
  font-display: swap;
}

`;

export default FontStyles;
