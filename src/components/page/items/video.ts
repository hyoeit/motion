import { BaseComponet } from '../../component.js';

export class VidoeComponent extends BaseComponet<HTMLVideoElement> {
  constructor(url: string, title: string) {

    super(`
    <Section class="video__container">
      <div class="iframe__container">
        <iframe frameborder="0" class="video"></iframe>
        <h3 class="title"></h3>
      </div>
    </Section>
    `)

  const iframe = this.element.querySelector('.video')! as HTMLVideoElement;
  iframe.src = this.convertToEmbeddedURL(url);

  const videoTit = this.element.querySelector('.title')! as HTMLParagraphElement;
  videoTit.textContent = title;
  }

  private convertToEmbeddedURL(url: string): string {
    const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
    const match = url.match(regExp);
    const videoId = match? match[1] || match[2] : undefined;
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
    }
  }



// https://www.youtube.com/watch?v=O-vxw7nDdZc

// https://youtu.be/O-vxw7nDdZc

// <iframe width="2206" height="955" 
//     src="https://www.youtube.com/embed/${O-vxw7nDdZc}" 
//     title="YouTube video player" 
//     frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>