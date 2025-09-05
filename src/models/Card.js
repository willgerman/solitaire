import Slugify from "../utils/slugify";

const style = `
    <style>

    </style>
`;

const template = document.createElement('template');
template.innerHTML = `
    ${style}
    <div class="">
    </div>
`;

export default class Card extends HTMLElement {
    constructor(suit, rank) {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.append(template.content.cloneNode(true));

        this.suit = suit;
        this.rank = rank;
        this.name = `${this.rank} of ${this.suit}`;
        this.id = Slugify(this.name);
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getSuit() {
        return this.suit;
    }

    getRank() {
        return this.rank;
    }

    // createDOMObject() {
    //     let card = document.createElement('div');
    //     card.classList.add('card');

    //     let rank = document.createElement('span');
    //     rank.innerText = this.rank.charAt(0).toUpperCase();
    //     card.append(rank);

    //     let suit = document.createElement('span');

    //     switch (this.suit) {
    //         case "hearts":
    //             suit.innerText = `♥️`;
    //             break;
    //         case "diamonds":
    //             suit.innerText = `♦️`;
    //             break;
    //         case "clubs":
    //             suit.innerText = `♣️`;
    //             break;
    //         case "spades":
    //             suit.innerText = `♠️`;
    //             break;
    //         default:
    //             throw new Error("Invalid Suit");
    //     }

    //     card.append(suit);

    //     card.dataset.id = `${this.id}`;
    //     card.dataset.rank = `${this.rank}`;
    //     card.dataset.suit = `${this.suit}`;
    //     card.dataset.face = 'down';

    //     return card;
    // }
}

customElements.define("wg-card", Card);