'use client';

import styles from '@/app/game/styles-game.module.scss';
import { GameApiModule } from '@/app/game/api/game';
import { useEffect } from 'react';
import useLobbyStore from '@/app/store/lobby';
import useGameStore from '@/app/store/game';

export default function GamePage() {
	const idGame = useLobbyStore((state) => state.id);
	const addDataGame = useGameStore((state) => state.addDataGame);

	const gameRequest = async () => {
		try {
			const response = await GameApiModule.getGameById({ id: idGame });
			addDataGame(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => { gameRequest(); }, []);

	return (
		<>
			<div className={styles.gameParts}>
				<main>
					<div className={styles.gameTableWrapper}>
						<div className={styles.gameTableImage}>
						</div>
					</div>
				</main>
				<footer className={styles.gameFooter}>Footer</footer>
			</div>
		</>
	);
}
