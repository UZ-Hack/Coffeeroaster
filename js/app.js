"use strict";

function menuBar() {
    const bar = document.querySelector('.burger__btn');
    bar.classList.toggle('burger__btn-click')
    const showMenu = document.querySelector('.menu');
    showMenu.classList.toggle('show__menu-res')
    const lock = document.querySelector('body')
    lock.classList.toggle('lock')
}