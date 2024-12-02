// BTN ONE
const btnOne = document.querySelector('.btn-one-theme');
const btnOneIcons = document.querySelectorAll('.btn-one-theme-icon');

const handleBtnStyle = function (element) {
 element.classList.toggle('darkBtn');
};

const handleBtnIconStyle = (elements) => {
  elements.forEach(item => {
    item.classList.toggle('schow');
  });
};

const toggleBtnOne = function (element, elements) {
    handleBtnStyle(element);
    handleBtnIconStyle(elements)
}


btnOne.addEventListener('click', (()=>{
    toggleBtnOne(btnOne,btnOneIcons )
}));

// BTN TWO

const btnTwo = document.querySelector('.btn-two-theme');
const btnTwoIcons = document.querySelectorAll('.btn-two-theme-icon');
console.log(btnTwo,btnTwoIcons );

btnTwo.addEventListener('click', (()=>{
    toggleBtnOne(btnTwo, btnTwoIcons  )
}));
