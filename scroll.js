const boxes = document.querySelectorAll(".wrapper");

window.addEventListener('scroll' , scroller);

scroller();

function scroller() {
    const triggerBottom = window.innerHeight / 5 * 4;
    
boxes.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
        section.classList.add('addd');
    } else if (sectionTop < triggerBottom) {
        section.classlist.remove('addd');
    }     
});

}
    