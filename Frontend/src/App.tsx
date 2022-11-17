import { FC } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./globalStyles"
import { Home, Error } from "./pages"
import { theme } from "./types/theme-type"


const App: FC = () => {
 

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            {/* <Route path="/search" element={<SearchFilter />} /> */}
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
