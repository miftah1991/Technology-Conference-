const menu = document.querySelector('.mobile-menu');
const menubtn = document.querySelector('.baricon');
const closebtn = document.querySelector('.close-item');
const programsbtn = document.querySelector('.programsbtn');
const speakersbtn = document.querySelector('.speakersbtn');
const sponsorsbtn = document.querySelector('.sponsorsbtn');
const contactbtn = document.querySelector('.contactbtn');

function showmMenu(e) {
  e.preventDefault();
  menu.style.display = 'block';
}
function hideMenu() {
  menu.style.display = 'none';
}

menubtn.addEventListener('click', showmMenu);
closebtn.addEventListener('click', hideMenu);
programsbtn.addEventListener('click', hideMenu);
speakersbtn.addEventListener('click', hideMenu);
sponsorsbtn.addEventListener('click', hideMenu);
contactbtn.addEventListener('click', hideMenu);
