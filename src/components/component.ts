export interface Component {  
  attach(parent: HTMLElement, position?: InsertPosition): void;
}

export class BaseComponet<T extends HTMLElement> {

  protected readonly element: T
  
  constructor(htmlString: string) {
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild! as T;
    
}

attach(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
  parent.insertAdjacentElement(position, this.element);
}
}