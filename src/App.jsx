import Home from './views/Home/Home';
import styles from './App.css';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute.js';
import Login from './components/Login.js';
import Tweeds from './views/Tweeds/Tweeds';

export default function App() {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <PrivateRoute path="/tweeds">
        <Tweeds />
      </PrivateRoute>
      <Route path="/my-tweeds">
        <Tweeds />
      </Route>
      <Route path="/">
        <main>
          <Home />
        </main>
      </Route>
    </Switch>
  );
}
