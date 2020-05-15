import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../src/utils/globals";
import theme from "../src/utils/theme";
import configureStore from "./store";

import App from "./components/App/App";

ReactDOM.render(
  <Provider store={configureStore()}>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </Provider>,
  document.querySelector("#root")
);
