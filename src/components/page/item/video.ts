import { BaseComponent } from "../../base.js";

export class VideoComponent extends BaseComponent<HTMLVideoElement> {
  constructor(title: string, url: string) {
    super(
      `<section class="video">
        <div class="video__player"><iframe class="video__iframe"></iframe></div>
        <h2 class="video__title"></h2>
      </section>`
    );

    const iframeElement = this.element.querySelector(
      ".video__iframe"
    )! as HTMLIFrameElement;
    iframeElement.src = "https://www.youtube.com/embed/K3-jG52XwuQ";

    const titleElement = this.element.querySelector(
      ".video__title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
    console.log(url);
  }
}
