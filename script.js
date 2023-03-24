const header = document.querySelector('header');
// const chatIcon = document.getElementsByClassName('chat_icon');
// const chatBox = document.getElementsByClassName('chat_box');

// chat box function//

// chatIcon.addEventListener('click', function(event){
//     chatBox.classList.toggle('active')
// });


window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active')
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}

const sr = ScrollReveal({
    distance: '45px',
    duration: 2700,
    reset: true
})

sr.reveal('.home-text',{delay:350, origin:'left'})
sr.reveal('.home-img',{delay:350, origin:'right'})

sr.reveal('.sub-service,.about,.portfolio,.service,.contact',{delay:200, origin:'bottom'})

