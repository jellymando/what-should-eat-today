import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Header from "./components/Header";
import Home from "./pages/Home";
import PlaceList from "./pages/PlaceList";

function App() {
    return (
        <RecoilRoot>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/placeList">
                        <PlaceList />
                    </Route>
                </Switch>
            </Router>
        </RecoilRoot>
    );
}

export default App;
