import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import ProductSearchPage from './pages/ProductSearchPage';
import ProductPage from './pages/ProductPage';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <ProductSearchPage />
        </Route>
        <Route path="/product">
          <ProductPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
