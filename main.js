let div=document.getElementById("loading");

function preloader() {    
    div.style.display="none";
}

let img3=document.getElementById("img3");

img3.addEventListener("mouseover", function () {
    img3.style.width="30px";
    img3.style.transition="all 320ms";
})

img3.addEventListener("mouseout", function () {
    img3.style.width="25px";
    img3.style.transition="all 320ms";

})

let slides=document.getElementsByClassName("slide");

