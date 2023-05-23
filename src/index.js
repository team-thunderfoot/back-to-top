import BackToTop from "./BackToTop";

class Page {
  constructor() {
    this.init();
    this.events();
  }
  init() {
    this.backToTop = new BackToTop({
      activeClass: "js--back-top--is-active",
      distance: 300,
    });

    document.querySelector(".js--destroy-top").addEventListener("click", (e) =>{
      e.preventDefault();
      var destroy = this.backToTop.destroy();
      console.log(destroy);
    })
  }
  events() {}
}
export default Page;
new Page();
