import styles from '@/app/components/deck/deck.module.scss';
import { useDeckStore } from '@/app/store/decks';
import { useShallow } from 'zustand/react/shallow';

export default function ActiveDeck() {
	const newCards = useDeckStore((state) => state.activeDeck!.cards);
	const showDeck = useDeckStore((state) => state.setShowComponent);

	showDeck!('activeDeck', newCards!);

	const { id, name, code, description, showComponent } = useDeckStore(
		useShallow((state) => ({
			id: state.activeDeck!.id,
			name: state.activeDeck!.name,
			code: state.activeDeck!.code,
			description: state.activeDeck!.description,
			deckOwner: state.activeDeck!.deckOwner,
			showComponent: state.activeDeck!.showComponent,
		})),
	);

	function lastCard() {
		return newCards![newCards!.length -1];
	}

	return (
		<>
			{showComponent &&
			<div
				className={styles.deck}
				onClick={lastCard}
				id={id}
				name-attribute={name}
				code-attribute={code}
				description-attribute={description}
			>
				<div className={styles.deckCardCount}>{!newCards.length ? null : newCards[newCards.length -1].name}</div>
			</div>
			}
		</>
	);
}
