import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './globalStyles';
import { Home, Profile } from './pages';
import { theme } from './types/theme-type';

const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App;