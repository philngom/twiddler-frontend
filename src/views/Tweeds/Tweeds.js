import { useUser } from '../../context/UserContext';
import { useLocation, useHistory, Link } from 'react-router-dom';
import { useTweed } from '../../context/TweedProvider';

export default function Tweeds() {
  const { state } = useTweed();
  console.log('🚀 ~ file: Tweeds.js ~ line 7 ~ Tweeds ~ state', state);

  const handleAddTweed = () => {};
  const location = useLocation();
  return (
    <>
      <Link to="/tweed">Add Tweed</Link>
      {state.map((tweed) => {
        return <li key={tweed.id}>{}</li>;
      })}
    </>
  );
}
