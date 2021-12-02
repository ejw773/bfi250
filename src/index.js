import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Login from './components/Login';
import Profile from './components/Profile';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { 
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


ReactDOM.render(
<Provider store={store}>
  <div className="App">
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
      </Switch>
    </Router>
  </div>
</Provider>,
document.getElementById('root')
);