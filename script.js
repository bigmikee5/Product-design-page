const productImg = document.querySelector(".productImg");
const viewImage = document.getElementsByClassName("views");
const decreaseQuantity = document.querySelector(".decrease");
const defaultQuantity = document.querySelector(".defaultQuantity");
const increaseQuantity = document.querySelector(".inrease");
const cartQuantity = document.querySelector(".cartQuantity");
const emptyCart = document.querySelector(".emptyCart");
const cartProductSelected = document.querySelector(".cartProductSelected");
const productQuantity = document.querySelector(".productQuantity");
const totalPrice = document.querySelector(".totalPrice");
const deleteItem = document.querySelector(".deleteItem");
const items = document.querySelector(".item1");
const checkOut = document.querySelector("#checkOut");

const navMenu = document.querySelector(".navMenu"),
  toggleMenu = document.querySelector("#hamburger"),
  closeMenu = document.querySelector("#hamburg-close"),
  navLink = document.querySelectorAll(".navMenu"),
  previous = document.querySelector(".pre"),
  next = document.querySelector(".next");

const products = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];
let currentIndex = 0;
// view products
viewImage[0].onclick = function () {
  productImg.src = "images/image-product-1.jpg";
};

viewImage[1].onclick = function () {
  productImg.src = "images/image-product-2.jpg";
};

viewImage[2].onclick = function () {
  productImg.src = "images/image-product-3.jpg";
};

viewImage[3].onclick = function () {
  productImg.src = "images/image-product-4.jpg";
};

// Select the product quantity to display

decreaseQuantity.addEventListener("click", () => {
  if (defaultQuantity.innerHTML > 0) {
    defaultQuantity.innerHTML--;
    productQuantity.innerHTML--;
  }
  saveCartQuantity();
});

increaseQuantity.addEventListener("click", () => {
  defaultQuantity.innerHTML++;
  productQuantity.innerHTML++;
  saveCartQuantity();
});

//  Save quantity to local storage
function saveCartQuantity() {
  localStorage.setItem("Data", defaultQuantity.innerHTML);
}

function showCartQuantity() {
  defaultQuantity.innerHTML = localStorage.getItem("Data");
}

showCartQuantity();

//  Add product selected to cart

function addToCart() {
  if (defaultQuantity.innerHTML > 0) {
    cartQuantity.style.display = "block";
    cartQuantity.innerHTML = "1";
  }
  saveCartQuantity();
}

//  checkout contents
function cartCheckOut() {
  if (defaultQuantity.innerHTML == 0) {
    emptyCart.style.display = "block";
    cartProductSelected.style.display = "none";
    setTimeout(() => {
      emptyCart.style.display = "none";
      cartProductSelected.style.display = "none";
    }, 2000);
    saveCartQuantity();
  } else {
    cartProductSelected.style.display = "block";
    emptyCart.style.display = "none";
    productQuantity.innerHTML = `${defaultQuantity.innerHTML}`;
    // total price to be calculated
    totalPrice;
  }
  saveCartQuantity();
}

// removing product from cart
deleteItem.addEventListener("click", () => {
  items.innerHTML = "";
  items.innerHTML += "Cart is empty";
  cartQuantity.style.display = "none";
  items.style.textAlign = "center";
  setTimeout(() => {
    cartProductSelected.style.display = "none";
  }, 2000);
  setInterval(() => {
    location.reload();
  }, 3000);
});

// checkOut
checkOut.addEventListener("click", () => {
  cartProductSelected.style.display = "none";
  setTimeout(() => {
    alert("Plaese wait....");
  }, 1000);
});

// MOBILE

//  SHOW
toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

//  HIDDEN
toggleMenu.addEventListener("click", () => {
  closeMenu.classList.remove("show");
});

function linkAction() {
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// view product

function nextImage() {
  currentIndex++;
  if (currentIndex >= products.length) {
    currentIndex = 0;
    productImg.src = products[currentIndex];
  }
}
console.log(products[currentIndex]);

function prevImage() {
  currentIndex--;
  if (currentIndex >= products.length) {
    currentIndex = 4;
    productImg.src = products[currentIndex];
  }
}
