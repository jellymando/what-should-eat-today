import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import PlaceList from "./pages/PlaceList";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/placeList">
          <PlaceList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
