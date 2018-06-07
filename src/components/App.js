import React from "react";
import { Route } from "react-router";
import Page from "./Page";
import HomePage from "../containers/HomePage";
import TopicPage from "../containers/TopicPage";
import RedirectPage from "../components/RedirectPage";

const App = () => (
  <Page>
    <Route exact path="/" component={HomePage} />
    <Route path="/topics/:slug" component={TopicPage} />
    <Route path="/goto/:url" component={RedirectPage} />
  </Page>
);

export default App;
