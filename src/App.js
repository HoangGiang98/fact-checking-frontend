import React from 'react';
import './App.css';
import { createBrowserHistory } from "history";
import { BrowserRouter as Router , Route, Switch } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Home from './views/Home';
import theme from './theme/index';
import { Dashboard } from './components/Dashboard';
import { HowItWorks } from './components/HowItWorks';
import { History } from './components/History';
const hist = createBrowserHistory();

function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <Paper>
    <div className="App">
      <main>
        <section className="glass">
          <Router history={hist}>
            <Dashboard />
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/history" component={History} />
            <Route path="/workings" component={HowItWorks} />
            </Switch>
            </Router>
        </section>
      </main>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </div>
  </Paper>
  </MuiThemeProvider>
    );
}

export default App;
