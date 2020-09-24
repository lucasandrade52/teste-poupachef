import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login/index";
import Suppliers from "./pages/SupplierList/index";
import SuppliersDetails from "./pages/SuppliersDetails/index";

import { AuthProvider } from "./services/authContext";

export default function Router() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route path="/" exact component={Suppliers} />
          <Route path="/login" component={Login} />
          <Route path="/supplier-details" component={SuppliersDetails} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}