# Back-to-top

NPM Package : Back to Top

[![npm version](https://badge.fury.io/js/back-to-top.svg)](https://badge.fury.io/js/back-to-top)

The `back-to-top` package provides functionality for adding a back-to-top button to a web page that scrolls smoothly to the top of the page.

## Installation

```sh
npm install @teamthunderfoot/back-to-top
```

## Usage

```sh
import BackToTop from 'back-to-top';

class Index {
  constructor() {
    this.init();
  }
  init() {
    const backToTop = new BackToTop({
    activeClass: "js--back-top--is-active",
    distance: 300,
    });
  }
}

export default Index;
new Index();
```

In your HTML file, include a button element with the class "js--back-top" that will trigger the back-to-top functionality.

```sh
<button class="js--back-top">Back to Top</button>
```

The back-to-top button will automatically appear when the user scrolls beyond the specified distance (default: 500px) from the top of the page. When clicked, it will scroll smoothly to the top of the page.

## Options

`activeClass:` The CSS class applied to the back-to-top button when it is active (visible).

`distance:` The distance from the top of the page at which the back-to-top button should appear.

## Destroy

To remove the back-to-top functionality, you can use the destroy method. Call the destroy method on the instance of BackToTop:

```sh
const destroy = backToTop.destroy();
```
