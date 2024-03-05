class DeckOptions {
	cardsInDeck: any[] | null;
	handlers: any;

	constructor(cards: any[]) {
		this.cardsInDeck = [...cards];
		this.handlers = {};
	};

	get cards() {
		return this.cardsInDeck;
	};

	addHandler({ handlerName, handler }: { handlerName: string, handler: Function }) {
		this.handlers[handlerName] = handler;
	};

	addCards(cards: any[]) {
		this.cardsInDeck?.push(...cards);
		this._useHandlers();
	};

	spreadCards(cardsAmount: number) {
		const result = this.cardsInDeck?.splice(0, cardsAmount);
		this._useHandlers();

		return result
	};

	cardsReset() {
		const result = this.cardsInDeck?.splice(0, this.cardsInDeck!.length);
		this._useHandlers();

		return result
	};

	_useHandlers() {
		if (Object.keys(this.handlers).length) {
			Object.values(this.handlers).forEach((handler: any)=> {
				handler();
			});
		};
	};
};

export { DeckOptions };
