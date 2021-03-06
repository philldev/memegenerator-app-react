import {
  CSSReset,
  ThemeProvider
} from "@chakra-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";
import Error from "../components/Error";
import Header from "../components/header/Header";
import Nav from "../components/header/Nav";
import Main from "../components/main/Main";
import MemeTemplate from "../components/main/MemeTemplate";
import { MemeProvider } from "../context/memeContext";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <MemeProvider>
        <Router>
          <Nav />

          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <>
                  <Header />
                  <Main />{" "}
                </>
              )}
            />
            <Route exact path="/meme/:id" render={() => <MemeTemplate />} />
            <Route exact path="/user" render={() => <Dashboard />} />
          </Switch>
        </Router>
        <Error />
      </MemeProvider>
    </ThemeProvider>
  );
}

export default App;
