import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ConnectedRouter } from "connected-react-router";
import "../node_modules/react-modal-video/scss/modal-video.scss";

import GlobalStyle from "../src/utils/globals";
import theme from "../src/utils/theme";
import configureStore from "./store";
import history from "./history";

import App from "./components/App";

ReactDOM.render(
  <Provider store={configureStore()}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.querySelector("#root")
);
