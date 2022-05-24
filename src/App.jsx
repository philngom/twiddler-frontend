import Home from './views/Home/Home';
import styles from './App.css';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute.js';
import Login from './views/Login.js';
import Tweeds from './views/Tweeds/Tweeds';
import Tweed from './components/Tweed';

export default function App() {
  return (
    <Switch>
      <PrivateRoute path="/tweeds">
        <Tweeds />
      </PrivateRoute>
      <PrivateRoute path="/tweed">
        <Tweed />
      </PrivateRoute>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <main>
          <Home />
        </main>
      </Route>
    </Switch>
  );
}
