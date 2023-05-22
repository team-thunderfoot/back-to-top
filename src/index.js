import BackToTop from "./BackToTop";

class Page {
  constructor() {
    this.init();
    this.events();
  }
  init() {
    new BackToTop({
      activeClass: "js--back-top--is-active",
      distance: 300,
    });
  }
  events() {}
}
export default Page;
new Page();
