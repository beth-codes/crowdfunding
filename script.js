// MENU BUTTON
const menu = document.querySelector('.menu img');
const menuBox = document.querySelector('.menu-box');
const overlay = document.querySelector('.overlay');

// MODAL BUTTON
const btnProject = document.querySelector(' #btn-project');
console.log(btnProject)
const projectBackup = document.querySelector('.project-backup');

const closeModal =document.querySelector('#btn-close-modals')
const closePledge = document.querySelector('#close-pledge');


// CLOSE PLEDGE
const btnContinuPledge = document.querySelectorAll('.btn-close-modal')
const btnClosePledge = document.querySelector('.btn-close-pledge')




menu.addEventListener('click', ()=>{

   let imgCheck = menu.getAttribute('src');
   console.log(imgCheck);
   if (imgCheck === 'images/icon-hamburger.svg') {
      console.log('true')
      menu.setAttribute('src', 'images/icon-close-menu.svg');

      overlay.style.display = 'block';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
   } else {
      console.log('false')
      menu.setAttribute('src', 'images/icon-hamburger.svg');
      overlay.style.display = 'none';  
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
   }
  
   menuBox.classList.toggle('menu-box-visible');
  
})

btnProject.addEventListener('click', ()=> {
   projectBackup.classList.toggle('btn-project-visible');
   
   overlay.classList.toggle('overlay-dis');
})

closeModal.addEventListener('click', ()=> {
   projectBackup.classList.toggle('btn-project-visible');
   overlay.classList.toggle('overlay-dis');

});


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
 
   for (let i = 0; i < input.length; i++) {
   //   console.log(input[i]);

     let inputName = input[i].getAttribute('name');
     console.log(inputName);
     input[i].onclick = function () {
      // enterPledge[i].style.display = 'block';
      enterPledge[i].classList.toggle('try');
      
      // aboutProjectBackup[i].style.borderColor = 'hsl(176, 50%, 47%)';
      aboutProjectBackup[i].classList.toggle('border-color');
   
   }  

  }

  for (let i = 0; i < btnContinuPledge.length; i++) {
     console.log(btnContinuPledge[i])
     btnContinuPledge[i].onclick = function () {
      projectBackup.classList.toggle('btn-project-visible');
          closePledge.style.display = 'block';
   }

  }
}











