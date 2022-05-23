import { useUser } from '../../context/UserContext';
import { Link } from 'react-router-dom';
import { useTweed } from '../../context/TweedProvider';

export default function Tweeds() {
  const { state } = useTweed();

  const handleAddTweed = () => {};

  return (
    <>
      <Link to="/tweed">Add Tweed</Link>
      {state.map((tweed) => {
        return <li key={tweed.id}>{tweed.content}</li>;
      })}
    </>
  );
}
