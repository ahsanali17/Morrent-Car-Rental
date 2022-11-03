import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  :root {
    /*MAIN-COLORS*/
    --color-white: hsl(0deg 0% 100%);
    --color-background: hsl(220deg 20% 97%);

    --color-blue-primary: hsl(225deg 80% 56%);
    --color-blue-secondary: hsl(209deg 96% 67%);

    /*TYPOGRAPHY*/
    --app-font-family: 'Plus Jakarta Sans', sans-serif;
    --font-weight-heavy: 700;

    /*Other Reusables*/
    --border-radius-general: 10px;
  }

  /* Use a more-intuitive box-sizing model. */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* Remove default margin and padding */
  * {
    margin: 0;
    padding: 0;
  }

  /* Allow percentage-based heights in the application, main background color, font-family*/
  html, body, #root {
    width: 100%;
    height: 100%;

    font-family: var(--app-font-family);
    background-color: var(--color-background);
  }

  /* Add accessible line-height, Improve text rendering */
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  /* Remove built-in form typography styles */
  input, button, textarea, select {
    font: inherit;
  }

  /* Create a root stacking context */
  #root {
    isolation: isolate;
  }
`