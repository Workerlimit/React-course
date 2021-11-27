import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Friends from "./components/Friends";
import Friend from "./components/Friend";
function App() {
  const [authed, setAuthed] = useState(false);
  const [state, setState] = useState({
    username: "",
    password: ""
  });
  const check = () => {
    if (!authed) return <Login authed={authed} setAuthed={setAuthed} state={state} setState={setState} />;
  }
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home authed={authed} state={state}/>
        </Route>
        <Route path="/profile">
          {check()}
          <Profile authed={authed} state={state} /> 
        </Route>
        <Route path="/friends">
          {check()}
          <Friends authed={authed}/> 
        </Route>
        <Route path="/friends/:id">
          <Friend />
        </Route>
        <Route path="/login">
          <Login authed={authed} setAuthed={setAuthed} state={state} setState={setState}/>
        </Route>
      </Switch>
    </Router>  
  );
}

export default App;
