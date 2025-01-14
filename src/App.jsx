import { useState } from "react";
import GlobalStyles from "./GlobalStyles";
import { Header } from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyles />
      <Header />
    </>
  );
}

export default App;
