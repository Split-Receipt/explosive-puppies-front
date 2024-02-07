import styles from './styles-lobby.module.scss'
import ListOfPlayers from '../components/list-of-players/list-of-players'

export default function LobbyPage() {
  const players = [
    {userName: 'Player #1', id: '1', avatar: '#'},
    {userName: 'Player #2', id: '2', avatar: '#'},
    {userName: 'Player #3', id: '3', avatar: '#'},
    {userName: 'Player #4', id: '4', avatar: '#'},
    {userName: 'Player #5', id: '5', avatar: '#'},
    {userName: 'Player #6', id: '6', avatar: '#'}
  ]
  return (
    <>
      <h1>Страница лобби</h1>
      <div className={styles.lobbyPlayers}><ListOfPlayers player={players}></ListOfPlayers></div>
    </>      
  );
};