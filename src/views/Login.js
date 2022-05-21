import { useState } from 'react';
import { useUser } from '../context/UserContext';
import { useHistory, useLocation } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, userSignUp } = useUser();
  const history = useHistory();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSignIn = async () => {
    try {
      await login(email, password);

      const url = location.state.origin ? location.state.origin.pathname : '/';

      history.replace(url);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignUp = async () => {
    await userSignUp(email, password);
    await handleSignIn();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            value={password}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button onClick={handleSignIn}>Sign In</button>
        <button onClick={handleSignUp}>Sign Up</button>
      </form>
    </>
  );
}
