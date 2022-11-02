import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    /*MAIN-COLORS*/
    --color-white: hsl(0deg 0% 100%);
    --color-background: hsl(220deg 20% 97%);

    --color-blue-primary: hsl(225deg 80% 56%);
    --color-blue-secondary: hsl(209deg 96% 67%);


    /*Other Reusables*/
    --border-radius-general: 10px;
  }

  /* 1. Use a more-intuitive box-sizing model. */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* 2. Remove default margin and padding */
  * {
    margin: 0;
    padding: 0;
  }

  /* 3. Allow percentage-based heights in the application */
  html, body, #root {
    width: 100%;
    height: 100%;
    font-family: 'Plus Jakarta Sans';
    font-size: 16px;
    background-color: var(--color-background);
  }

  /* 4. Add accessible line-height & Improve text rendering */

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  /* 5. Remove built-in form typography styles */
  input, button, textarea, select {
    font: inherit;
  }

  /* 6. Create a root stacking context */
  #root {
    isolation: isolate;
  }
`