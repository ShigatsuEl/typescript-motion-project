import { BaseComponent, IComponent } from "../base.js";

export interface IComposable {
  addChild(child: IComponent): void;
}

type OnCloseListener = () => void;

class PageItemComponent
  extends BaseComponent<HTMLElement>
  implements IComposable {
  private closeListener?: OnCloseListener;

  constructor() {
    super(`<li class="page-item">
            <section class="page-item__body"></section>
            <div class="page-item__controls">
              <button class="close">&times;</button>
            </div>
          </li>`);
    const closeBtn = this.element.querySelector(".close")! as HTMLButtonElement;
    closeBtn.onclick = () => this.closeListener && this.closeListener();
  }

  addChild(child: IComponent) {
    const container = this.element.querySelector(
      ".page-item__body"
    )! as HTMLElement;
    child.attachTo(container);
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
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
    item.setOnCloseListener(() => {
      item.removeFrom(this.element);
    });
  }
}
