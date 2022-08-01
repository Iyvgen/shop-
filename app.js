//add to cart//

let productsCountEl = document.getElementById("products-count");
console.log(productsCountEl);
let addToCartBtns = document.querySelectorAll(".btn-btn-add-to-card");
console.log(addToCartBtns);

// addToCartBtns.addEventListener("click", function () {
//   alert(`hello`);
// });

for (let i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener("click", function () {
    let prevProductCount = +productsCountEl.textContent;
    productsCountEl.textContent = prevProductCount + 1;
  });
}

//change like state//

let likeBtns = document.querySelectorAll(".like");
console.log(likeBtns);

likeBtns.forEach((item) =>
  item.addEventListener("click", function () {
    // item.style.backgroundColor = "#2c71b8";
    // item.style.color = "#ffffff";
    item.classList.toggle("liked");
  })
);

//***more details */
let moreDetailsBtns = document.querySelectorAll(".btn-more-details");
let modal = document.querySelector(".modal");
let btnClose = document.querySelector(".btn-close");

moreDetailsBtns.forEach((item) =>
  item.addEventListener("click", function () {
    modal.classList.add("show");
  })
);

btnClose.addEventListener("click", function () {
  modal.classList.remove("show");
});

// function openModal() {
//   modal.classList.add("show");
//   modal.classList.remove("hide");
// }

// function closeModal() {
//   modal.classList.add("hide");
//   modal.classList.remove("show");
// }

// moreDetailsBtns.forEach((item) => item.addEventListener("click", openModal));
// btnClose.addEventListener("click", closeModal);

//****slider */

$(".slider-block").slick({
  autoplay: true,
  dots: true,
});
