import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Header from "./components/Header";
import Home from "./pages/Home";
import Place from "./pages/Place";

function App() {
    return (
        <RecoilRoot>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Suspense fallback={<></>}>
                            <Home />
                        </Suspense>
                    </Route>
                    <Route path="/place">
                        <Suspense fallback={<></>}>
                            <Place />
                        </Suspense>
                    </Route>
                </Switch>
            </Router>
        </RecoilRoot>
    );
}

export default App;
