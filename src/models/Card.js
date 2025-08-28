export default class Card {
    constructor(suit, rank, value, icon) {
        this.suit = suit;
        this.rank = rank;
    }

    getName() {
        return `${this.rank} of ${this.suit}`;
    }

    getSuit() {
        return this.suit;
    }

    getRank() {
        return this.rank;
    }
}