import { FC, useContext } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { CarsContext } from "./contexts/CarContext"
import { GlobalStyles } from "./globalStyles"
import { Home, SearchFilter, Error } from "./pages"
import { theme } from "./types/theme-type"


const App: FC = () => {
  const context = useContext(CarsContext)
  const { isSearchActive } = context

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchFilter />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
