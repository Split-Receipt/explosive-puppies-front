'use client'

import styles from '@/components/deck/deck.module.scss';
import { DeckOptions } from '@/class/deck-options';
import  { Deck } from '@utils/types/index';
import { useState } from 'react';

interface DeckProps {
	deck: Deck;
	deckInstances: DeckOptions;
};

export default function BaseDeck(this: any, {deck, deckInstances}: DeckProps) {
	const [stateCardList, setStateCardList] = useState(deckInstances.cardsInDeck);
	const [stateCardsTotal, setStateCardsTotal] = useState(deck.cardsTotal);

	const cadrList = stateCardList as any[];
	const cardsTotal = stateCardsTotal;

	deckInstances.addHandler({ handler: handlerDeck.bind(this), handlerName: 'deck_update' });

	function handlerDeck() {
		setStateCardList(cadrList);
		setStateCardsTotal(cardsTotal);
	};

	function handlerClickDeck() {
		return deckInstances.spreadCards(1)
	};

	return (
		<>
			<div
				className={styles.deck}
				onClick={handlerClickDeck}
				id={deck.id}
				name-attribute={deck.name}
				code-attribute={deck.code}
				description-attribute={deck.description}
			>
				<div className={styles.deckCardCount}>{cardsTotal}</div>
			</div>
	</>
	);
};
