"use strict";

/* --------------- Left Scrolling viewport ----------*/


const scrollContainer = document.querySelector("body");

document.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    /*console.log(evt.deltaY, document.body.scrollLeft);*/
    document.documentElement.scrollLeft += evt.deltaY;
});

/*-------------------------Theme Change------------------------------ */

  const btn = document.querySelector("#btn");
  btn.addEventListener("click", changeTheme2);
  
  let light = true;
  loadThemeFromLocalStorage(); 
  
  function changeTheme2() {
    if (light) {
      setDarkTheme();
    } else {
      setLightTheme();
    }
    saveThemeToLocalStorage(); 
  }
  
  function setDarkTheme() {
    document.documentElement.style.setProperty("--main-bg-color", "#000000");
    document.documentElement.style.setProperty("--text-color", "#FFFFFF");
    document.querySelector("#background-video source").src = "image/vecteezy_colourful-particle-moving-on-balck-background-blue-smoke_7515486_420.mp4";
    const video = document.querySelector("#background-video");
  video.load();
  video.play();
    light = false;
  }
  
  function setLightTheme() {
    document.documentElement.style.setProperty("--main-bg-color", "#FFFFFF");
    document.documentElement.style.setProperty("--text-color", "#000000");
    document.querySelector("#background-video source").src = "image/white_background_-_92723 (Original).mp4";
    const video = document.querySelector("#background-video");
  video.load();
  video.play();
    light = true;
  }
  
  /* ------------ localStorage --------------- */
  function loadThemeFromLocalStorage() {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  }
  
  function saveThemeToLocalStorage() {
    if (light) {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", "dark");
    }
  }
  
/*-----------------------------------------*/


function changeTheme2() {
    if (light) {
        setDarkTheme();
        btn.style.color = "white"; 
    } else {
        setLightTheme();
        btn.style.color = "black";
    }
    saveThemeToLocalStorage();
}



