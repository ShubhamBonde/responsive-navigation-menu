const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".navlinks")
const links = document.querySelectorAll(".navlinks li")
const hambars = document.querySelectorAll(".line");

hamburger.addEventListener('click',()=>{
    navlinks.classList.toggle('open');
    links.forEach(link =>{
        link.classList.toggle("fade-in");

})
hambars.forEach(bar =>{
    bar.classList.toggle("rotate");
})

});

