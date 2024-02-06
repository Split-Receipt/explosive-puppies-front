'use client'

import styles from '@/components/deck/deck.module.scss';
import { useState } from 'react';

export default function Deck({ cardList }: { cardList: any[] }) {
	const [deckLength, setDeckLength] = useState(cardList.length);
	const [currentCard, setCurrentCard] = useState(cardList);

	function handlerClickReceiveCard() {
		if (!deckLength) {
			return deckLength
		};

		currentCard[deckLength - 1];
		setDeckLength(deckLength - 1);
  };

	return (
		<>
			<div
				className={styles.deck}
				onClick={handlerClickReceiveCard}
			>
				<div className={styles.deckCardCount}>{deckLength}</div>
			</div>
		</>
	);
};
