'use client'

import BaseDeck from '@/components/deck/base-deck';
import ActiveDeck from '@/components/deck/active-deck';
import BitoDeck from '@/components/deck/bito-deck';
import PlayerDeck from '@/components/deck/player-deck';
import { DeckOptions } from '@/class/deck-options';


const deck = {
	id: '1',
	name: 'name',
	cards:  [
		{name: 'test1', id: 1},
		{name: 'test2', id: 2},
		{name: 'test3', id: 3},
		{name: 'test4', id: 4},
		{name: 'test5', id: 5},
		{name: 'test6', id: 6},
	],
	description: 'description',
	code: 'activeDeck',
	deckOwner: 6,
	cardsTotal: 0,
};

	deck.cardsTotal = deck.cards.length;

	const test = [
		{name: 'test7', id: 7},
		{name: 'test8', id: 8},
		{name: 'test9', id: 9},
	];

	const activeDeck = new DeckOptions(deck.cards);
	const baseDeck = new DeckOptions(deck.cards);
	const bitoDeck = new DeckOptions(deck.cards);
	const playerDeck = new DeckOptions(deck.cards);

export default function LobbyPage() {
  return (
    <>
      <h1>Страница лобби</h1>
			<button onClick={()=> activeDeck.addCards(test)}>Тестовая кнопка</button>
			<ActiveDeck deck={deck} deckInstances={activeDeck}></ActiveDeck>
			<BaseDeck deck={deck} deckInstances={baseDeck}></BaseDeck>
			<BitoDeck deck={deck} deckInstances={bitoDeck}></BitoDeck>
			<PlayerDeck deck={deck} deckInstances={playerDeck}></PlayerDeck>
    </>
  );
};
