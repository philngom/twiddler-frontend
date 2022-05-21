import Home from './views/Home/Home';
import styles from './App.css';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute.js';
import Login from './views/Login.js';
import Tweeds from './views/Tweeds/Tweeds';
import { TweedProvider } from './context/TweedProvider.js';

export default function App() {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <TweedProvider>
        <PrivateRoute path="/tweeds">
          <Tweeds />
        </PrivateRoute>
        <PrivateRoute path="/my-tweeds">
          <Tweeds />
        </PrivateRoute>
      </TweedProvider>
      <Route path="/">
        <main>
          <Home />
        </main>
      </Route>
    </Switch>
  );
}
