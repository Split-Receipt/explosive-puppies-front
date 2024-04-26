import { Card } from '@utils/types/card';

export type Deck = {
	id: string;
	name: string;
	cards: Card[];
	description: string;
	code: string;
	deckOwner?: string;
	cardsTotal: number;
}
