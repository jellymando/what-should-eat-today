import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Header from "./components/Header";
import Home from "./pages/Home";
import Member from "./pages/Member";
import Place from "./pages/Place";
import Loader from "./components/Loader";

function App() {
    return (
        <RecoilRoot>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Suspense fallback={<Loader />}>
                            <Home />
                        </Suspense>
                    </Route>
                    <Route path="/member">
                        <Suspense fallback={<Loader />}>
                            <Member />
                        </Suspense>
                    </Route>
                    <Route path="/place">
                        <Suspense fallback={<Loader />}>
                            <Place />
                        </Suspense>
                    </Route>
                </Switch>
            </Router>
        </RecoilRoot>
    );
}

export default App;
