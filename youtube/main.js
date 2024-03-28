let menuIcon =document.querySelector('.menu');
let sideBar =document.querySelector('.sidebar');
let containerLarge=document.querySelector('.container');

menuIcon.addEventListener('click',()=>{
    sideBar.classList.toggle('small-sidebar');
    containerLarge.classList.toggle('container-large')
})