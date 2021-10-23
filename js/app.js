// Tout d'abord il faut générer une grille de 8 cases x 8 cases

// cette grille contient donc 8 lignes qui elles mêmes contiennent 8 cases

//! CREATION D'UNE f POUR LA CREATION DE LA GRILLE
// Je m'aide de la boucle for pour automatiser la création d'une ou plusieurs lignes et cases
// je sélectionne tout d'abordla div parent "pixelColor" dans laquelle va prendre place le jeu

var créationGrille = function (paramLignes = 8, paramPixels = 8) {
  //! Le paramCases sera confondu avec paramLigne et remplacé par le paramPixels
  // Par défaut je donne 8 lignes et 8 cases par lignes
  // Je crée une boucle for pour répéter la création de lignes
  for (i = 0; i < paramLignes; i++) {
    var pixelColor = document.querySelector("#pixelColor");
    // je crée ma div ligne
    var lignes = document.createElement("div");
    // puis lui donne une class
    lignes.classList.add("lignes");
    // j'insère cette ou ces div dans la div parent "pixelColor"
    pixelColor.appendChild(lignes);
    // Je crée ensuite mes cases et utilise une boucle for pour répéter
    // la procédure
    for (j = 0; j < paramLignes; j++) {
      // je sélectionne la div parent càd la div ligne
      document.querySelector(".ligne");
      // je crée ma div case
      var cases = document.createElement("div");
      // Je lui donne une class "cases"
      cases.className = "cases";
      // Je paramètre un nombre de pixels par case
      //! Il faut arriver à capter les chiffres du formulaire par l'activation du btn de validation
      //! et remplacer les chiffres fixes par un équivalent automatique
      cases.style.width = 30 + "px";
      cases.style.height = 30 + "px";
      // Génération d'un addEventListener sur les cases et appel de la fonction
      // pour les changements de couleurs
      cases.addEventListener("click", toggleCases);
      // j'insère cette ou ces div dans la div parent "ligne"
      lignes.appendChild(cases);
    }
  }
};
créationGrille(5, 10);

//! CREATION DE DEUX CHAMPS ET UN BOUTON DE VALIDATION DANS LE FORMULAIRE

// Je sélectionne tout d'abord la div parent "configuration" pour y insérer mes inputs et btn
var config = document.querySelector(".configuration");

var creationFormulaire = function () {
  //? Je crée le premier champs (input) qui concerne la taille de la grille
  var inputGrid = document.createElement("input");
  // Je lui donne une class "input"
  inputGrid.classList.add("input");
  // Je fais apparaitre un placeholder
  inputGrid.placeholder = "Taille de la grille";
  // Je le place dans l'élément parent
  config.appendChild(inputGrid);

  //? Je crée le second champs (input) qui concerne la taille en pixel des cases
  var inputPixels = document.createElement("input");
  // je lui donne la class 'input'
  inputPixels.classList.add("input");
  // Je fais apparaitre un placeholder
  inputPixels.placeholder = "Taille des pixels";
  // Je le place dans l'élément parent
  config.appendChild(inputPixels);

  //? Je crée le bouton de validation pour valider la saisie de l'utilisateur
  var btnValid = document.createElement("button");
  // Je lui donne une class "submit"
  btnValid.classList.add("bouton");
  // Je nomme mon bouton
  btnValid.textContent = "Validation";
  // Je le place dans l'élément parent
  config.appendChild(btnValid);
};
creationFormulaire();

//! CREATION D'UNE f QUI AU CLICK CHANGE LA COULEUR DE FOND DES PIXELS
// Je dois tout d'abord sélectionner mes div cases pour pouvoir y incorporer un addEventListener

// Une fois ma variable crée, je lui attache un eventListener et une fonction
function toggleCases(event) {
  // Mon eventListener et ma fonction toggle sont déjà en écoute au momlent de la création des div "cases"
  // Je crée une var clickCases qui est la cible de l'évenement
  var clickCases = event.target;
  // Je conditionne ensuite l'apparaition au click des différentes couleurs
  // Si la case visée (event.target) à sa class === "cases" alors on lui enlève et on lui mets celle de 'cases
  if (clickCases.className === "cases") {
      clickCases.classList.remove("cases");
      clickCases.classList.add("cases--white");
  } else if (clickCases.className === "cases--white") {
      clickCases.classList.remove("cases--white");
      clickCases.classList.add("cases--fof");
  } else {
      clickCases.className = "cases";
  }
}
