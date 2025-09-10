import Deck from "./Deck";

const style = `
    <style>

    </style>
`;

const template = document.createElement('template');
template.innerHTML = `
    ${style}
    <div id="stock"
        class="stock grid">
    </div>
`;

export default class Stock extends Deck {
    constructor(name) {
        super(name);
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.append(template.content.cloneNode(true));
    }
}

customElements.define("wg-stock", Stock);