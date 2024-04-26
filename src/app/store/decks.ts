import { create } from 'zustand';
import { Deck } from '@utils/types/index';

interface DeckState {
	playerDeck?: Deck;
	beatenDeck?: Deck;
	generalDeck?: Deck;
	activeDeck?: Deck;

	addCards?: (deckType: keyof DeckState, newCards: any[]) => void;
	setShowComponent?: (deckType: string, newCards: any[]) => void;
	setCardsTotal?: (deckType: string, newCards: any[]) => void;
	spreadCards: (deckType: string, cardsAmount: number) => void;
	cardsReset: (deckType: string) => void;
};

export const useDeckStore = create<DeckState>((set) => ({
	playerDeck: {
		cards: [],
		id: 'idPlayerDeck',
		name: 'PlayerDeck',
		code: 'Код колоды для понимания ее назначения',
		description: 'Описание колоды',
		deckOwner: 'idPlayer',
		cardsTotal: 0,
	},
	beatenDeck: {
		cards: [],
		id: 'idBitoDeck',
		name: 'BitoDeck',
		code: 'Код колоды для понимания ее назначения',
		description: 'Описание колоды',
		cardsTotal: 0,
	},
	generalDeck: {
		cards: [],
		id: 'idBaseDeck',
		name: 'BaseDeck',
		code: 'Код колоды для понимания ее назначения',
		description: 'Описание колоды',
		cardsTotal: 0,
	},
	activeDeck: {
		cards: [],
		id: 'idActiveDeck',
		name: 'ActiveDeck',
		code: 'Код колоды для понимания ее назначения',
		description: 'Описание колоды',
		cardsTotal: 0,
		showComponent: false,
	},

  addCards: (deckType: keyof DeckState, newCards: any[]) => set((state) => (
			{
				[deckType]: {
					...state[deckType],
					cards: [...state[deckType]!.cards, ...newCards]
				}
			}
	)),

	setCardsTotal: (deckType: string, newCards: any[]) => set((state) => (
		{
			[deckType]: {
				...state[deckType],
				cardsTotal: newCards.length
			}
		}
	)),

	setShowComponent: (deckType: string, newCards: any[]) => set((state) => (
		{
			[deckType]: {
				...state[deckType],
				showComponent: !newCards.length ? false : true
			},
		}
	)),

	spreadCards: (deckType: string, cardsAmount: number) => set((state) => {
		return state[deckType].cards.splice(0, cardsAmount);
	}),

	cardsReset: (deckType: string) => set((state) => {
		return state[deckType].cards.splice(0, state[deckType].cards.length)
	})

}));
