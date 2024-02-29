import styles from '@/app/lobby/styles-lobby.module.scss'
import ListOfPlayers from '@/app/components/list-of-players/list-of-players'

export default function LobbyPage() {
  const players = [
    {userName: 'Игрок #4', id: '15', avatar: '#', status: 'Online'},
    {userName: 'Игрок #5', id: '25', avatar: '#', status: 'Online'},
    {userName: 'Игрок #6', id: '555', avatar: '#', status: 'Online'}
  ]
  return (
    <>
      <h1>Страница лобби</h1>
      <div className={styles.lobbyPlayers}><ListOfPlayers players={players}></ListOfPlayers></div>
    </>      
  );
};