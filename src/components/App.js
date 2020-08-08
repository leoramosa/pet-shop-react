import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PetHome from "../pages/PetHome";
import DetailsProduct from "../pages/DetailsProduct";

import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={PetHome} />
          <Route exact path="/detailproduct" component={DetailsProduct} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
