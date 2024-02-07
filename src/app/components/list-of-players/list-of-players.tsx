import styles from './list-of-players.module.scss'
import PlayerProfileCard from '../player-profile-card/player-profile-card';

export default function ListOfPlayers({player}) {
    return (
      <>
      <div className={styles.players}>
       {player.map((player) => <PlayerProfileCard id={player.id} userName={player.userName} avatar={player.avatar} key={player.id}></PlayerProfileCard>)}      
      </div>
      </>      
    );
  };