import JSUTIL from "@andresclua/jsutil"
import { tf_debounce } from "@andresclua/debounce-throttle"

class BackToTop {
    constructor(payload) {
        this.DOM = {
            element: payload.element,
            distanceTrigger: payload.distanceTrigger,
        }

        this.activeClass = payload.activeClass // CSS class applied when the element is active

        this.JSUTIL = new JSUTIL()
        this.events()
    }

    init() {}

    events() {
        // Attach events to the element and scroll
        if (this.DOM.element) {
            // Add click event listener to the element
            this.clickEvent = this.DOM.element.addEventListener(
                "click",
                this.goBackToTop.bind(this)
            )

            // Add scroll event listener with debounce to check scroll position
            window.addEventListener(
                "scroll",
                tf_debounce(() => {
                    this.checkScroll()
                }, 150)
            )
        }
    }

    checkScroll() {
        // Check the scroll position and update the element activation
        if (
            window.pageYOffset <= parseInt(this.DOM.element.getAttribute(this.DOM.distanceTrigger))
        ) {
            this.JSUTIL.removeClass(this.DOM.element, this.activeClass) // Remove active class if scroll position is above the trigger point
        } else {
            this.JSUTIL.addClass(this.DOM.element, this.activeClass) // Add active class if scroll position is below the trigger point
        }
    }

    goBackToTop(e) {
        // Scroll to the top of the page when the element is clicked
        e.preventDefault()
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }

    destroy() {
        // Remove event listener for the click event
        this.clickEvent = {}
    }
}
export default BackToTop
