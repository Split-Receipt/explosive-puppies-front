import styles from '@/app/components/player-profile-card/player-profile-card.module.scss';
import { Text } from '@mantine/core';

export default function PlayerProfileCard({position, playerInfo}) {
	return (
		<>
			<div className={`${styles.player}
                         ${position ? styles[`player${position}`] : styles.playerHorizontal}                    
                         ${playerInfo.status ? styles[`playerStatus${playerInfo.status}`] : styles.playerStatusOffline}`}
			id={playerInfo.id}>
				<img src={playerInfo.avatar} className={`${styles.playerImg}
                         ${position ? styles[`playerImg${position}`] : styles.playerImgHorizontal}`}></img>
				<Text size='lg' lineClamp={1}>{playerInfo.userName}</Text>
			</div>
		</>      
	);
}
