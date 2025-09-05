import Deck from "./Deck";

const style = `
    <style>

    </style>
`;

const template = document.createElement('template');
template.innerHTML = `
    ${style}

    <div id="talon"
         class="talon grid">

    </div>
`;

export default class Talon extends Deck {
    constructor(name) {
        super(name);
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.append(template.content.cloneNode(true));
    }
}

customElements.define("wg-talon", Talon);