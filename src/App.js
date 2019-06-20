import React from 'react';
import logo from './logo.svg';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Home from './components/Home';
import Notfound from './components/pages/NotFound';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={Notfound} />
            </Switch>
          </header>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
