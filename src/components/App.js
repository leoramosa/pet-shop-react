import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PetHome from "../pages/PetHome";
import DetailsProduct from "../pages/DetailsProduct";
import HomeProducts from "../pages/HomeProducts";
import NotFound from "../pages/NotFound";
import { AppProvider } from "../context/AppContext";
import LoginRegister from "../pages/LoginRegister";
import Cart from "../pages/Cart";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Layout from "./Layout";
import Prueba from "../components/prueba";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Layout>
          <Switch>
            <Route exact path="/" component={PetHome} />
            <Route exact path="/login" component={LoginRegister} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/products/" component={HomeProducts} />
            <Route exact path="/productos/:id/" component={DetailsProduct} />
            <Route exact path="/productos/:id/" component={DetailsProduct} />
            <Route exact path="/prueba" component={Prueba} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
