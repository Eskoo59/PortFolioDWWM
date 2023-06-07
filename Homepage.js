"use strict";

/* --------------- Left Scrolling viewport ----------*/


const scrollContainer = document.querySelector("body");

document.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    /*console.log(evt.deltaY, document.body.scrollLeft);*/
    document.documentElement.scrollLeft += evt.deltaY;
});

/*-------------------------Theme Change------------------------------ */
const btn = document.querySelector('#btn');
btn.addEventListener("click", changeTheme2);
let light = true;
function changeTheme2() {
    if (light) {
        document.documentElement.style.setProperty("--main-bg-color", "#000000");
        document.documentElement.style.setProperty("--text-color", "#FFFFFF");
        localStorage.setItem("theme", "dark");
        light = false;
    }
    else {
        document.documentElement.style.setProperty("--main-bg-color", "#FFFFFF");
        document.documentElement.style.setProperty("--text-color", "#000000");
        localStorage.removeItem("theme");
        light = true;
    }
}

/* ---------------------- Intersection observer ----------------*/


const proj = document.querySelector("section div")

const observe = new IntersectionObserver(setAnimation)

function setAnimation(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            proj.style.opacity = 1;
            proj.style.animationName = "appear";
            proj.style.animationDuration = "1s";
            proj.style.animationTimingFunction = "ease-in";
            proj.style.animationFillMode = "forwards";
        } else {
            proj.style.opacity = 0;
        }
    });
}



observe.observe(proj)

