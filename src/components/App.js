import React from "react";
import { Route } from "react-router";
import Page from "./Page";
import HomePage from "./HomePage";
import TopicPage from "../containers/TopicPage";

const App = () => (
  <Page>
    <Route exact path="/" component={HomePage} />
    <Route path="/topics/:slug" component={TopicPage} />
  </Page>
);

export default App;
