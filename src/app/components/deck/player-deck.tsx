"use client"

import styles from '@/app/components/deck/deck.module.scss';
import { useDeckStore } from '@/app/store/decks';
import { useShallow } from 'zustand/react/shallow';

export default function PlayerDeck() {
	const newCards = useDeckStore((state) => state.playerDeck!.cards);
	const newCardsTotal = useDeckStore((state) => state.setCardsTotal);

	newCardsTotal!('playerDeck', newCards!);

	const { id, name, code, description, deckOwner, cardsTotal } = useDeckStore(
		useShallow((state) => ({
			id: state.playerDeck!.id,
			name: state.playerDeck!.name,
			code: state.playerDeck!.code,
			description: state.playerDeck!.description,
			deckOwner: state.playerDeck!.deckOwner,
			cardsTotal: state.playerDeck!.cardsTotal
		})),
	);

	return (
		<>
			<div
				className={styles.deck}
				id={id}
				name-attribute={name}
				code-attribute={code}
				description-attribute={description}
				deck-owner-attribute={deckOwner}
			>
				<div className={styles.deckCardCount}>{cardsTotal}</div>
			</div>
	</>
	);
};
