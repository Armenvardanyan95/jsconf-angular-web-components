class ButtonWithCounter extends HTMLElement {
    constructor() {
        super();
        this.count = 0;
        this.button = document.createElement('button');
        this.button.addEventListener('click', () => this.increment());
        this.button.innerText = this.count;
    }

    increment() {
        this.count++;
        this.button.innerText = this.count;
    }

    connectedCallback() {
        this.appendChild(this.button);
    }
}

customElements.define('button-with-counter', ButtonWithCounter);
