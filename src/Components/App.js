import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login/login";
import '../reset.css'

export default function App() {
  return (
    <Router>
    <Switch>
      <Route path='/' exact component={Login} />
    </Switch>
    </Router>
  );
}
