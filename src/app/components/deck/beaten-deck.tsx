import styles from '@/app/components/deck/deck.module.scss';
import { useDeckStore } from '@/app/store/decks';
import { useShallow } from 'zustand/react/shallow';

export default function BeatenDeck() {
	const newCards = useDeckStore((state) => state.beatenDeck!.cards);
	const newCardsTotal = useDeckStore((state) => state.setCardsTotal);

	newCardsTotal!('beatenDeck', newCards!);

	const { id, name, code, description, cardsTotal } = useDeckStore(
		useShallow((state) => ({
			id: state.beatenDeck!.id,
			name: state.beatenDeck!.name,
			code: state.beatenDeck!.code,
			description: state.beatenDeck!.description,
			cardsTotal: state.beatenDeck!.cardsTotal,
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
			>
				<div className={styles.deckCardCount}>{cardsTotal === 0 ? 'Бито' : cardsTotal}</div>
			</div>
		</>
	);
}
