import { useState, useReducer } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useTweed } from '../context/TweedProvider';

export default function Tweed() {
  const [content, setContent] = useState();
  const { state, addTweed } = useTweed();
  const history = useHistory();

  const handleAddTweed = async (e) => {
    e.preventDefault();
    await addTweed(content);
    // history.push('/tweeds');
  };

  return (
    <>
      <Link to="/tweeds">Back</Link>
      <form onSubmit={handleAddTweed}>
        <input value={content} onChange={(e) => setContent(e.target.value)} />
        <button type="submit">Add Tweed</button>
      </form>
    </>
  );
}
