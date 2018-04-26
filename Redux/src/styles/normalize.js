import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

const injectGlobalTimesheetCss = () => injectGlobal`
  ${styledNormalize}
  height: 100%;
  html {
    height: 100%;
  }

  #root {
    height: 100%;
  }
  body {
    /* No ugly browser default padding/margin */
    padding: 0;
    margin: 0;
    /* Smooth text hack by Daniël */
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    font-smooth: always;
    -moz-osx-font-smoothing: grayscale;
    text-shadow: 0.0625rem 0.0625rem 0.0625rem rgba(0,0,0,.004);
    height: 100%;
    * { /* Give it some specificity by putting this in body */
      box-sizing: border-box;
      font-family: Helvetica;
    }
  }
`;

export default injectGlobalTimesheetCss;
