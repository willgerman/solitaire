import Slugify from "../utils/slugify";

const style = `
    <style>
        .card {
            --_grid-area: var(--card-grid-area, initial);
            grid-area: var(--_grid-area);

            width: 3rem;
            aspect-ratio: 2.5 / 3.5;

            border: 2px solid var(--neutral-900);
            border-radius: 4px;

            perspective: 1000px;
        }

        .card[data-face="up"] > .card__content {
            transform: rotateY(0deg);
        }

        .card[data-face="down"] > .card__content {
            transform: rotateY(180deg);
        }

        .card__content {
            width: 100%;
            height: 100%;

            border-radius: inherit;

            transition: transform 0.5s;
            transform-style: preserve-3d;

            position: relative;
        }

        .card__front,
        .card__back {
            position: absolute;

            width: 100%;
            height: 100%;

            border-radius: inherit;

            backface-visibility: hidden;
        }

        .card__front {
            --gap: 0;
            display: grid;
            grid-template-rows: max-content, 1fr;
            gap: var(--gap);

            background: var(--neutral-050);
            color: var(--neutral-900);

            padding: calc(var(--size-4) / 2);
        }

        .card__front > * {
            user-select: none;
        }

        .card__front > div:first-child {
            --gap: 0;
            display: flex;
            gap: var(--gap);
            justify-content: space-between;

            padding-inline: calc(var(--size-4) / 2);
        }

        .card__front > div:first-child > span {
            --rank-text-color: inherit;
            color: var(--rank-text-color);
            font-weight: var(--font-weight-700);
        }

        .card__front > div:first-child > i {
            transform: scale(0.85);
            font-style: normal;
        }

        .card__front > :last-child {
            width: max-content;
            margin-inline: auto;

            font-style: normal;

            transform: scale(1.5) translateY(5%);
        }

        .card__back {
            background-color: var(--accent-400);

            transform: rotateY(180deg);
        }
    </style>
`;

const template = document.createElement('template');
template.innerHTML = `
    ${style}
    <div id="" 
         class="card">
          <div class="card__content">
                <div class="card__front grid">
                      <div class="flex">
                          <span rank=""></span>
                          <i suit=""></i>
                      </div>
                      <i suit=""></i>
                </div>
                <div class="card__back"></div>
          </div>
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

        this.initializeDOMObject();
    }

    initializeDOMObject() {
        const root = this.shadowRoot;

        const card = root.querySelector('[id]');
        card.setAttribute('id', `${this.id}`);
        card.setAttribute('data-face', 'down');

        const rank = root.querySelector('[rank]');
        rank.setAttribute('rank', `${this.rank.toLowerCase()}`);
        rank.innerText = `${this.rank.charAt(0).toUpperCase()}`;

        const suits = root.querySelectorAll('[suit]');

        suits.forEach((suit) => {
            switch (this.suit.toLowerCase()) {
                case "hearts":
                    suit.setAttribute('suit', `♥️`);
                    suit.innerText = `♥️`;
                    rank.style.setProperty('--rank-text-color', 'red');
                    break;
                case "diamonds":
                    suit.setAttribute('suit', `♦️`);
                    suit.innerText = `♦️`;
                    rank.style.setProperty('--rank-text-color', 'red');
                    break;
                case "clubs":
                    suit.setAttribute('suit', `♣️`);
                    suit.innerText = `♣️`;
                    rank.style.setProperty('--rank-text-color', 'black');
                    break;
                case "spades":
                    suit.setAttribute('suit', `♠️`);
                    suit.innerText = `♠️`;
                    rank.style.setProperty('--rank-text-color', 'black');
                    break;
                default:
                    throw new Error(`Invalid Suit: ${this.suit.toLowerCase()}`);
            }
        });

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
}

customElements.define("wg-card", Card);