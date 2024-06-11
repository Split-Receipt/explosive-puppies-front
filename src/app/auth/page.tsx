'use client';

import styles from '@/app/auth/styles.module.scss';
import variables from '@/app/styles/variables.module.scss';
import { useState } from 'react';
import { hasLength, useForm } from '@mantine/form';
import { TextInput, Button, MantineProvider, createTheme, Box, em } from '@mantine/core';
import { rubikWetPaint } from '@/app/styles/fonts';
import { useMediaQuery } from '@mantine/hooks';
import { AuthApiModule } from '@/app/auth/api/auth';
import { useRouter } from 'next/navigation';
import useAuthStore from '@/app/store/auth';

const theme = createTheme({
	components: {
		TextInput: TextInput.extend({ classNames: styles }),
		Button: Button.extend({ classNames: styles }),
	},
});

export default function AuthPage() {
	const mobileScreen = useMediaQuery(`(max-width: ${em(768)})`);

	const [showInputLobbyId, setShowInputLobbyId] = useState(true);
	const [lobbyIdValue, setLobbyIdValue] = useState('');

	let addLobbyId = useAuthStore((state) => state.addLobbyId);

	const router = useRouter();
	const lobbyEntryRequest = async () => {
		try {
			const { userName, lobbyId } = form.values;
			const response = await AuthApiModule.createLobbyAndLogin({ lobbyId: lobbyId, userName: userName });
			const { token } = response.data;

			addLobbyId(lobbyId);

			const responseLobbyData = await AuthApiModule.getLobbyById({ lobbyId: lobbyId, playerId: '' });//TODO Поставить playerId

			if (showInputLobbyId) {
				if (form.isValid()) {
					localStorage.setItem('token', JSON.stringify(token));
					router.push('/lobby');
				}
			} else {
				if (form.isValid('userName')) {
					localStorage.setItem('token', JSON.stringify(token));
					router.push('/lobby');
				}
			}
		} catch (error) {
			console.error(error);
		}
	};

	const form = useForm({
		validateInputOnBlur: true,
		initialValues: {
			userName: '',
			lobbyId: lobbyIdValue,
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
			lobbyId: hasLength(5),
		},
	});

	const setAndValidateLobbyId = (event: any) => {
		event.target.maxLength = 5;
		const value = event.currentTarget.value.toUpperCase();

		setLobbyIdValue(value);
		form.setValues({lobbyId: value});
	};

	return (
		<>
			<div className={styles.authWrapper}>
				<div className={styles.auth}>
					<h1
						className={`${rubikWetPaint.className} ${styles.authTitle}`}
					><span className={styles.authTitleColor}>Взрывные котята</span></h1>

					<div className={styles.authContent}>
						<Box
							component="form"
							className={styles.authContentWrapper}
							onSubmit={form.onSubmit(() => console.warn('Поставить нормальную функцию'))}
						>
							<MantineProvider theme={theme}>
								<TextInput
									variant="underline"
									size={mobileScreen ? 'xs' : 'md'}
									placeholder="Ввведите имя"
									withErrorStyles={false}
									{...form.getInputProps('userName')}
								/>

								{showInputLobbyId &&
									<TextInput
										variant="underline"
										size={mobileScreen ? 'xs' : 'md'}
										placeholder="Ввведите идентификатор лобби"
										withErrorStyles={false}
										value={lobbyIdValue}
										onChange={setAndValidateLobbyId}
									/>}

								<Button
									color={variables.authButtonPrimary}
									variant="buttonPrimary"
									fullWidth
									size={mobileScreen ? 'xs' : 'lg'}
									type="submit"
									onClick={()=> lobbyEntryRequest()}
									disabled={showInputLobbyId ? !form.isValid() : !form.isValid('userName')}
								>{showInputLobbyId ? 'Прыгнуть в игру' : 'Создать лобби'}</Button>
							</MantineProvider>

							<div>Или
								<Button
									className={styles.authButtonTransparent}
									color={variables.authButtonTransparent}
									variant="transparent"
									size="compact-md"
									onClick={() => setShowInputLobbyId(!showInputLobbyId)}
								>{showInputLobbyId ? 'создайте лобби' : 'прыгнуть в игру'}</Button>
							</div>
						</Box>
					</div>
				</div>
			</div>
		</>
	);
}
