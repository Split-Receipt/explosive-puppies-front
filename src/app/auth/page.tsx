'use client'

import styles from '@/app/auth/styles.module.scss';
import variables from '@/app/styles/variables.module.scss';
import { useState } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, MantineProvider, createTheme, Box, em } from '@mantine/core';
import { rubikWetPaint } from '@/app/styles/fonts';
import { useMediaQuery } from '@mantine/hooks';
import { AuthApiModule } from '@/app/auth/api/auth';
import { useRouter } from 'next/navigation';

const theme = createTheme({
  components: {
    TextInput: TextInput.extend({ classNames: styles }),
    Button: Button.extend({ classNames: styles }),
  }
});

export default function AuthPage() {
  const [showComponent, setShowComponent] = useState(true);
  const mobileScreen = useMediaQuery(`(max-width: ${em(768)})`);
  const router = useRouter();

  const lobbyEntryRequest = async () => {
    const {userName, lobbyId} = form.values;
    if (showComponent) {
      if (form.isValid()) {
        const data = await AuthApiModule.createLobbyAndLogin({ lobbyId, userName });
        localStorage.setItem('token', JSON.stringify(data.token));
  
        router.push('/lobby');
      }
    } else {
      if (form.isValid('userName')) {
        const data = await AuthApiModule.createLobbyAndLogin({ lobbyId, userName });
        localStorage.setItem('token', JSON.stringify(data.token));

        router.push('/lobby');
      }
    }
  };

  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      userName: '',
      lobbyId: ''
    },
    validate: {
      userName: (value) => (value.length === 0 
                              ? 'Пожалуйста, введите имя'
                              : value.length < 2
                              ? 'Ваше имя слишком короткое'
                              : value.length > 15
                              ? 'Имя не может содержать более 15 символов'
                              : null
                            ),
      lobbyId: (value) => (/[a-zA-Z]+/.test(value) && value.length === 5 ? null : 'Идентификатор лобби состоит из 5 символов в диапазоне a-Z'),
    }
  });

  return (
    <>
      <div className={styles.authWrapper}>
        <div className={styles.auth}>
          <h1
            className={`${rubikWetPaint.className} ${styles.authTitle}`}
          ><span className={styles.authTitleColor}>Страница авторизации</span></h1>

          <div className={styles.authContent}>
            <Box
              component="form"
              className={styles.authContentWrapper}
              onSubmit={form.onSubmit(() => {})}
            >
              <MantineProvider theme={theme}>
                <TextInput
                  variant="underline"
                  size={mobileScreen ? 'xs' : 'md'}
                  placeholder="Ввведите имя"
                  withErrorStyles={false}
                  {...form.getInputProps('userName')}
                />

                {showComponent && 
                <TextInput
                  variant="underline"
                  size={mobileScreen ? 'xs' : 'md'}
                  placeholder="Ввведите идентификатор лобби"
                  withErrorStyles={false}
                  {...form.getInputProps('lobbyId')}
                />}

                <Button
                  color={variables.authButtonPrimary}
                  variant="buttonPrimary"
                  fullWidth
                  size={mobileScreen ? 'xs' : 'lg'}
                  type="submit"
                  onClick={()=> lobbyEntryRequest()}
                >{showComponent ? "Прыгнуть в игру" : "Создать лобби"}</Button>
              </MantineProvider>

              <div>Или
                <Button
                  className={styles.authButtonTransparent}
                  color={variables.authButtonTransparent}
                  variant="transparent"
                  size="compact-md"
                  onClick={() => setShowComponent(!showComponent)}
                >{showComponent ? "создайте лобби" : "прыгнуть в игру"}</Button>
              </div>
            </Box>
          </div>
          
        </div>
      </div>
    </>      
  );
};
