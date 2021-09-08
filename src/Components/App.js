import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login/login";
import Register from "./Register/register";
import '../reset.css'

export default function App() {
  return (
    <Router>
    <Switch>
      <Route path='/' exact component={Register} />
    </Switch>
    </Router>
  );
}
