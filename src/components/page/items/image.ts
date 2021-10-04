import { BaseComponet } from '../../component.js';

export class ImageComponent extends BaseComponet<HTMLImageElement> {

  constructor(url: string, title: string) {
    super(`
          <div class="img__contaier>
            <div class="img__box">
              <img class="img">
              <h3 class="img__title"></h3>
            </div>
          </div>
          `);

          const imgEle = this.element.querySelector('.img')! as HTMLImageElement;
          imgEle.src = url;
          imgEle.alt = title;
          
          const imgTit = this.element.querySelector('.img__title')! as HTMLParagraphElement;
          imgTit.textContent = title;
}


}
