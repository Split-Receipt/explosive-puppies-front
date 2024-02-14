'use client'
import styles from './list-of-players.module.scss'
import PlayerProfileCard from '../player-profile-card/player-profile-card';
import { useMemo } from 'react';

const defaultPlayersList = [
  {userName: 'Player #1', id: '1', avatar: '#'},
  {userName: 'Player #2', id: '2', avatar: '#'},
  {userName: 'Player #3', id: '3', avatar: '#'},
  {userName: 'Player #4', id: '4', avatar: '#'},
  {userName: 'Player #5', id: '5', avatar: '#'},
  {userName: 'Player #6', id: '6', avatar: '#'}
]
const replaceDefaults = (defaultPlayersList, newPlayersList) => {
  let result = []
  if(!newPlayersList.length) {
      result = defaultPlayersList
  } else {
    for(let iterator = 0; iterator < 6; iterator++){
      const playerInNewPlayersList = newPlayersList[iterator]
      if(playerInNewPlayersList){
        result[iterator] = playerInNewPlayersList
      } else {
        result[iterator] = defaultPlayersList[iterator]
      }
    }
  }
  
  return result
}
export default function ListOfPlayers({players}) {
 const actualPlayersList = useMemo(() => replaceDefaults(defaultPlayersList, players),[defaultPlayersList, players])
    return (
      <>
      <div className={styles.players}>
       {actualPlayersList.map((player) => <PlayerProfileCard id={player.id} userName={player.userName} avatar={player.avatar} key={player.id} position='horizontal'></PlayerProfileCard>)}      
      </div>
      </>      
    );
  };