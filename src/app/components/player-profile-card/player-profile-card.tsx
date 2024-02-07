import styles from './player-profile-card.module.scss'

export default function PlayerProfileCard({id,userName,avatar}) {
    return (
      <>
         <div className={styles.player} id={id}>
          <img src={avatar} className={styles.playerImg}></img>
          <p>{userName}</p>
        </div>
      </>      
    );
};