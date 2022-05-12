# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![mobile]((iPhone6_7_8)d.png)
![desktop]((Webcapture.jpeg)


### Links

- Solution URL: (https://github.com/ibimina/ecommerce-product-page-main)
- Live Site URL: (https://ibimina.github.io/ecommerce-product-page-main/)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned
I used this function to control the display of image when the arrow button is clicked and 
to override  the light box image



```js
function redo() {
  lefty.addEventListener("click", function () {
    if (curr === 0) {
      curr = changeImage.length;
      lide();
    }

    leftSlidee();
    inlefty.innerHTML = "";
  });
}

redo();

function redoi() {
  rigty.addEventListener("click", function () {
    if (curr === changeImage.length - 1) {
      curr = -1;
         lide();
    }
    rightlide();
    inlefty.innerHTML = "";
  });
}

redoi();
```


### Continued development
Working on Mobile design web page and image slider




## Author

- Ibimina Hart
- Frontend Mentor - (https://www.frontendmentor.io/profile/ibimina)
- Twitter - (https://www.twitter.com/ibiminaaH)


