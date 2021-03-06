import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ScrollToTop from "./component/scrollToTop";
import "bootstrap/dist/css/bootstrap.min.css"

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import {Characters} from "./views/characters";
import {Character} from "./views/character";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import {Planets} from "./views/planets";
import {Planet} from "./views/planet";
import {Vehicles} from "./views/vehicles";
import {Vehicle} from "./views/vehicle";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";
    return (
        <div id="BlueBoxIthink">
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/demo" component={Demo}/>
                        <Route exact path="/single/:theid" component={Single}/>
                        <Route exact path="/character/:id" component={Character}/>
                        <Route exact path="/planet/:id" component={Planet}/>
                        <Route exact path="/vehicle/:id" component={Vehicle}/>
                        
                        <Route>
                            <h1>Not found!</h1>
                        </Route>
                    </Switch>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};
export default injectContext(Layout);
