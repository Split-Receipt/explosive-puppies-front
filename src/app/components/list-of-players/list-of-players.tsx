'use client';
import styles from '@/app/components/list-of-players/list-of-players.module.scss'
import PlayerProfileCard from '@/app/components/player-profile-card/player-profile-card';
import { useMemo } from 'react';
import { Player } from '@utils/types/player';

const defaultPlayersList = [
	{userName: 'Игрок #1', id: '1', avatar: '#', status: 'Offline'},
	{userName: 'Игрок #2', id: '2', avatar: '#', status: 'Offline'},
	{userName: 'Игрок #3', id: '3', avatar: '#', status: 'Offline'},
	{userName: 'Игрок #4', id: '4', avatar: '#', status: 'Offline'},
	{userName: 'Игрок #5', id: '5', avatar: '#', status: 'Offline'},
	{userName: 'Игрок #6', id: '6', avatar: '#', status: 'Offline'},
];

const replaceDefaults = (defaultPlayersList : Player[], newPlayersList) => {
	let result = [];
	if (!newPlayersList.length) {
		result = defaultPlayersList;
	} else {
		for (let iterator = 0; iterator < 6; iterator++) {
			const playerInNewPlayersList = newPlayersList[iterator];
			if (playerInNewPlayersList) {
				result[iterator] = playerInNewPlayersList;
			} else {
				result[iterator] = defaultPlayersList[iterator];
			}
		}
	}
  
	return result;
};

export default function ListOfPlayers({players}) {
	const actualPlayersList = useMemo(() => replaceDefaults(defaultPlayersList, players), [defaultPlayersList, players]);

	return (
		<>
			<div className={styles.players}>
				{actualPlayersList.map((player) => <PlayerProfileCard playerInfo={player} key={player.id}></PlayerProfileCard>)}      
			</div>
		</>      
	);
}
