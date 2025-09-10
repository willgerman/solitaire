import suits from "../fixtures/suits.json" assert { type: "json" };
import ranks from "../fixtures/ranks.json" assert { type: "json" };

import Slugify from "../utils/slugify";
import Card from './Card';

export default class Deck extends HTMLElement {
    constructor(name) {
        super();

        this.id = Slugify(name);
        this.cards = [];
    }

    getId() {
        return this.id;
    }

    getCards() {
        return this.cards;
    }

    initialize() {
        suits.forEach((suit) => {
            ranks.forEach((rank) => {
                const card = new Card(suit, rank);
                this.cards.push(card);
            });
        });
    }

    // NOTE: Circumvents "deck.cards.push()"
    push(card) {
        this.cards.push(card);
    }

    // NOTE: Circumvents "deck.cards.pop()"
    pop() {
        return this.cards.pop();
    }

    shuffle() {
        let deck = this.cards;

        for (let index = 0; index < deck.length - 1; index++) {
            let newIndex = Math.floor(Math.random() * 52);
            let card = deck[index];

            deck[index] = deck[newIndex];
            deck[newIndex] = card;
        }

        this.cards = deck;
    }

    deal(num) {
        const count = (num === null || num < 1) ? 52 : num;
        const deck = this.cards;

        let dealtCards = [];

        for (let i = 0; i < count; i++) {
            let card = deck.pop();
            dealtCards.push(card);
        }

        return dealtCards;
    }

    draw(num) {
        const count = (num === null || num < 1) ? 1 : num;
        const deck = this.cards;

        let drawnCards = [];

        for (let i = 0; i < count; i++) {
            let card = deck.pop();
            drawnCards.push(card);
        }

        return drawnCards;
    }
}

customElements.define("wg-deck", Deck);