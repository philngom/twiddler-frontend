import Home from './views/Home/Home';
import styles from './App.css';
import { Switch, Route } from 'react-router-dom';
import Tweeds from './views/Tweeds/Tweeds';

export default function App() {
  return (
    <Switch>
      <Route path="/tweeds">
        <Tweeds />
      </Route>
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
