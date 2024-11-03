

// Selecting DOM elements
const btnHeaderMenu = document.querySelector(".modal-open-btn");
// const modalWindow = document.querySelector(".backdrop");
const btnModalClose = document.querySelector(".modal-close-btn");
const body = document.querySelector("body");
const backdrop = document.querySelector(".backdrop");
const sectionLinks = document.querySelectorAll(".modal-item-link");
const contentModal = document.querySelector(".modal-content");
let isMouseOnModalClicked = false;

const toggleModal =() =>{
  backdrop.classList.toggle("is-open");
  body.classList.toggle("is-scroll");
}

// Close modal when pressing Escape key
const closeModalByKey = (event) => {
  if (event.key === "Escape") {
    toggleModal();
  }
};

// Close modal when clicking on the backdrop
const closeModalByClickBackdrop = (event) => {
  if (!isMouseOnModalClicked && event.target.classList.contains("backdrop")) {
    toggleModal();
  }
};

// Track mouse click inside the modal content
const mouseClickDown = (event) => {
  if (event.target.closest(".modal-content")) {
    isMouseOnModalClicked = true;
  }
};

const mouseClickUp = () => {
  isMouseOnModalClicked = false;
};

// const positionMenuBtn = ()=>{
//   positionElementFromRight(btnHeaderMenu)
// }

// Adding event listeners
export const setupModalEventListeners = () => {
//   window.addEventListener("load",positionMenuBtn);
//   window.addEventListener("resize",positionMenuBtn);
  sectionLinks.forEach((item) => {
    item.addEventListener("click", toggleModal);
  });
  btnHeaderMenu.addEventListener("click", toggleModal);
  btnModalClose.addEventListener("click", toggleModal);
  document.addEventListener("keydown", closeModalByKey );
  backdrop.addEventListener("click", closeModalByClickBackdrop);
  contentModal.addEventListener("mouseup", mouseClickUp);
  contentModal.addEventListener("mousedown", mouseClickDown);
};