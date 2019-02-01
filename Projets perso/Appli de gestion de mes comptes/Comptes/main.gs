// Déclaration des variables globales
var sheet = SpreadsheetApp.getActiveSheet();
var taille_colone = sheet.getLastRow();
var colone = sheet.getRange('A1:A' + taille_colone).getValues();
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Déclaration des couleurs
var noir = '#000000';
var bleu = '#0000ff';
var gris = '#ebebeb';
var jaune = '#ffff00';
var rouge = '#ff0000';
var vert = '#00ff00';
var blanc = '#ffffff';

function main() {

  // Appel de la fonction de la feuille si elle existe
  switch(sheet.getName()) {

    case 'Vente de cubes' :
      traitement(VenteCube);
      break;

    case 'Manger' :
      traitement(Manger);
      break;

    case 'Entrées Sorties' :
      traitement(EntreeSortie);
      break;

    case 'Test' :
      traitement(Test);

    default :
      return;

  }

}
