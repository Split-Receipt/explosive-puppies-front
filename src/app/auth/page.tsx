import styles from './styles.module.scss'
import { Input, Button } from '@mantine/core'
import Link from 'next/link'

export default function AuthPage() {
  return (
    <>
      <div className={styles.authWrapper}>
        <div className={styles.auth}>
          <h1 className={styles.authTitle}>Страница авторизации</h1>

          <div className={styles.authContent}>
            <div className={styles.authContentWrapper}>
              <Input
                className={styles.authInput}
                variant="unstyled"
                size="xl"
                placeholder="Ввведите имя"
              />
              <Input
                className={styles.authInput}
                variant="unstyled"
                size="xl"
                placeholder="Ввведите идентификатор лобби"
              />

              <Button
                className={styles.authButton}
                variant="filled"
                color="cyan"
                fullWidth
                size="lg"
              >
                Прыгнуть в игру
              </Button>

              <div>Или <Link href="/lobby" className={styles.authLink}>создайте лобби</Link></div>
            </div>
          </div>
        </div>
      </div>
    </>      
  );
};
