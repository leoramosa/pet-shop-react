import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PetHome from "../pages/PetHome";

import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={PetHome} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
