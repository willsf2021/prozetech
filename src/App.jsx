import { useState } from "react";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./constants/theme";
import { Hr } from "./components/Hr";
import { Header } from "./components/Header";
import { Services } from "./components/Services";
import { Intro } from "./components/Intro";
import { Footer } from "./components/Footer";
import { WhatsappButton } from "./components/WhatsappButton";
import { Solutions } from "./components/Solutions";
import { Contact } from "./components/Contact";
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
      <Solutions />
      <Hr />
      <Contact/>
      <Footer />
      <WhatsappButton />
    </ThemeProvider>
  );
}

export default App;
