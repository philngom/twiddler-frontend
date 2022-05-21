import { useUser } from '../../context/UserContext';
import { useLocation, useHistory } from 'react-router-dom';

export default function Tweeds() {
  const location = useLocation();
  return <div>Tweeds</div>;
}
