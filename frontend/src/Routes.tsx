import { BrowserRouter, Route } from "react-router-dom";
import CreateUser from "./components/pages/CreateUser";
import Login from "./components/pages/Login";
import Main from "./components/pages/Main";

export function Routes() {
  return (
    <BrowserRouter>
    <Route path="/" exact component={ Login }/>
    <Route path="/dashboard" exact component={ Main }/>
    <Route path="/users/create" exact component={ CreateUser } />
  </BrowserRouter>
  )
}
