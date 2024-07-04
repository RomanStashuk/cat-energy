// Main navigation (burger menu)

const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

// Before - after slider
const isMobile = document.documentElement.clientWidth < 768;
let isBeforeImgvisible = true;
const slider = document.querySelector('.slider');

const btnBefore = slider.querySelector('.slider__btn--before');
const btnAfter = slider.querySelector('.slider__btn--after');
const mobileController = slider.querySelector('.slider__toggler-wrap');
const mobileToggler = slider.querySelector('.slider__toggler');

const imgBefore = slider.querySelector('.slider__image-wrap--before');
const imgAfter = slider.querySelector('.slider__image-wrap--after');

const showBeforeImg = () => {
  if (isMobile) {
    imgAfter.classList.add('visually-hidden');
    imgBefore.classList.remove('visually-hidden');
    mobileToggler.style.right = 'auto';
    mobileToggler.style.left = '5px';
  }
};

const showAfterImg = () => {
  if (isMobile) {
    imgBefore.classList.add('visually-hidden');
    imgAfter.classList.remove('visually-hidden');
    mobileToggler.style.right = '5px';
    mobileToggler.style.left = 'auto';
  }
};

const toggleImg = () => {
  if (isMobile) {
    if (isBeforeImgvisible) {
      imgBefore.classList.add('visually-hidden');
      imgAfter.classList.remove('visually-hidden');
      mobileToggler.style.right = '5px';
      mobileToggler.style.left = 'auto';
    }
    if (!isBeforeImgvisible) {
      imgAfter.classList.add('visually-hidden');
      imgBefore.classList.remove('visually-hidden');
      mobileToggler.style.right = 'auto';
      mobileToggler.style.left = '5px';
    }

    isBeforeImgvisible = !isBeforeImgvisible;
  }
};

mobileController.addEventListener('click', toggleImg);
btnBefore.addEventListener('click', showBeforeImg);
btnAfter.addEventListener('click', showAfterImg);
