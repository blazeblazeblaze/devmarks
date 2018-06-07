import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { getStore } from "./store";

import registerServiceWorker from "./registerServiceWorker";
import createHistory from "history/createBrowserHistory";
import { ConnectedRouter } from "react-router-redux";
import App from "./components/App";

const history = createHistory();

ReactDOM.render(
  <Provider store={getStore(history)}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
