// Tout d'abord il faut générer une grille de 8 cases x 8 cases
// cette grille contient donc 8 lignes qui elles mêmes contiennent 8 cases
// Je crée 2 variables qui me serviront de paramètres dans ma fonction de création de grille*
// 1 paramLigne pour le nombre de lignes à créer
// paramPixels pour le nombre de cases à créer
// Par défaut je donne 8 lignes et 30px aux cases

//? Je crée une variable pour définir le nombre de lignes et cases (qui sont les mêmes dans l'énoncé)
//? Je dois récupérer la valeur de l'inputGrid ici
//? => Récupérée grâce à la fonction "créationGrille" intégrée dans la fonction "créationFormulaire"
var paramLignes = 0;
//? Je crée une variable pour le nombre de Pixels
//? Je dois récupérer la valeur de l'inputPixels ici
//? => Récupérée grâce à la fonction "créationGrille" intégrée dans la fonction "créationFormulaire"
var paramPixels = 0;

//! CREATION D'UNE f POUR LA CREATION DE LA GRILLE

var créationGrille = function (paramLignes, paramPixels) {
    // Je crée une boucle for pour répéter la création de lignes
    for (var i = 0; i < paramLignes; i++) {
        // je sélectionne tout d'abordla div parent "pixelColor" dans laquelle va prendre place le jeu
        var pixelColor = document.querySelector('#pixelColor');
        // je crée ma div ligne
        var lignes = document.createElement('div');
        // puis lui donne une class
        lignes.classList.add('lignes');
        // j'insère cette ou ces div dans la div parent "pixelColor"
        pixelColor.appendChild(lignes);
        // Je crée ensuite mes cases et utilise une nouvelle boucle for pour répéter la procédure
        for (var j = 0; j < paramLignes; j++) {
            // je sélectionne la div parent càd la div ligne
            document.querySelector('.ligne');
            // je crée ma div case
            var cases = document.createElement('div');
            // Je lui donne une class "cases"
            cases.className = 'cases';
            // Je paramètre un nombre de pixels par case
            //! Il faut arriver à capter les chiffres du formulaire par l'activation du btn de validation
            //! et remplacer les chiffres fixes par un équivalent automatique
            cases.style.width = paramPixels + 'px';
            cases.style.height = paramPixels + 'px';
            // Génération d'un addEventListener sur les cases et appel de la fonction
            //! pour les changements de couleurs, je crée un addEventListener qui sera renvoyé à
            //! la fonction associée "toggleCases"
            cases.addEventListener('click', toggleCases);
            // j'insère cette ou ces div dans la div parent "ligne"
            lignes.appendChild(cases);
        }
    }
};

//! CREATION DE DEUX CHAMPS ET UN BOUTON DE VALIDATION DANS LE FORMULAIRE

var creationFormulaire = function () {
    // Je sélectionne tout d'abord la div parent "configuration" pour y insérer mes inputs et btn
    var config = document.querySelector('.configuration');
    //? Je crée le premier champs (input) qui concerne la taille de la grille
    var inputGrid = document.createElement('input');
    // Je lui donne une class "input"
    inputGrid.classList.add('input');
    // Je lui donne un id
    inputGrid.setAttribute('id', 'gridNumber');
    // Je fais apparaitre un placeholder
    inputGrid.placeholder = 'Taille de la grille';
    // J'ajoute un type
    inputGrid.type = 'number';
    // J'ajoute un minimum à l'insertion
    inputGrid.min = 0;
    // Ainsi qu'un maximum à l'insertion
    inputGrid.max = 64;
    // Je peux ajouter un incrément de saisie
    inputGrid.step = 2;
    // J'attribue une valeur par défaut
    inputGrid.value = 0;
    // Je le place dans l'élément parent
    config.appendChild(inputGrid);

    //? Je crée le second champs (input) qui concerne la taille en pixel des cases
    var inputPixels = document.createElement('input');
    // je lui donne la class 'input'
    inputPixels.classList.add('input');
    // Je lui donne un id
    inputPixels.setAttribute('id', 'pixelsNumber');
    // Je fais apparaitre un placeholder
    inputPixels.placeholder = 'Taille des pixels';
    // J'ajoute un type
    inputPixels.type = 'number';
    // J'ajoute un minimum à l'insertion
    inputPixels.min = 0;
    // Ainsi qu'un maximum à l'insertion
    inputPixels.max = 30;
    // Je peux ajouter un incrément de saisie
    inputPixels.step = 5;
    // J'attribue une valeur par défaut
    inputPixels.value = 0;
    // Je le place dans l'élément parent
    config.appendChild(inputPixels);

    //! BOUTON ET VALIDATION DU FORMULAIRE
    //? Je crée le bouton de validation pour valider la saisie de l'utilisateur
    var btnValid = document.createElement('button');
    // Je lui donne une class "submit"
    btnValid.className = 'bouton';
    // Je nomme mon bouton
    btnValid.textContent = 'Validation';
    // Je le place dans l'élément parent
    config.appendChild(btnValid);

    //? Je soumets le formulaire en imputant à mes variables principales les valeurs des 2 inputs
    //? inputGrid & inputPixels
    //? Comment ? => je rapelle ma fonction "créationGrille" qui peut "faire remonter" ces 2 valeurs
    //? aux 2 variables qui sont pourtant en dehors de la fonction !
    function validationFormulaire() {
        config.addEventListener('submit', function (event) {
            event.preventDefault();
            paramLignes = Number(inputGrid.value);
            paramPixels = Number(inputPixels.value);
            //console.log(paramLignes, paramPixels);
            //! J'appelle la f créationGrille déjà paramétrée plus haut !!!!
            //! Attention cela m'a bloqué un grand moment !!!
            créationGrille(paramLignes, paramPixels);
        });
    }
    validationFormulaire();
};
creationFormulaire();

//! CREATION D'UNE f QUI AU CLICK CHANGE LA COULEUR DE FOND DES PIXELS
//? Utilisation d'une fonction, de l'event "Event.target", d'une condition "if"

function toggleCases(event) {
    // Mon eventListener et ma fonction toggle sont déjà en écoute au moment de la création des div "cases"
    // Je crée une var "clickCases" qui reprends ma variable "cases" et lui assigne le fait qu'elle soit
    // la cible de l'évenement "click"
    var clickCases = event.target;
    console.log('event :', event);
    console.log('event target id :', event.target);
    // Je conditionne ensuite l'appararition au click des différentes couleurs
    // Si la case visée (event.target) à sa class === "cases" alors on lui enlève et on lui mets celle de
    // 'cases--white" etc.
    if (clickCases.className === 'cases') {
        clickCases.classList.remove('cases');
        clickCases.classList.add('cases--white');
    } else if (clickCases.className === 'cases--white') {
        clickCases.classList.remove('cases--white');
        clickCases.classList.add('cases--fof');
    } else {
        clickCases.className = 'cases';
    }
}
