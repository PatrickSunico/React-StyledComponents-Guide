import { createGlobalStyle } from 'styled-components';
export const Global = createGlobalStyle`

/* ==========================================================================
   COMPOUND COMPONENTS
   ========================================================================== */
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700,900');

/* RESETS
   ============================================ */

html {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}

body {
  margin: 20px 0;
  padding: 0;
  line-height: 1;
  font-family: 'Roboto', sans-serif;
  color: #202020;
  background-color: #fbfbfb;
  font-smooth: always;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  display: flex;
  max-width: 1200px;
  margin: auto;
  justify-content: center;
}

.mr {
  margin-right: 20px;
}

`;
