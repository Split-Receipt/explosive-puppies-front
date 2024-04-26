import styles from '@/app/components/deck/deck.module.scss';
import { useDeckStore } from '@/app/store/decks';
import { useShallow } from 'zustand/react/shallow';

export default function BaseDeck() {
	const newCards = useDeckStore((state) => state.generalDeck!.cards);
	const newCardsTotal = useDeckStore((state) => state.setCardsTotal!);
	const takeСardFromDeck = useDeckStore((state) => state.spreadCards);

	newCardsTotal!('generalDeck', newCards!);

	const { id, name, code, description, cardsTotal } = useDeckStore(
		useShallow((state) => ({
			id: state.generalDeck!.id,
			name: state.generalDeck!.name,
			code: state.generalDeck!.code,
			description: state.generalDeck!.description,
			cardsTotal: state.generalDeck!.cardsTotal
		})),
	);

	function issuingCardsHandler() {
		takeСardFromDeck('generalDeck', 1);
		newCardsTotal('generalDeck', newCards);
	};

	return (
		<>
			<div
				className={styles.deck}
				onClick={issuingCardsHandler}
				id={id}
				name-attribute={name}
				code-attribute={code}
				description-attribute={description}
			>
				<div className={styles.deckCardCount}>{cardsTotal}</div>
			</div>
	</>
	);
};
