import styles from './styles-lobby.module.scss'
import ListOfPlayers from '../components/list-of-players/list-of-players'

export default function LobbyPage() {
  const players = [
    {userName: 'Player #4', id: '15', avatar: '#'},
    {userName: 'Player #5', id: '25', avatar: '#'},
    {userName: 'Player #6', id: '555', avatar: '#'}
  ]
  return (
    <>
      <h1>Страница лобби</h1>
      <div className={styles.lobbyPlayers}><ListOfPlayers players={players}></ListOfPlayers></div>
    </>      
  );
};