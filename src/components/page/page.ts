import { BaseComponent, IComponent } from "../base.js";

export interface IComposable {
  addChild(child: IComponent): void;
}

class PageItemComponent
  extends BaseComponent<HTMLElement>
  implements IComposable {
  constructor() {
    super(`<li class="page-item">
            <section class="page-item__body"></section>
            <div class="page-item__controls">
              <button class="close">&times;</button>
            </div>
          </li>`);
  }

  addChild(child: IComponent) {
    const container = this.element.querySelector(
      ".page-item__body"
    )! as HTMLElement;
    child.attachTo(container);
  }
}

export class PageComponent
  extends BaseComponent<HTMLUListElement>
  implements IComposable {
  constructor() {
    super('<ul class="page"></ul>');
  }

  addChild(section: IComponent) {
    const item = new PageItemComponent();
    item.addChild(section);
    item.attachTo(this.element, "beforeend");
  }
}
