//slider

const swiper = new Swiper('.sliderbox', {
    loop: true,
    effect: 'fade',
    autoHeigth: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// carousel

const carousel = new Swiper('.carouselbox', {

    spaceBetween: 30,
    slidesPerView: 'auto',
    centeredSliders: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        autoplayDelay: 500,
    },
    // autoplay: {
    //     delay: 2000,
    // },
    breakpoints: {
        481: {
            slidesPerView: 2,
            sliderPerGroup: 1,
            centeredSliders: false,
        },
        640: {
            slidesPerView: 3,
            sliderPerGroup: 3,
            centeredSliders: false,
        },
        992: {
            slidesPerView: 4,
            sliderPerGroup: 4,
            centeredSliders: false,
        },
    },
});

const triggerOpen = document.querySelectorAll('[trigger-button]');
const triggerClose = document.querySelectorAll('[close-button]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < triggerOpen.length; i++) {
    let currentId = triggerOpen[i].dataset.target,
        targetEl = document.querySelector(`#${currentId}`);

    const openData = function () {
        targetEl.classList.remove('active');
        // overlay.classList.remove('active');
    };

    triggerOpen[i].addEventListener('click', function () {
        targetEl.classList.add('active');
        // overlay.classList.add('active');
    });

    targetEl.querySelector('[close-button]').addEventListener('click', openData);
    // overlay.addEventListener('click', openData);
}

// MOBILE MENU
const subMenu = document.querySelectorAll('.child-trigger');

subMenu.forEach((menu) => menu.addEventListener('click', function (e) {
    e.preventDefault();
    subMenu.forEach((item) => {
        if (item !== this) {
            item.closest('.has-child').classList.remove('active');
        }
    });

    if (!this.closest('.has-child').classList.contains('active')) {
        this.closest('.has-child').classList.toggle('active');
    }
}));

// sorter

const sorter = document.querySelector('.sort-list');
if (sorter) {
    const sortLi = sorter.querySelectorAll('li');
    sorter.querySelector('.opt-trigger').addEventListener('click', function() {
        sorter.querySelector('ul').classList.toggle('show');
    });

    sortLi.forEach(item => item.addEventListener('click', function() {
        sortLi.forEach((li) => li != this ? li.classList.remove('active') : null);

        this.classList.add('active');
        sorter.querySelector('.opt-trigger span.value').textContent = this.textContent;
        sorter.querySelector('ul').classList.toggle('show');
    }));
}