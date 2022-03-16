// MENU BUTTON
const menu = document.querySelector('.menu img');
const menuBox = document.querySelector('.menu-box');
const overlay = document.querySelector('.overlay');

// MODAL BUTTON
const btnProject = document.querySelector(' #btn-project');
console.log(btnProject)
const projectBackup = document.querySelector('.project-backup');
const aboutProjectBackup = document.querySelector('.about-project-backup');
const closeModal =document.querySelector('#btn-close-modals')
const closePledge = document.querySelector('#close-pledge');


// CLOSE PLEDGE
const btnContinuPledge = document.querySelector('.btn-close-modal')
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

console.log(btnContinuPledge)

btnContinuPledge.addEventListener('click', ()=> {

   console.log(btnContinuPledge)
   projectBackup.classList.toggle('btn-project-visible');

   closePledge.style.display = 'block';

})

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


projectBackup.addEventListener('click', changeBorder);

function changeBorder() {
 
   for (let i = 0; i < input.length; i++) {
      input[i].onclick = function () {

         // if (enterPledge[i].style.display === 'none') {
         //    enterPledge[i].style.display = 'block';
         // } 
         // else {
         //    enterPledge[i].style.display = 'none';
         // }
        
         // input[i].style.backgroundColor = 'blue';
         // projectBorder[i].style.backgroundColor = 'green';
         // projectBorder[i].classList.toggle('example');
         if (projectBorder[i].style.backgroundColor === 'white') {
            // projectBorder[i].style.backgroundColor = 'green' 
            enterPledge[i].style.display = 'block';
         } 
         else {
            projectBorder[i].style.backgroundColor = 'white'
            enterPledge[i].style.display = 'none';
         }
      }
      
   //    for (let i = 0; i < aboutProjectBackup.length; i++) {
        
   //   }
  }
      
}




// input.forEach(input1 => {
   
//    enterPledge.forEach(enter1 => {
//       // console.log(input1, enter1)
//       input1.addEventListener('change', ()=> {
//          enter1.classList.toggle('enter-pledge-toggle');
//          aboutProjectBackup.style.borderColor = 'hsl(176, 50%, 47%)';
//       })

//    })
// })








