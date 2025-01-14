import { useState } from "react";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./constants/theme";
import { Header } from "./components/Header";


function App() {
  const [count, setCount] = useState(0);

  return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
      </ThemeProvider>
  );
}

export default App;
