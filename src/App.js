import React from "react";
import { ThemeProvider } from "styled-components";
import Button from "./components/atoms/Button";
import GlobalStyle from "./styles/GlobalStyle";

import defaultTheme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Button>테스트</Button>
    </ThemeProvider>
  );
}

export default App;
