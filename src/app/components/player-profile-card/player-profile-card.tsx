import styles from './player-profile-card.module.scss'
import { Text } from '@mantine/core';

export default function PlayerProfileCard({id, userName, avatar, position}) {
    return (
      <>
         <div className={`${styles.player}
                         ${position === 'horizontal' ? styles.playerHorizontal :
                           position === 'vertical' ? styles.playerVertical : undefined}`} 
                         id={id}>
          <img src={avatar} className={`${styles.playerImg}
                                        ${position === 'horizontal' ? styles.playerImgHorizontal :
                                          position === 'vertical' ? styles.playerImgVertical : undefined}`}></img>
          <Text size='lg' lineClamp={1}>{userName}</Text>
        </div>
      </>      
    );
};