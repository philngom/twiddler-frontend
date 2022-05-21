import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <form>
        <label>
          Email:
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Sign In</button>
        <button>Sign Up</button>
      </form>
    </>
  );
}
