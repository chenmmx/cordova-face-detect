import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AppSelf from './components/self/appSelf';
import Demo01 from './components/Demo01';
import Demo02 from './components/Demo02';


export default function AppRouter() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Self</Link>
        </li>
        <li>
          <Link to="/demo01">Demo01 </Link>
        </li>
        <li>
          <Link to="/demo02">Demo02</Link>
        </li>
      </ul>
      <Route path="/" exact component={AppSelf} />
      <Route path="/demo01" component={Demo01} />
      <Route path="/demo02" component={Demo02} />
    </Router>
  );
}
