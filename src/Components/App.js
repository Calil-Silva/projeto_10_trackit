import { BrowserRouter, Route, Switch } from "react-router-dom";
import '../reset.css'
import Login from "./Login/login";
import Register from "./Register/register";
import Habits from "./Habits/habits";
import CreatedHabits from "./Habits/createdHabits";
import Today from "./Today/today";
import History from "./History/history";
import LoaderSpinner from "../Shared/Components/spinner/loader";

export default function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='/cadastro' exact component={Register} />
    </Switch>
    </BrowserRouter>
  );
};
