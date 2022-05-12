const mobileToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

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

const imageSlide = document.querySelectorAll(".product");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
let current = 0;

function reset() {
  for (let i = 0; i < imageSlide.length; i++) {
    imageSlide[i].style.display = "none";
  }
}

function firstSlide() {
  reset();
  imageSlide[0].style.display = "block";
}
function leftSlide() {
  reset();
  imageSlide[current - 1].style.display = "block";
  current--;
  //imageSlide[0].style.display = "block";
}
function rightSlide() {
  reset();
  imageSlide[current + 1].style.display = "block";
  current++;
  //imageSlide[0].style.display = "block";
}

leftArrow.addEventListener("click", function () {
  if (current === 0) {
    current = imageSlide.length;
  }
  leftSlide();
});

rightArrow.addEventListener("click", function () {
  if (current === imageSlide.length - 1) {
    current = -1;
  }
  rightSlide();
});
firstSlide();
//reset()
const nos = document.querySelector(".quantity");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");

minus.addEventListener("click", function () {
  if (nos.textContent > 0) {
    let current = Number(nos.textContent) - 1;
    nos.textContent = current;
  }
});

plus.addEventListener("click", function () {
  let current = Number(nos.textContent) + 1;
  nos.textContent = current;
});

const addTo = document.querySelector(".addcart");

addTo.addEventListener("click", (e) => {
  let addProduct = e.target;
  if (nos.textContent > 0) {
    numberCart.textContent = nos.textContent;
  }
});

const checkCart = document.querySelector(".checkcart");
const numberCart = document.querySelector(".qua");
const emp = document.querySelector(".empty");
const not = document.querySelector(".cartcontents");
let quant = document.querySelector('.productqua')
let quantSum = document.querySelector(".producttotal");


console.log(not);
function emptyCart() {
//   
emp.style.display = 'block'
}

function notEmpty() {
 quant.textContent = numberCart.textContent

 quantSum.textContent = ` $${Number(numberCart.textContent) * 125}.00`

 not.style.display = "block";
}

emp.addEventListener("click", (e) => {
  let clear = e.target;
  if (clear.classList.contains("closecart")) {

    emp.style.display = "none";
 
  }
});
not.addEventListener("click", (e) => {
  let clear = e.target;

  if (clear.classList.contains("closecart")) {
 
     not.style.display = "none";
  } else if (clear.classList.contains("trash")) {
  
    numberCart.textContent=''
     not.style.display = "none";
  }


});

function see() {
  checkCart.addEventListener("click", (e) => {
    let check = e.target;

    let checkQua = check.previousElementSibling;
    
    if (checkQua.textContent === "") {
      // console.log("b");
      emptyCart();
    } else if (checkQua.textContent >= 0) {
      notEmpty();
 
    }
  });
}
see();

const displaypic = document.querySelector(".displaypic");
const picDiv = document.querySelector(".web");

picDiv.addEventListener("click", (e) => {

  let somw = e.target;

  if (somw.classList.contains("thumbone")) {
    displaypic.innerHTML = `<img src="images/image-product-1.jpg" alt="" />`;
    
  } else if (somw.classList.contains("thumbtwo")) {
    displaypic.innerHTML = `<img src="images/image-product-2.jpg" alt="" />`;
    
  } else if (somw.classList.contains("thumbthree")) {
    displaypic.innerHTML = `<img src="images/image-product-3.jpg" alt="" />`;
  
  } else if (somw.classList.contains("thumbfour")) {
    displaypic.innerHTML = `<img src="images/image-product-4.jpg" alt="" />`;
  
  }
});
const pictu = document.querySelector(".wrapper");
const pictur = document.querySelector(".ss");

function display(ret) {
  pictur.src = ret.src;
  console.log(pictur);
}

displaypic.addEventListener("click", (e) => {
  console.log(e.target);
  let ret = e.target;
  pictu.style.display = "block";
  display(ret);
});
let clickk;
const btn = document.querySelector(".wrapper");

btn.addEventListener("click", (e) => {
  let click = e.target;
 
  let clickParent = click.parentElement.parentElement.previousElementSibling.children[0];
  // console.log(clickParent)
  if (click.classList.contains("lightone")) {
    // clickParent.style.display='block'
     resete();
    clickParent.innerHTML = `<img src="images/image-product-1.jpg" alt="" />`;
   
    // console.log("ab");
  } else if (click.classList.contains("lighttwo")) {
    resete();
    // clickParent.style.display='block'
    clickParent.innerHTML = `<img src="images/image-product-2.jpg" alt="" />`;
    
    // console.log("b");
  } else if (click.classList.contains("lightthree")) {
  resete();
    // clickParent.style.display='block'
    clickParent.innerHTML = `<img src="images/image-product-3.jpg" alt="" />`;
      
    // console.log("b");
  } else if (click.classList.contains("lightfour")) {
 resete();
    // clickParent.style.display='block'
    clickParent.innerHTML = `<img src="images/image-product-4.jpg" alt="" />`;
       
    console.log("b");
  }
});

const cl = document.querySelector(".closebox");
function clo() {
  cl.addEventListener("click", (e) => {
    btn.style.display = "none";
  });
}
clo();

let changeImage = document.querySelectorAll(".oo");

let curr = 0;
function resete() {
  for (let i = 0; i < changeImage.length; i++) {
    changeImage[i].style.display = "none";
  }
}
function lide() {
  resete();
  changeImage[0].style.display = "block";
}
function leftSlidee() {
  resete();
  changeImage[curr - 1].style.display = "block";
  curr--;
  //imageSlide[0].style.display = "block";
}
function rightlide() {
  resete();
  changeImage[curr + 1].style.display = "block";
  curr++;
  //imageSlide[0].style.display = "block";
}

let lefty = document.querySelector(".leftu");
let rigty = document.querySelector(".rightu");
let inlefty = document.querySelector(".so");

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


