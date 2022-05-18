import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

export default function Home() {
  return (
    <div className={styles.homepage}>
      <div>
        <h1>Welcome to twiddler</h1>
      </div>
      <div>
        <Link to="tweeds">
          <h2>View tweeds</h2>
        </Link>
      </div>
      <div>
        <Link to="my-tweeds">
          <h2>View my tweeds</h2>
        </Link>
      </div>
    </div>
  );
}
