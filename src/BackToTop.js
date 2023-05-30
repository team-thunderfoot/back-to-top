import JSUTIL from "@andresclua/jsutil";
import { tf_debounce } from "@andresclua/debounce-throttle";

class BackToTop {
  constructor(payload) {
    this.DOM = {
      activeClass: payload.activeClass, // CSS class applied when the link is active
      links: document.querySelectorAll("." + payload.linkClass) ?? [], // Selects all elements with the specified class in payload.linkClass
      distanceTrigger: payload.distanceTrigger, // Distance from the top of the page to trigger the link activation
    };

    this.JSUTIL = new JSUTIL();
    this.events();
  }

  init() {}

  events() {
    // Attach events to links and scroll
    if (!!this.DOM.links.length) {
      // Add click event listener to each link
      this.DOM.links.forEach((link) => {
        this.clickEvent = link.addEventListener(
          "click",
          this.goBackToTop.bind(this)
        );
      });

      // Add scroll event listener with debounce to check scroll position
      window.addEventListener(
        "scroll",
        tf_debounce(() => {
          this.checkScroll();
        }, 150)
      );
    }
  }

  checkScroll() {
    // Check the scroll position and update link activation
    this.DOM.links.forEach((link) => {
      if (window.pageYOffset <= link.getAttribute(this.DOM.distanceTrigger)) {
        this.JSUTIL.removeClass(link, this.DOM.activeClass); // Remove active class if scroll position is above the trigger point
      } else {
        this.JSUTIL.addClass(link, this.DOM.activeClass); // Add active class if scroll position is below the trigger point
      }
    });
  }

  goBackToTop(e) {
    // Scroll to the top of the page when a link is clicked
    e.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  destroy() {
    // Remove event listener for the click event
    this.clickEvent = {};
  }
}
export default BackToTop;
