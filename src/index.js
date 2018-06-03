import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { getStore } from "./store";

import Page from "./components/Page";
import HomePage from "./containers/HomePage";
import TopicPage from "./containers/TopicPage";
import RedirectPage from "./components/RedirectPage";
import registerServiceWorker from "./registerServiceWorker";

import createHistory from "history/createBrowserHistory";
import { Route } from "react-router";

import { ConnectedRouter } from "react-router-redux";

const history = createHistory();

ReactDOM.render(
  <Provider store={getStore(history)}>
    <ConnectedRouter history={history}>
      <Page>
        <Route exact path="/" component={HomePage} />
        <Route path="/topics/:slug" component={TopicPage} />
        <Route path="/goto/:url" component={RedirectPage} />
      </Page>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
