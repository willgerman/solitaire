import Card from './Card';

const suits = [
    'Spades', 'Clubs', 'Hearts', 'Diamonds'
];

const ranks = [
    'Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'
];

export default class Deck {
    constructor() {
        this.cards = [];

        suits.forEach((suit) => {
            ranks.forEach((rank) => {
                const card = new Card(suit, rank);
                this.cards.push(card);
            });
        });
    }

    shuffle() {
        // shuffles entire deck
    }

    deal(count) {
        // deals 'count' cards
    }

    draw(count) {
        // draw 'count' cards
    }
}