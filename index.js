const mobileToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const navCartimg = document.querySelector(".checkcart");
const sneakerQuantity = document.querySelector(".qua");
const cartContainer = document.querySelector(".show-cart");
const numberOfitems = document.querySelector(".quantity");
const addItemsContainer = document.querySelector(".new");
const largeImg = document.querySelector(".displaypic");
const btnContainer = document.querySelector(".web");

let deskImages = document.querySelectorAll(".oo");
const mobileImages = document.querySelectorAll(".product");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

mobileToggle.addEventListener("click", (e) => {
  e.preventDefault();
  const visiblity = primaryNav.getAttribute("data-visible");
  if (visiblity === "false") {
    primaryNav.setAttribute("data-visible", true);
    mobileToggle.setAttribute("aria-expanded", true);
  } else {
    primaryNav.setAttribute("data-visible", false);
    mobileToggle.setAttribute("aria-expanded", false);
  }
});

let current = 0;

function reset(image) {
  for (let i = 0; i < image.length; i++) {
    image[i].style.display = "none";
  }
}

reset(mobileImages);
reset(deskImages);

mobileImages[0].style.display = "block";
deskImages[0].style.display = "block";

function leftSlide(image) {
  reset(image);
  if (current === 0) {
    current = image.length;
  }
  image[current - 1].style.display = "block";
  current--;
}
function rightSlide(image) {
  reset(image);
  if (current === image.length - 1) {
    current = -1;
  }
  image[current + 1].style.display = "block";
  current++;
}

leftArrow.addEventListener("click", function () {
  leftSlide(mobileImages);
});

rightArrow.addEventListener("click", function () {
  rightSlide(mobileImages);
});

addItemsContainer.addEventListener("click", (e) => {
  try {
    let btn = e.target;
    if (btn.className === "plus") {
      let prevsEl = btn.previousElementSibling;
      prevsEl.textContent++;
    } else if (btn.className === "minus") {
      let nextEl = btn.nextElementSibling;
      if (nextEl.textContent > 0) {
        nextEl.textContent--;
      }
    } else if (btn.classList.contains("addcart")) {
      if (numberOfitems.textContent > 0) {
        sneakerQuantity.textContent = numberOfitems.textContent;
      }
    }
  } catch (error) {
    console.log(`error: ${error.message}`);
  }
});

cartContainer.addEventListener("click", (e) => {
  let clear = e.target;
  if (clear.classList.contains("closecart")) {
    cartContainer.style.display = "none";
  } else if (clear.classList.contains("trash")) {
    sneakerQuantity.textContent = "";
    cartContainer.style.display = "none";
  }
});

function see(e) {
  console.log(e.target);
  let checkQua = e.target.previousElementSibling;
  if (checkQua.textContent === "") {

    cartContainer.style.display = "block";
    cartContainer.innerHTML = `
        <h5>Cart</h5>
         <img src="images/icon-close.svg" alt="close cart" class="closecart" />
       <div class="con-em">
        <p class="empty-cart">Your cart is empty</p>
        </div>
       `;
  } else if (checkQua.textContent >= 0) {

    cartContainer.style.display = "block";
    cartContainer.innerHTML = `<h5>Cart</h5>
          <img src="images/icon-close.svg" alt="close image " class="closecart" />
        <hr />
       
        <div class="cartcontent">
          <div class="desc">
            <img
              src="images/image-product-1-thumbnail.jpg"
              alt="image"
              class="smal"/>
            </div>
          <div>
              <p class="name">Autumn limited Edition</p>
              <p class="total">
                $125.00 x <span class="productqua">${
                  numberCart.textContent
                }</span>
                <span class="producttotal"> $${
                  Number(numberCart.textContent) * 125
                }.00</span>
              </p>
           </div>
               <img src="images/icon-delete.svg" alt="image" class="trash" />
            </div>
           <div class="cheq">
         <button class="checkout">checkout</button>
           </div>
            `;
  }
}

navCartimg.addEventListener("click", (e) => {
  see(e);
});

btnContainer.addEventListener("click", (e) => {
  let somw = e.target;
  console.log(somw);
  if (somw.classList.contains("thumbone")) {
    largeImg.innerHTML = `<img src="images/image-product-1.jpg" alt="" />`;
  } else if (somw.classList.contains("thumbtwo")) {
    largeImg.innerHTML = `<img src="images/image-product-2.jpg" alt="" />`;
  } else if (somw.classList.contains("thumbthree")) {
    largeImg.innerHTML = `<img src="images/image-product-3.jpg" alt="" />`;
  } else if (somw.classList.contains("thumbfour")) {
    largeImg.innerHTML = `<img src="images/image-product-4.jpg" alt="" />`;
  }
});
const pictu = document.querySelector(".wrapper");

largeImg.addEventListener("click", (e) => {
  pictu.style.display = "block";
});

const btn = document.querySelector(".wrapper");

btn.addEventListener("click", (e) => {
  let click = e.target;
  let clickParent =
    click.parentElement.parentElement.previousElementSibling.children[0];

  if (click.classList.contains("lightone")) {
    reset(deskImages);
    clickParent.innerHTML = `<img src="images/image-product-1.jpg" alt="" />`;
  } else if (click.classList.contains("lighttwo")) {
    reset(deskImages);
    clickParent.innerHTML = `<img src="images/image-product-2.jpg" alt="" />`;
  } else if (click.classList.contains("lightthree")) {
    reset(deskImages);
    clickParent.innerHTML = `<img src="images/image-product-3.jpg" alt="" />`;
  } else if (click.classList.contains("lightfour")) {
    reset(deskImages);
    clickParent.innerHTML = `<img src="images/image-product-4.jpg" alt="" />`;
  } else if (click.classList.contains("closebox")) {
    btn.style.display = "none";
  }
});

let lefty = document.querySelector(".leftu");
let rigty = document.querySelector(".rightu");
let inlefty = document.querySelector(".so");

lefty.addEventListener("click", function () {
  leftSlide(deskImages);
  inlefty.innerHTML = "";
});

rigty.addEventListener("click", function () {
  rightSlide(deskImages);
  inlefty.innerHTML = "";
});
