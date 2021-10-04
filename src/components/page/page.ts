import { BaseComponet, Component } from './../component.js';

export interface Composable {
  addChild(child: Component): void;
}
type OnCloseListener = () => void;
class PageItemComponet extends BaseComponet<HTMLElement> implements Composable {
  private closeListener?: OnCloseListener

  constructor() {
    super(`
          <li class="page__item">
          <section class="page__body"></section>
          <div class="page__controls">
            <button class="close__btn">&times;</button>
          </div>
          </li>`)

    const closeBtn = this.element.querySelector('.close__btn')! as HTMLButtonElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    }

  }

  addChild(child: Component) { 
    const container = this.element.querySelector('.page__body')! as HTMLElement;
    child.attach(container)
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
}

export class PageComponent extends BaseComponet<HTMLUListElement> implements Composable {

  constructor() {
    super(`<ul class="page"></ul>`);
  }

  addChild(section: Component) {
    const item = new PageItemComponet();
    item.addChild(section);
    item.attach(this.element, 'beforeend');
    item.setOnCloseListener( () => {
      item.removeFrom(this.element);
    })
  }
}