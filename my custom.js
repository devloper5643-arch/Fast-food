"use strict"
let slides = document.querySelectorAll('.text-slide');
let index = 0;

function showNextText() {
  let current = slides[index];
  current.classList.remove('active');
  current.classList.add('exit'); // পুরনো টেক্সট বাম দিকে যাবে

  index = (index + 1) % slides.length;
  let next = slides[index];
  next.classList.remove('exit');
  next.classList.add('active'); // নতুন টেক্সট ডান দিক থেকে আসবে

  setTimeout(() => {
    current.classList.remove('exit');
  }, 1000);
}

setInterval(showNextText, 5000);

const links = document.querySelectorAll('.All-foods-nav-menu-test a');

links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

 const toggleBtn = document.querySelector('.toggle_btn');
  const toggleBtnIcon = document.querySelector('.toggle_btn i');
  const dropDownMenu = document.querySelector('.dropdown_menu');

  toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');

    // check if menu is open
    const isOpen = dropDownMenu.classList.contains('open');

    // change icon
    toggleBtnIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  };
  let userAcces = prompt('Hi User! Your Name');
  alert("Welcome to my website "+userAcces+" By");
 

