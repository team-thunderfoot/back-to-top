import JSUTIL from "@andresclua/jsutil";
import { tf_debounce } from "@andresclua/debounce-throttle";

class BackToTop {
  constructor(payload) {
    this.DOM = {
      activeClass: payload.activeClass,
      links: document.querySelectorAll("." + payload.linkClass) ?? [],
      distanceTrigger: payload.distanceTrigger,
    };

    this.JSUTIL = new JSUTIL();
    this.events();
  }

  init() {}

  events() {
    if (!!this.DOM.links.length) {
      this.DOM.links.forEach((link) => {
        this.clickEvent = link.addEventListener(
          "click",
          this.goBackToTop.bind(this)
        );
      });
      window.addEventListener(
        "scroll",
        tf_debounce(() => {
          this.checkScroll();
        })
      );
    }
  }

  checkScroll() {
    this.DOM.links.forEach((link) => {
      if (window.pageYOffset <= link.getAttribute(this.DOM.distanceTrigger)) {
        this.JSUTIL.removeClass(link, this.DOM.activeClass);
      } else {
        this.JSUTIL.addClass(link, this.DOM.activeClass);
      }
    });
  }

  goBackToTop(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  destroy() {
    this.clickEvent = {};
  }
}
export default BackToTop;
