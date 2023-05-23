import BackToTop from "./BackToTop";

class Page {
  constructor() {
    this.init();
    this.events();
  }
  init() {
    const backToTop = new BackToTop({
      classEl: ".js--back-top",
      activeClass: "js--back-top--is-active",
      distance: "tf-data-distance",
    });

    backToTop.init();

    // const buttonDestroy = document.querySelectorAll(".js--destroy-top");
    // buttonDestroy.addEventListener("click", (e) => {
    //   e.preventDefault();
    //   let destroy = this.backToTop.destroy();
    // });

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
