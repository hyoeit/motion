import { ImageComponent } from './components/page/items/image.js';
import { VidoeComponent } from './components/page/items/video.js';
import { PageComponent } from './components/page/page.js';

class App {

  constructor(appRoot: HTMLElement) {
    const page = new PageComponent();
    page.attach(appRoot);

    const img = new ImageComponent('https://picsum.photos/200/300', 'randomImg');
    img.attach(appRoot);

    const video = new VidoeComponent('https://www.youtube.com/watch?v=tIDQd-VOVr4','Videotitle')
    video.attach(appRoot);
  }

}

new App(document.querySelector('.document')! as HTMLElement )
