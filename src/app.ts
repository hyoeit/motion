import { Component } from './components/component.js';
import { ImageComponent } from './components/page/items/image.js';
import { VidoeComponent } from './components/page/items/video.js';
import { Composable, PageComponent } from './components/page/page.js';

class App {

  private readonly page: Component & Composable;

  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attach(appRoot);

    const img = new ImageComponent('https://picsum.photos/200/300', 'randomImg');
    this.page.addChild(img);

    const video = new VidoeComponent('https://www.youtube.com/watch?v=tIDQd-VOVr4','Videotitle')
    this.page.addChild(video);
  }

}

new App(document.querySelector('.document')! as HTMLElement )
