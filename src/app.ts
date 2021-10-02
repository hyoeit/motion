import { ImageComponent } from './components/page/items/image.js';
import { PageComponent } from './components/page/page.js';

class App {

  constructor(appRoot: HTMLElement) {
    const page = new PageComponent();
    page.attach(appRoot);

    const img = new ImageComponent('https://picsum.photos/200/300', 'randomImg');
    img.attach(appRoot);
  }

}

new App(document.querySelector('.document')! as HTMLElement )
