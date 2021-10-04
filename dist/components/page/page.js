import { BaseComponet } from './../component.js';
class PageItemComponet extends BaseComponet {
    constructor() {
        super(`
          <li class="page__item">
          <section class="page__body"></section>
          <div class="page__controls">
            <button class="close__btn">&times;</button>
          </div>
          </li>`);
        const closeBtn = this.element.querySelector('.close__btn');
        closeBtn.onclick = () => {
            this.closeListener && this.closeListener();
        };
    }
    addChild(child) {
        const container = this.element.querySelector('.page__body');
        child.attach(container);
    }
    setOnCloseListener(listener) {
        this.closeListener = listener;
    }
}
export class PageComponent extends BaseComponet {
    constructor() {
        super(`<ul class="page"></ul>`);
    }
    addChild(section) {
        const item = new PageItemComponet();
        item.addChild(section);
        item.attach(this.element, 'beforeend');
        item.setOnCloseListener(() => {
            item.removeFrom(this.element);
        });
    }
}
