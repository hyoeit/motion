export class ImageComponent {

  private element: HTMLElement
  
  constructor(url: string, title: string) {
    this.element = document.createElement('div')
    this.element.setAttribute('class', 'img__container')
    this.element.innerHTML = `
                  <div class="img__box">
                    <img class="img">
                  </div>
                  <div class="title">
                    <h3 class="title"></h3>
                  </div>
    `
    const imgEle = this.element.querySelector('.img')! as HTMLImageElement;
    imgEle.src = url;

    const imgTit = this.element.querySelector('.title')! as HTMLElement;
    imgTit.innerText = title;
    
}

attach(parent: HTMLElement, position: InsertPosition = 'beforeend') {
  parent.insertAdjacentElement(position, this.element);
}
}