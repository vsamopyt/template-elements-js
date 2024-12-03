// thema
const body = document.querySelector('body');


// FUNCTIONS
// TO CHANGE STYLE BTN
const handleBtnStyle = function (element) {
  element.classList.toggle('darkBtn');
  
};

//  TO CHANGE STYLE ICONS
const handleBtnIconStyle = (elements, activeClass) => {
  elements.forEach(item => {
    item.classList.toggle(activeClass);
  });
};

// TO CHECK THEME
const checkTheme =(element, elements, activeClass) =>{
    const localStorageTheme =localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log(localStorageTheme);
    console.log( systemPrefersDark);
    
    
    if(localStorageTheme === "dark") {
        element.classList.add("darkBtn")
        elements.forEach(item => {
            item.classList.toggle(activeClass);
            body.classList.add("dark-theme")
          });

}};

// save in localStorage
const saveThemeToLocalStorage =() => {
     const currentTheme = body.classList.contains("dark-theme") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);
}

// TO SET THEME
const handleThema = () => {
    body.classList.toggle("dark-theme");
}

// SET ALL FUNCTIONS
const toggleBtnOne = function (element, elements, activeClass) {
  handleThema(); 
  handleBtnStyle(element);
  handleBtnIconStyle(elements, activeClass);
  saveThemeToLocalStorage()

}

// BTN ONE
const btnOne = document.querySelector('.btn-one-theme');
const btnOneIcons = document.querySelectorAll('.btn-one-theme-icon');
checkTheme(btnOne, btnOneIcons, 'schow');
btnOne.addEventListener('click', () => {
  toggleBtnOne(btnOne, btnOneIcons, 'schow');
});



// BTN TWO

const btnTwo = document.querySelector('.btn-two-theme');
const btnTwoIcons = document.querySelectorAll('.btn-two-theme-icon');

btnTwo.addEventListener('click', () => {
  toggleBtnOne(btnTwo, btnTwoIcons, 'schow');
});

// BTN THREE

const btnThree = document.querySelector('.btn-three-theme');
const btnThreeIcons = document.querySelectorAll('.btn-three-icon-wrapper');
console.log(btnTwo, btnTwoIcons);

btnThree.addEventListener('click', () => {
  toggleBtnOne(btnThree, btnThreeIcons, 'active');
});

// BTN FEAR

const btnFear = document.querySelector('.btn-fear-theme');
const btnFearIcons = document.querySelectorAll('.btn-fear-icon-wrapper');

btnFear.addEventListener('click', () => {
  toggleBtnOne(btnFear, btnFearIcons, 'active');
});

// BTN FIVE

const btnFive = document.querySelector('.btn-five-theme');

btnFive.addEventListener('click', () => {
  toggleBtnOne(btnFive);
});
