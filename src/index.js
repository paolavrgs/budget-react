import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Notfound from './components/NotFound'
import App from './components/App';
import CategoriesPage from './pages/CategoriesPage';
import IncomesPage from './pages/IncomesPage';
import ExpensesPage from './pages/ExpensesPage';

const routing = (
  <Router>
    <div>
      <div className="ui list app-sidebar">
        <div className="item">
          <i className="home icon"></i>
          <div className="content">
            <Link to="/">Home</Link>
          </div>
        </div>
        <div className="item">
          <i className="tags icon"></i>
          <div className="content">
            <Link to="/categories">Expenses categories</Link>
          </div>
        </div>
        <div className="item">
          <i className="sign-in icon"></i>
          <div className="content">
            <Link to="/incomes">Incomes</Link>
          </div>
        </div>
        <div className="item">
          <i className="sign-out icon"></i>
          <div className="content">
            <Link to="/expenses">Expenses</Link>
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/categories" component={CategoriesPage} />
        <Route path="/incomes" component={IncomesPage} />
        <Route path="/expenses" component={ExpensesPage} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
