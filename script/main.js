import {setupModalEventListeners} from "./modal-window.js";
import {setupScrollToUpBtnListeners} from "./scroll-up-to-top.js"

const currentPage = window.location.pathname;


if(currentPage.includes("modal-window")) {
    setupModalEventListeners();
}
if (currentPage.includes("scroll-to-up-btn")) {
    setupScrollToUpBtnListeners();
}
