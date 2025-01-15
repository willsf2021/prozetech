import { useState } from "react";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./constants/theme";
import { Hr } from "./components/Hr";
import { Header } from "./components/Header";
import { Services } from "./components/Services";
import { Intro } from "./components/Intro";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Intro />
      <Hr />
      <Services />
      <Hr />
    </ThemeProvider>
  );
}

export default App;
