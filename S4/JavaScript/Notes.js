// J'en suis là → https://openclassrooms.com/fr/courses/2984401-apprenez-a-coder-avec-javascript/3195501-manipulez-les-chaines-de-caracteres
// https://openclassrooms.com/fr/courses/1916641-dynamisez-vos-sites-web-avec-javascript/1916901-premiers-pas-en-javascript
// https://openclassrooms.com/fr/courses/1631636-simplifiez-vos-developpements-javascript-avec-jquery

// Site pour installer node.js (pour exécuter du JS sur vscode) : nodejs.org

// Le bon vieux système d'affichage
console.log("Hello Wordl!");

// Déclaration de variables
{let michel; // On peut toujours utiliser 'var' mais 'let' c'est mieux

console.log(michel); // Affiche 'undefined' par défaut

// Pour une variable dont la valeur ne change jamais
const pi = 3.1415926535897932384626;

// Backticks = ``
// modèle de libellé = template literal = `la chaine qui se trouve entre les backticks`
// On peut y trouver des expressions indiquées par la syntaxe ${expression}
const country = "France";
const x = 3;
const y = 7;
console.log(`Je vis en ${country}`); // "Je vis en France"
console.log(`${x} + ${y} = ${x + y}`); // "3 + 7 = 10"

// On peut forcer un type (ou une convertion)
const nb = 5;
const txt = Number(nb);}

// Interractions avec l'utilisateur
/*{const prenom = prompt("Entrez votre prénom :");
alert(`Bonjour, ${prenom}`);
const nb = Number(prompt("Entrez un nombre : "));}*/

// Les fonctions 'if', 'else', 'while', 'for', 'switch' et les opérateurs logiques sont les mêmes qu'en Java

// Déclaration des fonctions normales (nommées)
function nomDeMaFonction() {
    console.log("Bonjour !");
}

// Déclaration des fonctions anonymes (non nommées)
// Méthode 1
const varFonctionAnonyme = function(prenom) {
    const message = `Bonjour, ${prenom} !`;
    return message;
}
// Méthode 2 : la fonction fléchée (fat arrow function)
const varFonctionAnonyme2 = (prenom) => {
    const message = `Bonjour, ${prenom} !`;
    return message;
}
// Méthode 3 : version compressée de la méthode 2 (à utiliser quand il n'y a qu'une seule ligne), le return devient implicite
const varFonctionAnonyme3 = prenom => `Bonjour, ${prenom} !`;

// Création d'objets
const stylo = {
    type: "bille",
    couleur: "bleu",
    marque: "Bic",
    toString() {
        return `${this.type}, ${this.couleur} et ${this.marque}`;
    }
};

console.log(stylo.toString());

// Déclaration d'un tableau (en JS le type des objets n'importe pas)
{const tableau = ["Bonjour", 7, { message: "Coucou maman" }, true];
const taille = tableau.length;

// Extension directe sur les chaînes de caractères
console.log("ABC".length);

// Parcours optimisé des tableaux
// Méthode 1 : la fonction forEach()
tableau.forEach(element => {
    console.log(element);
  });
// Méthode 2 : le for optimisé
for (const element of tableau) {
    console.log(element);
}}

// Ajout à la fin du tableau : push(element)
// Ajout au début du tableau : unshift(element)
// Supprimer tout en récupérant le dernier élément du tableau : pop()
