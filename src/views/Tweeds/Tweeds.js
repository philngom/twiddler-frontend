import { useUser } from '../../context/UserContext';
import { Link } from 'react-router-dom';
import { useTweed } from '../../context/TweedProvider';
import { useEffect, useState } from 'react';

export default function Tweeds() {
  const { state, getTweeds } = useTweed();
  // const [user, setUser] = useState(localStorage.getItem('supabase.auth.token'));
  const { user, logout } = useUser();

  console.log(user);

  // useEffect(() => {
  //   getTweeds();
  // }, []);

  return (
    <>
      {user ? (
        <>
          <Link to="/tweed">Add Tweed</Link>
          <h5>Welcome {user.email}</h5>
          {state.map((tweed) => {
            return <li key={tweed.id}>{tweed.content}</li>;
          })}
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        ''
      )}
    </>
  );
}
