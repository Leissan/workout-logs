import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import NewExercise from "../pages/NewExercise";
import ExerciseList from "../pages/ExerciseList";
import NewLog from "../pages/NewLog";
import LogList from "../pages/LogList";
import axios from 'axios'

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/new_exercise">
            <NewExercise user={user} />
          </Route>
          <Route path="/exercises">
            <ExerciseList user={user} />
          </Route>
          <Route path="/new_logs">
            <NewLog user={user} />
          </Route>
          <Route path="/history">
            <LogList user={user} />
          </Route>
          <Route path="/">
            <LogList user={user} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
