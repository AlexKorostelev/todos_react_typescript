/* eslint-disable no-use-before-define */
/* eslint-disable import/extensions */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import TodosPage from './pages/TodosPage';
import AboutPage from './pages/AboutPage';

const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route component={TodosPage} path="/" exact />
      <Route component={AboutPage} path="/about" exact />
    </Switch>
  </BrowserRouter>
);

export default App;
