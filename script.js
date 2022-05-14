//MENU BUTTON
const menu = document.querySelector('.menu img');
const menuBox = document.querySelector('.menu-box');
const overlay = document.querySelector('.overlay');
//BOOKMARK ICON
const Icon = document.querySelector('.icons');
const bookmarkIcon = document.querySelector('.bookmark-icon');
const btnBookMark = document.querySelector('.btn-bookmark');

// MODAL BUTTON
const btnProject = document.querySelector('#btn-project');
const projectBackup = document.querySelector('.project-backup');
const closeModal =document.querySelector('#btn-close-modals')
const closePledge = document.querySelector('#close-pledge');

// CLOSE PLEDGE
const btnContinuPledge = document.querySelectorAll('.btn-close-modal');
const btnClosePledge = document.querySelector('.btn-close-pledge');
const btnCyan = document.querySelector('.cyan');
const btnCyan1 = document.querySelector('.cyan1');

btnCyan.addEventListener('click', ()=> {
   closePledge.style.display = 'block';
   overlay.classList.toggle('overlay-dis');

})

btnCyan1.addEventListener('click', ()=> {
   closePledge.style.display = 'block';
   overlay.classList.toggle('overlay-dis');

})

//MENU
menu.addEventListener('click', ()=>{

   let imgCheck = menu.getAttribute('src'); //GETTING IMG SRC LINK
   if (imgCheck === 'images/icon-hamburger.svg') {
      menu.setAttribute('src', 'images/icon-close-menu.svg'); //CHANGING IMG SRC
      overlay.style.display = 'block';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
   } else {
      menu.setAttribute('src', 'images/icon-hamburger.svg');
      overlay.style.display = 'none';  
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
   }
  //MENUBOX SET TO TOGGLE
   menuBox.classList.toggle('menu-box-visible');
})

//BOOKMAK
Icon.addEventListener('click', ()=> {
  
   let colorGet = Icon.getAttribute('class');
   if (colorGet === 'bookmark-icon icons') {
      Icon.style.color = 'hsl(176, 72%, 28%)';
      Icon.setAttribute('class', 'tst')
   } else{
      Icon.style.color = '#2F2F2F';
      Icon.setAttribute('class', 'bookmark-icon icons')
   }
})

bookmarkIcon.addEventListener('click', ()=> {

   let colorGet = bookmarkIcon.getAttribute('class');
   if (colorGet === 'bookmark-icon') {
      bookmarkIcon.style.color = 'hsl(176, 72%, 28%)';
      btnBookMark.style.backgroundColor = 'hsla(176, 50%, 47%, 0.096)';
      btnBookMark.style.color = 'hsl(176, 72%, 28%)';
      bookmarkIcon.setAttribute('class', 'tst')
   } else{
      bookmarkIcon.style.color = '#2F2F2F';
      bookmarkIcon.setAttribute('class', 'bookmark-icon');
      btnBookMark.style.backgroundColor = 'hsla(0, 0%, 48%, 0.151)';
      btnBookMark.style.color = '#2F2F2F';
   
   }
})

//BACKUP PROJECT VISIBLE
btnProject.addEventListener('click', ()=> {
   projectBackup.classList.toggle('btn-project-visible'); 
   overlay.classList.toggle('overlay-dis');
})

//CLOSE MODAL
closeModal.addEventListener('click', ()=> {
   projectBackup.classList.toggle('btn-project-visible');
   overlay.classList.toggle('overlay-dis');
});

//CLOSE PLEDGE
btnClosePledge.addEventListener('click', ()=> {
   closePledge.style.display = 'none';
   overlay.classList.toggle('overlay-dis');
})

// PLEDGE
const input = document.querySelectorAll('#radio');
const head = document.querySelectorAll('a h5')
const enterPledge = document.querySelectorAll('.enter-pledge');
const aboutProject = document.querySelectorAll('.about-project');
const projectBorder = document.querySelectorAll('.project-border');
const aboutProjectBackup = document.querySelectorAll('.about-project-backup');

projectBackup.addEventListener('click', changeBorder);

function changeBorder() {
 
   //LOOPING THROUGH RADIO BTN, ENTERPLEDGE BTN, ABOUT PROJECT
   for (let i = 0; i < input.length; i++) {

     let inputName = input[i].getAttribute('name');
     console.log(inputName);
     input[i].onclick = function () {
      enterPledge[i].classList.toggle('try');
      aboutProjectBackup[i].classList.toggle('border-color');
   }  
  }

  //LOOPING THROUH CONTINUE PLEDGE
  for (let i = 0; i < btnContinuPledge.length; i++) {
     console.log(btnContinuPledge[i])
     btnContinuPledge[i].onclick = function () {
      projectBackup.classList.toggle('btn-project-visible');
      closePledge.style.display = 'block';
   }

  }
}











