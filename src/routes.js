import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login/index";
import Suppliers from "./pages/SupplierList/index"
import SuppliersDetails from "./pages/SuppliersDetails/index"


export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Suppliers}/>
                <Route path="/login" component={Login}/>
                <Route path="/suppliersdetails" component={SuppliersDetails}/>
            </Switch>
        </BrowserRouter>
    )
}