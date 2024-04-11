/*
	Codeur(se) 		: Inscrire votre nom ici
	Assistant.e.s	: Inscrire les noms ici
*/

"use strict";

window.onload = init;

const TAILLE_SPHERE_MIN = 10;
const TAILLE_SPHERE_MAX = 200;
const RGB_MAX = 255;

function init() {
    let lesBacs = document.getElementsByClassName("bac");
    for (let i = 0; i < lesBacs.length; i++) {
        lesBacs[i].addEventListener("click", couleurComplementaire);
        lesBacs[i].addEventListener("contextmenu", reduireSphere);
    }
    document.getElementById("btnGenerer").addEventListener("click", btnGenererClic);
}

function couleurComplementaire(e) {
	// À compléter
    console.log(e);
    var target = e.target;
    console.log(window.getComputedStyle(target).backgroundColor);}

function reduireSphere() {
	// À compléter
}

function btnGenererClic() {
    let noBac = 1;
    let inputBac = document.getElementById("noBac");
    if (inputBac != null)
        noBac = inputBac.value;
    let leBac = document.getElementById("bac" + noBac) != null ? document.getElementById("bac" + noBac) : document.getElementById("bac1");
    viderBac(leBac);
    genererSpheres(leBac);
}

function genererSphere(id, lgBac, htBac) {
    let uneSphere;
    let a;
    //asudfyahdfjkasldhfjkaslhfjkasdluewwueriop

	// À compléter
	
    return uneSphere;
}

function genererSpheres(bac) {
    const MIN = 3;
    const MAX = 20;
    let nbSphere = parseInt(document.getElementById("nbSpheres").value);
    if (nbSphere < MIN)
        nbSphere = MIN;
    else if (nbSphere > MAX)
        nbSphere = MAX;

	// À compléter

}

function genererCouleurComplementaire(couleur) {
    let couleurR = couleur.substring(couleur.indexOf('(') + 1, couleur.indexOf(','));
    let couleurG = couleur.substring(couleur.indexOf(',') + 1, couleur.lastIndexOf(',')).trim();
    let couleurB = couleur.substring(couleur.lastIndexOf(',') + 1, couleur.lastIndexOf(")")).trim();
    let couleurCompR = RGB_MAX - couleurR;
    let couleurCompG = RGB_MAX - couleurG;
    let couleurCompB = RGB_MAX - couleurB;
    return "rgb(" + couleurCompR + ", " + couleurCompG + ", " + couleurCompB + ")";
}

function viderBac(bac) {
    while (bac.lastChild)
        bac.removeChild(bac.lastChild);
}

function genererEntier(min, max) {
    return Math.trunc(Math.random() * (max - min + 1)) + min;
}


