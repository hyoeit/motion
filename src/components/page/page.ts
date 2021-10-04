import { BaseComponet } from '../component.js';

export class PageComponent extends BaseComponet<HTMLUListElement>{

  constructor() {
    super(`<ul class="page">this is page</ul>`)
  }
}