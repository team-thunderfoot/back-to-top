import BackToTop from "./BackToTop";

class Page {
  constructor() {
    this.init();
    this.events();
  }
  init() {
    const backToTop = new BackToTop({
      linkClass: ".js--back-top",
      activeClass: "js--back-top--is-active",
      distanceTrigger: "tf-data-distance",
    });

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
export default Page;
new Page();
