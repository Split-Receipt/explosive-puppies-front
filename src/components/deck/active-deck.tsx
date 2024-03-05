'use client'

import styles from '@/components/deck/deck.module.scss';
import { DeckOptions } from '@/class/deck-options';
import  { Deck } from '@utils/types/index';
import { useState } from 'react';

interface DeckProps {
	deck: Deck;
	deckInstances: DeckOptions;
};

export default function ActiveDeck(this: any, {deck, deckInstances}: DeckProps) {
	const [stateCardList, setStateCardList] = useState(deckInstances.cardsInDeck);

	const cadrList = stateCardList as any[];
	const [cardName, setCardName] = useState(openActiveCard());

	deckInstances.addHandler({ handler: handlerDeck.bind(this), handlerName: 'deck_update' })

	function openActiveCard() {
		if(!cadrList?.length) {
			return 'Начни ход'
		} else {
				return cadrList[cadrList.length - 1].name
		}
	};

	function handlerDeck() {
		setStateCardList(cadrList);
		setCardName(openActiveCard());
	};

	function handlerClickDeck() {
		return cadrList[cadrList.length - 1]
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
				<div className={styles.deckCardCount}>{cardName}</div>
			</div>
	</>
	);
};
