new WOW().init();

let header = document.querySelector("header");
window.addEventListener("scroll", ()  => {
    if(window.pageYOffset != 0){
        header.style.boxShadow = "3px 3px 5px 1px #757474";
    }else{
        header.style.boxShadow = "none";
    }
});