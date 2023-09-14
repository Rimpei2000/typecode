import "./App.css";

import NavBar from "./components/NavBar";

import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import Home from "./pages/Home";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        "Noto Sans",
        "Montserrat",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ].join(","),
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar></NavBar>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
