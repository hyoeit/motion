export class PageComponent {
  private element: HTMLUListElement;

  constructor() {
    this.element = document.createElement('ul');
    this.element.setAttribute('class', 'page');
    this.element.textContent = 'Page test';
  }

  attach(parent: HTMLElement, position: InsertPosition = 'beforeend') {
    parent.insertAdjacentElement(position, this.element);
  }

}