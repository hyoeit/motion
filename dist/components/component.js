;
export class BaseComponet {
    constructor(htmlString) {
        const template = document.createElement('template');
        template.innerHTML = htmlString;
        this.element = template.content.firstElementChild;
    }
    attach(parent, position = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element);
    }
    removeFrom(parent) {
        parent.removeChild(this.element);
    }
}
