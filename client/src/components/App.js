import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import NewExercise from "../pages/NewExercise";
import ExerciseList from "../pages/ExerciseList";
import NewLog from "../pages/NewLog";
import Show from "../pages/Show";
import LogList from "../pages/LogList";
import UpdateLog from "../pages/UpdateLog";

function App() {
  const [user, setUser] = useState(null);
  const [exer, setExer] = useState("")

  useEffect(() => {  
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    })
;  }, []);


  if (!user) return <Login onLogin={setUser} />;
  console.log(user)

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/new_exercise">
            <NewExercise user={user} setUser={setUser} />
          </Route>
          <Route path="/exercises">
            <ExerciseList user={user} />
          </Route>
          <Route path="/new_logs">
            <NewLog user={user} setUser={setUser} />
          </Route>
          <Route path="/update_log/:id">
            <UpdateLog user={user} setUser={setUser} />
          <Route path="/exercises/:id">
            <Show user={user} setUser={setUser}/>
          </Route>
          </Route>
          <Route path="/history">
            <LogList user={user} setUser={setUser} />
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
