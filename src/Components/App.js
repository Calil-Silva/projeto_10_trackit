import { BrowserRouter, Route, Switch } from "react-router-dom";
import '../reset.css'
import Login from "./Login/login";
import Register from "./Register/register";
import Habits from "./Habits/habits";
import CreatedHabits from "./Habits/createdHabits";
import Today from "./Today/today";

export default function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Today} />
    </Switch>
    </BrowserRouter>
  );
}
