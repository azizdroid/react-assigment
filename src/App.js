import react from "react";
import DataFolder from "./DataFolder/DataFolder";
import Form from "./Form/Form";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/dataFolder">
            <DataFolder />
          </Route>
          <Route path="/">
            <Form />{" "}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
