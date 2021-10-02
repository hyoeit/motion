export class PageComponent {
    constructor() {
        this.element = document.createElement('ul');
        this.element.setAttribute('class', 'page');
        this.element.textContent = 'Page test';
    }
    attach(parent, position = 'beforeend') {
        parent.insertAdjacentElement(position, this.element);
    }
}
