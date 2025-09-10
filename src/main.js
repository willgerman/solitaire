import Deck from "./models/Deck";
import Card from "./models/Card";

const deck = new Deck('stock');
deck.initialize();
deck.shuffle();

const stock = document.querySelector('#stock');

const cards = deck.cards;

cards.forEach((card) => {
    stock.append(card);
});