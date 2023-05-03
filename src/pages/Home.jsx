import React from 'react';
import styles from './Home.module.css'
import Timer from '../components/Timer';

function Home() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Before my Birthday</h1>

      <Timer />
    </div>
  );
}

export default Home;
