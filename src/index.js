import BackToTop from "./BackToTop"

class Page {
    constructor() {
        this.init()
        this.events()
    }
    init() {
        document.querySelectorAll(".js--back-top").forEach((element) => {
            const backToTop = new BackToTop({
                element: element,
                activeClass: "g--back-top-01--is-active",
                distanceTrigger: "tf-data-distance",
            })
        })

        // document
        //   .querySelector(".js--destroy-top")
        //   .addEventListener("click", (e) => {
        //     e.preventDefault();
        //     var destroy = this.backToTop.destroy();
        //     console.log(destroy);
        //   });
    }
    events() {}
}
export default Page
new Page()
