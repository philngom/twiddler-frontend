import { useState, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { useTweed } from '../context/TweedProvider';

export default function Tweed() {
  const [content, setContent] = useState();
  const { state } = useTweed();

  const handleAddTweed = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Link to="/tweeds">Back</Link>
      <form onSubmit={handleAddTweed}>
        <input onChange={(e) => setContent(e.target.value)} value={content} />
        <button type="submit">Add Tweed</button>
      </form>
    </>
  );
}
