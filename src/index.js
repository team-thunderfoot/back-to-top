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

    console.log("Sfsd");
    document.querySelector(".js--destroy-top").addEventListener("click", (e) =>{
      e.preventDefault();
      console.log("sfds");
      console.log(this.backToTop);
      this.backToTop.destroy();
      console.log(this.backToTop);
    })
  }
  events() {}
}
export default Page;
new Page();
