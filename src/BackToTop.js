import JSUTIL from "@andresclua/jsutil";

class BackToTop {
  constructor(payload) {
    this.DOM = {
      activeClass: payload.activeClass,
      link: document.querySelector(".js--back-top"),
    };
    this.distance = payload.distance ? payload.distance : 500;
    this.JSUTIL = new JSUTIL();
    this.events();
  }

  events() {
    if (this.DOM.link) {
      window.addEventListener("scroll", this.checkScroll.bind(this));
      this.clickEvent = this.DOM.link.addEventListener("click", this.goBackToTop.bind(this));
    }
  }

  checkScroll() {
    if (window.pageYOffset <= this.distance) {
      this.JSUTIL.removeClass(this.DOM.link, this.DOM.activeClass);
    } else {
      this.JSUTIL.addClass(this.DOM.link, this.DOM.activeClass);
    }
  }

  goBackToTop(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
 
  destroy(){
    this.clickEvent = {};
  }
}
export default BackToTop;
