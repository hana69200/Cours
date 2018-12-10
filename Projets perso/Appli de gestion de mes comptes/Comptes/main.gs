// Déclaration des variables globales
var sheet = SpreadsheetApp.getActiveSheet();
var taille_colone = sheet.getLastRow();
var colone = sheet.getRange('A1:A' + taille_colone).getValues();

// Déclaration des couleurs
var noir = '#000000';
var bleu = '#0000ff';
var gris = '#ebebeb';
var jaune = '#ffff00';
var rouge = '#ff0000';
var vert = '#00ff00';

function main() {
  
  // Appel de la fonction de la feuille si elle existe
  switch(sheet.getName()) {
      
    case 'Vente de cubes' :
      // Affiche 'modif en cours'
      affichageModifEnCours();
      
      // Nettoyage de la feuille
      cleanSheet();
      return VenteCube();
      
    case 'Manger' :
      affichageModifEnCours();
      cleanSheet();
      return Manger();
      
    case 'Entrées Sorties' :
      affichageModifEnCours();
      cleanSheet();
      return EntreeSortie();
      
    default :
      return;
  }
}
