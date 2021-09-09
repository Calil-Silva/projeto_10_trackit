import { BrowserRouter, Route, Switch } from "react-router-dom";
import '../reset.css'
import { useState } from "react";
import Login from "./Login/login";
import Register from "./Register/register";
import Habits from "./Habits/habits";
import CreatedHabits from "./Habits/createdHabits";
import Today from "./Today/today";
import History from "./History/history";
import LoaderSpinner from "../Shared/Components/spinner/loader";
import UserContext from "../Shared/Components/userContext/userContext";

export default function App() {
  const [userData, setUserData] = useState('')
  console.log(userData);

  return (
    <UserContext.Provider value={{userData, setUserData}}>
    <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Login} setUserData={setUserData}/>
      <Route path='/cadastro' exact component={Register} />
      <Route path='/hoje' exact component={Today} />
    </Switch>
    </BrowserRouter>
    </UserContext.Provider>
  );
};
