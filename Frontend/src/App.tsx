import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ScrollToTop } from './components';

import { GlobalStyles } from './globalStyles';
import { AddCar, CarDetails, Category, Home, Profile } from './pages';
import { theme } from './types/theme-type';


const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Router>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/add-car" element={<AddCar />} />
              <Route path="/car-details" element={<CarDetails />} />
              <Route path="/category" element={<Category />} />
              <Route path="/search/:q" />
            </Routes>
          </ScrollToTop>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App;