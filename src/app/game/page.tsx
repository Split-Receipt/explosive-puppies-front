'use client'
import styles from '@/app/game/styles-game.module.scss'
import { GameApiModule } from '@/app/game/api/game';
import { use, useEffect } from 'react';

export default function GamePage() {
  const GameRequest = async () => {
    try {
        const response = await GameApiModule.getGameById({ id: '222' });
        console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  };
    useEffect(() => {GameRequest()}, [])
  return (
    <>
    {/* <header>
      <h1>Страница игры</h1>
    </header> */}
    <div className={styles.gameParts}>
    <main>
      {/* <button onClick={GameRequest}>PUM</button> */}
        <div className={styles.gameTableWrapper}>
          <div className={styles.gameTableImage}>
          </div>
        </div>
    </main>
    <footer className={styles.gameFooter}>Footer</footer>
    </div>
    </>      
  );
};