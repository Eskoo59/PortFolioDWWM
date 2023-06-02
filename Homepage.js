"use strict";

/* --------------- Left Scrolling viewport ----------*/


const scrollContainer = document.querySelector("body");

document.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    console.log(evt.deltaY, document.body.scrollLeft);
    document.documentElement.scrollLeft += evt.deltaY;
});

/*-------------------------Theme Change------------------------------ */
const btn = document.querySelector('#btn');
btn.addEventListener("click", changeTheme2);
let light = true;
function changeTheme2()
{
    if(light)
    {
        document.documentElement.style.setProperty("--main-bg-color", "#000000");
        document.documentElement.style.setProperty("--text-color", "#FFFFFF");
        localStorage.setItem("theme", "dark");
        light = false;
    }
    else
    {
        document.documentElement.style.setProperty("--main-bg-color", "#FFFFFF");
        document.documentElement.style.setProperty("--text-color", "#000000");
        localStorage.removeItem("theme");
        light = true;
    }
}

// Récupérer tous les liens de navigation
const links = document.querySelectorAll('a');

// Ajouter un gestionnaire d'événement de clic à chaque lien
links.forEach(link => {
  link.addEventListener('click', (event) => {
    // Empêcher le comportement de clic par défaut
    event.preventDefault();

    // Récupérer la cible du lien
    const target = document.querySelector(link.getAttribute('href'));

    // Faire défiler jusqu'à la cible horizontalement
    target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  });
});