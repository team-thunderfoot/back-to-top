# Back-to-top

The `back-to-top` package provides a "Back to Top" button functionality that allows for smooth scrolling to the top of the page. It enables customization of the active CSS class and the distance trigger, which determines when the button becomes visible or hidden based on scrolling.

[Here's an example](https://team-thunderfoot.github.io/back-to-top/)

## Installation

```sh
npm install @teamthunderfoot/back-to-top
```

## Usage

```sh
import BackToTop from '@teamthunderfoot/back-to-top';

class Index {
  constructor() {
    this.init();
  }
  init() {
    const backToTop = new BackToTop({
        element: document.querySelector(".js--back-top"),
        activeClass: "g--back-top-01--is-active",
        distanceTrigger: "tf-data-distance",
    })


    document.querySelectorAll(".js--back-top").forEach((element) => {
        const backToTop = new BackToTop({
            element: element,
            activeClass: "g--back-top-01--is-active",
            distanceTrigger: "tf-data-distance",
        })
    })
  }
}

export default Index;
new Index();
```

In your HTML file, include a button element with the class `js--back-top` that will trigger the back-to-top functionality. Additionally, add the `tf-data-distance` attribute to specify the distance from the top of the page at which the button should appear.

```sh
<button class="js--back-top" tf-data-distance="200">Back to Top</button>
```

The `back-to-top button` will automatically appear when the user scrolls beyond the specified distance from the top of the page. When clicked, it will scroll smoothly to the top of the page.

## Options

• `element:` The back-to-top button element.

• `activeClass:` The CSS class applied to the back-to-top button when it is active (visible).

• `distanceTrigger:` The data attribute that specifies the distance from the top of the page at which the back-to-top button should appear.

## Destroy

To remove the back-to-top functionality, you can use the destroy method. Call the destroy method on the instance of BackToTop:

```sh
const destroy = this.backToTop.destroy();
```
