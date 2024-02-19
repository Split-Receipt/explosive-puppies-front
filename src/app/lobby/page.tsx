'use client'

import styles from '@/app/lobby/styles-lobby.module.scss';
import variables from '@/app/styles/variables.module.scss';
import { Button, Text, MantineProvider, createTheme, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const theme = createTheme({
  components: {
    Button: Button.extend({ classNames: styles }),
  }
});

export default function LobbyPage() {
  const mobileScreen = useMediaQuery(`(max-width: ${em(768)})`);

  return (
    <>
      <div className={styles.lobbyWrapper}>
        <div className={styles.lobby}>
          <h1 className={styles.lobbyTitle}>Лобби</h1>

          <div className={styles.lobbyContent}>
            <div className={styles.lobbyListPlayers}>Список игроков</div>
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
                  size={mobileScreen ? 'xs' : 'lg'}
                  type="submit"
                >Начать игру</Button>
              </MantineProvider>
            </div>
          </div>
        </div>
      </div>
    </>      
  );
};