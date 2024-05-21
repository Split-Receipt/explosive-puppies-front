'use client'

import styles from '@/app/lobby/styles-lobby.module.scss';
import variables from '@/app/styles/variables.module.scss';
import { Button, Text, MantineProvider, createTheme, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import ListOfPlayers from '@/app/components/list-of-players/list-of-players';
import { GameCreateApiModule } from '@/app/lobby/api/loddy';
import { useRouter } from 'next/navigation';
import useLobbyStore from '@/app/store/lobby';

const theme = createTheme({
  components: {
    Button: Button.extend({ classNames: styles }),
  }
});

const players = [
  {userName: 'Игрок #1', id: '15', avatar: '#', status: 'Online'},
  {userName: 'Игрок #2', id: '25', avatar: '#', status: 'Online'},
  {userName: 'Игрок #3', id: '555', avatar: '#', status: 'Online'}
];

const lobbyId = '';

export default function LobbyPage() {
  let addGameId = useLobbyStore((state) => state.addGameId);

  const router = useRouter();

  const createGameRequest = async () => {
    try {
      const response = await GameCreateApiModule.createGame({ players: players, lobbyId: lobbyId });
      const { id } = response.data;
      addGameId(id);

      router.push('/game');
    } catch (error) {
      console.error(error)
    }
  };

  const mobileScreen = useMediaQuery(`(max-width: ${em(768)})`);

  return (
    <>
      <div className={styles.lobbyWrapper}>
        <div className={styles.lobby}>
          <div className={styles.lobbyHeader}>
            <h1 className={styles.lobbyHeaderText}>Лобби</h1>
            <h3 className={styles.lobbyHeaderCode}>Код лобби: { lobbyId }</h3>
          </div>
      

          <div className={styles.lobbyContent}>
            <div className={styles.lobbyPlayersList}>
                <ListOfPlayers players={players}></ListOfPlayers>
            </div>
            <div className={styles.lobbySection}>
              <Text
                className={styles.lobbyInfo}
                size={mobileScreen ? 'sm' : 'md'}
              >
                Вот вам загадка - вместе с нами на Земле проживает более пятисот миллионов этих милейших созданий, фото и видео с их участием набирают невероятную популярность в интернете, мы очень любим их гладить, чесать им пузико и щекотать подушечки ног... Речь, конечно же, про любимых котеек!
                А спрашивали ли вы себя, о чём они мурлычат по ночам? О чём они мечтают? А главное, что произойдёт, если милейшие котята доберутся своими пушистыми лапками до... взрывчатки?! Макака с гранатой, конечно, вызывает некоторые опасения, а насколько будет опасен милый пушистик, обвязанный тротидовыми. шашками? Правильный ответ - СМЕРТЕЛЬНО опасен! К несчастью, котейки уже вооружены, и вам предстоит разобраться с этим взрывным милейшеством!
              </Text>
              
              <MantineProvider theme={theme}>
                <Button
                  className={styles.lobbyButton}
                  color={variables.lobbyButtonPrimary}
                  variant="buttonPrimary"
                  size={mobileScreen ? 'md' : 'lg'}
                  type="submit"
                  onClick={()=> createGameRequest()}
                >Начать игру</Button>
              </MantineProvider>
            </div>
          </div>
        </div>
      </div>
    </>      
  );
};