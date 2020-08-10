import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PetHome from "../pages/PetHome";
import DetailsProduct from "../pages/DetailsProduct";
import HomeProducts from "../pages/HomeProducts";

import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={PetHome} />
          <Route path="/products/" component={HomeProducts} />
          <Route path="/productos/:id/" component={DetailsProduct} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
