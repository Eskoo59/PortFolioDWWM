"use strict";

// Empêcher le défilement vertical par défaut et activer le défilement horizontal du viewport
document.documentElement.scrollTop = 0;
const scrollContainer = document.querySelector("body");

document.addEventListener("wheel", (evt) => {
  /* evt.preventDefault(); */
  /*console.log(evt.deltaY, document.body.scrollLeft);*/
  document.documentElement.scrollLeft += evt.deltaY;
});

const btn = document.querySelector("#btn");
btn.addEventListener("click", changeTheme2);

let light = true;
loadThemeFromLocalStorage();

function changeTheme2() {
  // Si le thème est clair, appeler la fonction pour définir le thème sombre, sinon, définir le thème clair
  if (light) {
    setTheme("dark", "#000000", "#FFFFFF", "image/vecteezy_colourful-particle-moving-on-balck-background-blue-smoke_7515486_420.mp4", "image/githubDarkTheme.png", "image/ArrowDarkTheme.png");
  } else {
    setTheme("light", "#FFFFFF", "#000000", "image/white_background_-_92723 (Original).mp4", "image/githubDayTheme.png", "image/ArrowWhiteTheme.png");
  }
  // Inverser la valeur de "light" pour alterner entre les thèmes
  light = !light;
  // Sauvegarder le thème choisi dans le Local Storage
  saveThemeToLocalStorage();
}

function setTheme(theme, bgColor, textColor, videoSrc, githubImgSrc, arrowImgSrc) {
  // Mettre à jour les variables CSS personnalisées avec les couleurs du thème choisi
  document.documentElement.style.setProperty("--main-bg-color", bgColor);
  document.documentElement.style.setProperty("--text-color", textColor);
  // Mettre à jour la source de la vidéo de fond avec celle du thème choisi
  document.querySelector("#background-video source").src = videoSrc;
  const video = document.querySelector("#background-video");

  // Mettre à jour la couleur du bouton avec la couleur du texte du thème choisi
  btn.style.color = textColor;
  // Mettre à jour l'image du logo GitHub avec celle du thème choisi
  document.getElementById("github-logo").src = githubImgSrc;
  // Mettre à jour l'image de la flèche avec celle du thème choisi
  document.getElementById("ArrowChange").src = arrowImgSrc;

  // Recharger et lire la vidéo de fond avec le nouveau thème
  video.load();
  video.play();
}

/* ------------ Local Storage --------------- */

// Charger le thème enregistré dans le Local Storage (s'il existe)
function loadThemeFromLocalStorage() {
  const theme = localStorage.getItem("theme");
  // Si le thème est sombre, appeler la fonction pour définir le thème sombre, sinon, définir le thème clair
  if (theme === "dark") {
    setTheme("dark", "#000000", "#FFFFFF", "image/vecteezy_colourful-particle-moving-on-balck-background-blue-smoke_7515486_420.mp4", "image/githubDarkTheme.png", "image/ArrowDarkTheme.png");
  } else {
    setTheme("light", "#FFFFFF", "#000000", "image/white_background_-_92723 (Original).mp4", "image/githubDayTheme.png", "image/ArrowWhiteTheme.png");
  }
}

// Sauvegarder le thème choisi dans le Local Storage
function saveThemeToLocalStorage() {
  // Si le thème est clair, supprimer l'entrée "theme" du Local Storage, sinon, enregistrer le thème sombre
  if (light) {
    localStorage.removeItem("theme");
  } else {
    localStorage.setItem("theme", "dark");
  }
}

