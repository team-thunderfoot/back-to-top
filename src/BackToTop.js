import JSUTIL from "@andresclua/jsutil";

class BackToTop {
  constructor(payload) {
    this.DOM = {
      activeClass: payload.activeClass,
      links: document.querySelectorAll(payload.linkClass) ?? [], // Seleccionar el elemento del DOM usando la clase CSS
      distanceTrigger: payload.distanceTrigger,
    };
    this.listDistances = [];

    this.JSUTIL = new JSUTIL();
    this.events();
  }

  init() {}

  events() {
    if (!!this.DOM.links.length) {
      this.DOM.links.forEach((link) => {
        this.listDistances.push(link.getAttribute(this.DOM.distanceTrigger));
        this.clickEvent = link.addEventListener(
          "click",
          this.goBackToTop.bind(this)
        );
      });
      window.addEventListener("scroll", this.checkScroll.bind(this));
    }
  }

  checkScroll() {
    this.DOM.links.forEach((link, index) => {
      if (window.pageYOffset <= this.listDistances[index]) {
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
