// J'en suis là → https://openclassrooms.com/fr/courses/2984401-apprenez-a-coder-avec-javascript/3043921-ajoutez-des-conditions
// https://openclassrooms.com/fr/courses/1916641-dynamisez-vos-sites-web-avec-javascript/1916901-premiers-pas-en-javascript
// https://openclassrooms.com/fr/courses/1631636-simplifiez-vos-developpements-javascript-avec-jquery

// Site pour installer node.js (pour exécuter du JS sur vscode) : nodejs.org

// Le bon vieux système d'affichage
console.log("Hello Wordl!");

// Déclaration de variables
let michel; // On peut toujours utiliser 'var' mais 'let' c'est mieux

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
const txt = Number(nb);

// Interractions avec l'utilisateur
const prenom = prompt("Entrez votre prénom :");
alert(`Bonjour, ${prenom}`);
const nb = Number(prompt("Entrez un nombre : "));
