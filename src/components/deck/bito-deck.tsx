'use client'

import styles from '@/components/deck/deck.module.scss';
import { DeckOptions } from '@/class/deck-options';
import  { Deck } from '@utils/types/index';
import { useState } from 'react';

interface DeckProps {
	deck: Deck;
	deckInstances: DeckOptions;
};

export default function BitoDeck(this: any, {deck, deckInstances}: DeckProps) {
	const [stateCardList, setStateCardList] = useState(deckInstances.cardsInDeck);
	const [stateDeck, setStateDec] = useState(deck);

	const cadrList = stateCardList as any[];
	const bitoDeck = stateDeck;

	deckInstances.addHandler({ handler: handlerDeck.bind(this), handlerName: 'deck_update' });

	function handlerDeck() {
		setStateDec(bitoDeck);
		setStateCardList(cadrList);
	};

	return (
		<>
			<div
				className={styles.deck}
				id={deck.id}
				name-attribute={deck.name}
				code-attribute={deck.code}
				description-attribute={deck.description}
			>
				<div className={styles.deckCardCount}>Бито</div>
			</div>
	</>
	);
};
